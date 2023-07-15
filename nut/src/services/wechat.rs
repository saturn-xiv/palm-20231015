use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::Enforcer;
use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use orchid::Client as Orchid;
use palm::{
    cache::redis::{ClusterConnection as Cache, Pool as CachePool},
    crypto::{random::string as random_str, Password},
    jwt::Jwt,
    nut::v1,
    orchid::v1::{
        self as orchid_v1, wechat_mini_program_client::WechatMiniProgramClient,
        wechat_oauth2_client::WechatOauth2Client, WechatMiniProgramLoginRequest,
        WechatOauth2LoginRequest,
    },
    session::Session,
    thrift::loquat::Config as Loquat,
    try_grpc,
    wechat::oauth2::qr_connect::url as wechat_oauth2_qr_connect_url,
    Error, GrpcResult, HttpError, Result,
};
use serde::{Deserialize, Serialize};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};
use validator::Validate;

use super::super::{
    models::{
        log::Dao as LogDao,
        user::{session::ProviderType, Dao as UserDao, Item as User},
        wechat::{
            mini_program_user::{Dao as WechatMiniProgramUserDao, Item as WechatMiniProgramUser},
            oauth2_user::Dao as WechatOauth2UserDao,
        },
    },
    orm::postgresql::{Connection as Db, Pool as DbPool},
};
use super::{user::new_sign_in_response, CurrentUserAdapter, Oauth2State};

pub struct Service {
    pub jwt: Arc<Loquat>,
    pub hmac: Arc<Loquat>,
    pub db: DbPool,
    pub cache: CachePool,
    pub orchid: Arc<Orchid>,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

#[tonic::async_trait]
impl v1::wechat_server::Wechat for Service {
    async fn oauth2_sign_in_state(
        &self,
        req: Request<()>,
    ) -> GrpcResult<v1::WechatOauth2SignInStateResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();

        let form = Oauth2LoginState { id: random_str(32) };
        let state = try_grpc!(form.handle(&ss, db, ch, jwt).await)?;
        Ok(Response::new(v1::WechatOauth2SignInStateResponse { state }))
    }
    async fn oauth2_sign_in_url(
        &self,
        req: Request<v1::WechatOauth2SignInUrlRequest>,
    ) -> GrpcResult<orchid_v1::WechatOauth2QrConnectResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();

