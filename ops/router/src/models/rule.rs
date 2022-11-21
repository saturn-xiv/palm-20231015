use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, sqlite::SqliteConnection as Connection, update};
use palm::{ops::router::v1, Result};
use prost::Message;

use super::super::schema::rules;

#[derive(Queryable)]
pub struct Item {
    pub id: i32,
    pub name: String,
    pub group: String,
    pub content: Vec<u8>,
    pub updated_at: NaiveDateTime,
}

impl Item {
    pub const DEFAULT_GROUP: &'static str = "default";
}

pub trait Dao {
    fn create(&mut self, name: &str, group: &str, content: &v1::Rule) -> Result<()>;
    fn update(&mut self, id: i32, name: &str, group: &str, content: &v1::Rule) -> Result<()>;
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn destroy(&mut self, id: i32) -> Result<()>;
    fn groups(&mut self) -> Result<Vec<String>>;
    fn all(&mut self) -> Result<Vec<Item>>;
    fn by_group(&mut self, group: &str) -> Result<Vec<Item>>;
}

impl Dao for Connection {
    fn create(&mut self, name: &str, group: &str, content: &v1::Rule) -> Result<()> {
        let mut buf = Vec::new();
        content.encode(&mut buf)?;

        let now = Utc::now().naive_utc();
        insert_into(rules::dsl::rules)
            .values((
                rules::dsl::name.eq(name),
                rules::dsl::group.eq(group),
                rules::dsl::content.eq(&buf),
                rules::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&mut self, id: i32, name: &str, group: &str, content: &v1::Rule) -> Result<()> {
        let mut buf = Vec::new();
        content.encode(&mut buf)?;

        let now = Utc::now().naive_utc();
        let it = rules::dsl::rules.filter(rules::dsl::id.eq(&id));

        update(it)
            .set((
                rules::dsl::name.eq(name),
                rules::dsl::group.eq(group),
                rules::dsl::content.eq(&buf),
                rules::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = rules::dsl::rules
            .filter(rules::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(rules::dsl::rules.filter(rules::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
    fn groups(&mut self) -> Result<Vec<String>> {
        Ok(rules::dsl::rules
            .select(rules::dsl::group)
            .distinct()
            .order(rules::dsl::group.asc())
            .load::<String>(self)?)
    }
    fn all(&mut self) -> Result<Vec<Item>> {
        let items = rules::dsl::rules
            .order(rules::dsl::name.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_group(&mut self, group: &str) -> Result<Vec<Item>> {
        let items = rules::dsl::rules
            .filter(rules::dsl::group.eq(group))
            .order(rules::dsl::name.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
}
