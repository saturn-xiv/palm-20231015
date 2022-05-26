use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use serde::Serialize;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::leave_words;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub lang: String,
    pub ip: String,
    pub body: String,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn create(&mut self, lang: &str, ip: &str, body: &str) -> Result<()>;
    fn all(&mut self) -> Result<Vec<Item>>;
    fn destroy(&mut self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        Ok(leave_words::dsl::leave_words
            .filter(leave_words::dsl::id.eq(id))
            .first::<Item>(self)?)
    }

    fn create(&mut self, lang: &str, ip: &str, body: &str) -> Result<()> {
        insert_into(leave_words::dsl::leave_words)
            .values((
                leave_words::dsl::lang.eq(lang),
                leave_words::dsl::ip.eq(ip),
                leave_words::dsl::body.eq(body),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&mut self) -> Result<Vec<Item>> {
        Ok(leave_words::dsl::leave_words
            .order(leave_words::dsl::created_at.desc())
            .load::<Item>(self)?)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(leave_words::dsl::leave_words.filter(leave_words::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
