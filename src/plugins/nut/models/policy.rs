use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use serde::Serialize;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::policies;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub role: String,
    pub operation: String,
    pub resource: String,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn by_role(&self, role: &str) -> Result<Vec<Item>>;
    fn by_operation(&self, operation: &str) -> Result<Vec<Item>>;
    fn by_resource(&self, resource: &str) -> Result<Vec<Item>>;
    fn index(&self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count(&self) -> Result<i64>;
    fn create(&self, role: &str, operation: &str, resource: &str) -> Result<()>;
    fn get(&self, role: &str, operation: &str, resource: &str) -> Result<Item>;
    fn destroy(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_role(&self, role: &str) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::role.eq(role))
            .order((
                policies::dsl::resource.asc(),
                policies::dsl::operation.asc(),
            ))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_operation(&self, operation: &str) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::operation.eq(operation))
            .order(policies::dsl::resource.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_resource(&self, resource: &str) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::resource.eq(resource))
            .order(policies::dsl::operation.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn index(&self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .order((
                policies::dsl::resource.asc(),
                policies::dsl::operation.asc(),
            ))
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn count(&self) -> Result<i64> {
        let cnt: i64 = policies::dsl::policies.count().get_result(self)?;
        Ok(cnt)
    }
    fn create(&self, role: &str, operation: &str, resource: &str) -> Result<()> {
        insert_into(policies::dsl::policies)
            .values((
                policies::dsl::role.eq(role),
                policies::dsl::operation.eq(operation),
                policies::dsl::resource.eq(resource),
            ))
            .execute(self)?;
        Ok(())
    }
    fn get(&self, role: &str, operation: &str, resource: &str) -> Result<Item> {
        let it = policies::dsl::policies
            .filter(policies::dsl::role.eq(role))
            .filter(policies::dsl::operation.eq(operation))
            .filter(policies::dsl::resource.eq(resource))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn destroy(&self, id: i32) -> Result<()> {
        delete(policies::dsl::policies.filter(policies::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
