use std::ops::DerefMut;
use std::result::Result as StdResult;

use actix_web::{dev::Payload, error::ErrorForbidden, web, Error, FromRequest, HttpRequest};
use futures::future::{err, ok, Ready};
use hyper::StatusCode;

use super::super::{
    jwt::Jwt,
    models::user::{Action, Dao as UserDao, Item as User, Token as UserToken},
    orm::postgresql::{Connection as Db, Pool as DbPool},
    try_web, HttpError, Result,
};
use super::token::Token;

fn user_from_token(token: &str, db: &mut Db, jwt: &Jwt) -> Result<User> {
    let token = jwt.parse::<UserToken>(token)?;
    let token = token.claims;
    if token.act == Action::SignIn {
        let user = UserDao::by_uid(db, &token.aud)?;
        user.available()?;
        return Ok(user);
    }
    Err(Box::new(HttpError(
        StatusCode::NON_AUTHORITATIVE_INFORMATION,
        Some(format!("bad action {:?}", token.act)),
    )))
}

impl FromRequest for User {
    type Error = Error;
    type Future = Ready<StdResult<Self, Error>>;

    fn from_request(req: &HttpRequest, _pl: &mut Payload) -> Self::Future {
        let token = Token::detect(req);
        if let Some(jwt) = req.app_data::<web::Data<Jwt>>() {
            if let Some(db) = req.app_data::<web::Data<DbPool>>() {
                if let Ok(mut db) = try_web!(db.get()) {
                    let db = db.deref_mut();

                    if let Some(ref token) = token {
                        if let Ok(it) = user_from_token(token, db, jwt) {
                            return ok(it);
                        }
                    }
                }
            }
        }

        err(ErrorForbidden("can't fetch current user"))
    }
}
