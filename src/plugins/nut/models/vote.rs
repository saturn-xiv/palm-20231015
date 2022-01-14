use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::votes;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub point: i32,
    pub resource_type: String,
    pub resource_id: i32,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_resource_type(&self, rty: &str) -> Result<Vec<Item>>;
    fn like(&self, rty: &str, rid: i32, is: bool) -> Result<()>;
    fn delete(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn like(&self, rty: &str, rid: i32, is: bool) -> Result<()> {
        let now = Utc::now().naive_utc();
        match votes::dsl::votes
            .filter(votes::dsl::resource_type.eq(rty))
            .filter(votes::dsl::resource_id.eq(rid))
            .first::<Item>(self)
        {
            Ok(it) => {
                update(votes::dsl::votes.filter(votes::dsl::id.eq(it.id)))
                    .set((
                        votes::dsl::point.eq(if is { it.point + 1 } else { it.point - 1 }),
                        votes::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
            Err(_) => {
                insert_into(votes::dsl::votes)
                    .values((
                        votes::dsl::resource_id.eq(rid),
                        votes::dsl::resource_type.eq(rty),
                        votes::dsl::point.eq(0),
                        votes::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        }

        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = votes::dsl::votes
            .order(votes::dsl::point.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: i32) -> Result<()> {
        delete(votes::dsl::votes.filter(votes::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }

    fn by_resource_type(&self, rty: &str) -> Result<Vec<Item>> {
        let items = votes::dsl::votes
            .filter(votes::dsl::resource_type.eq(rty))
            .order(votes::dsl::point.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
}
