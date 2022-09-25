use std::any::type_name;

use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use serde::Serialize;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::permissions;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub role: i32,
    pub operation: String,
    pub resource_type: String,
    pub resource_id: Option<i32>,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn create<T>(&mut self, role: i32, operation: &str, resource_id: Option<i32>) -> Result<()>;
    fn by_role(&mut self, role: i32) -> Result<Vec<Item>>;
    fn by_resource<T>(&mut self, resource_id: Option<i32>) -> Result<Vec<Item>>;
    fn all(&mut self, user: i32, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn destroy(&mut self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn create<T>(&mut self, role: i32, operation: &str, resource_id: Option<i32>) -> Result<()> {
        let resource_type = type_name::<T>();
        insert_into(permissions::dsl::permissions)
            .values((
                permissions::dsl::role.eq(role),
                permissions::dsl::operation.eq(operation),
                permissions::dsl::resource_type.eq(resource_type),
                permissions::dsl::resource_id.eq(resource_id),
            ))
            .execute(self)?;
        Ok(())
    }
    fn by_role(&mut self, role: i32) -> Result<Vec<Item>> {
        let items = permissions::dsl::permissions
            .filter(permissions::dsl::role.eq(role))
            .order(permissions::dsl::created_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_resource<T>(&mut self, resource_id: Option<i32>) -> Result<Vec<Item>> {
        let resource_type = type_name::<T>();
        let items = match resource_id {
            Some(resource_id) => permissions::dsl::permissions
                .filter(permissions::dsl::resource_type.eq(resource_type))
                .filter(permissions::dsl::resource_id.eq(resource_id))
                .order(permissions::dsl::created_at.desc())
                .load::<Item>(self)?,
            None => permissions::dsl::permissions
                .filter(permissions::dsl::resource_type.eq(resource_type))
                .filter(permissions::dsl::resource_id.is_null())
                .order(permissions::dsl::created_at.desc())
                .load::<Item>(self)?,
        };

        Ok(items)
    }
    fn all(&mut self, user: i32, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = permissions::dsl::permissions
            .order(permissions::dsl::created_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(permissions::dsl::permissions.filter(permissions::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
