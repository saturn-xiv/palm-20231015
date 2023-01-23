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

use std::any::type_name;
use std::fmt::Display;

use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use hyper::StatusCode;
use palm::{jwt::Jwt, session::Session, HttpError, Result};
use tokio::sync::Mutex;

use super::{
    models::user::{Action, Dao as UserDao, Item as User, Token},
    orm::postgresql::Connection as Db,
    rbac::{Subject, ROLE_ADMINISTRATOR},
};

pub trait CurrentUserAdapter {
    fn current_user(&self, db: &mut Db, jwt: &Jwt) -> Result<User>;
}

impl CurrentUserAdapter for Session {
    fn current_user(&self, db: &mut Db, jwt: &Jwt) -> Result<User> {
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

    pub async fn has<R: Display>(&self, enforcer: &Mutex<Enforcer>, role: R) -> bool {
        let role = role.to_string();
        let user = Subject::to_code(self);
        let mut enforcer = enforcer.lock().await;
        enforcer
            .get_implicit_roles_for_user(&user, None)
            .contains(&role)
    }
    pub async fn is_administrator(&self, enforcer: &Mutex<Enforcer>) -> bool {
        self.has(enforcer, ROLE_ADMINISTRATOR).await
    }
    pub async fn can<RType, RID: Display, O: Display>(
        &self,
        enforcer: &Mutex<Enforcer>,
        operation: O,
        resource_id: Option<RID>,
    ) -> bool {
        let user = Subject::to_code(self);
        let operation = operation.to_string();
        let resource = format!(
            "{}://{}",
            type_name::<RType>(),
            resource_id.map(|x| x.to_string()).unwrap_or_default()
        );

        let mut enforcer = enforcer.lock().await;
        for it in enforcer
            .get_implicit_permissions_for_user(&user, None)
            .iter()
        {
            if it.len() == 3 {
                if let Some()
            }
        }
        false
        // if self.is_administrator() {
        //     return true;
        // }
        // let resource_type = type_name::<R>();
        // let operation = operation.to_string();
        // for (op, rt, ri) in self.permissions.iter() {
        //     if *op == operation && *rt == resource_type && (ri.is_none() || *ri == resource_id) {
        //         return true;
        //     }
        // }
        // false
    }
}
