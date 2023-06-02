use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::Enforcer;
use chrono::Duration;
use diesel::Connection as DieselConntection;
use palm::{
    cache::redis::Pool as RedisPool,
    jwt::Jwt,
    nut::v1,
    orchid::v1 as orchid,
    session::Session,
    thrift::{
        cactus::{protocols::Action as CactusAction, Rpc as CactusRpc},
        Thrift,
    },
    try_grpc,
    wechat::oauth2::qr_connect::url as wechat_oauth2_qr_connect_url,
    Error, GrpcResult,
};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};

use super::super::{
    models::{
        log::{Dao as LogDao, Level as LogLevel},
        user::{Action, Dao as UserDao, Item as User},
        wechat::{
            mini_program_user::{Dao as WechatMiniProgramUserDao, Item as MiniProgramUser},
            oauth2_user::{Dao as WechatOauth2UserDao, Item as Oauth2User},
        },
    },
    orm::postgresql::Pool as PostgreSqlPool,
};
use super::{user::new_sign_in_response, CurrentUserAdapter, Oauth2State};

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Thrift>,
    pub aes: Arc<Thrift>,
    pub hmac: Arc<Thrift>,
    pub enforcer: Arc<Mutex<Enforcer>>,
    pub orchid: Arc<Thrift>,
}

#[tonic::async_trait]
impl v1::wechat_server::Wechat for Service {
    async fn sign_in_by_oauth2(
        &self,
        req: Request<v1::SignInByWechatOauth2Request>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);

        let enf = self.enforcer.deref();
        let jwt = self.jwt.deref();
        let req = req.into_inner();

        {
            let it = try_grpc!(req.state.parse::<Oauth2State>())?;
            debug!("wechat oauth2 sign {:?}, {:?}", req, it);
        }

        let lang = req.language();
        let ttl = req
            .ttl
            .map_or(Duration::weeks(1), |x| Duration::seconds(x.seconds));