        let form = {
            let req = req.into_inner();
            Oauth2LoginUrl {
                app_id: req.app_id.clone(),
                id: random_str(32),
                lang: req.language,
                redirect_uri: req.redirect_uri.clone(),
            }
        };
        let url = try_grpc!(form.handle(&ss, db, ch, jwt).await)?;
        Ok(Response::new(orchid_v1::WechatOauth2QrConnectResponse {
            url,
        }))
    }
    async fn sign_in_by_oauth2(
        &self,
        req: Request<v1::SignInByWechatOauth2Request>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let orchid = self.orchid.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            let ttl = req.ttl.ok_or(Status::invalid_argument("empty ttl"))?;
            Oauth2Login {
                app_id: req.app_id.clone(),
                code: req.code.clone(),
                language: req.language,
                state: req.state.clone(),
                ttl: ttl.seconds,
            }
        };
        let it = try_grpc!(form.handle(&ss, db, enf, jwt, orchid).await)?;
        Ok(Response::new(it))
    }
    async fn all_oauth2_user(
        &self,
        req: Request<()>,
    ) -> GrpcResult<v1::WechatAllOauth2UserResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();

        let items = try_grpc!(all_oauth2_users(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(v1::WechatAllOauth2UserResponse { items }))
    }
    async fn destroy_oauth2_user(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        try_grpc!(delete_oauth2_user(&ss, db, ch, enf, jwt, req.id).await)?;

        Ok(Response::new(()))
    }
    async fn bind_oauth2_user_by_id(
        &self,
        req: Request<v1::WechatUserBindByIdRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        try_grpc!(
            bind_oauth2_user_by_id(&ss, db, ch, enf, jwt, req.user_id, req.wechat_user_id).await
        )?;
        Ok(Response::new(()))
    }
    async fn bind_oauth2_user_by_account(
        &self,
        req: Request<v1::WechatUserBindByAccountRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let hmac = self.hmac.deref();

        let form = {
            let req = req.into_inner();
            BindByAccount {
                nickname: req.nickname.clone(),
                password: req.password,
            }
        };

        try_grpc!(form.oauth2(&ss, db, ch, jwt, hmac))?;
        Ok(Response::new(()))
    }
    async fn get_oauth2_user_by_id(
        &self,
        req: Request<v1::IdRequest>,
    ) -> GrpcResult<v1::wechat_all_oauth2_user_response::Item> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        let enf = self.enforcer.deref();

        let it = try_grpc!(oauth2_users_by_id(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(it))
    }
    async fn get_oauth2_user_by_open_id(
        &self,
        req: Request<v1::WechatUserQueryByOpenIdRequest>,
    ) -> GrpcResult<v1::wechat_all_oauth2_user_response::Item> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        let enf = self.enforcer.deref();

        let it = try_grpc!(
            oauth2_users_by_open_id(&ss, db, ch, enf, jwt, &req.app_id, &req.open_id).await
        )?;
        Ok(Response::new(it))
    }
    async fn get_oauth2_user_by_union_id(
        &self,
        req: Request<v1::WechatUserQueryByUnionIdRequest>,
    ) -> GrpcResult<v1::WechatAllOauth2UserResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        let enf = self.enforcer.deref();

        let items =
            try_grpc!(oauth2_users_by_union_id(&ss, db, ch, enf, jwt, &req.union_id).await)?;
        Ok(Response::new(v1::WechatAllOauth2UserResponse { items }))
    }

    async fn all_mini_program_user(
        &self,
        req: Request<()>,
    ) -> GrpcResult<v1::WechatAllMiniProgramUserResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();

        let mut items = Vec::new();
        for it in try_grpc!(all_mini_program_user(&ss, db, ch, enf, jwt).await)? {
            items.push(it.into());
        }
        Ok(Response::new(v1::WechatAllMiniProgramUserResponse {
            items,
        }))
    }
    async fn destroy_mini_program_user(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        try_grpc!(delete_mini_program_user(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(()))
    }
    async fn bind_mini_program_user_by_id(
        &self,
        req: Request<v1::WechatUserBindByIdRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        try_grpc!(
            bind_mini_program_user_by_id(&ss, db, ch, enf, jwt, req.user_id, req.wechat_user_id)
                .await
        )?;
        Ok(Response::new(()))
    }

    async fn get_mini_program_user_by_id(
        &self,
        req: Request<v1::IdRequest>,
    ) -> GrpcResult<v1::wechat_all_mini_program_user_response::Item> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        let it = try_grpc!(get_mini_program_user_by_id(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(it.into()))
    }
    async fn get_mini_program_user_by_open_id(
        &self,
        req: Request<v1::WechatUserQueryByOpenIdRequest>,
    ) -> GrpcResult<v1::wechat_all_mini_program_user_response::Item> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        let it = try_grpc!(
            get_mini_program_user_by_open_id(&ss, db, ch, enf, jwt, &req.app_id, &req.open_id)
                .await
        )?;
        Ok(Response::new(it.into()))
    }
    async fn get_mini_program_user_by_union_id(
        &self,
        req: Request<v1::WechatUserQueryByUnionIdRequest>,
    ) -> GrpcResult<v1::WechatAllMiniProgramUserResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        let mut items = Vec::new();
        for it in try_grpc!(
            get_mini_program_user_by_union_id(&ss, db, ch, enf, jwt, &req.union_id).await
        )? {
            items.push(it.into());
        }
        Ok(Response::new(v1::WechatAllMiniProgramUserResponse {
            items,
        }))
    }
}

#[derive(Serialize, Deserialize, Validate, Debug)]
pub struct MiniProgramLogin {
    #[validate(length(max = 63))]
    pub app_id: String,
    #[validate(length(max = 127))]
    pub code: String,
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i64,
    #[validate(length(max = 31))]
    pub version: String,
}

