use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::Enforcer;
use chrono::Duration;
use diesel::Connection as DieselConntection;
use palm::{
    cache::{redis::Pool as RedisPool, Provider as CacheProvider},
    google::oauth::{
        openid::IdToken as GoogleIdToken, ClientSecret as GoogleClientSecret, Scope as GoogleScope,
    },
    nut::v1,
    session::Session,
    thrift::Thrift,
    try_grpc, Error, GrpcResult,
};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};

use super::super::{
    models::{
        google::user::Dao as GoogleUserDao,
        log::{Dao as LogDao, Level as LogLevel},
        setting::Dao as SettingDao,
        user::{Dao as UserDao, Item as User},
    },
    orm::postgresql::Pool as PostgreSqlPool,
};
use super::{user::new_sign_in_response, Oauth2State};

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Thrift>,
    pub aes: Arc<Thrift>,
    pub hmac: Arc<Thrift>,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

#[tonic::async_trait]
impl v1::google_server::Google for Service {
    async fn sign_in_url(
        &self,
        req: Request<v1::GoogleSignInUrlRequest>,
    ) -> GrpcResult<v1::GoogleSignInUrlResponse> {
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let req = req.into_inner();
        let aes = self.aes.deref();
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();

        if let Some(ref state) = req.state {
            let key = GoogleClientSecret::key(&req.project);
            let cfg: GoogleClientSecret = try_grpc!(SettingDao::get(
                db,
                aes,
                &GoogleClientSecret::key(&req.project),
                None
            ))?;
            let state = Oauth2State::new(state);

            let it = cfg.web.openid_connect(
                vec![
                    GoogleScope::Openid,
                    GoogleScope::Email,
                    GoogleScope::Profile,
                ],
                &state,
                &req.redirect_uri,
            );
            try_grpc!(ch.set(&key, &it.nonce, Duration::minutes(1)))?;
            return Ok(Response::new(it));
        }
        Err(Status::permission_denied(type_name::<
            v1::GoogleSignInUrlRequest,
        >()))
    }
    async fn sign_in(
        &self,
        req: Request<v1::SignInByGoogleRequest>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();

        let enf = self.enforcer.deref();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();

        let req = req.into_inner();

        let state = try_grpc!(req.state.parse::<Oauth2State>())?;
        debug!("google oauth2 sign {:?}, {:?}", req, state);

        let cfg: GoogleClientSecret = try_grpc!(SettingDao::get(
            db,
            aes,
            &GoogleClientSecret::key(&req.project),
            None
        ))?;
        if let Some(ref nonce) = req.nonce {
            let mut ch = try_grpc!(self.redis.get())?;
            let ch = ch.deref_mut();
            let tmp: String = try_grpc!(ch.fetch(&state.id))?;
            if nonce != &tmp {
                return Err(Status::permission_denied(type_name::<
                    v1::SignInByGoogleRequest,
                >()));
            }
        }

        let code = try_grpc!(
            cfg.web
                .exchange_authorization_code(&req.redirect_uri, &req.code)
                .await
        )?;
        let token: GoogleIdToken = try_grpc!(serde_json::from_str(&code.id_token))?;

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
            let user = GoogleUserDao::sign_in(db, user, &code, &token, &ss.client_ip)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                &LogLevel::Info,
                &ss.client_ip,
                Some(user.id),
                "sign in by google",
            )?;
            Ok(user)
        }))?;

        let it = try_grpc!(
            new_sign_in_response(
                db,
                enf,
                &user,
                jwt,
                Some(
                    req.ttl
                        .map_or(Duration::weeks(1), |x| Duration::seconds(x.seconds))
                ),
            )
            .await
        )?;
        Ok(Response::new(it))
    }
}
