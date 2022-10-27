use auth::orm::postgresql::Connection;
use chrono::NaiveDateTime;
use diesel::{insert_into, prelude::*};
use palm::Result;
use serde::Serialize;

use super::super::super::schema::twilio_sms_logs;

#[derive(Queryable, Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub from: String,
    pub to: String,
    pub body: Vec<u8>,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn add(&mut self, from: &str, to: &str, body: &[u8]) -> Result<()>;
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count(&mut self) -> Result<i64>;
}

impl Dao for Connection {
    fn add(&mut self, from: &str, to: &str, body: &[u8]) -> Result<()> {
        insert_into(twilio_sms_logs::dsl::twilio_sms_logs)
            .values((
                twilio_sms_logs::dsl::from.eq(from),
                twilio_sms_logs::dsl::to.eq(to),
                twilio_sms_logs::dsl::body.eq(body),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = twilio_sms_logs::dsl::twilio_sms_logs
            .order(twilio_sms_logs::dsl::created_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn count(&mut self) -> Result<i64> {
        let it = twilio_sms_logs::dsl::twilio_sms_logs.count().first(self)?;
        Ok(it)
    }
}
