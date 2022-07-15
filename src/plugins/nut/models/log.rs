use std::any::type_name;
use std::fmt;
use std::result::Result as StdResult;
use std::str::FromStr;

use chrono::NaiveDateTime;
use diesel::{insert_into, prelude::*};

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::logs;

#[derive(Queryable)]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub level: String,
    pub ip: String,
    pub resource_type: String,
    pub resource_id: Option<i32>,
    pub message: String,
    pub created_at: NaiveDateTime,
}

pub enum Level {
    Debug,
    Info,
    Warning,
    Error,
}
impl Level {
    pub const INFO: &'static str = "info";
    pub const WARNING: &'static str = "warning";
    pub const ERROR: &'static str = "error";
    pub const DEBUG: &'static str = "debug";
}
impl FromStr for Level {
    type Err = String;

    fn from_str(s: &str) -> StdResult<Self, Self::Err> {
        match s {
            Self::DEBUG => Ok(Self::Debug),
            Self::INFO => Ok(Self::Info),
            Self::WARNING => Ok(Self::Warning),
            Self::ERROR => Ok(Self::Error),
            _ => Err(format!("unknown log level {}", s)),
        }
    }
}

impl fmt::Display for Level {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{}",
            match *self {
                Self::Debug => Self::DEBUG,
                Self::Info => Self::INFO,
                Self::Warning => Self::WARNING,
                Self::Error => Self::ERROR,
            }
        )
    }
}
pub trait Dao {
    fn add<S: Into<String>, T>(
        &mut self,
        user: i32,
        level: &Level,
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
        level: &Option<Level>,
        ip: &Option<String>,
    ) -> Result<i64>;
    fn index_by_queries(
        &mut self,
        user: i32,
        offset: i64,
        limit: i64,
        level: &Option<Level>,
        ip: &Option<String>,
    ) -> Result<Vec<Item>>;
}

impl Dao for Connection {
    fn add<S: Into<String>, T>(
        &mut self,
        user: i32,
        level: &Level,
        ip: &str,
        resource_id: Option<i32>,
        message: S,
    ) -> Result<()> {
        insert_into(logs::dsl::logs)
            .values((
                logs::dsl::user_id.eq(user),
                logs::dsl::ip.eq(ip),
                logs::dsl::level.eq(&level.to_string()),
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
        level: &Option<Level>,
        ip: &Option<String>,
    ) -> Result<i64> {
        if let Some(ref level) = level {
            let level = level.to_string();
            if let Some(ref ip) = ip {
                let it = logs::dsl::logs
                    .filter(logs::dsl::user_id.eq(user))
                    .filter(logs::dsl::level.eq(&level))
                    .filter(logs::dsl::ip.eq(ip))
                    .count()
                    .first(self)?;
                return Ok(it);
            }
            let it = logs::dsl::logs
                .filter(logs::dsl::user_id.eq(user))
                .filter(logs::dsl::level.eq(&level))
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
        level: &Option<Level>,
        ip: &Option<String>,
    ) -> Result<Vec<Item>> {
        if let Some(ref level) = level {
            let level = level.to_string();
            if let Some(ref ip) = ip {
                let items = logs::dsl::logs
                    .filter(logs::dsl::user_id.eq(user))
                    .filter(logs::dsl::level.eq(&level))
                    .filter(logs::dsl::ip.eq(ip))
                    .order(logs::dsl::created_at.desc())
                    .offset(offset)
                    .limit(limit)
                    .load::<Item>(self)?;
                return Ok(items);
            }
            let items = logs::dsl::logs
                .filter(logs::dsl::user_id.eq(user))
                .filter(logs::dsl::level.eq(&level))
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
