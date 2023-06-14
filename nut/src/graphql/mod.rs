pub mod attachment;
pub mod category;
pub mod site;
pub mod user;

use std::fmt::{self, Display};
use std::str::FromStr;
use std::sync::Arc;

use casbin::{Enforcer, RbacApi};
use data_encoding::BASE64URL_NOPAD;
use hyper::StatusCode;
use juniper::Context as GraphQLContext;
use orchid::Client as Orchid;
use palm::{
    aws::s3::Config as S3,
    cache::redis::{ClusterConnection as Cache, Pool as CachePool},
    has_permission, has_role,
    jwt::Jwt,
    queue::amqp::RabbitMq,
    rbac::{Resource, Role, ToSubject},
    search::OpenSearch,
    session::Session,
    thrift::loquat::Config as Loquat,
    to_code, Error, HttpError, Result,
};
use serde::{Deserialize, Serialize};
use tokio::sync::Mutex;

use super::{
    models::user::{
        session::{Dao as UserSessionDao, ProviderType as UserProviderType},
        Action, Dao as UserDao, Item as User,
    },
    orm::postgresql::{Connection as Db, Pool as DbPool},
};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Musa {
    pub url: String,
    pub token: String,
}

impl Default for Musa {
    fn default() -> Self {
        Self {
            url: "http://127.0.0.1:8080".to_string(),
            token: "change-me".to_string(),
        }
    }
}

pub struct Context {
    pub db: DbPool,
    pub cache: CachePool,
    pub loquat: Arc<Loquat>,
    pub orchid: Arc<Orchid>,
    pub musa: Arc<Musa>,
    pub queue: Arc<RabbitMq>,
    pub search: Arc<OpenSearch>,
    pub s3: Arc<S3>,
    pub session: Session,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

impl GraphQLContext for Context {}

pub trait CurrentUserAdapter {
    fn current_user<P: Jwt>(
        &self,
        db: &mut Db,
        ch: &mut Cache,
        jwt: &P,
    ) -> Result<(User, UserProviderType)>;
}

impl CurrentUserAdapter for Session {
    fn current_user<P: Jwt>(
        &self,
        db: &mut Db,
        _ch: &mut Cache,
        jwt: &P,
    ) -> Result<(User, UserProviderType)> {
        if let Some(ref token) = self.token {
            let uid = jwt.verify(token, &Action::SignIn.to_string())?;
            let su = UserSessionDao::by_uid(db, &uid)?;
            let iu = UserDao::by_id(db, su.user_id)?;
            iu.available()?;
            return Ok((iu, su.provider_type.parse()?));
        }

        Err(Box::new(HttpError(
            StatusCode::NON_AUTHORITATIVE_INFORMATION,
            None,
        )))
    }
}

impl User {
    pub async fn has(&self, enforcer: &Mutex<Enforcer>, role: &Role) -> bool {
        let role = role.to_subject();
        let subject = self.to_subject();
        has_role!(enforcer, &subject, &role)
    }
    pub async fn is_administrator(&self, enforcer: &Mutex<Enforcer>) -> bool {
        self.has(enforcer, &Role::Administrator).await
    }
    pub async fn is_root(&self, enforcer: &Mutex<Enforcer>) -> bool {
        self.has(enforcer, &Role::Root).await
    }
    pub async fn can<R, O: Display>(
        &self,
        enforcer: &Mutex<Enforcer>,
        operation: O,
        resource_id: Option<i32>,
    ) -> bool {
        if self.is_administrator(enforcer).await {
            return true;
        }
        let subject = self.to_subject();
        let action = {
            let it = operation.to_string();
            to_code!(it)
        };

        let object = Resource::new::<R>(resource_id).to_string();
        has_permission!(enforcer, &subject, &object, &action)
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
