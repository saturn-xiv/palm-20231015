use std::fmt;

use chrono::NaiveDateTime;
use diesel::{insert_into, prelude::*};

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::logs;
use super::Resource;

#[derive(Queryable)]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub level: String,
    pub ip: String,
    pub resource_type: String,
    pub resource_id: i32,
    pub message: String,
    pub created_at: NaiveDateTime,
}

pub enum Level {
    Info,
    Warning,
    Error,
}
impl Level {
    pub const INFO: &'static str = "info";
    pub const WARNING: &'static str = "warning";
    pub const ERROR: &'static str = "error";
}
impl fmt::Display for Level {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{}",
            match *self {
                Self::Info => Self::INFO,
                Self::Warning => Self::WARNING,
                Self::Error => Self::ERROR,
            }
        )
    }
}
pub trait Dao {
    fn add<S: Into<String>>(
        &self,
        user: i32,
        level: &Level,
        ip: &str,
        resource: &Resource,
        message: S,
    ) -> Result<()>;

    fn all(&self, user: i32, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn by_resource(&self, resource: &Resource) -> Result<Vec<Item>>;
    fn count(&self, user: i32) -> Result<i64>;
}

impl Dao for Connection {
    fn add<S: Into<String>>(
        &self,
        user: i32,
        level: &Level,
        ip: &str,
        resource: &Resource,
        message: S,
    ) -> Result<()> {
        insert_into(logs::dsl::logs)
            .values((
                logs::dsl::user_id.eq(user),
                logs::dsl::ip.eq(ip),
                logs::dsl::level.eq(&level.to_string()),
                logs::dsl::resource_type.eq(&resource.type_),
                logs::dsl::resource_id.eq(&resource.id),
                logs::dsl::message.eq(&message.into()),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self, user: i32, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = logs::dsl::logs
            .filter(logs::dsl::user_id.eq(user))
            .order(logs::dsl::created_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_resource(&self, resource: &Resource) -> Result<Vec<Item>> {
        let items = logs::dsl::logs
            .filter(logs::dsl::resource_type.eq(&resource.type_))
            .filter(logs::dsl::resource_id.eq(&resource.id))
            .order(logs::dsl::created_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn count(&self, user: i32) -> Result<i64> {
        let it = logs::dsl::logs
            .filter(logs::dsl::user_id.eq(user))
            .count()
            .first(self)?;
        Ok(it)
    }
}
