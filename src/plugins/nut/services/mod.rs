pub mod locale;
pub mod policy;
pub mod setting;
pub mod site;
pub mod user;

use std::any::type_name;

use hyper::{
    header::{ACCEPT_LANGUAGE, AUTHORIZATION},
    StatusCode,
};
use language_tags::LanguageTag;
use tonic::{metadata::MetadataMap, Request};

use super::super::super::{jwt::Jwt, orm::postgresql::Connection as Db, HttpError, Result};
use super::models::{
    policy::Dao as PolicyDao,
    role::Dao as RoleDao,
    user::{Action, Dao as UserDao, Item as User, Token as UserToken},
};

impl super::v1::Pagination {
    pub fn new(pager: &super::v1::Pager, total: i64) -> Self {
        let page = pager.page(total);
        let size = pager.size();
        Self {
            page,
            size,
            total: {
                let it = total / size;
                if total % size == 0 {
                    it
                } else {
                    it + 1
                }
            },
        }
    }
}

impl super::v1::Pager {
    pub fn offset(&self, total: i64) -> i64 {
        self.page(total) * self.size()
    }

    pub fn page(&self, total: i64) -> i64 {
        let size = self.size();
        if self.page < 1 {
            return 1;
        }
        if self.page * size >= total {
            let it = total / size;
            return if total % size == 0 { it - 1 } else { it };
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
    const MIN_SIZE: i64 = 1 << 6;
}

pub struct Session {
    pub lang: String,
    pub client_ip: String,
    pub token: Option<String>,
}

impl Session {
    pub const RESOURCE_SITE: &'static str = "site";
    pub const ROLE_ADMINISTRATOR: &'static str = "administrator";

    fn detect_locale(meta: &MetadataMap) -> String {
        if let Some(it) = meta.get(ACCEPT_LANGUAGE.as_str()) {
            if let Ok(it) = it.to_str() {
                if let Ok(it) = LanguageTag::parse(it) {
                    return it.to_string();
                }
            }
        }
        "en-US".to_string()
    }

    fn detect_token(meta: &MetadataMap) -> Option<String> {
        if let Some(it) = meta.get(AUTHORIZATION.as_str()) {
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

    pub fn current_user(&self, db: &Db, jwt: &Jwt) -> Result<User> {
        if let Some(ref token) = self.token {
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

    pub fn administrator(&self, db: &Db, jwt: &Jwt) -> Result<User> {
        self.is(db, jwt, Self::ROLE_ADMINISTRATOR)
    }
    pub fn is(&self, db: &Db, jwt: &Jwt, role: &str) -> Result<User> {
        let user = self.current_user(db, jwt)?;
        if RoleDao::is(db, user.id, role)? {
            return Ok(user);
        }
        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
    }

    pub fn can<T>(
        &self,
        db: &Db,
        jwt: &Jwt,
        operation: &str,
        resource_id: Option<i32>,
    ) -> Result<User> {
        let user = self.current_user(db, jwt)?;
        let resource = {
            let t = type_name::<T>();
            match resource_id {
                Some(id) => format!("{}://{}", t, id),
                None => t.to_string(),
            }
        };

        for role in RoleDao::by_user(db, user.id)?.iter() {
            if PolicyDao::get(db, role, operation, &resource).is_ok() {
                return Ok(user);
            }
        }
        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
    }
}
