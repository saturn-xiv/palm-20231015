use std::any::type_name;

use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::leave_words;
use super::{page_content::Dao as PageContentDao, Resource, WYSIWYG};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub ip: String,
    pub read_at: Option<NaiveDateTime>,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn add(&self, ip: &str, body: &WYSIWYG) -> Result<()>;
    fn all(&self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn delete(&self, id: Uuid) -> Result<()>;
    fn read(&self, id: Uuid) -> Result<()>;
    fn count(&self) -> Result<i64>;
}

impl Dao for Connection {
    fn add(&self, ip: &str, body: &WYSIWYG) -> Result<()> {
        let now = Utc::now().naive_local();
        let id = Uuid::new_v4();
        insert_into(leave_words::dsl::leave_words)
            .values((
                leave_words::dsl::id.eq(id),
                leave_words::dsl::ip.eq(ip),
                leave_words::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        PageContentDao::create(
            self,
            &Resource {
                type_: type_name::<Item>().to_string(),
                id,
            },
            body,
        )?;
        Ok(())
    }

    fn all(&self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = leave_words::dsl::leave_words
            .order(leave_words::dsl::created_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: Uuid) -> Result<()> {
        delete(leave_words::dsl::leave_words.filter(leave_words::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
    fn read(&self, id: Uuid) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = leave_words::dsl::leave_words.filter(leave_words::dsl::id.eq(id));
        update(it)
            .set((
                leave_words::dsl::read_at.eq(&now),
                leave_words::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }

    fn count(&self) -> Result<i64> {
        let it = leave_words::dsl::leave_words.count().first(self)?;
        Ok(it)
    }
}
