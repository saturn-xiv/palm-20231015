use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::resources;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub name: String,
    pub parent_id: Option<i32>,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_code(&self, code: &str) -> Result<Item>;
    fn create(&self, parent: Option<i32>, code: &str, name: &str) -> Result<()>;
    fn update(&self, id: i32, parent: Option<i32>, code: &str, name: &str) -> Result<()>;
    fn has_children(&self, id: i32) -> Result<bool>;
    fn destroy(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn all(&self) -> Result<Vec<Item>> {
        let items = resources::dsl::resources
            .order(resources::dsl::code.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = resources::dsl::resources
            .filter(resources::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_code(&self, code: &str) -> Result<Item> {
        let it = resources::dsl::resources
            .filter(resources::dsl::code.eq(code))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&self, parent: Option<i32>, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(resources::dsl::resources)
            .values((
                resources::dsl::code.eq(code),
                resources::dsl::name.eq(name),
                resources::dsl::parent_id.eq(parent),
                resources::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }
    fn update(&self, id: i32, parent: Option<i32>, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = resources::dsl::resources.filter(resources::dsl::id.eq(id));
        update(it)
            .set((
                resources::dsl::code.eq(code),
                resources::dsl::name.eq(name),
                resources::dsl::parent_id.eq(parent),
                resources::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }
    fn has_children(&self, id: i32) -> Result<bool> {
        let c: i64 = resources::dsl::resources
            .filter(resources::dsl::parent_id.eq(id))
            .count()
            .get_result(self)?;
        Ok(c > 0)
    }
    fn destroy(&self, id: i32) -> Result<()> {
        delete(resources::dsl::resources.filter(resources::dsl::parent_id.eq(id))).execute(self)?;
        delete(resources::dsl::resources.filter(resources::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}