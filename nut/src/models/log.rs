use std::any::type_name;

use chrono::NaiveDateTime;
use diesel::{insert_into, prelude::*};
use palm::{orm::postgresql::Connection, schema::logs, Result};

#[derive(Queryable)]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub level: i32,
    pub ip: String,
    pub resource_type: String,
    pub resource_id: Option<i32>,
    pub message: String,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn add<S: Into<String>, T>(
        &mut self,
        user: i32,
        level: i32,
        ip: &str,
        resource_id: Option<i32>,
        message: S,
    ) -> Result<()>;

    fn all(&mut self, user: i32, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn by_resource<T>(&mut self, resource_id: Option<i32>) -> Result<Vec<Item>>;
    fn count(&mut self, user: i32) -> Result<i64>;
    fn count_by_queries(
        &mut self,
        user: i32,
        level: Option<i32>,
        ip: &Option<String>,
    ) -> Result<i64>;
    fn index_by_queries(
        &mut self,
        user: i32,
        offset: i64,
        limit: i64,
        level: Option<i32>,
        ip: &Option<String>,
    ) -> Result<Vec<Item>>;
}

impl Dao for Connection {
    fn add<S: Into<String>, T>(
        &mut self,
        user: i32,
        level: i32,
        ip: &str,
        resource_id: Option<i32>,
        message: S,
    ) -> Result<()> {
        insert_into(logs::dsl::logs)
            .values((
                logs::dsl::user_id.eq(user),
                logs::dsl::ip.eq(ip),
                logs::dsl::level.eq(level),
                logs::dsl::resource_type.eq(type_name::<T>()),
                logs::dsl::resource_id.eq(resource_id),
                logs::dsl::message.eq(&message.into()),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&mut self, user: i32, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = logs::dsl::logs
            .filter(logs::dsl::user_id.eq(user))
            .order(logs::dsl::created_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_resource<T>(&mut self, resource_id: Option<i32>) -> Result<Vec<Item>> {
        let items = logs::dsl::logs
            .filter(logs::dsl::resource_type.eq(type_name::<T>()))
            .filter(logs::dsl::resource_id.eq(resource_id))
            .order(logs::dsl::created_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn count(&mut self, user: i32) -> Result<i64> {
        let it = logs::dsl::logs
            .filter(logs::dsl::user_id.eq(user))
            .count()
            .first(self)?;
        Ok(it)
    }
    fn count_by_queries(
        &mut self,
        user: i32,
        level: Option<i32>,
        ip: &Option<String>,
    ) -> Result<i64> {
        if let Some(level) = level {
            if let Some(ref ip) = ip {
                let it = logs::dsl::logs
                    .filter(logs::dsl::user_id.eq(user))
                    .filter(logs::dsl::level.eq(level))
                    .filter(logs::dsl::ip.eq(ip))
                    .count()
                    .first(self)?;
                return Ok(it);
            }
            let it = logs::dsl::logs
                .filter(logs::dsl::user_id.eq(user))
                .filter(logs::dsl::level.eq(level))
                .count()
                .first(self)?;
            return Ok(it);
        }
        if let Some(ref ip) = ip {
            let it = logs::dsl::logs
                .filter(logs::dsl::user_id.eq(user))
                .filter(logs::dsl::ip.eq(ip))
                .count()
                .first(self)?;
            return Ok(it);
        }

        let it = logs::dsl::logs
            .filter(logs::dsl::user_id.eq(user))
            .count()
            .first(self)?;
        Ok(it)
    }
    fn index_by_queries(
        &mut self,
        user: i32,
        offset: i64,
        limit: i64,
        level: Option<i32>,
        ip: &Option<String>,
    ) -> Result<Vec<Item>> {
        if let Some(level) = level {
            if let Some(ref ip) = ip {
                let items = logs::dsl::logs
                    .filter(logs::dsl::user_id.eq(user))
                    .filter(logs::dsl::level.eq(level))
                    .filter(logs::dsl::ip.eq(ip))
                    .order(logs::dsl::created_at.desc())
                    .offset(offset)
                    .limit(limit)
                    .load::<Item>(self)?;
                return Ok(items);
            }
            let items = logs::dsl::logs
                .filter(logs::dsl::user_id.eq(user))
                .filter(logs::dsl::level.eq(level))
                .order(logs::dsl::created_at.desc())
                .offset(offset)
                .limit(limit)
                .load::<Item>(self)?;
            return Ok(items);
        }
        if let Some(ref ip) = ip {
            let items = logs::dsl::logs
                .filter(logs::dsl::user_id.eq(user))
                .filter(logs::dsl::ip.eq(ip))
                .order(logs::dsl::created_at.desc())
                .offset(offset)
                .limit(limit)
                .load::<Item>(self)?;
            return Ok(items);
        }
        let items = logs::dsl::logs
            .filter(logs::dsl::user_id.eq(user))
            .order(logs::dsl::created_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
}
