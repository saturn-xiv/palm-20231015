use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::{groups, groups_users};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub name: String,
    pub parent_id: Option<i32>,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

impl Item {
    pub const ROLE_TYPE: &'static str = "group";
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_code(&self, code: &str) -> Result<Item>;
    fn create(&self, parent: Option<i32>, code: &str, name: &str) -> Result<()>;
    fn update(&self, id: i32, parent: Option<i32>, code: &str, name: &str) -> Result<()>;
    fn has_children(&self, id: i32) -> Result<bool>;
    fn destroy(&self, id: i32) -> Result<()>;
    fn associate(&self, group: i32, user: i32) -> Result<()>;
    fn unassociate(&self, group: i32, user: i32) -> Result<()>;
}

impl Dao for Connection {
    fn all(&self) -> Result<Vec<Item>> {
        let items = groups::dsl::groups
            .order(groups::dsl::code.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = groups::dsl::groups
            .filter(groups::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_code(&self, code: &str) -> Result<Item> {
        let it = groups::dsl::groups
            .filter(groups::dsl::code.eq(code))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&self, parent: Option<i32>, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(groups::dsl::groups)
            .values((
                groups::dsl::code.eq(code),
                groups::dsl::name.eq(name),
                groups::dsl::parent_id.eq(parent),
                groups::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }
    fn update(&self, id: i32, parent: Option<i32>, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = groups::dsl::groups.filter(groups::dsl::id.eq(id));
        update(it)
            .set((
                groups::dsl::code.eq(code),
                groups::dsl::name.eq(name),
                groups::dsl::parent_id.eq(parent),
                groups::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }
    fn has_children(&self, id: i32) -> Result<bool> {
        let c: i64 = groups::dsl::groups
            .filter(groups::dsl::parent_id.eq(id))
            .count()
            .get_result(self)?;
        Ok(c > 0)
    }
    fn destroy(&self, id: i32) -> Result<()> {
        delete(groups_users::dsl::groups_users.filter(groups_users::dsl::group_id.eq(id)))
            .execute(self)?;
        delete(groups::dsl::groups.filter(groups::dsl::parent_id.eq(id))).execute(self)?;
        delete(groups::dsl::groups.filter(groups::dsl::id.eq(id))).execute(self)?;
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
    fn unassociate(&self, group: i32, user: i32) -> Result<()> {
        delete(
            groups_users::dsl::groups_users
                .filter(groups_users::dsl::group_id.eq(group))
                .filter(groups_users::dsl::user_id.eq(user)),
        )
        .execute(self)?;
        Ok(())
    }
}