impl MiniProgramLogin {
    pub async fn handle<J: Jwt>(
        &self,
        client_ip: &str,
        db: &mut Db,
        enf: &Mutex<Enforcer>,
        jwt: &J,
        orchid: &Orchid,
    ) -> Result<v1::UserSignInResponse> {
        self.validate()?;

        debug!(
            "try to sign in wechat mini-program user {:?} from {}",
            self, client_ip
        );

        let res = {
            let mut cli = WechatMiniProgramClient::connect(orchid.endpoint.clone()).await?;
            let mut req = tonic::Request::new(WechatMiniProgramLoginRequest {
                app_id: self.app_id.clone(),
                code: self.code.clone(),
            });
            Loquat::authorization(&mut req, &orchid.token)?;
            let it = cli.login(req).await?;
            it.into_inner()
        };
        debug!("fetch wechat mini-program user {:?}", res);

        let user = {
            let res = res.clone();
            db.transaction::<_, Error, _>(move |db| {
                let user = WechatMiniProgramUserDao::sign_in(
                    db,
                    &self.app_id,
                    &res.openid,
                    &res.unionid,
                    client_ip,
                )?;

                Ok(user)
            })?
        };

        let mini_program_user_id =
            WechatMiniProgramUserDao::by_open_id(db, &self.app_id, &res.openid)?.id;

        let mut it = {
            let user = UserDao::by_id(db, user.user_id)?;
            new_sign_in_response(
                db,
                enf,
                &user,
                jwt,
                Duration::seconds(self.ttl),
                ProviderType::WechatMiniProgram,
                mini_program_user_id,
                client_ip,
            )
            .await?
        };
        if let Some(ref nickname) = user.nickname {
            if let Some(ref mut user) = it.user {
                user.real_name = nickname.clone();
            }
        }
        if let Some(ref avatar) = user.avatar_url {
            if let Some(ref mut user) = it.user {
                user.avatar = avatar.clone();
            }
        }

        Ok(it)
    }
}

#[derive(Serialize, Deserialize, Validate)]
pub struct BindByAccount {
    #[validate(length(min = 1, max = 63))]
    pub nickname: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
}

impl BindByAccount {
    pub fn oauth2<J: Jwt, P: Password>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        jwt: &J,
        hmac: &P,
    ) -> Result<()> {
        self.validate()?;

        let (cur, _, (provider_type, provider_id)) = ss.current_user(db, ch, jwt)?;
        if provider_type != ProviderType::WechatOauth2 {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!(
                    "current user {} isn't sign in by wechat oauth2",
                    cur
                )),
            )));
        }

        let iu = UserDao::by_nickname(db, &self.nickname)?;
        iu.available()?;
        iu.auth(hmac, &self.password)?;
        if iu.id == cur.id {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some("can't bind to same user twice".to_string()),
            )));
        }

        db.transaction::<_, Error, _>(move |db| {
            let wu = WechatOauth2UserDao::by_id(db, provider_id)?;

            WechatOauth2UserDao::bind(db, wu.id, iu.id)?;
            LogDao::add::<_, User>(
                db,
                cur.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(cur.id),
                &format!(
                    "release bind to wechat oauth user({}, {}) to {}",
                    wu.app_id, wu.open_id, cur
                ),
            )?;
            LogDao::add::<_, User>(
                db,
                iu.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(iu.id),
                &format!(
                    "bind to wechat oauth user({}, {}) to {}",
                    wu.app_id, wu.open_id, iu
                ),
            )?;

            Ok(())
        })?;
        Ok(())
    }
    pub fn mini_program<J: Jwt, P: Password>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        jwt: &J,
        hmac: &P,
    ) -> Result<()> {
        self.validate()?;

        let (cur, _, (provider_type, provider_id)) = ss.current_user(db, ch, jwt)?;
        if provider_type != ProviderType::WechatMiniProgram {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!(
                    "current user {} isn't sign in by wechat mini-program",
                    cur
                )),
            )));
        }
        let iu = UserDao::by_nickname(db, &self.nickname)?;
        iu.available()?;
        iu.auth(hmac, &self.password)?;
        if iu.id == cur.id {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some("can't bind to same user twice".to_string()),
            )));
        }

        db.transaction::<_, Error, _>(move |db| {
            let wu = WechatMiniProgramUserDao::by_id(db, provider_id)?;

            WechatMiniProgramUserDao::bind(db, wu.id, iu.id)?;
            LogDao::add::<_, User>(
                db,
                iu.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(iu.id),
                &format!(
                    "bind to wechat mini-program user({}, {})",
                    wu.app_id, wu.open_id
                ),
            )?;

            Ok(())
        })?;
        Ok(())
    }
}

#[derive(Serialize, Deserialize, Validate, Debug)]
pub struct UpdateProfile {
    #[validate(length(min = 1, max = 63))]
    pub app_id: String,
    #[validate(length(min = 1, max = 63))]
    pub open_id: String,
    #[validate(length(min = 1, max = 63))]
    pub name: String,
    #[validate(length(min = 1, max = 255))]
    pub avatar: String,
}

