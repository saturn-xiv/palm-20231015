use std::ops::DerefMut;
use std::result::Result as StdResult;

use actix_web::{dev::Payload, error::ErrorForbidden, web, Error, FromRequest, HttpRequest};
use futures::future::{err, ok, Ready};

use super::super::super::super::{jwt::Jwt, orm::postgresql::Pool as DbPool};
use super::super::models::user::Item as User;
use super::token::Token;

impl FromRequest for User {
    type Error = Error;
    type Future = Ready<StdResult<Self, Error>>;

    fn from_request(req: &HttpRequest, _pl: &mut Payload) -> Self::Future {
        let token = Token::detect(req);
        if let Some(jwt) = req.app_data::<web::Data<Jwt>>() {
            if let Some(db) = req.app_data::<web::Data<DbPool>>() {
                if let Ok(mut db) = try_web!(db.get()) {
                    let db = db.deref_mut();
                    if let Ok(it) = Token(token).current_user(db, jwt) {
                        return ok(it);
                    }
                }
            }
        }

        err(ErrorForbidden("can't fetch current user"))
    }
}
