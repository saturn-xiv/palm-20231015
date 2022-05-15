use std::result::Result as StdResult;

use actix_web::{dev::Payload, web, Error, FromRequest, HttpRequest};
use futures::future::{ok, Ready};
use hyper::{header::AUTHORIZATION, StatusCode};
use serde::{Deserialize, Serialize};

use super::super::super::super::{jwt::Jwt, orm::postgresql::Connection as Db, HttpError, Result};
use super::super::models::user::{Action, Dao as UserDao, Item as User, Token as UserToken};

#[derive(Debug, Serialize, Deserialize)]
pub struct Token(pub Option<String>);

#[derive(Debug, Deserialize)]
pub struct Query {
    pub token: String,
}

impl Token {
    pub fn detect(req: &HttpRequest) -> Option<String> {
        let key = "token";
        // 1. Check header
        if let Some(it) = req.headers().get(AUTHORIZATION) {
            if let Ok(it) = it.to_str() {
                if let Some(ref it) = it.strip_prefix(Jwt::BEARER) {
                    return Some(it.to_string());
                }
            }
        }
        // 2. Check URL arguments.
        if let Ok(ref it) = web::Query::<Query>::from_query(req.query_string()) {
            return Some(it.token.clone());
        }
        // 3. Check cookie
        if let Some(it) = req.cookie(key) {
            return Some(it.to_string());
        }

        None
    }

    pub fn current_user(&self, db: &Db, jwt: &Jwt) -> Result<User> {
        if let Some(ref token) = self.0 {
            let token = jwt.parse::<UserToken>(token)?;
            let token = token.claims;
            if token.act == Action::SignIn {
                let user = UserDao::by_uid(db, &token.aud)?;
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

impl FromRequest for Token {
    type Error = Error;
    type Future = Ready<StdResult<Self, Error>>;

    fn from_request(req: &HttpRequest, _pl: &mut Payload) -> Self::Future {
        let it = Self::detect(req);
        ok(Self(it))
    }
}
