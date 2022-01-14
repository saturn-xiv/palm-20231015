use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::operations;

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

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_code(&self, code: &str) -> Result<Item>;
    fn create(&self, code: &str, name: &str) -> Result<()>;
    fn update(&self, id: i32, code: &str, name: &str) -> Result<()>;
    fn destroy(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn all(&self) -> Result<Vec<Item>> {
        let items = operations::dsl::operations
            .order(operations::dsl::code.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = operations::dsl::operations
            .filter(operations::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_code(&self, code: &str) -> Result<Item> {
        let it = operations::dsl::operations
            .filter(operations::dsl::code.eq(code))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&self, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
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
        let now = Utc::now().naive_utc();
        let it = operations::dsl::operations.filter(operations::dsl::id.eq(id));
        update(it)
            .set((
                operations::dsl::code.eq(code),
                operations::dsl::name.eq(name),
                operations::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }

    fn destroy(&self, id: i32) -> Result<()> {
        delete(operations::dsl::operations.filter(operations::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
