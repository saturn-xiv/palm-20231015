use actix_web::{dev::Payload, web, Error, FromRequest, HttpRequest};
use futures::future::{ok, Ready};
use hyper::header::AUTHORIZATION;
use serde::{Deserialize, Serialize};

use super::super::super::super::jwt::Jwt;

#[derive(Debug, Serialize, Deserialize)]
pub struct Token(pub Option<String>);

#[derive(Debug, Deserialize)]
pub struct Query {
    pub token: String,
}

impl Token {
    fn detect(req: &HttpRequest) -> Option<String> {
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
}

impl FromRequest for Token {
    type Error = Error;
    type Future = Ready<Result<Self, Error>>;

    fn from_request(req: &HttpRequest, _pl: &mut Payload) -> Self::Future {
        if let Some(it) = Self::detect(req) {
            return ok(Self(Some(it)));
        }
        ok(Self(None))
    }
}
