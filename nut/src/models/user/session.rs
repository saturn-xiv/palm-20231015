use std::string::ToString;

use chrono::{Duration, NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*};
use hyper::StatusCode;
use palm::{HttpError, Result};
use serde::{Deserialize, Serialize};
use strum_macros::{Display as EnumDisplay, EnumString};
use uuid::Uuid;

use super::super::super::{orm::postgresql::Connection, schema::user_sessions};

#[derive(Hash, Eq, PartialEq, Queryable, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub uid: String,
    pub provider_type: String,
    pub ip: String,
    pub expired_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

impl Item {
    pub fn available(&self) -> Result<()> {
        let now = Utc::now().naive_utc();
        if self.expired_at < now {
            return Err(Box::new(HttpError(
                StatusCode::GONE,
                Some("user is expired".to_string()),
            )));
        }
        Ok(())
    }
}

#[derive(EnumString, EnumDisplay, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub enum ProviderType {
    Email,
    Google,
    WechatMiniProgram,
    WechatOauth2,
}

pub trait Dao {
    fn create(
        &mut self,
        user: i32,
        provider_type: &ProviderType,
        ip: &str,
        ttl: Duration,
    ) -> Result<String>;
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_uid(&mut self, uid: &str) -> Result<Item>;
    fn by_user_and_provider_type(
        &mut self,
        user: i32,
        provider_type: &ProviderType,
    ) -> Result<Vec<Item>>;
    fn by_ip(&mut self, ip: &str) -> Result<Vec<Item>>;
    fn by_user(&mut self, user: i32) -> Result<Vec<Item>>;
    fn clean(&mut self) -> Result<()>;
}

impl Dao for Connection {
    fn create(
        &mut self,
        user: i32,
        provider_type: &ProviderType,
        ip: &str,
        ttl: Duration,
    ) -> Result<String> {
        let uid = Uuid::new_v4().to_string();
        let expired_at = Utc::now().naive_utc() + ttl;
        let provider_type = provider_type.to_string();
        insert_into(user_sessions::dsl::user_sessions)
            .values((
                user_sessions::dsl::user_id.eq(user),
                user_sessions::dsl::provider_type.eq(provider_type),
                user_sessions::dsl::ip.eq(ip),
                user_sessions::dsl::expired_at.eq(expired_at),
            ))
            .execute(self)?;
        Ok(uid)
    }
    fn by_user_and_provider_type(
        &mut self,
        user: i32,
        provider_type: &ProviderType,
    ) -> Result<Vec<Item>> {
        let provider_type = provider_type.to_string();
        let items = user_sessions::dsl::user_sessions
            .filter(user_sessions::dsl::user_id.eq(user))
            .filter(user_sessions::dsl::provider_type.eq(provider_type))
            .load(self)?;
        Ok(items)
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
    fn clean(&mut self) -> Result<()> {
        let now = Utc::now().naive_utc();
        delete(user_sessions::dsl::user_sessions.filter(user_sessions::dsl::expired_at.lt(now)))
            .execute(self)?;
        Ok(())
    }
}
