use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::Enforcer;
use chrono::Duration;
use diesel::Connection as DieselConntection;
use palm::{
    cache::redis::Pool as RedisPool, jwt::Jwt, nut::v1, orchid::v1 as orchid, session::Session,
    thrift::Thrift, try_grpc, wechat::oauth2::qr_connect::url as wechat_oauth2_qr_connect_url,
    Error, GrpcResult,
};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};

use super::super::{
    models::{
        log::Dao as LogDao,
        user::{Action, Dao as UserDao, Item as User},
        wechat::{
            mini_program_user::Dao as WechatMiniProgramUserDao,
            oauth2_user::Dao as WechatOauth2UserDao,
        },
    },
    orm::postgresql::Pool as PostgreSqlPool,
    Orchid,
};
use super::{user::new_sign_in_response, CurrentUserAdapter, Oauth2State};

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Thrift>,
    pub aes: Arc<Thrift>,
    pub hmac: Arc<Thrift>,
    pub enforcer: Arc<Mutex<Enforcer>>,
    pub orchid: Arc<Orchid>,
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

        let info = {
            let mut cli = try_grpc!(self.orchid.wechat_oauth2().await)?;
            let req = Request::new(orchid::WechatOauth2LoginRequest {
                app_id: req.app_id.clone(),
                code: req.code.clone(),
                state: req.state.clone(),
                language: req.language,
            });
            let res = try_grpc!(cli.login(req).await)?;
            debug!("fetch wechat user {:?}", res);
            res.into_inner()
        };
        let state = try_grpc!(req.state.parse::<Oauth2State>())?;

        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let user = try_grpc!(db.transaction::<_, Error, _>(move |db| {
            let user = match state.user {
                Some(ref it) => {
                    let it = UserDao::by_uid(db, it)?;
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
                v1::user_logs_response::item::Level::Info,
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

        let user = try_grpc!(ss.current_user(db, ch, jwt)).map(|x| x.uid).ok();

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

        let user = try_grpc!(ss.current_user(db, ch, jwt)).map(|x| x.uid).ok();

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
        // let mut ch = try_grpc!(self.redis.get())?;
        // let ch = ch.deref_mut();
        let req = req.into_inner();

        if let Some(ref token) = ss.token {
            let jwt = self.jwt.deref();
            let enf = self.enforcer.deref();
            let open_id = try_grpc!(jwt.verify(token, &Action::SignIn.to_string()))?;

            let mut db = try_grpc!(self.pgsql.get())?;
            let db = db.deref_mut();
            let wu = try_grpc!(WechatMiniProgramUserDao::by_openid(
                db,
                &req.app_id,
                &open_id
            ))?;

            let ur = match wu.user_id {
                Some(id) => {
                    let user = try_grpc!(UserDao::by_id(db, id))?;
                    let it = try_grpc!(new_sign_in_response(db, enf, &user, jwt, None).await)?;
                    Some(it)
                }
                None => None,
            };
            return Ok(Response::new(v1::CurrentWechatMiniProgramUserResponse {
                wechat: Some(wu.into()),
                user: ur,
            }));
        }

        // let user = try_grpc!(ss.current_user(db, ch, jwt)).map(|x| x.uid).ok();

        Err(Status::permission_denied(type_name::<
            v1::CurrentWechatMiniProgramUserRequest,
        >()))
    }
}
