use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use palm::Result;
use serde::Serialize;

use super::super::super::{orm::postgresql::Connection, schema::vote_items};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub score: i32,
    pub resource_type: String,
    pub resource_id: i32,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn get(&mut self, id: i32) -> Result<Item>;
    fn by_resource(&mut self, type_: &str, id: i32) -> Result<Item>;
    fn create(&mut self, resource_type: &str, resource_id: i32, score: i32) -> Result<()>;
    fn update(&mut self, id: i32, score: i32) -> Result<()>;
    fn destroy(&mut self, id: i32) -> Result<()>;
    fn by_resource_type(&mut self, type_: &str, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count_by_resource_type<T>(&mut self, type_: &str) -> Result<i64>;
}

impl Dao for Connection {
    fn get(&mut self, id: i32) -> Result<Item> {
        Ok(vote_items::dsl::vote_items
            .filter(vote_items::dsl::id.eq(id))
            .first::<Item>(self)?)
    }
    fn by_resource(&mut self, type_: &str, id: i32) -> Result<Item> {
        Ok(vote_items::dsl::vote_items
            .filter(vote_items::dsl::resource_type.eq(type_))
            .filter(vote_items::dsl::resource_id.eq(id))
            .first::<Item>(self)?)
    }
    fn create(&mut self, resource_type: &str, resource_id: i32, score: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(vote_items::dsl::vote_items)
            .values((
                vote_items::dsl::resource_type.eq(resource_type),
                vote_items::dsl::resource_id.eq(resource_id),
                vote_items::dsl::score.eq(score),
                vote_items::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&mut self, id: i32, score: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(vote_items::dsl::vote_items.filter(vote_items::dsl::id.eq(id)))
            .set((
                vote_items::dsl::score.eq(score),
                vote_items::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(vote_items::dsl::vote_items.filter(vote_items::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
    fn by_resource_type(&mut self, type_: &str, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = vote_items::dsl::vote_items
            .filter(vote_items::dsl::resource_type.eq(type_))
            .order((
                vote_items::dsl::score.desc(),
                vote_items::dsl::updated_at.desc(),
            ))
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn count_by_resource_type<T>(&mut self, type_: &str) -> Result<i64> {
        let it = vote_items::dsl::vote_items
            .filter(vote_items::dsl::resource_type.eq(type_))
            .count()
            .first(self)?;
        Ok(it)
    }
}
