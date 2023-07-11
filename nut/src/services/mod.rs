pub mod attachment;
pub mod category;
pub mod google;
pub mod health;
pub mod leave_word;
pub mod locale;
pub mod notification;
pub mod policy;
pub mod shorter_link;
pub mod site;
pub mod tag;
pub mod user;
pub mod wechat;

use std::fmt::{self, Display};
use std::str::FromStr;

use casbin::{Enforcer, RbacApi};
use data_encoding::BASE64URL_NOPAD;
use hyper::StatusCode;
use palm::{
    cache::redis::ClusterConnection as Cache,
    has_permission, has_role,
    jwt::Jwt,
    rbac::{Resource, Role, Subject},
    session::Session,
    to_code, Error, HttpError, Result,
};
use serde::{Deserialize, Serialize};
use tokio::sync::Mutex;

use super::{
    models::user::{
        session::{Dao as UserSessionDao, ProviderType as UserProviderType},
        Action, Dao as UserDao, Item as User,
    },
    orm::postgresql::Connection as Db,
};

pub trait CurrentUserAdapter {
    fn current_user<P: Jwt>(
        &self,
        db: &mut Db,
        ch: &mut Cache,
        jwt: &P,
    ) -> Result<(User, String, (UserProviderType, i32))>;
}

impl CurrentUserAdapter for Session {
    fn current_user<P: Jwt>(
        &self,
        db: &mut Db,
        _ch: &mut Cache,
        jwt: &P,
    ) -> Result<(User, String, (UserProviderType, i32))> {
        if let Some(ref token) = self.token {
            let uid = jwt.verify(token, &Action::SignIn.to_string())?;
            let su = UserSessionDao::by_uid(db, &uid)?;
            let iu = UserDao::by_id(db, su.user_id)?;
            iu.available()?;
            return Ok((iu, su.uid, (su.provider_type.parse()?, su.provider_id)));
        }

        Err(Box::new(HttpError(
            StatusCode::NON_AUTHORITATIVE_INFORMATION,
            None,
        )))
    }
}

impl User {
    pub async fn has(&self, enforcer: &Mutex<Enforcer>, role: &Role) -> Result<()> {
        {
            let role = Subject::to(role);
            let user = Subject::to(self);
            if has_role!(enforcer, &user, &role) {
                return Ok(());
            }
        }
        Err(Box::new(HttpError(
            StatusCode::FORBIDDEN,
            Some(format!("{} didn't has role {}", self.nickname, role)),
        )))
    }
    pub async fn is_administrator(&self, enforcer: &Mutex<Enforcer>) -> Result<()> {
        self.has(enforcer, &Role::Administrator).await
    }
    pub async fn is_root(&self, enforcer: &Mutex<Enforcer>) -> Result<()> {
        self.has(enforcer, &Role::Root).await
    }
    pub async fn can<R, O: Display>(
        &self,
        enforcer: &Mutex<Enforcer>,
        operation: O,
        resource_id: Option<i32>,
    ) -> Result<()> {
        if self.is_administrator(enforcer).await.is_ok() {
            return Ok(());
        }
        let user = Subject::to(self);
        let action = {
            let it = operation.to_string();
            to_code!(it)
        };

        let object = Resource::new::<R>(resource_id).to_string();
        if has_permission!(enforcer, &user, &object, &action) {
            return Ok(());
        }

        Err(Box::new(HttpError(
            StatusCode::FORBIDDEN,
            Some(format!(
                "{} didn't has permission ({}, {})",
                self.nickname, operation, object
            )),
        )))
    }
}

#[derive(Serialize, Deserialize, Default, PartialEq, Debug, Clone)]
pub struct Oauth2State {
    pub user: Option<String>,
    pub id: String,
}

impl fmt::Display for Oauth2State {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        let it = {
            let buf = rmp_serde::to_vec(self).map_err(|e| {
                error!("{:?}", e);
                fmt::Error::default()
            })?;
            BASE64URL_NOPAD.encode(&buf)
        };
        write!(f, "{}", it)
    }
}

impl FromStr for Oauth2State {
    type Err = Error;

    fn from_str(s: &str) -> Result<Self> {
        let buf = BASE64URL_NOPAD.decode(s.as_bytes())?;
        let it = rmp_serde::from_slice(&buf)?;

        Ok(it)
    }
}
