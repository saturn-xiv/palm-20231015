use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::view_counters;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub resource_type: String,
    pub resource_id: i32,
    pub point: i32,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_resource_type(&self, rty: &str) -> Result<Vec<Item>>;
    fn visit(&self, rty: &str, rid: i32, times: i32) -> Result<()>;
    fn delete(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn visit(&self, rty: &str, rid: i32, times: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        match view_counters::dsl::view_counters
            .filter(view_counters::dsl::resource_type.eq(rty))
            .filter(view_counters::dsl::resource_id.eq(rid))
            .first::<Item>(self)
        {
            Ok(it) => {
                update(view_counters::dsl::view_counters.filter(view_counters::dsl::id.eq(it.id)))
                    .set((
                        view_counters::dsl::point.eq(it.point + times),
                        view_counters::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
            Err(_) => {
                insert_into(view_counters::dsl::view_counters)
                    .values((
                        view_counters::dsl::resource_id.eq(rid),
                        view_counters::dsl::resource_type.eq(rty),
                        view_counters::dsl::point.eq(times),
                        view_counters::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        }

        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = view_counters::dsl::view_counters
            .order(view_counters::dsl::point.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: i32) -> Result<()> {
        delete(view_counters::dsl::view_counters.filter(view_counters::dsl::id.eq(id)))
            .execute(self)?;
        Ok(())
    }

    fn by_resource_type(&self, rty: &str) -> Result<Vec<Item>> {
        let items = view_counters::dsl::view_counters
            .filter(view_counters::dsl::resource_type.eq(rty))
            .order(view_counters::dsl::point.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
}
