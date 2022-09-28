use std::ops::DerefMut;

use palm::{cache::redis::Pool as CachePool, orm::postgresql::Pool as DbPool, Result};

use super::models::{
    permission::Dao as PermissionDao,
    role::{Dao as RoleDao, Item as Role},
};

pub trait Adapter {
    fn reload(&self) -> Result<()>;
    fn is_administrator(&self, user: i32) -> Result<bool>;
    fn has(&self, user: i32, role: &str) -> Result<bool>;
    fn can(
        &self,
        user: i32,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<bool>;
}

pub struct Enforcer {
    pub db: DbPool,
    pub cache: CachePool,
}

impl Adapter for Enforcer {
    fn reload(&self) -> Result<()> {
        todo!()
    }
    fn is_administrator(&self, user: i32) -> Result<bool> {
        self.has(user, Role::ADMINISTRATOR)
    }
    fn has(&self, user: i32, role: &str) -> Result<bool> {
        let mut db = self.db.get()?;
        let db = db.deref_mut();
        for it in RoleDao::get_implicit_roles_for_user(db, user)? {
            if it.code == role {
                return Ok(true);
            }
        }
        Ok(false)
    }
    fn can(
        &self,
        user: i32,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<bool> {
        if self.is_administrator(user)? {
            return Ok(true);
        }
        let mut db = self.db.get()?;
        let db = db.deref_mut();
        for it in PermissionDao::get_implicit_permissions_for_user(db, user)? {
            if it.operation == operation
                && it.resource_type == resource_type
                && it.resource_id == resource_id
            {
                return Ok(true);
            }
        }
        Ok(false)
    }
}
