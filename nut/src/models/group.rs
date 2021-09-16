use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::{orm::Connection, Result};
use super::schema::{groups, groups_users, roles_groups};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub name: String,
    pub parent_id: Option<i32>,
    pub level: i32,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_code(&self, cod: &str) -> Result<Item>;
    fn by_user(&self, user: i32) -> Result<Vec<Item>>;
    fn children(&self, id: i32) -> Result<Vec<Item>>;
    fn users(&self, id: i32) -> Result<Vec<i32>>;
    fn create(&self, code: &str, name: &str, parent_id: Option<i32>) -> Result<()>;
    fn update(&self, id: i32, code: &str, name: &str) -> Result<()>;
    fn associate(&self, group: i32, user: i32) -> Result<()>;
    fn dissociate(&self, group: i32, user: i32) -> Result<()>;
    fn destory(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn all(&self) -> Result<Vec<Item>> {
        let items = groups::dsl::groups
            .order(groups::dsl::name.asc())
            .load(self)?;
        Ok(items)
    }
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = groups::dsl::groups
            .filter(groups::dsl::id.eq(id))
            .first(self)?;
        Ok(it)
    }
    fn by_code(&self, code: &str) -> Result<Item> {
        let it = groups::dsl::groups
            .filter(groups::dsl::code.eq(code))
            .first(self)?;
        Ok(it)
    }
    fn by_user(&self, user: i32) -> Result<Vec<Item>> {
        let ids: Vec<i32> = groups_users::dsl::groups_users
            .select(groups_users::dsl::group_id)
            .filter(groups_users::dsl::user_id.eq(user))
            .order(groups_users::dsl::created_at.desc())
            .load(self)?;
        let mut items = Vec::new();
        for id in ids {
            let it = Dao::by_id(self, id)?;
            items.push(it);
        }
        Ok(items)
    }
    fn children(&self, id: i32) -> Result<Vec<Item>> {
        let items = groups::dsl::groups
            .filter(groups::dsl::parent_id.eq(id))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn users(&self, id: i32) -> Result<Vec<i32>> {
        let items = groups_users::dsl::groups_users
            .select(groups_users::dsl::user_id)
            .filter(groups_users::dsl::group_id.eq(id))
            .order(groups_users::dsl::created_at.desc())
            .load(self)?;
        Ok(items)
    }
    fn create(&self, code: &str, name: &str, parent: Option<i32>) -> Result<()> {
        let now = Utc::now().naive_local();
        let level = match parent {
            Some(id) => {
                let it = groups::dsl::groups
                    .select(groups::dsl::level)
                    .filter(groups::dsl::id.eq(id))
                    .first::<i32>(self)?;
                it + 1
            }
            None => 1,
        };
        insert_into(groups::dsl::groups)
            .values((
                groups::dsl::code.eq(code),
                groups::dsl::name.eq(name),
                groups::dsl::parent_id.eq(parent),
                groups::dsl::level.eq(level),
                groups::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&self, id: i32, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_local();
        update(groups::dsl::groups.filter(groups::dsl::id.eq(&id)))
            .set((
                groups::dsl::code.eq(code),
                groups::dsl::name.eq(name),
                groups::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn associate(&self, group: i32, user: i32) -> Result<()> {
        let c: i64 = groups_users::dsl::groups_users
            .filter(groups_users::dsl::group_id.eq(group))
            .filter(groups_users::dsl::user_id.eq(user))
            .count()
            .get_result(self)?;
        if c == 0 {
            insert_into(groups_users::dsl::groups_users)
                .values((
                    groups_users::dsl::group_id.eq(group),
                    groups_users::dsl::user_id.eq(user),
                ))
                .execute(self)?;
        }
        Ok(())
    }
    fn dissociate(&self, group: i32, user: i32) -> Result<()> {
        delete(
            groups_users::dsl::groups_users
                .filter(groups_users::dsl::group_id.eq(group))
                .filter(groups_users::dsl::user_id.eq(user)),
        )
        .execute(self)?;
        Ok(())
    }
    fn destory(&self, id: i32) -> Result<()> {
        let now = Utc::now().naive_local();
        update(groups::dsl::groups.filter(groups::dsl::parent_id.eq(id)))
            .set((
                groups::dsl::parent_id.eq(None::<i32>),
                groups::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        delete(roles_groups::dsl::roles_groups.filter(roles_groups::dsl::group_id.eq(id)))
            .execute(self)?;
        delete(groups_users::dsl::groups_users.filter(groups_users::dsl::group_id.eq(id)))
            .execute(self)?;
        delete(groups::dsl::groups.filter(groups::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
