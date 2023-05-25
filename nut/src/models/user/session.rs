use chrono::{Duration, NaiveDateTime, Utc};
use diesel::{insert_into, prelude::*};
use palm::Result;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::super::super::{orm::postgresql::Connection, schema::user_sessions};

#[derive(Hash, Eq, PartialEq, Queryable, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub uid: String,
    pub ip: String,
    pub expired_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn create(&mut self, user: i32, ip: &str, ttl: Duration) -> Result<String>;
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_uid(&mut self, uid: &str) -> Result<Item>;
    fn by_ip(&mut self, ip: &str) -> Result<Vec<Item>>;
    fn by_user(&mut self, user: i32) -> Result<Vec<Item>>;
}

impl Dao for Connection {
    fn create(&mut self, user: i32, ip: &str, ttl: Duration) -> Result<String> {
        let uid = Uuid::new_v4().to_string();
        let expired_at = Utc::now().naive_local() + ttl;
        insert_into(user_sessions::dsl::user_sessions)
            .values((
                user_sessions::dsl::user_id.eq(user),
                user_sessions::dsl::ip.eq(ip),
                user_sessions::dsl::expired_at.eq(expired_at),
            ))
            .execute(self)?;
        Ok(uid)
    }
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = user_sessions::dsl::user_sessions
            .filter(user_sessions::dsl::id.eq(id))
            .first(self)?;
        Ok(it)
    }
    fn by_uid(&mut self, uid: &str) -> Result<Item> {
        let it = user_sessions::dsl::user_sessions
            .filter(user_sessions::dsl::uid.eq(uid))
            .first(self)?;
        Ok(it)
    }
    fn by_ip(&mut self, ip: &str) -> Result<Vec<Item>> {
        let items = user_sessions::dsl::user_sessions
            .filter(user_sessions::dsl::ip.eq(ip))
            .load(self)?;
        Ok(items)
    }
    fn by_user(&mut self, user: i32) -> Result<Vec<Item>> {
        let items = user_sessions::dsl::user_sessions
            .filter(user_sessions::dsl::user_id.eq(user))
            .load(self)?;
        Ok(items)
    }
}
