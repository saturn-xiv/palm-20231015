use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::{Arc, Mutex};

use chrono::Duration;
use diesel::sqlite::SqliteConnection as Db;
use hyper::StatusCode;
use palm::{
    crypto::Hmac, crypto::Password, jwt::Jwt, ops::router::v1, session::Session,
    to_chrono_duration, try_grpc, GrpcResult, HttpError, Result,
};
use serde::{Deserialize, Serialize};
use tonic::{Request, Response, Status};

use super::super::models::setting::Dao as SettingDao;

pub struct Service {
    pub db: Arc<Mutex<Db>>,
    pub jwt: Arc<Jwt>,
    pub hmac: Arc<Hmac>,
}

#[tonic::async_trait]
impl v1::user_server::User for Service {
    async fn sign_in(
        &self,
        req: Request<v1::UserSignInRequest>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let req = req.into_inner();
        let jwt = self.jwt.deref();

        if let Some(ref user) = req.user {
            if let Ok(ref mut db) = self.db.lock() {
                let db = db.deref_mut();
                let it: v1::UserProfile = try_grpc!(SettingDao::get(db, None))?;
                if user.nickname == it.nickname
                    && String::from_utf8_lossy(&try_grpc!(self.hmac.sum(user.password.as_bytes()))?)
                        == it.password
                {
                    info!("user {} sign in", it.nickname);
                    let ttl = to_chrono_duration!(req.ttl.unwrap_or_default());
                    let token = try_grpc!(build_token(&it.nickname, jwt, ttl))?;
                    return Ok(Response::new(v1::UserSignInResponse { token }));
                }
            }
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
    async fn refresh(
        &self,
        req: Request<prost_types::Duration>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);
        let req = req.into_inner();
        let jwt = self.jwt.deref();
        if let Ok(ref mut db) = self.db.lock() {
            let user = try_grpc!(ss.current_user(db, jwt))?;
            info!("refresh token for {}", user);
            let ttl = to_chrono_duration!(req);
            let token = try_grpc!(build_token(&user, jwt, ttl))?;
            return Ok(Response::new(v1::UserSignInResponse { token }));
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
    async fn update(&self, req: Request<v1::UserUpdateRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let req = req.into_inner();
        let jwt = self.jwt.deref();
        let hmac = self.hmac.deref();
        if let Some(ref cu) = req.current {
            if let Some(ref nu) = req.new {
                if let Ok(ref mut db) = self.db.lock() {
                    let db = db.deref_mut();
                    try_grpc!(ss.current_user(db, jwt))?;
                    let it: v1::UserProfile = try_grpc!(SettingDao::get(db, None))?;
                    if cu.nickname == it.nickname
                        && try_grpc!(self.hmac.sum(cu.password.as_bytes()))?
                            == it.password.as_bytes()
                    {
                        info!("update user profile {} => {}", cu.nickname, nu.nickname);
                        try_grpc!(SettingDao::set(
                            db,
                            None,
                            &v1::UserProfile {
                                nickname: nu.nickname.clone(),
                                password: String::from_utf8_lossy(&try_grpc!(
                                    hmac.sum(nu.password.as_bytes())
                                )?)
                                .to_string()
                            }
                        ))?;
                        return Ok(Response::new(()));
                    }
                }
            }
        }

        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
    async fn sign_out(&self, req: Request<()>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            let user = try_grpc!(ss.current_user(db, jwt))?;
            info!("user {} sign out", user);
            return Ok(Response::new(()));
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
    async fn logs(&self, req: Request<()>) -> GrpcResult<v1::UserLogsResponse> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;
        }

        let items = try_grpc!(palm::network::logs())?;
        Ok(Response::new(v1::UserLogsResponse { items }))
    }
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Token {
    pub aud: String,
    pub nbf: i64,
    pub exp: i64,
}

pub fn build_token(user: &str, jwt: &Jwt, ttl: Duration) -> Result<String> {
    let (nbf, exp) = Jwt::timestamps(ttl);
    let token = Token {
        aud: user.to_string(),
        exp,
        nbf,
    };
    jwt.sum(None, &token)
}

pub trait CurrentUserAdapter {
    fn current_user(&self, db: &mut Db, jwt: &Jwt) -> Result<String>;
}

impl CurrentUserAdapter for Session {
    fn current_user(&self, db: &mut Db, jwt: &Jwt) -> Result<String> {
        if let Some(ref token) = self.token {
            let token = jwt.parse::<Token>(token)?;
            let token = token.claims;
            let it: v1::UserProfile = SettingDao::get(db, None)?;
            if it.nickname == token.aud {
                return Ok(it.nickname);
            }
        }

        Err(Box::new(HttpError(
            StatusCode::NON_AUTHORITATIVE_INFORMATION,
            None,
        )))
    }
}
