use chrono::{NaiveDateTime, Utc};
use diesel::{insert_into, prelude::*, update};
use palm::Result;
use serde::{Deserialize, Serialize};

use super::super::super::{orm::postgresql::Connection, schema::wechat_mini_program_users};
use super::super::user::Dao as UserDao;

#[derive(Hash, Eq, PartialEq, Queryable, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: Option<i32>,
    pub uid: String,
    pub union_id: String,
    pub app_id: String,
    pub open_id: String,
    pub nickname: Option<String>,
    pub avatar_url: Option<String>,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&mut self) -> Result<Vec<Item>>;
    fn by_uid(&mut self, uid: &str) -> Result<Item>;
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn bind(&mut self, id: i32, user: i32) -> Result<()>;
    fn set_profile(&mut self, id: i32, nickname: &str, avatar_url: &str) -> Result<()>;
    fn sign_in(&mut self, app_id: &str, open_id: &str, union_id: &str, ip: &str) -> Result<Item>;
}

impl Dao for Connection {
    fn all(&mut self) -> Result<Vec<Item>> {
        let items = wechat_mini_program_users::dsl::wechat_mini_program_users
            .order(wechat_mini_program_users::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_uid(&mut self, uid: &str) -> Result<Item> {
        let it = wechat_mini_program_users::dsl::wechat_mini_program_users
            .filter(wechat_mini_program_users::dsl::uid.eq(uid))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = wechat_mini_program_users::dsl::wechat_mini_program_users
            .filter(wechat_mini_program_users::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn bind(&mut self, id: i32, user: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(
            wechat_mini_program_users::dsl::wechat_mini_program_users
                .filter(wechat_mini_program_users::dsl::id.eq(id)),
        )
        .set((
            wechat_mini_program_users::dsl::user_id.eq(Some(user)),
            wechat_mini_program_users::dsl::updated_at.eq(&now),
        ))
        .execute(self)?;
        Ok(())
    }
    fn set_profile(&mut self, id: i32, nickname: &str, avatar_url: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(
            wechat_mini_program_users::dsl::wechat_mini_program_users
                .filter(wechat_mini_program_users::dsl::id.eq(id)),
        )
        .set((
            wechat_mini_program_users::dsl::nickname.eq(nickname),
            wechat_mini_program_users::dsl::avatar_url.eq(avatar_url),
            wechat_mini_program_users::dsl::updated_at.eq(&now),
        ))
        .execute(self)?;
        Ok(())
    }
    fn sign_in(&mut self, app_id: &str, open_id: &str, union_id: &str, ip: &str) -> Result<Item> {
        let now = Utc::now().naive_utc();
        match wechat_mini_program_users::dsl::wechat_mini_program_users
            .select((
                wechat_mini_program_users::dsl::id,
                wechat_mini_program_users::dsl::user_id,
            ))
            .filter(wechat_mini_program_users::dsl::app_id.eq(app_id))
            .filter(wechat_mini_program_users::dsl::open_id.eq(open_id))
            .first::<(i32, Option<i32>)>(self)
        {
            Ok((id, user)) => {
                update(
                    wechat_mini_program_users::dsl::wechat_mini_program_users
                        .filter(wechat_mini_program_users::dsl::id.eq(id)),
                )
                .set(wechat_mini_program_users::dsl::updated_at.eq(&now))
                .execute(self)?;
                if let Some(user) = user {
                    UserDao::sign_in(self, user, ip)?;
                }
            }
            Err(_) => {
                insert_into(wechat_mini_program_users::dsl::wechat_mini_program_users)
                    .values((
                        wechat_mini_program_users::dsl::app_id.eq(app_id),
                        wechat_mini_program_users::dsl::open_id.eq(open_id),
                        wechat_mini_program_users::dsl::union_id.eq(union_id),
                        wechat_mini_program_users::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        };

        let it = wechat_mini_program_users::dsl::wechat_mini_program_users
            .filter(wechat_mini_program_users::dsl::app_id.eq(app_id))
            .filter(wechat_mini_program_users::dsl::open_id.eq(open_id))
            .first::<Item>(self)?;
        Ok(it)
    }
}
