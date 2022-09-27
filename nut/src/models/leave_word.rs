use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use palm::{
    nut::v1::media_content::{Editor, Status},
    orm::postgresql::Connection,
    schema::leave_words,
    Result,
};
use serde::Serialize;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub lang: String,
    pub ip: String,
    pub body: String,
    pub editor: i32,
    pub status: i32,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn create(&mut self, lang: &str, ip: &str, body: &str, editor: Editor) -> Result<()>;
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

    fn create(&mut self, lang: &str, ip: &str, body: &str, editor: Editor) -> Result<()> {
        insert_into(leave_words::dsl::leave_words)
            .values((
                leave_words::dsl::lang.eq(lang),
                leave_words::dsl::ip.eq(ip),
                leave_words::dsl::body.eq(body),
                leave_words::dsl::editor.eq(editor as i32),
                leave_words::dsl::status.eq(Status::Pending as i32),
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
