use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use mime::Mime;
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::leave_words;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub ip: String,
    pub body: String,
    pub body_content_type: String,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn add(&self, ip: &str, body: &str, body_content_type: &Mime) -> Result<()>;
    fn all(&self, limit: i64) -> Result<Vec<Item>>;
    fn delete(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn add(&self, ip: &str, body: &str, body_content_type: &Mime) -> Result<()> {
        insert_into(leave_words::dsl::leave_words)
            .values((
                leave_words::dsl::ip.eq(ip),
                leave_words::dsl::body.eq(body),
                leave_words::dsl::body_content_type.eq(&body_content_type.to_string()),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self, limit: i64) -> Result<Vec<Item>> {
        let items = leave_words::dsl::leave_words
            .order(leave_words::dsl::created_at.desc())
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: i32) -> Result<()> {
        delete(leave_words::dsl::leave_words.filter(leave_words::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
