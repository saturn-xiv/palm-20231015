use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use palm::Result;
use serde::Serialize;

use super::super::{orm::postgresql::Connection, schema::shorter_links};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub url: String,
    pub summary: String,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn create(&mut self, url: &str, summary: &str) -> Result<()>;
    fn update(&mut self, id: i32, url: &str, summary: &str) -> Result<()>;
    fn all(&mut self) -> Result<Vec<Item>>;
    fn destroy(&mut self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        Ok(shorter_links::dsl::shorter_links
            .filter(shorter_links::dsl::id.eq(id))
            .first::<Item>(self)?)
    }

    fn create(&mut self, url: &str, summary: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(shorter_links::dsl::shorter_links)
            .values((
                shorter_links::dsl::url.eq(url),
                shorter_links::dsl::summary.eq(summary),
                shorter_links::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&mut self, id: i32, url: &str, summary: &str) -> Result<()> {
        let it = shorter_links::dsl::shorter_links.filter(shorter_links::dsl::id.eq(&id));
        let now = Utc::now().naive_utc();
        update(it)
            .set((
                shorter_links::dsl::url.eq(url),
                shorter_links::dsl::summary.eq(summary),
                shorter_links::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn all(&mut self) -> Result<Vec<Item>> {
        Ok(shorter_links::dsl::shorter_links
            .order(shorter_links::dsl::updated_at.desc())
            .load::<Item>(self)?)
    }

    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(shorter_links::dsl::shorter_links.filter(shorter_links::dsl::id.eq(id)))
            .execute(self)?;
        Ok(())
    }
}