impl UpdateProfile {
    pub fn mini_program(&self, client_ip: &str, db: &mut Db, user: &User) -> Result<()> {
        self.validate()?;

        db.transaction::<_, Error, _>(move |db| {
            {
                let it = WechatMiniProgramUserDao::by_open_id(db, &self.app_id, &self.open_id)?;
                WechatMiniProgramUserDao::set_profile(db, it.id, &self.name, &self.avatar)?;
            }

            UserDao::sync_wechat(db, user.id, &self.name, &self.avatar)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                client_ip,
                Some(user.id),
                &format!("update profile ({}, {})", self.name, self.avatar),
            )?;
            Ok(())
        })?;
        Ok(())
    }
}

pub async fn delete_mini_program_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    id: i32,
) -> Result<()> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;
    let wu = WechatMiniProgramUserDao::by_id(db, id)?;
    warn!("destroy wechat mini-program user {}", wu);
    WechatMiniProgramUserDao::destroy(db, id)?;
    Ok(())
}

pub async fn bind_mini_program_user_by_id<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    wechat_mini_program_user_id: i32,
    user_id: i32,
) -> Result<()> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;
    let iu = UserDao::by_id(db, user_id)?;
    iu.available()?;
    let wu = WechatMiniProgramUserDao::by_id(db, wechat_mini_program_user_id)?;
    warn!("bind wechat mini-program user {} to {}", wu, iu);
    WechatMiniProgramUserDao::bind(db, wu.id, iu.id)?;
    Ok(())
}

pub async fn get_mini_program_user_by_id<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    id: i32,
) -> Result<WechatMiniProgramUser> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;
    let it = WechatMiniProgramUserDao::by_id(db, id)?;
    Ok(it)
}

pub async fn get_mini_program_user_by_open_id<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    app_id: &str,
    open_id: &str,
) -> Result<WechatMiniProgramUser> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;
    let it = WechatMiniProgramUserDao::by_open_id(db, app_id, open_id)?;
    Ok(it)
}

pub async fn get_mini_program_user_by_union_id<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    union_id: &str,
) -> Result<Vec<WechatMiniProgramUser>> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;
    let it = WechatMiniProgramUserDao::by_union_id(db, union_id)?;
    Ok(it)
}

pub async fn all_mini_program_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
) -> Result<Vec<WechatMiniProgramUser>> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;
    let it = WechatMiniProgramUserDao::all(db)?;
    Ok(it)
}

#[derive(Validate, Debug)]
pub struct Oauth2Login {
    #[validate(length(max = 63))]
    pub app_id: String,
    #[validate(length(max = 127))]
    pub code: String,
    pub language: i32,
    #[validate(length(max = 127))]
    pub state: String,
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i64,
}

impl Oauth2Login {
    pub async fn handle<J: Jwt>(
        &self,
        ss: &Session,
        db: &mut Db,
        enf: &Mutex<Enforcer>,
        jwt: &J,
        orchid: &Orchid,
    ) -> Result<v1::UserSignInResponse> {
        self.validate()?;

        let info = {
            let mut cli = WechatOauth2Client::connect(orchid.endpoint.clone()).await?;
            let mut req = tonic::Request::new(WechatOauth2LoginRequest {
                app_id: self.app_id.clone(),
                code: self.code.clone(),
                language: self.language,
                state: self.state.clone(),
            });
            Loquat::authorization(&mut req, &orchid.token)?;
            let it = cli.login(req).await?;
            it.into_inner()
        };

        debug!("fetch wechat user {:?}", info);
        let state = self.state.parse::<Oauth2State>()?;
        let language = orchid_v1::wechat_oauth2_qr_connect_request::Language::from_i32(
            self.language,
        )
        .ok_or(HttpError(
            StatusCode::BAD_REQUEST,
            Some(format!("unknown language {}", self.language)),
        ))?;

        let user = {
            let info = info.clone();
            db.transaction::<_, Error, _>(move |db| {
                let user = match state.user {
                    Some(ref it) => {
                        let it = UserDao::by_nickname(db, it)?;
                        it.available()?;
                        Some(it.id)
                    }
                    None => None,
                };
                let user = WechatOauth2UserDao::sign_in(
                    db,
                    user,
                    &self.app_id,
                    &info,
                    language,
                    &ss.client_ip,
                )?;
                LogDao::add::<_, User>(
                    db,
                    user.id,
                    v1::user_logs_response::item::Level::Info,
                    &ss.client_ip,
                    Some(user.id),
                    "sign in by wechat oauth2",
                )?;
                Ok(user)
            })?
        };

        let oauth2_user_id = WechatOauth2UserDao::by_open_id(db, &self.app_id, &info.openid)?.id;

        let it = new_sign_in_response(
            db,
            enf,
            &user,
            jwt,
            Duration::seconds(self.ttl),
            ProviderType::WechatOauth2,
            oauth2_user_id,
            &ss.client_ip,
        )
        .await?;

        Ok(it)
    }
}

