pub mod mutation;
pub mod query;

use std::default::Default;
use std::ops::Deref;
use std::sync::Arc;

use chrono::{NaiveDateTime, Utc};
use hyper::StatusCode;
use juniper::GraphQLObject;
use serde::{Deserialize, Serialize};

use super::super::super::{
    cache::redis::Pool as CachePool,
    crypto::{Aes, Hmac},
    jwt::Jwt,
    orm::Pool as DbPool,
    HttpError, Result,
};
use super::models::user::{Dao as UserDao, Item as User};

pub struct Context {
    pub hmac: Arc<Hmac>,
    pub aes: Arc<Aes>,
    pub jwt: Arc<Jwt>,
    pub db: DbPool,
    pub cache: CachePool,
    pub token: Option<String>,
}

impl juniper::Context for Context {}

impl Context {
    pub fn token(&self) -> Option<String> {
        if let Some(ref token) = self.token {
            if let Some(token) = token.strip_prefix(Jwt::BEARER) {
                return Some(token.to_string());
            }
        }
        None
    }
    pub fn current_user(&self) -> Result<User> {
        if let Some(ref token) = self.token() {
            let token = self.jwt.parse::<Token>(token)?;
            let token = token.claims;
            if token.action == Action::SignIn {
                let db = self.db.get()?;
                let db = db.deref();
                let user = UserDao::by_uid(db, &token.user)?;
                user.available()?;
                return Ok(user);
            }
        }

        Err(Box::new(HttpError(
            StatusCode::NON_AUTHORITATIVE_INFORMATION,
            None,
        )))
    }
}

#[derive(GraphQLObject)]
pub struct Success {
    pub created_at: NaiveDateTime,
}

impl Default for Success {
    fn default() -> Self {
        Self {
            created_at: Utc::now().naive_local(),
        }
    }
}

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub enum Action {
    SignIn,
    ResetPassword,
    Unlock,
    Confirm,
    Other(String),
}

#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Token {
    pub user: String,
    pub action: Action,
}
