pub mod auth;
pub mod s3;

use std::net::IpAddr;

use hyper::{
    header::{ACCEPT_LANGUAGE, AUTHORIZATION},
    StatusCode,
};
use language_tags::LanguageTag;
use serde::{Deserialize, Serialize};
use tonic::{metadata::MetadataMap, Request};

use super::{
    jwt::Jwt,
    models::{
        operation::Dao as OperationDao,
        resource::Dao as ResourceDao,
        role::{Dao as RoleDao, Item as Role},
        user::Item as User,
    },
    orm::Connection as Db,
    HttpError, Result,
};

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Session {
    pub peer: Option<IpAddr>,
    pub token: Option<String>,
    pub lang: String,
}

impl Session {
    const BEARER: &'static str = "Bearer ";

    pub fn new<T>(req: &Request<T>) -> Self {
        let mt = req.metadata();
        // for it in mt.iter() {
        //     if let KeyAndValueRef::Ascii(ref key, val) = it {
        //         debug!("{} => {}", key, val.to_str()?);
        //     }
        // }
        Self {
            peer: req.remote_addr().map(|x| x.ip()),
            token: Self::_authorization(mt),
            lang: Self::_accept_language(mt),
        }
    }

    fn _accept_language(mt: &MetadataMap) -> String {
        let key: &str = ACCEPT_LANGUAGE.as_ref();
        if let Some(it) = mt.get(key) {
            if let Ok(it) = it.to_str() {
                if let Ok(it) = LanguageTag::parse(it) {
                    return it.into_string();
                }
            }
        }
        "en-US".to_string()
    }

    fn _authorization(mt: &MetadataMap) -> Option<String> {
        let key: &str = AUTHORIZATION.as_ref();
        if let Some(it) = mt.get(key) {
            if let Ok(it) = it.to_str() {
                if let Some(ref it) = it.strip_prefix(Self::BEARER) {
                    return Some(it.to_string());
                }
            }
        }
        None
    }

    pub fn jwt_authorization<T>(req: &mut Request<T>, token: &str) -> Result<()> {
        let mt = req.metadata_mut();
        let key: &str = AUTHORIZATION.as_ref();
        mt.insert(key, format!("{}{}", Self::BEARER, token).parse()?);
        Ok(())
    }

    pub fn accept_language<T>(req: &mut Request<T>, lang: &LanguageTag) -> Result<()> {
        let mt = req.metadata_mut();
        let key: &str = ACCEPT_LANGUAGE.as_ref();
        let val = lang.as_str();
        mt.insert(key, val.parse()?);
        Ok(())
    }

    pub fn client_ip(&self) -> String {
        self.peer
            .map(|x| x.to_string())
            .unwrap_or_else(|| "n/a".to_string())
    }

    pub fn current_user(&self, db: &Db, jwt: &Jwt) -> Result<User> {
        if let Some(ref token) = self.token {
            return User::new(db, jwt, token);
        }
        Err(Box::new(HttpError(
            StatusCode::NON_AUTHORITATIVE_INFORMATION,
            None,
        )))
    }
    pub fn administrator(&self, db: &Db, jwt: &Jwt) -> Result<User> {
        if let Ok(user) = self.current_user(db, jwt) {
            for role in [Role::ADMINISTRATOR, Role::ROOT] {
                let role = RoleDao::by_code(db, role)?;
                if user.has(db, role.id).is_ok() {
                    return Ok(user);
                }
            }
        }
        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
    }
    pub fn has(&self, db: &Db, jwt: &Jwt, role: &str) -> Result<User> {
        if let Ok(user) = self.current_user(db, jwt) {
            let role = RoleDao::by_code(db, role)?;
            if user.has(db, role.id).is_ok() {
                return Ok(user);
            }
        }

        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
    }
    pub fn can(&self, db: &Db, jwt: &Jwt, operation: &str, resource: &str) -> Result<User> {
        if let Ok(user) = self.current_user(db, jwt) {
            let operation = OperationDao::by_code(db, operation)?;
            let resource = ResourceDao::by_code(db, resource)?;
            if user.can(db, operation.id, resource.id).is_ok() {
                return Ok(user);
            }
        }

        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
    }
}