#[derive(Validate, Debug)]
pub struct Oauth2LoginState {
    #[validate(length(min = 1, max = 63))]
    pub id: String,
}
impl Oauth2LoginState {
    pub async fn handle<J: Jwt>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        jwt: &J,
    ) -> Result<String> {
        self.validate()?;

        let user = ss
            .current_user(db, ch, jwt)
            .map(|(x, _, _)| x.nickname)
            .ok();

        let state = Oauth2State {
            user,
            id: self.id.clone(),
        };
        Ok(state.to_string())
    }
}

#[derive(Validate, Debug)]
pub struct Oauth2LoginUrl {
    #[validate(length(min = 1, max = 63))]
    pub id: String,
    #[validate(length(min = 1, max = 63))]
    pub app_id: String,
    pub lang: i32,
    #[validate(url, length(min = 1, max = 127))]
    pub redirect_uri: String,
}
impl Oauth2LoginUrl {
    pub async fn handle<J: Jwt>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        jwt: &J,
    ) -> Result<String> {
        self.validate()?;

        let user = ss
            .current_user(db, ch, jwt)
            .map(|(x, _, _)| x.nickname)
            .ok();

        let state = Oauth2State {
            user,
            id: self.id.clone(),
        };
        let lang = orchid_v1::wechat_oauth2_qr_connect_request::Language::from_i32(self.lang)
            .ok_or(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!("unknown language {}", self.lang)),
            ))?;
        let url = wechat_oauth2_qr_connect_url(
            &self.app_id,
            &self.redirect_uri,
            &state.to_string(),
            &lang.to_string(),
        )?;

        Ok(url)
    }
}

pub async fn delete_oauth2_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    id: i32,
) -> Result<()> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;
    let wu = WechatOauth2UserDao::by_id(db, id)?;
    warn!("destroy wechat oauth user {}", wu);
    WechatOauth2UserDao::destroy(db, id)?;
    Ok(())
}

pub async fn bind_oauth2_user_by_id<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    wechat_oauth2_user_id: i32,
    user_id: i32,
) -> Result<()> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;

    let iu = UserDao::by_id(db, user_id)?;
    iu.available()?;
    let wu = WechatOauth2UserDao::by_id(db, wechat_oauth2_user_id)?;
    warn!("bind wechat oauth2 user {} to {}", wu, iu);
    WechatOauth2UserDao::bind(db, wu.id, iu.id)?;
    Ok(())
}

pub async fn all_oauth2_users<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
) -> Result<Vec<v1::wechat_all_oauth2_user_response::Item>> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;

    let mut items = Vec::new();

    for it in WechatOauth2UserDao::all(db)? {
        items.push(it.into());
    }

    Ok(items)
}

pub async fn oauth2_users_by_id<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    id: i32,
) -> Result<v1::wechat_all_oauth2_user_response::Item> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;

    let it = WechatOauth2UserDao::by_id(db, id)?;
    Ok(it.into())
}

pub async fn oauth2_users_by_open_id<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    app_id: &str,
    open_id: &str,
) -> Result<v1::wechat_all_oauth2_user_response::Item> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;

    let it = WechatOauth2UserDao::by_open_id(db, app_id, open_id)?;
    Ok(it.into())
}

pub async fn oauth2_users_by_union_id<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    union_id: &str,
) -> Result<Vec<v1::wechat_all_oauth2_user_response::Item>> {
    let (cur, _, _) = ss.current_user(db, ch, jwt)?;
    cur.is_administrator(enf).await?;

    let mut items = Vec::new();

    for it in WechatOauth2UserDao::by_union_id(db, union_id)? {
        items.push(it.into());
    }

    Ok(items)
}
