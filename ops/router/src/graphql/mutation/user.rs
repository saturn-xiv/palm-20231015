use std::ops::DerefMut;
use std::sync::Mutex;

use chrono::Duration;
use diesel::sqlite::SqliteConnection as Db;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{
    crypto::Hmac, jwt::openssl::OpenSsl as Jwt, jwt::Jwt as JwtProvider, session::Session,
    HttpError, Result,
};
use validator::Validate;

use super::super::super::models::{setting::Dao as SettingDao, Administrator};
use super::super::CurrentUserAdapter;

#[derive(GraphQLInputObject, Validate, PartialEq, Eq)]
#[graphql(name = "Administrator")]
pub struct User {
    #[validate(length(min = 1, max = 63))]
    pub nickname: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserSignInRequest", description = "User SignIn form")]
pub struct SignInRequest {
    pub user: User,
    #[validate(range(min = 60))]
    pub ttl: i32,
}

impl SignInRequest {
    pub fn handle(&self, db: &Mutex<Db>, jwt: &Jwt, hmac: &Hmac) -> Result<SignInResponse> {
        self.validate()?;

        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            let it: Administrator = SettingDao::get(db, None)?;
            if self.user.nickname == it.nickname && it.verify(hmac, &self.user.password) {
                let ttl = Duration::seconds(self.ttl as i64);
                info!("administrator {}/{} sign in", it.nickname, ttl);
                let token = Jwt::sign(jwt, &it.nickname, Administrator::ACTION_SIGN_IN, ttl)?;
                return Ok(SignInResponse { token });
            }
        }

        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "UserSignInResponse", description = "User SignIn response")]
pub struct SignInResponse {
    pub token: String,
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserRefreshRequest", description = "User refresh request")]
pub struct RefreshRequest {
    #[validate(range(min = 60))]
    pub ttl: i32,
}

impl RefreshRequest {
    pub fn handle(&self, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<SignInResponse> {
        self.validate()?;

        if let Ok(ref mut db) = db.lock() {
            let user = ss.current_user(db, jwt)?;
            let ttl = Duration::seconds(self.ttl as i64);
            info!("refresh token for {}/{}", user, ttl);
            let token = Jwt::sign(jwt, &user, Administrator::ACTION_SIGN_IN, ttl)?;
            return Ok(SignInResponse { token });
        }

        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserRefreshRequest", description = "User refresh request")]
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
