use chrono::NaiveDateTime;
use diesel::{insert_into, prelude::*};
use serde::Serialize;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::sms_logs;

#[derive(Queryable, Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub from: String,
    pub to: String,
    pub body: String,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn add(&self, from: &str, to: &str, body: &str) -> Result<()>;
    fn all(&self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count(&self) -> Result<i64>;
}

impl Dao for Connection {
    fn add(&self, from: &str, to: &str, body: &str) -> Result<()> {
        insert_into(sms_logs::dsl::sms_logs)
            .values((
                sms_logs::dsl::from.eq(from),
                sms_logs::dsl::to.eq(to),
                sms_logs::dsl::body.eq(body),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = sms_logs::dsl::sms_logs
            .order(sms_logs::dsl::created_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn count(&self) -> Result<i64> {
        let it = sms_logs::dsl::sms_logs.count().first(self)?;
        Ok(it)
    }
}
