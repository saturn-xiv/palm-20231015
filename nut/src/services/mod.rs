// pub mod attachment;
// pub mod category;
// pub mod locale;
// pub mod policy;
// pub mod setting;
// pub mod shorter_link;
// pub mod site;
// pub mod tag;
// pub mod user;

use chrono::Duration;
use hyper::{
    header::{ACCEPT_LANGUAGE, AUTHORIZATION},
    StatusCode,
};
use language_tags::LanguageTag;
use palm::{jwt::Jwt, orm::postgresql::Connection as Db, HttpError, Result};
use tonic::{metadata::MetadataMap, Request};

use super::models::user::{Action, Dao as UserDao, Item as User, Token};

pub struct Session {
    pub lang: String,
    pub client_ip: String,
    pub token: Option<String>,
}

impl Session {
    fn detect_locale(meta: &MetadataMap) -> String {
        if let Some(it) = meta.get(ACCEPT_LANGUAGE.as_str().to_lowercase()) {
            if let Ok(it) = it.to_str() {
                if let Ok(it) = LanguageTag::parse(it) {
                    return it.to_string();
                }
            }
        }
        "en-US".to_string()
    }

    fn detect_token(meta: &MetadataMap) -> Option<String> {
        if let Some(it) = meta.get(AUTHORIZATION.as_str().to_lowercase()) {
            if let Ok(it) = it.to_str() {
                if let Some(ref it) = it.strip_prefix(Jwt::BEARER) {
                    return Some(it.to_string());
                }
            }
        }
        None
    }

    pub fn new<T>(req: &Request<T>) -> Self {
        let meta = req.metadata();
        Self {
            lang: Self::detect_locale(meta),
            client_ip: req
                .remote_addr()
                .map_or("n/a".to_string(), |x| x.ip().to_string()),
            token: Self::detect_token(meta),
        }
    }

    pub fn current_user(&self, db: &mut Db, jwt: &Jwt) -> Result<User> {
        if let Some(ref token) = self.token {
            let token = jwt.parse::<Token>(token)?;
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

impl User {
    pub fn token(&self, jwt: &Jwt, ttl: Duration) -> Result<String> {
        let (nbf, exp) = Jwt::timestamps(ttl);
        let token = Token {
            aud: self.uid.clone(),
            act: Action::SignIn,
            exp,
            nbf,
        };
        jwt.sum(None, &token)
    }
}
