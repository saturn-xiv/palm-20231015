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

use chrono::Duration;
use hyper::StatusCode;
use palm::{
    cache::redis::ClusterConnection as Cache, jwt::Jwt, session::Session, to_code, HttpError,
    Result,
};

use super::{
    models::{
        permission::Adapter as PermissionAdapter,
        role::{Adapter as RoleAdapter, Dao as RoleDao, Item as Role},
        user::{Action, Dao as UserDao, Item as User, Token},
    },
    orm::postgresql::Connection as Db,
};

pub trait CurrentUserAdapter {
    fn current_user(&self, db: &mut Db, _ch: &mut Cache, jwt: &Jwt) -> Result<CurrentUser>;
}

impl CurrentUserAdapter for Session {
    fn current_user(&self, db: &mut Db, _ch: &mut Cache, jwt: &Jwt) -> Result<CurrentUser> {
        if let Some(ref token) = self.token {
            let token = jwt.parse::<Token>(token)?;
            let token = token.claims;
            if token.act == Action::SignIn {
                let user = UserDao::by_uid(db, &token.aud)?;
                user.available()?;
                // TODO cache
                let roles = RoleAdapter::get_implicit_roles_for_user(db, user.id)?;
                let permissions =
                    PermissionAdapter::get_implicit_permissions_for_user(db, user.id)?;

                return Ok(CurrentUser {
                    payload: user,
                    roles: roles.iter().map(|x| x.code.clone()).collect::<_>(),
                    permissions: permissions
                        .iter()
                        .map(|x| (x.operation.clone(), x.resource_type.clone(), x.resource_id))
                        .collect::<Vec<_>>(),
                });
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

pub struct CurrentUser {
    pub payload: User,
    pub roles: Vec<String>,
    pub permissions: Vec<(String, String, Option<i32>)>,
}

impl User {
    pub fn has<R: Display>(&self, db: &mut Db, role: R) -> bool {
        let code = role.to_string();
        let code = to_code!(code);
        if let Ok(items) = RoleDao::by_user(db, self.id) {
            for it in items.iter() {
                if it.code == code {
                    return true;
                }
            }
        }

        false
    }
}

impl CurrentUser {
    pub fn has<R: Display>(&self, role: R) -> bool {
        let role = role.to_string();
        for it in self.roles.iter() {
            if *it == role || it == Role::ADMINISTRATOR {
                return true;
            }
        }
        false
    }
    pub fn is_administrator(&self) -> bool {
        self.has(Role::ADMINISTRATOR)
    }
    pub fn can<R, O: Display>(&self, operation: O, resource_id: Option<i32>) -> bool {
        if self.is_administrator() {
            return true;
        }
        let resource_type = type_name::<R>();
        let operation = operation.to_string();
        for (op, rt, ri) in self.permissions.iter() {
            if *op == operation && *rt == resource_type && (ri.is_none() || *ri == resource_id) {
                return true;
            }
        }
        false
    }
}
