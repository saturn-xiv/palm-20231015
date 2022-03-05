use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use juniper::GraphQLObject;
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::leave_words;
use super::WYSIWYG;

#[derive(Queryable, GraphQLObject, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub ip: String,
    pub body: String,
    pub body_editor: String,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn add(&self, ip: &str, body: &WYSIWYG) -> Result<()>;
    fn all(&self, limit: i64) -> Result<Vec<Item>>;
    fn delete(&self, id: Uuid) -> Result<()>;
}

impl Dao for Connection {
    fn add(&self, ip: &str, body: &WYSIWYG) -> Result<()> {
        insert_into(leave_words::dsl::leave_words)
            .values((
                leave_words::dsl::ip.eq(ip),
                leave_words::dsl::body.eq(&body.content),
                leave_words::dsl::body_editor.eq(&body.editor.to_string()),
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

    fn delete(&self, id: Uuid) -> Result<()> {
        delete(leave_words::dsl::leave_words.filter(leave_words::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
