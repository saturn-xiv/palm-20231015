use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::Enforcer;
use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use palm::{
    cache::{
        redis::{ClusterConnection as Cache, Pool as CachePool},
        Provider as CacheProvider,
    },
    crypto::{random::string as random_str, Secret},
    google::oauth::{
        openid::IdToken as GoogleIdToken, ClientSecret as GoogleClientSecret, Scope as GoogleScope,
    },
    jwt::Jwt,
    nut::v1,
    session::Session,
    thrift::loquat::Config as Loquat,
    try_grpc, Error, GrpcResult, HttpError, Result,
};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};
use validator::Validate;

use super::super::{
    models::{
        google::user::Dao as GoogleUserDao,
        log::Dao as LogDao,
        setting::FlatBuffer as FlatbufferSetting,
        user::{session::ProviderType, Dao as UserDao, Item as User},
    },
    orm::postgresql::{Connection as Db, Pool as DbPool},
};
use super::{user::new_sign_in_response, CurrentUserAdapter, Oauth2State};

pub struct Service {
    pub jwt: Arc<Loquat>,
    pub aes: Arc<Loquat>,
    pub db: DbPool,
    pub cache: CachePool,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

#[tonic::async_trait]
impl v1::google_server::Google for Service {
    async fn sign_in_url(
        &self,
        req: Request<v1::GoogleSignInUrlRequest>,
    ) -> GrpcResult<v1::GoogleSignInUrlResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();

        let form = {
            let req = req.into_inner();
            SignInUrl {
                redirect_uri: req.redirect_uri,
            }
        };
        let it = try_grpc!(form.handle(&ss, db, ch, jwt, aes).await)?;
        Ok(Response::new(it))
    }
    async fn sign_in(
        &self,
        req: Request<v1::SignInByGoogleRequest>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            let ttl = req.ttl.ok_or(Status::invalid_argument("empty ttl"))?;
            SignIn {
                state: req.state.clone(),
                nonce: req.nonce.clone(),
                code: req.code.clone(),
                redirect_uri: req.redirect_uri.clone(),
                ttl: ttl.seconds,
            }
        };
        let it = try_grpc!(form.handle(&ss, db, ch, enf, jwt, aes).await)?;
        Ok(Response::new(it))
    }
}

#[derive(Validate, Debug)]
pub struct SignInUrl {
    #[validate(url, length(min = 1, max = 255))]
    pub redirect_uri: String,
}

impl SignInUrl {
    pub async fn handle<J: Jwt, S: Secret>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        jwt: &J,
        aes: &S,
    ) -> Result<v1::GoogleSignInUrlResponse> {
        self.validate()?;

        let user = ss
            .current_user(db, ch, jwt)
            .map(|(x, _, _)| x.nickname)
            .ok();
        let state = Oauth2State {
            user,
            id: random_str(16),
        };

        let cfg: GoogleClientSecret = FlatbufferSetting::get(db, aes, None)?;

        let (url, nonce) = cfg.web.openid_connect(
            vec![
                GoogleScope::Openid,
                GoogleScope::Email,
                GoogleScope::Profile,
            ],
            &state,
            &self.redirect_uri,
        );
        {
            let key = cfg.web.key(&state.id);
            ch.set(&key, &nonce, Duration::minutes(1))?;
        }
        Ok(v1::GoogleSignInUrlResponse { url, nonce })
    }
}

#[derive(Validate, Debug)]
pub struct SignIn {
    #[validate(length(max = 255))]
    pub state: String,
    #[validate(length(min = 1, max = 63))]
    pub nonce: String,
    #[validate(url, length(min = 1, max = 255))]
    pub redirect_uri: String,
    #[validate(length(min = 1, max = 255))]
    pub code: String,
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i64,
}

impl SignIn {
    pub async fn handle<J: Jwt, S: Secret>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
        aes: &S,
    ) -> Result<v1::UserSignInResponse> {
        self.validate()?;

        let state: Oauth2State = self.state.parse()?;
        debug!("google oauth2 sign {:?}, {:?}", self, state);

        let cfg: GoogleClientSecret = FlatbufferSetting::get(db, aes, None)?;
        {
            let key = cfg.web.key(&state.id);
            let tmp: String = ch.fetch(&key)?;
            if self.nonce != tmp {
                return Err(Box::new(HttpError(
                    StatusCode::BAD_REQUEST,
                    Some("bad nonce".to_string()),
                )));
            }
        }

        let code = cfg
            .web
            .exchange_authorization_code(&self.redirect_uri, &self.code)
            .await?;
        let token: GoogleIdToken = serde_json::from_str(&code.id_token)?;

        let user = {
            let token = token.clone();
            db.transaction::<_, Error, _>(move |db| {
                let user = match state.user {
                    Some(ref nickname) => {
                        let it = UserDao::by_nickname(db, nickname)?;
                        it.available()?;
                        Some(it.id)
                    }
                    None => None,
                };
                let user = GoogleUserDao::sign_in(db, user, &code, &token, &ss.client_ip)?;
                LogDao::add::<_, User>(
                    db,
                    user.id,
                    v1::user_logs_response::item::Level::Info,
                    &ss.client_ip,
                    Some(user.id),
                    "sign in by google",
                )?;
                Ok(user)
            })?
        };
        let google_user_id = GoogleUserDao::by_token(db, &token)?.id;

        let it = new_sign_in_response(
            db,
            enf,
            &user,
            jwt,
            Duration::seconds(self.ttl),
            ProviderType::Google,
            google_user_id,
            &ss.client_ip,
        )
        .await?;
        Ok(it)
    }
}
