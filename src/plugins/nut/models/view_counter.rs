use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::view_counters;
use super::Resource;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub resource_type: String,
    pub resource_id: Uuid,
    pub point: i32,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_resource_type(&self, rty: &str) -> Result<Vec<Item>>;
    fn visit(&self, resource: &Resource, times: i32) -> Result<()>;
    fn delete(&self, id: Uuid) -> Result<()>;
}

impl Dao for Connection {
    fn visit(&self, resource: &Resource, times: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        match view_counters::dsl::view_counters
            .filter(view_counters::dsl::resource_type.eq(&resource.type_))
            .filter(view_counters::dsl::resource_id.eq(&resource.id))
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
                        view_counters::dsl::resource_id.eq(&resource.id),
                        view_counters::dsl::resource_type.eq(&resource.type_),
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

    fn delete(&self, id: Uuid) -> Result<()> {
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
