use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::{orm::Connection, Result};
use super::schema::{policies, resources};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub name: String,
    pub parent_id: Option<i32>,
    pub level: i32,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

impl Item {
    pub const CODE_ALL: &'static str = "*";
    pub const TYPE_ALL: &'static str = "*";
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_code(&self, user: &str) -> Result<Item>;
    fn children(&self, id: i32) -> Result<Vec<Item>>;
    fn create(&self, code: &str, name: &str, parent: Option<i32>) -> Result<()>;
    fn update(&self, id: i32, code: &str, name: &str) -> Result<()>;
    fn destory(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn all(&self) -> Result<Vec<Item>> {
        let items = resources::dsl::resources
            .order(resources::dsl::name.asc())
            .load(self)?;
        Ok(items)
    }
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = resources::dsl::resources
            .filter(resources::dsl::id.eq(id))
            .first(self)?;
        Ok(it)
    }
    fn by_code(&self, code: &str) -> Result<Item> {
        let it = resources::dsl::resources
            .filter(resources::dsl::code.eq(code))
            .first(self)?;
        Ok(it)
    }
    fn children(&self, id: i32) -> Result<Vec<Item>> {
        let items = resources::dsl::resources
            .filter(resources::dsl::parent_id.eq(id))
            .order(resources::dsl::name.asc())
            .load(self)?;
        Ok(items)
    }
    fn create(&self, code: &str, name: &str, parent: Option<i32>) -> Result<()> {
        let now = Utc::now().naive_local();
        let level = match parent {
            Some(id) => {
                let it = resources::dsl::resources
                    .select(resources::dsl::level)
                    .filter(resources::dsl::id.eq(id))
                    .first::<i32>(self)?;
                it + 1
            }
            None => 1,
        };
        insert_into(resources::dsl::resources)
            .values((
                resources::dsl::code.eq(code),
                resources::dsl::name.eq(name),
                resources::dsl::parent_id.eq(parent),
                resources::dsl::level.eq(level),
                resources::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&self, id: i32, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_local();
        update(resources::dsl::resources.filter(resources::dsl::id.eq(&id)))
            .set((
                resources::dsl::code.eq(code),
                resources::dsl::name.eq(name),
                resources::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn destory(&self, id: i32) -> Result<()> {
        delete(policies::dsl::policies.filter(policies::dsl::resource_id.eq(id))).execute(self)?;
        delete(resources::dsl::resources.filter(resources::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
