pub mod attachment;
pub mod locale;
pub mod policy;
pub mod role;
pub mod setting;
pub mod site;
pub mod user;

use std::any::type_name;

use chrono::Duration;
use hyper::{
    header::{ACCEPT_LANGUAGE, AUTHORIZATION},
    StatusCode,
};
use language_tags::LanguageTag;
use tonic::{metadata::MetadataMap, Request};

use super::super::super::{jwt::Jwt, orm::postgresql::Connection as Db, HttpError, Result};
use super::models::{
    policy::{Dao as PolicyDao, Item as Policy},
    role::{Dao as RoleDao, ADMINISTRATOR},
    user::{Action, Dao as UserDao, Item as User, Token},
    Operation,
};

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
    pub fn is_administrator(&self, db: &mut Db) -> Result<()> {
        self.is(db, ADMINISTRATOR)
    }
    pub fn is(&self, db: &mut Db, role: &str) -> Result<()> {
        if RoleDao::is(db, self.id, role)? {
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
    }

    pub fn can<T>(
        &self,
        db: &mut Db,
        operation: &Operation,
        resource_id: Option<i32>,
    ) -> Result<()> {
        // TODO cache result
        if self.is_administrator(db).is_ok() {
            return Ok(());
        }

        let resource_type = type_name::<T>();
        let operation = operation.to_string();

        for role in RoleDao::roles_by_user(db, self.id)? {
            if PolicyDao::get(db, &role, &operation, resource_type, None).is_ok() {
                return Ok(());
            }

            if resource_id.is_some()
                && PolicyDao::get(db, &role, &operation, resource_type, resource_id).is_ok()
            {
                return Ok(());
            }
        }
        Err(Box::new(HttpError(
            StatusCode::FORBIDDEN,
            Some(format!("{} {} {:?}", operation, resource_type, resource_id)),
        )))
    }

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

    pub fn policies(&self, db: &mut Db) -> Result<Vec<Policy>> {
        let mut items = Vec::new();
        for r in RoleDao::roles_by_user(db, self.id)?.iter() {
            items.extend(PolicyDao::by_role(db, r)?);
        }
        Ok(items)
    }
}