        let info: orchid::WechatOauth2LoginResponse = try_grpc!(self.orchid.call(
            type_name::<::orchid::services::wechat::oauth2::Service>(),
            CactusAction::WECHAT_OAUTH2_LOGIN,
            Request::new(orchid::WechatOauth2LoginRequest {
                app_id: req.app_id.clone(),
                code: req.code.clone(),
                state: req.state.clone(),
                language: req.language,
            })
        ))?;
        debug!("fetch wechat user {:?}", info);
        let state = try_grpc!(req.state.parse::<Oauth2State>())?;

        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let user = try_grpc!(db.transaction::<_, Error, _>(move |db| {
            let user = match state.user {
                Some(ref it) => {
                    // FIXME
                    let it = UserDao::by_nickname(db, it)?;
                    it.available()?;
                    Some(it.id)
                }
                None => None,
            };
            let user =
                WechatOauth2UserDao::sign_in(db, user, &req.app_id, &info, lang, &ss.client_ip)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                &LogLevel::Info,
                &ss.client_ip,
                Some(user.id),
                "sign in by wechat oauth",
            )?;
            Ok(user)
        }))?;

        let it = try_grpc!(new_sign_in_response(db, enf, &user, jwt, Some(ttl)).await)?;
        Ok(Response::new(it))
    }

    async fn oauth2_sign_in_state(
        &self,
        req: Request<v1::WechatOauth2SignInStateRequest>,
    ) -> GrpcResult<v1::WechatOauth2SignInStateResponse> {
        let ss = Session::new(&req);
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let req = req.into_inner();

        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();

        // FIXME
        let user = try_grpc!(ss.current_user(db, ch, jwt))
            .map(|x| x.nickname)
            .ok();

        let state = Oauth2State {
            user,
            goto: req.goto.clone(),
            host: req.host.clone(),
            id: req.id,
        };
        Ok(Response::new(v1::WechatOauth2SignInStateResponse {
            state: state.to_string(),
        }))
    }
    async fn oauth2_sign_in_url(
        &self,
        req: Request<v1::WechatOauth2SignInUrlRequest>,
    ) -> GrpcResult<orchid::WechatOauth2QrConnectResponse> {
        let ss = Session::new(&req);
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let req = req.into_inner();

        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();

        // FIXME
        let user = try_grpc!(ss.current_user(db, ch, jwt))
            .map(|x| x.nickname)
            .ok();

        let lang = req.language();
        if let Some(ref state) = req.state {
            let state = Oauth2State {
                user,
                goto: state.goto.clone(),
                host: state.host.clone(),
                id: state.id.clone(),
            };
            let url = try_grpc!(wechat_oauth2_qr_connect_url(
                &req.app_id,
                &req.redirect_uri,
                &state.to_string(),
                lang
            ))?;
            return Ok(Response::new(orchid::WechatOauth2QrConnectResponse { url }));
        }

        Err(Status::permission_denied(type_name::<
            v1::WechatOauth2SignInUrlRequest,
        >()))
    }

    async fn current_mini_program_user(
        &self,
        req: Request<v1::CurrentWechatMiniProgramUserRequest>,
    ) -> GrpcResult<v1::CurrentWechatMiniProgramUserResponse> {
        let ss = Session::new(&req);

        let req = req.into_inner();

        if let Some(ref token) = ss.token {
            let jwt = self.jwt.deref();

            let open_id = try_grpc!(jwt.verify(token, &Action::SignIn.to_string()))?;

            let mut db = try_grpc!(self.pgsql.get())?;
            let db = db.deref_mut();
            let wu = try_grpc!(WechatMiniProgramUserDao::by_open_id(
                db,
                &req.app_id,
                &open_id
            ))?;

            // TODO
            // let ur = match wu.user_id {

            //     Some(_id) => {
            //         let user = try_grpc!(UserDao::by_id(db, id))?;
            //         let it = try_grpc!(new_sign_in_response(db, enf, &user, jwt, None).await)?;
            //         Some(it)
            //         None
            //     }
            //     None => None,
            // };
            let ur = None;
            return Ok(Response::new(v1::CurrentWechatMiniProgramUserResponse {
                wechat: Some(wu.into()),
                user: ur,
            }));
        }

        Err(Status::permission_denied(type_name::<
            v1::CurrentWechatMiniProgramUserRequest,
        >()))
    }

    async fn all_oauth2_user(
        &self,
        req: Request<()>,
    ) -> GrpcResult<v1::WechatAllOauth2UserResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        let items = try_grpc!(WechatOauth2UserDao::all(db))?;

        Ok(Response::new(v1::WechatAllOauth2UserResponse {
            items: items.iter().map(|x| x.clone().into()).collect(),
        }))
    }
    async fn destroy_oauth2_user(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        let wu = try_grpc!(WechatOauth2UserDao::by_id(db, req.id))?;
        warn!("destroy wechat oauth user {}", wu);
        try_grpc!(WechatOauth2UserDao::destroy(db, req.id))?;
        Ok(Response::new(()))
    }
    async fn all_mini_program_user(
        &self,
        req: Request<()>,
    ) -> GrpcResult<v1::WechatAllMiniProgramUserResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        let items = try_grpc!(WechatMiniProgramUserDao::all(db))?;

        Ok(Response::new(v1::WechatAllMiniProgramUserResponse {
            items: items.iter().map(|x| x.clone().into()).collect(),
        }))
    }
    async fn destroy_mini_program_user(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        let wu = try_grpc!(WechatMiniProgramUserDao::by_id(db, req.id))?;
        warn!("destroy wechat mini-program user {}", wu);
        try_grpc!(WechatMiniProgramUserDao::destroy(db, req.id))?;
        Ok(Response::new(()))
    }
    async fn bind_mini_program_user_by_id(
        &self,
        req: Request<v1::WechatUserBindByIdRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let iu = try_grpc!(UserDao::by_id(db, req.user_id))?;
        let wu = try_grpc!(WechatMiniProgramUserDao::by_open_id(
            db,
            &req.app_id,
            &req.open_id
        ))?;
        warn!("bind wechat mini-program user {} to {}", wu, iu);
        try_grpc!(WechatMiniProgramUserDao::bind(db, wu.id, iu.id))?;
        Ok(Response::new(()))
    }
    async fn bind_oauth2_user_by_id(
        &self,
        req: Request<v1::WechatUserBindByIdRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let iu = try_grpc!(UserDao::by_id(db, req.user_id))?;
        let wu = try_grpc!(WechatOauth2UserDao::by_open_id(
            db,
            &req.app_id,
            &req.open_id
        ))?;
        warn!("bind wechat oauth2 user {} to {}", wu, iu);
        try_grpc!(WechatOauth2UserDao::bind(db, wu.id, iu.id))?;
        Ok(Response::new(()))
    }

    async fn bind_mini_program_user_by_account(
        &self,
        req: Request<v1::WechatUserBindByAccountRequest>,
    ) -> GrpcResult<()> {
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let hmac = self.hmac.deref();
        let req = req.into_inner();

        let iu = try_grpc!(UserDao::by_nickname(db, &req.nickname))?;
        try_grpc!(iu.auth(hmac, &req.password))?;
        let wu = try_grpc!(WechatMiniProgramUserDao::by_open_id(
            db,
            &req.app_id,
            &req.open_id
        ))?;
        warn!("bind wechat mini-program user {} to {}", wu, iu);
        try_grpc!(WechatMiniProgramUserDao::bind(db, wu.id, iu.id))?;
        Ok(Response::new(()))
    }
    async fn bind_oauth2_user_by_account(
        &self,
        req: Request<v1::WechatUserBindByAccountRequest>,
    ) -> GrpcResult<()> {
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let hmac = self.hmac.deref();
        let req = req.into_inner();

        let iu = try_grpc!(UserDao::by_nickname(db, &req.nickname))?;
        try_grpc!(iu.auth(hmac, &req.password))?;
        let wu = try_grpc!(WechatOauth2UserDao::by_open_id(
            db,
            &req.app_id,
            &req.open_id
        ))?;
        warn!("bind wechat oauth2 user {} to {}", wu, iu);
        try_grpc!(WechatOauth2UserDao::bind(db, wu.id, iu.id))?;
        Ok(Response::new(()))
    }

    async fn get_oauth2_user_by_id(
        &self,
        req: Request<v1::IdRequest>,
    ) -> GrpcResult<v1::wechat_all_oauth2_user_response::Item> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(WechatOauth2UserDao::by_id(db, req.id))?;
        Ok(Response::new(it.into()))
    }
    async fn get_oauth2_user_by_open_id(
        &self,
        req: Request<v1::WechatUserQueryByOpenIdRequest>,
    ) -> GrpcResult<v1::wechat_all_oauth2_user_response::Item> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(WechatOauth2UserDao::by_open_id(
            db,
            &req.app_id,
            &req.open_id
        ))?;
        Ok(Response::new(it.into()))
    }
    async fn get_oauth2_user_by_union_id(
        &self,
        req: Request<v1::WechatUserQueryByUnionIdRequest>,
    ) -> GrpcResult<v1::WechatAllOauth2UserResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let items = try_grpc!(WechatOauth2UserDao::by_union_id(db, &req.union_id))?;
        Ok(Response::new(v1::WechatAllOauth2UserResponse {
            items: items.iter().map(|x| x.clone().into()).collect(),
        }))
    }

    async fn get_mini_program_user_by_id(
        &self,
        req: Request<v1::IdRequest>,
    ) -> GrpcResult<v1::wechat_all_mini_program_user_response::Item> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(WechatMiniProgramUserDao::by_id(db, req.id))?;
        Ok(Response::new(it.into()))
    }
    async fn get_mini_program_user_by_open_id(
        &self,
        req: Request<v1::WechatUserQueryByOpenIdRequest>,
    ) -> GrpcResult<v1::wechat_all_mini_program_user_response::Item> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(WechatMiniProgramUserDao::by_open_id(
            db,
            &req.app_id,
            &req.open_id
        ))?;
        Ok(Response::new(it.into()))
    }
    async fn get_mini_program_user_by_union_id(
        &self,
        req: Request<v1::WechatUserQueryByUnionIdRequest>,
    ) -> GrpcResult<v1::WechatAllMiniProgramUserResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let items = try_grpc!(WechatMiniProgramUserDao::by_union_id(db, &req.union_id))?;
        Ok(Response::new(v1::WechatAllMiniProgramUserResponse {
            items: items.iter().map(|x| x.clone().into()).collect(),
        }))
    }
}

impl From<Oauth2User> for v1::wechat_all_oauth2_user_response::Item {
    fn from(x: Oauth2User) -> Self {
        Self {
            id: x.id,
            user_id: x.user_id,
            sex: x.sex,
            union_id: x.union_id.clone(),
            app_id: x.app_id.clone(),
            open_id: x.open_id.clone(),
            nickname: x.nickname.clone(),
            head_img_url: x.head_img_url.clone(),
            city: x.city.clone(),
            province: x.provence.clone(),
            country: x.country.clone(),
            privilege: x.privilege().unwrap_or_default(),
            lang: x.lang,
        }
    }
}

impl From<MiniProgramUser> for v1::wechat_all_mini_program_user_response::Item {
    fn from(x: MiniProgramUser) -> Self {
        Self {
            id: x.id,
            // TODO
            user_id: None,
            union_id: x.union_id.clone(),
            app_id: x.app_id.clone(),
            open_id: x.open_id.clone(),
            nickname: x.nickname.clone(),
            avatar_url: x.avatar_url,
        }
    }
}
