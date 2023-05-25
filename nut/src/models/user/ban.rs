use std::fmt;

use chrono::{NaiveDateTime, Utc};
use chrono_tz::Tz;
use diesel::{insert_into, prelude::*, update};
use hyper::StatusCode;
use language_tags::LanguageTag;
use openssl::hash::{hash, MessageDigest};
use palm::{
    crypto::{random::bytes as random_bytes, Password},
    nut::v1,
    rbac::v1::users_response::Item as RbacUser,
    HttpError, Result,
};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

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
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_ip(&mut self, ip: &str) -> Result<Vec<Item>>;
    fn by_user(&mut self, user: i32) -> Result<Vec<Item>>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = user_sessions::dsl::user_sessions
            .filter(user_sessions::dsl::id.eq(id))
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
}
