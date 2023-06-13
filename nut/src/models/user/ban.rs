use chrono::{Duration, NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*};
use palm::Result;
use serde::{Deserialize, Serialize};

use super::super::super::{orm::postgresql::Connection, schema::user_bans};

#[derive(Hash, Eq, PartialEq, Queryable, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub ip: String,
    pub reason: String,
    pub expired_at: NaiveDateTime,
    pub creator_id: i32,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn create(
        &mut self,
        creator: i32,
        user: i32,
        ip: &str,
        reason: &str,
        ttl: Duration,
    ) -> Result<()>;
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_ip(&mut self, ip: &str) -> Result<Vec<Item>>;
    fn by_user(&mut self, user: i32) -> Result<Vec<Item>>;
    fn clean(&mut self) -> Result<()>;
}

impl Dao for Connection {
    fn create(
        &mut self,
        creator: i32,
        user: i32,
        ip: &str,
        reason: &str,
        ttl: Duration,
    ) -> Result<()> {
        let expired_at = Utc::now().naive_utc() + ttl;
        insert_into(user_bans::dsl::user_bans)
            .values((
                user_bans::dsl::creator_id.eq(creator),
                user_bans::dsl::user_id.eq(user),
                user_bans::dsl::ip.eq(ip),
                user_bans::dsl::reason.eq(reason),
                user_bans::dsl::expired_at.eq(expired_at),
            ))
            .execute(self)?;
        Ok(())
    }
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = user_bans::dsl::user_bans
            .filter(user_bans::dsl::id.eq(id))
            .first(self)?;
        Ok(it)
    }
    fn by_ip(&mut self, ip: &str) -> Result<Vec<Item>> {
        let items = user_bans::dsl::user_bans
            .filter(user_bans::dsl::ip.eq(ip))
            .load(self)?;
        Ok(items)
    }
    fn by_user(&mut self, user: i32) -> Result<Vec<Item>> {
        let items = user_bans::dsl::user_bans
            .filter(user_bans::dsl::user_id.eq(user))
            .load(self)?;
        Ok(items)
    }
    fn clean(&mut self) -> Result<()> {
        let now = Utc::now().naive_utc();
        delete(user_bans::dsl::user_bans.filter(user_bans::dsl::expired_at.lt(now)))
            .execute(self)?;
        Ok(())
    }
}
