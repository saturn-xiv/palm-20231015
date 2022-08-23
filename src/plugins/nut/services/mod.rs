pub mod attachment;
pub mod category;
pub mod locale;
pub mod policy;
pub mod setting;
pub mod shorter_link;
pub mod site;
pub mod tag;
pub mod user;

use std::any::type_name;
use std::fmt::Display;

use chrono::Duration;
use hyper::{
    header::{ACCEPT_LANGUAGE, AUTHORIZATION},
    StatusCode,
};
use language_tags::LanguageTag;
use tonic::{metadata::MetadataMap, Request};

use super::super::super::{jwt::Jwt, orm::postgresql::Connection as Db, HttpError, Result};
use super::models::user::{Action, Dao as UserDao, Item as User, Token};

impl super::v1::Pagination {
    pub fn new(pager: &super::v1::Pager, total: i64) -> Self {
        let page = pager.page(total);
        let size = pager.size();
        Self {
            page,
            size,
            total,
            has_next: (page * size < total),
            has_previous: (page > 1),
        }
    }
}

impl super::v1::Pager {
    pub fn offset(&self, total: i64) -> i64 {
        (self.page(total) - 1) * self.size()
    }

    pub fn page(&self, total: i64) -> i64 {
        let size = self.size();
        if total < size || self.page < 1 {
            return 1;
        }
        if self.page * size > total {
            let it = total / size;
            return if total % size == 0 { it } else { it + 1 };
        }
        self.page
    }

    pub fn size(&self) -> i64 {
        if self.size < Self::MIN_SIZE {
            return Self::MIN_SIZE;
        }
        if self.size > Self::MAX_SIZE {
            return Self::MAX_SIZE;
        }
        self.size
    }
    const MAX_SIZE: i64 = 1 << 10;
    const MIN_SIZE: i64 = 1 << 2;
}

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
    pub fn is_administrator(&self) -> bool {
        self.is(Self::ROLE_ADMINISTRATOR)
    }
    pub fn is(&self, role: &str) -> bool {
        // FIXME
        // let items = enf.get_implicit_roles_for_user(&self.subject(), None);
        // items.contains(&to_role!(role))
        false
    }
    pub fn can<R, O: Display>(&self, operation: &O, resource_id: Option<i32>) -> bool {
        // FIXME
        // if self.is_administrator(enf) {
        //     return true;
        // }
        // let resource_type = type_name::<R>();
        // let operation = operation.to_string();

        // let object = match resource_id {
        //     Some(resource_id) => resource_to_object!(resource_type, resource_id),
        //     None => resource_to_object!(resource_type),
        // };

        // let items = enf.get_implicit_permissions_for_user(&self.subject(), None);
        // for it in items.iter() {
        //     if it[2] == operation && (it[1] == resource_type || it[1] == object) {
        //         return true;
        //     }
        // }
        false
    }
}
