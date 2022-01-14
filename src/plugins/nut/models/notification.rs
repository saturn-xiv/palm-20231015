use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::notifications;
use super::WYSIWYG;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub url: String,
    pub body: String,
    pub body_content_type: String,
    pub level: String,
    pub read: bool,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn read(&self, id: i32) -> Result<()>;
    fn create(&self, user: i32, url: &str, body: &WYSIWYG, level: &str) -> Result<()>;
    fn delete(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn create(&self, user: i32, url: &str, body: &WYSIWYG, level: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(notifications::dsl::notifications)
            .values((
                notifications::dsl::user_id.eq(user),
                notifications::dsl::url.eq(url),
                notifications::dsl::body.eq(&body.content),
                notifications::dsl::body_content_type.eq(&body.editor.to_string()),
                notifications::dsl::level.eq(level),
                notifications::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn read(&self, id: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(notifications::dsl::notifications.filter(notifications::dsl::id.eq(id)))
            .set((
                notifications::dsl::read.eq(true),
                notifications::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = notifications::dsl::notifications
            .order(notifications::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: i32) -> Result<()> {
        delete(notifications::dsl::notifications.filter(notifications::dsl::id.eq(id)))
            .execute(self)?;
        Ok(())
    }
}
