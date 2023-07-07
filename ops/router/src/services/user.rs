use std::ops::{Deref, DerefMut};
use std::sync::{Arc, Mutex};

use chrono::Duration;
use diesel::sqlite::SqliteConnection as Db;
use hyper::StatusCode;
use palm::{
    crypto::Hmac, jwt::openssl::OpenSsl as Jwt, jwt::Jwt as JwtProvider, ops::router::v1,
    session::Session, try_grpc, GrpcResult, HttpError, Result,
};
use tonic::{Request, Response, Status};
use validator::Validate;

use super::super::models::{setting::Dao as SettingDao, Administrator};
use super::CurrentUserAdapter;

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
        let form = {
            let req = req.into_inner();
            let user = req
                .user
                .ok_or(Status::invalid_argument("empty user profile"))?;
            let ttl = req.ttl.ok_or(Status::invalid_argument("empty ttl"))?;
            SignInRequest {
                user: User {
                    nickname: user.nickname.clone(),
                    password: user.password,
                },
                ttl: ttl.seconds,
            }
        };
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let hmac = self.hmac.deref();
        let token = try_grpc!(form.handle(db, jwt, hmac))?;
        Ok(Response::new(v1::UserSignInResponse { token }))
    }
    async fn refresh(
        &self,
        req: Request<prost_types::Duration>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);
        let form = {
            let req = req.into_inner();
            RefreshRequest { ttl: req.seconds }
        };
        let db = self.db.deref();
        let jwt = self.jwt.deref();

        let token = try_grpc!(form.handle(&ss, db, jwt))?;
        Ok(Response::new(v1::UserSignInResponse { token }))
    }
    async fn update(&self, req: Request<v1::UserUpdateRequest>) -> GrpcResult<()> {
        let form = {
            let req = req.into_inner();
            let current = req
                .current
                .ok_or(Status::invalid_argument("empty current user profile"))?;
            let new = req
                .new
                .ok_or(Status::invalid_argument("empty current new profile"))?;
            UpdateRequest {
                current: User {
                    nickname: current.nickname.clone(),
                    password: current.password,
                },
                new: User {
                    nickname: new.nickname.clone(),
                    password: new.password,
                },
            }
        };
        let db = self.db.deref();
        let hmac = self.hmac.deref();
        try_grpc!(form.handle(db, hmac))?;
        Ok(Response::new(()))
    }
    async fn sign_out(&self, req: Request<()>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        try_grpc!(sign_out(&ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn logs(&self, req: Request<()>) -> GrpcResult<v1::UserLogsResponse> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let items = try_grpc!(logs(&ss, db, jwt))?;
        Ok(Response::new(v1::UserLogsResponse { items }))
    }
}

#[derive(Validate, PartialEq, Eq)]
pub struct User {
    #[validate(length(min = 1, max = 63))]
    pub nickname: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
}

#[derive(Validate)]
pub struct SignInRequest {
    pub user: User,
    #[validate(range(min = 60))]
    pub ttl: i64,
}

impl SignInRequest {
    pub fn handle(&self, db: &Mutex<Db>, jwt: &Jwt, hmac: &Hmac) -> Result<String> {
        self.validate()?;

        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            let it: Administrator = SettingDao::get(db, None)?;
            if self.user.nickname == it.nickname && it.verify(hmac, &self.user.password) {
                let ttl = Duration::seconds(self.ttl);
                info!("administrator {}/{} sign in", it.nickname, ttl);
                let token = Jwt::sign(jwt, &it.nickname, Administrator::ACTION_SIGN_IN, ttl)?;
                return Ok(token);
            }
        }

        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(Validate)]

pub struct RefreshRequest {
    #[validate(range(min = 60))]
    pub ttl: i64,
}

impl RefreshRequest {
    pub fn handle(&self, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<String> {
        self.validate()?;

        if let Ok(ref mut db) = db.lock() {
            let user = ss.current_user(db, jwt)?;
            let ttl = Duration::seconds(self.ttl);
            info!("refresh token for {}/{}", user, ttl);
            let token = Jwt::sign(jwt, &user, Administrator::ACTION_SIGN_IN, ttl)?;
            return Ok(token);
        }

        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(Validate)]

pub struct UpdateRequest {
    pub current: User,
    pub new: User,
}

impl UpdateRequest {
    pub fn handle(&self, db: &Mutex<Db>, hmac: &Hmac) -> Result<()> {
        self.validate()?;
        if self.current == self.new {
            return Ok(());
        }

        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            let it: Administrator = SettingDao::get(db, None)?;
            if self.current.nickname == it.nickname && it.verify(hmac, &self.current.password) {
                info!(
                    "update user profile {} => {}",
                    self.current.nickname, self.new.nickname
                );
                SettingDao::set(
                    db,
                    None,
                    &Administrator {
                        nickname: self.new.nickname.clone(),
                        password: Administrator::password(hmac, &self.new.password)?,
                    },
                )?;
                return Ok(());
            }
        }

        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

pub fn sign_out(ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
    if let Ok(ref mut db) = db.lock() {
        let user = ss.current_user(db, jwt)?;
        info!("user {} sign out", user);
        return Ok(());
    }

    Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
}

pub fn logs(ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<Vec<String>> {
    if let Ok(ref mut db) = db.lock() {
        ss.current_user(db, jwt)?;
        Ok(())
    } else {
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }?;

    let items = palm::network::logs()?;
    Ok(items)
}
