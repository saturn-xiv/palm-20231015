pub mod attachment;
pub mod category;
pub mod leave_word;
pub mod locale;
pub mod notification;
pub mod policy;
pub mod shorter_link;
pub mod site;
pub mod tag;
pub mod user;

use std::fmt::Display;

use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use hyper::StatusCode;
use palm::{
    cache::redis::ClusterConnection as Cache,
    has_permission, has_role,
    jwt::Jwt,
    rbac::v1::{resources_response::Item as Resource, RoleRequest, UserRequest},
    session::Session,
    HttpError, Result,
};
use tokio::sync::Mutex;

use super::{
    models::user::{Action, Dao as UserDao, Item as User, Token},
    orm::postgresql::Connection as Db,
};

pub trait CurrentUserAdapter {
    fn current_user(&self, db: &mut Db, ch: &mut Cache, jwt: &Jwt) -> Result<User>;
}

impl CurrentUserAdapter for Session {
    fn current_user(&self, db: &mut Db, _ch: &mut Cache, jwt: &Jwt) -> Result<User> {
        if let Some(ref token) = self.token {
            let token = jwt.parse::<Token>(token)?;
            let token = token.claims;
            if token.act == Action::SignIn {
                let it = UserDao::by_uid(db, &token.aud)?;
                it.available()?;
                return Ok(it);
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

    pub async fn has(&self, enforcer: &Mutex<Enforcer>, role: &str) -> bool {
        let role = RoleRequest {
            code: role.to_string(),
        }
        .to_string();
        let subject = UserRequest { id: self.id }.to_string();
        has_role!(enforcer, &subject, &role)
    }
    pub async fn is_administrator(&self, enforcer: &Mutex<Enforcer>) -> bool {
        self.has(enforcer, RoleRequest::ADMINISTRATOR).await
    }
    pub async fn can<R, O: Display>(
        &self,
        enforcer: &Mutex<Enforcer>,
        operation: O,
        resource_id: Option<i32>,
    ) -> bool {
        let subject = UserRequest { id: self.id }.to_string();
        let action = operation.to_string();
        let object = Resource::new::<R>(resource_id).to_string();
        has_permission!(enforcer, &subject, &object, &action)
    }
}
