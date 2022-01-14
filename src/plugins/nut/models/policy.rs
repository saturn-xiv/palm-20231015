use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::policies;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub role_id: i32,
    pub resource_id: i32,
    pub operation_id: i32,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_role(&self, role: i32) -> Result<Vec<Item>>;
    fn by_operation(&self, operation: i32) -> Result<Vec<Item>>;
    fn by_resource(&self, resource: i32) -> Result<Vec<Item>>;
    fn deny(&self, role: i32, operation: i32, resource: i32) -> Result<()>;
    fn apply(&self, role: i32, operation: i32, resource: i32) -> Result<()>;
}

impl Dao for Connection {
    fn all(&self) -> Result<Vec<Item>> {
        let items = policies::dsl::policies.load::<Item>(self)?;
        Ok(items)
    }
    fn by_role(&self, role: i32) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::role_id.eq(role))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_operation(&self, operation: i32) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::operation_id.eq(operation))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_resource(&self, resource: i32) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::resource_id.eq(resource))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn deny(&self, role: i32, operation: i32, resource: i32) -> Result<()> {
        delete(
            policies::dsl::policies
                .filter(policies::dsl::role_id.eq(role))
                .filter(policies::dsl::operation_id.eq(operation))
                .filter(policies::dsl::resource_id.eq(resource)),
        )
        .execute(self)?;
        Ok(())
    }
    fn apply(&self, role: i32, operation: i32, resource: i32) -> Result<()> {
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
}
