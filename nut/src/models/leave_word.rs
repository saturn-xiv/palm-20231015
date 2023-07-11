use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*};
use palm::{nut::v1, to_timestamp, Result};
use serde::Serialize;

use super::super::{orm::postgresql::Connection, schema::leave_words};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub lang: String,
    pub ip: String,
    pub body: String,
    pub body_editor: i32,
    pub status: i32,
    pub published_at: Option<NaiveDateTime>,
    pub deleted_at: Option<NaiveDateTime>,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

impl From<Item> for v1::leave_word_index_response::Item {
    fn from(x: Item) -> Self {
        Self {
            id: x.id,
            lang: x.lang.clone(),
            ip: x.ip.clone(),
            content: Some(v1::MediaContent {
                editor: x.body_editor,
                body: x.body.clone(),
                status: x.status,
                published_at: x.published_at.map(|x| to_timestamp!(x)),
            }),
            updated_at: Some(to_timestamp!(x.updated_at)),
            created_at: Some(to_timestamp!(x.created_at)),
        }
    }
}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn create(&mut self, lang: &str, ip: &str, body: &str, editor: i32) -> Result<()>;
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count(&mut self) -> Result<i64>;
    fn destroy(&mut self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        Ok(leave_words::dsl::leave_words
            .filter(leave_words::dsl::id.eq(id))
            .first::<Item>(self)?)
    }

    fn create(&mut self, lang: &str, ip: &str, body: &str, editor: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(leave_words::dsl::leave_words)
            .values((
                leave_words::dsl::lang.eq(lang),
                leave_words::dsl::ip.eq(ip),
                leave_words::dsl::body.eq(body),
                leave_words::dsl::status.eq(v1::media_content::Status::Pending as i32),
                leave_words::dsl::body_editor.eq(editor),
                leave_words::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        Ok(leave_words::dsl::leave_words
            .order(leave_words::dsl::created_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?)
    }
    fn count(&mut self) -> Result<i64> {
        let it = leave_words::dsl::leave_words.count().first(self)?;
        Ok(it)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(leave_words::dsl::leave_words.filter(leave_words::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
