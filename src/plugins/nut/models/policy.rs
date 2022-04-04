use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::policies;
use super::{
    operation::{Dao as OperationDao, Item as Operation},
    resource::{Dao as ResourceDao, Item as Resouce},
    role::{Dao as RoleDao, Item as Role},
};
#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub role_id: Uuid,
    pub resource_id: Uuid,
    pub operation_id: Uuid,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_role(&self, role: Uuid) -> Result<Vec<Item>>;
    fn by_operation(&self, operation: Uuid) -> Result<Vec<Item>>;
    fn by_resource(&self, resource: Uuid) -> Result<Vec<Item>>;
    fn deny(&self, role: Uuid, operation: Uuid, resource: Uuid) -> Result<()>;
    fn apply(&self, role: Uuid, operation: Uuid, resource: Uuid) -> Result<()>;

    fn is(&self, user_type: &str, user_id: Uuid, role: &str) -> bool;
    fn can(&self, user_type: &str, user_id: Uuid, operation: &str, resource: &str) -> bool;
}

impl Dao for Connection {
    fn all(&self) -> Result<Vec<Item>> {
        let items = policies::dsl::policies.load::<Item>(self)?;
        Ok(items)
    }
    fn by_role(&self, role: Uuid) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::role_id.eq(role))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_operation(&self, operation: Uuid) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::operation_id.eq(operation))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_resource(&self, resource: Uuid) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::resource_id.eq(resource))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn deny(&self, role: Uuid, operation: Uuid, resource: Uuid) -> Result<()> {
        delete(
            policies::dsl::policies
                .filter(policies::dsl::role_id.eq(role))
                .filter(policies::dsl::operation_id.eq(operation))
                .filter(policies::dsl::resource_id.eq(resource)),
        )
        .execute(self)?;
        Ok(())
    }
    fn apply(&self, role: Uuid, operation: Uuid, resource: Uuid) -> Result<()> {
        let c: i64 = policies::dsl::policies
            .filter(policies::dsl::role_id.eq(role))
            .filter(policies::dsl::operation_id.eq(operation))
            .filter(policies::dsl::resource_id.eq(resource))
            .count()
            .get_result(self)?;
        if c == 0 {
            insert_into(policies::dsl::policies)
                .values((
                    policies::dsl::role_id.eq(role),
                    policies::dsl::operation_id.eq(operation),
                    policies::dsl::resource_id.eq(resource),
                ))
                .execute(self)?;
        }
        Ok(())
    }

    fn is(&self, user_type: &str, user_id: Uuid, role: &str) -> bool {
        if let Ok(role) = RoleDao::by_code(self, role) {
            return is_role(self, user_type, user_id, &role);
        }
        false
    }
    fn can(&self, user_type: &str, user_id: Uuid, operation: &str, resource: &str) -> bool {
        if let Ok(resource) = ResourceDao::by_code(self, resource) {
            if let Ok(operation) = OperationDao::by_code(self, operation) {
                return can(self, user_type, user_id, &operation, &resource);
            }
        }
        false
    }
}

fn is_role(db: &Connection, user_type: &str, user_id: Uuid, role: &Role) -> bool {
    if RoleDao::has(db, role.id, user_type, user_id) {
        return true;
    }
    if let Some(parent) = role.parent_id {
        if let Ok(role) = RoleDao::by_id(db, parent) {
            return is_role(db, user_type, user_id, &role);
        }
    }
    false
}

fn can(
    db: &Connection,
    user_type: &str,
    user_id: Uuid,
    operation: &Operation,
    resource: &Resouce,
) -> bool {
    if let Ok(roles) = policies::dsl::policies
        .select(policies::dsl::role_id)
        .filter(policies::dsl::operation_id.eq(operation.id))
        .filter(policies::dsl::resource_id.eq(resource.id))
        .load::<Uuid>(db)
    {
        for role in roles {
            if let Ok(role) = RoleDao::by_id(db, role) {
                if is_role(db, user_type, user_id, &role) {
                    return true;
                }
            }
        }
    }
    if let Some(resource) = resource.parent_id {
        if let Ok(resource) = ResourceDao::by_id(db, resource) {
            return can(db, user_type, user_id, operation, &resource);
        }
    }
    false
}
