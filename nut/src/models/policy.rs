use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use serde::Serialize;

use super::super::{orm::Connection, Result};
use super::schema::policies;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub role_id: i32,
    pub resource_id: i32,
    pub operation_id: i32,
    pub version: i32,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn by_role(&self, id: i32) -> Result<Vec<Item>>;
    fn by_operation(&self, id: i32) -> Result<Vec<Item>>;
    fn by_resource(&self, id: i32) -> Result<Vec<Item>>;
    fn get(&self, role: i32, resource: i32, operation: i32) -> Result<Item>;
    fn deny(&self, role: i32, resource: i32, operation: i32) -> Result<()>;
    fn apply(&self, role: i32, resource: i32, operation: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_role(&self, id: i32) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::role_id.eq(id))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_operation(&self, id: i32) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::operation_id.eq(id))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_resource(&self, id: i32) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::resource_id.eq(id))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn get(&self, role: i32, resource: i32, operation: i32) -> Result<Item> {
        let it = policies::dsl::policies
            .filter(policies::dsl::role_id.eq(role))
            .filter(policies::dsl::resource_id.eq(resource))
            .filter(policies::dsl::operation_id.eq(operation))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn deny(&self, role: i32, resource: i32, operation: i32) -> Result<()> {
        delete(
            policies::dsl::policies
                .filter(policies::dsl::role_id.eq(role))
                .filter(policies::dsl::resource_id.eq(resource))
                .filter(policies::dsl::operation_id.eq(operation)),
        )
        .execute(self)?;
        Ok(())
    }
    fn apply(&self, role: i32, resource: i32, operation: i32) -> Result<()> {
        if policies::dsl::policies
            .filter(policies::dsl::role_id.eq(role))
            .filter(policies::dsl::resource_id.eq(resource))
            .filter(policies::dsl::operation_id.eq(operation))
            .first::<Item>(self)
            .is_err()
        {
            insert_into(policies::dsl::policies)
                .values((
                    policies::dsl::role_id.eq(role),
                    policies::dsl::resource_id.eq(resource),
                    policies::dsl::operation_id.eq(operation),
                ))
                .execute(self)?;
        }
        Ok(())
    }
}
