pub mod attachment;
pub mod category;
pub mod health;
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
use hyper::StatusCode;
use palm::{
    cache::redis::ClusterConnection as Cache,
    has_permission, has_role,
    jwt::Jwt,
    rbac::v1::{resources_response::Item as Resource, RoleRequest, UserRequest},
    session::Session,
    to_code, HttpError, Result,
};
use tokio::sync::Mutex;

use super::{
    models::user::{Action, Dao as UserDao, Item as User},
    orm::postgresql::Connection as Db,
};

pub trait CurrentUserAdapter {
    fn current_user<P: Jwt>(&self, db: &mut Db, ch: &mut Cache, jwt: &P) -> Result<User>;
}

impl CurrentUserAdapter for Session {
    fn current_user<P: Jwt>(&self, db: &mut Db, _ch: &mut Cache, jwt: &P) -> Result<User> {
        if let Some(ref token) = self.token {
            // debug!("### check token {} with aud {}", token, Action::SignIn);
            let nickname = jwt.verify(token, &Action::SignIn.to_string())?;

            let it = UserDao::by_nickname(db, &nickname)?;
            it.available()?;
            return Ok(it);
        }

        Err(Box::new(HttpError(
            StatusCode::NON_AUTHORITATIVE_INFORMATION,
            None,
        )))
    }
}

impl User {
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
        if self.is_administrator(enforcer).await {
            return true;
        }
        let subject = UserRequest { id: self.id }.to_string();
        let action = {
            let it = operation.to_string();
            to_code!(it)
        };
        if let Ok(object) = Resource::new::<R>(resource_id).to_rule() {
            return has_permission!(enforcer, &subject, &object, &action);
        }
        false
    }
}
