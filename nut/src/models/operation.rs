use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::{orm::Connection, Result};
use super::schema::{operations, policies};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub name: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

impl Item {
    pub const ALL: &'static str = "*";
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_code(&self, user: &str) -> Result<Item>;
    fn create(&self, code: &str, name: &str) -> Result<()>;
    fn update(&self, id: i32, code: &str, name: &str) -> Result<()>;
    fn destory(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn all(&self) -> Result<Vec<Item>> {
        let items = operations::dsl::operations
            .order(operations::dsl::name.asc())
            .load(self)?;
        Ok(items)
    }
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = operations::dsl::operations
            .filter(operations::dsl::id.eq(id))
            .first(self)?;
        Ok(it)
    }
    fn by_code(&self, code: &str) -> Result<Item> {
        let it = operations::dsl::operations
            .filter(operations::dsl::code.eq(code))
            .first(self)?;
        Ok(it)
    }
    fn create(&self, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_local();
        insert_into(operations::dsl::operations)
            .values((
                operations::dsl::code.eq(code),
                operations::dsl::name.eq(name),
                operations::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&self, id: i32, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_local();
        update(operations::dsl::operations.filter(operations::dsl::id.eq(&id)))
            .set((
                operations::dsl::code.eq(code),
                operations::dsl::name.eq(name),
                operations::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn destory(&self, id: i32) -> Result<()> {
        delete(policies::dsl::policies.filter(policies::dsl::operation_id.eq(id))).execute(self)?;
        delete(operations::dsl::operations.filter(operations::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
