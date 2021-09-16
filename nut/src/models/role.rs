use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::{orm::Connection, Result};
use super::schema::{policies, roles, roles_groups, roles_relations, roles_users};

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

impl Item {
    pub const ADMINISTRATOR: &'static str = "administrator";
    pub const ROOT: &'static str = "root";
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_code(&self, code: &str) -> Result<Item>;
    fn by_user(&self, user: i32) -> Result<Vec<Item>>;
    fn by_group(&self, group: i32) -> Result<Vec<Item>>;
    fn children(&self, id: i32) -> Result<Vec<Item>>;
    fn users(&self, id: i32) -> Result<Vec<i32>>;
    fn groups(&self, id: i32) -> Result<Vec<i32>>;
    fn create(&self, code: &str, name: &str, parent: Option<i32>) -> Result<()>;
    fn update(&self, id: i32, code: &str, name: &str) -> Result<()>;
    fn associate_user(&self, role: i32, user: i32) -> Result<()>;
    fn dissociate_user(&self, role: i32, user: i32) -> Result<()>;
    fn associate_group(&self, role: i32, group: i32) -> Result<()>;
    fn dissociate_group(&self, role: i32, group: i32) -> Result<()>;
    fn destory(&self, id: i32) -> Result<()>;

    fn has_user(&self, role: i32, user: i32) -> bool;
    fn has_group(&self, role: i32, group: i32) -> bool;
}

impl Dao for Connection {
    fn all(&self) -> Result<Vec<Item>> {
        let items = roles::dsl::roles.order(roles::dsl::name.asc()).load(self)?;
        Ok(items)
    }
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = roles::dsl::roles
            .filter(roles::dsl::id.eq(id))
            .first(self)?;
        Ok(it)
    }
    fn by_code(&self, code: &str) -> Result<Item> {
        let it = roles::dsl::roles
            .filter(roles::dsl::code.eq(code))
            .first(self)?;
        Ok(it)
    }
    fn by_user(&self, user: i32) -> Result<Vec<Item>> {
        let ids: Vec<i32> = roles_users::dsl::roles_users
            .select(roles_users::dsl::role_id)
            .filter(roles_users::dsl::user_id.eq(user))
            .order(roles_users::dsl::created_at.desc())
            .load(self)?;
        let mut items = Vec::new();
        for id in ids {
            let it = Dao::by_id(self, id)?;
            items.push(it);
        }
        Ok(items)
    }
    fn by_group(&self, group: i32) -> Result<Vec<Item>> {
        let ids: Vec<i32> = roles_groups::dsl::roles_groups
            .select(roles_groups::dsl::role_id)
            .filter(roles_groups::dsl::group_id.eq(group))
            .order(roles_groups::dsl::created_at.desc())
            .load(self)?;
        let mut items = Vec::new();
        for id in ids {
            let it = Dao::by_id(self, id)?;
            items.push(it);
        }
        Ok(items)
    }
    fn users(&self, id: i32) -> Result<Vec<i32>> {
        let items = roles_users::dsl::roles_users
            .select(roles_users::dsl::user_id)
            .filter(roles_users::dsl::role_id.eq(id))
            .order(roles_users::dsl::created_at.desc())
            .load(self)?;
        Ok(items)
    }
    fn groups(&self, id: i32) -> Result<Vec<i32>> {
        let items = roles_groups::dsl::roles_groups
            .select(roles_groups::dsl::group_id)
            .filter(roles_groups::dsl::role_id.eq(id))
            .order(roles_groups::dsl::created_at.desc())
            .load(self)?;
        Ok(items)
    }
    fn children(&self, id: i32) -> Result<Vec<Item>> {
        let items = roles::dsl::roles
            .filter(roles::dsl::parent_id.eq(id))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn create(&self, code: &str, name: &str, parent: Option<i32>) -> Result<()> {
        let now = Utc::now().naive_local();
        let level = match parent {
            Some(id) => {
                let it = roles::dsl::roles
                    .select(roles::dsl::level)
                    .filter(roles::dsl::id.eq(id))
                    .first::<i32>(self)?;
                it + 1
            }
            None => 1,
        };
        insert_into(roles::dsl::roles)
            .values((
                roles::dsl::code.eq(code),
                roles::dsl::name.eq(name),
                roles::dsl::parent_id.eq(parent),
                roles::dsl::level.eq(level),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&self, id: i32, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_local();
        update(roles::dsl::roles.filter(roles::dsl::id.eq(&id)))
            .set((
                roles::dsl::code.eq(code),
                roles::dsl::name.eq(name),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn associate_user(&self, role: i32, user: i32) -> Result<()> {
        let c: i64 = roles_users::dsl::roles_users
            .filter(roles_users::dsl::role_id.eq(role))
            .filter(roles_users::dsl::user_id.eq(user))
            .count()
            .get_result(self)?;
        if c == 0 {
            insert_into(roles_users::dsl::roles_users)
                .values((
                    roles_users::dsl::role_id.eq(role),
                    roles_users::dsl::user_id.eq(user),
                ))
                .execute(self)?;
        }
        Ok(())
    }
    fn dissociate_user(&self, role: i32, user: i32) -> Result<()> {
        delete(
            roles_users::dsl::roles_users
                .filter(roles_users::dsl::role_id.eq(role))
                .filter(roles_users::dsl::user_id.eq(user)),
        )
        .execute(self)?;
        Ok(())
    }
    fn associate_group(&self, role: i32, group: i32) -> Result<()> {
        let c: i64 = roles_groups::dsl::roles_groups
            .filter(roles_groups::dsl::role_id.eq(role))
            .filter(roles_groups::dsl::group_id.eq(group))
            .count()
            .get_result(self)?;
        if c == 0 {
            insert_into(roles_groups::dsl::roles_groups)
                .values((
                    roles_groups::dsl::role_id.eq(role),
                    roles_groups::dsl::group_id.eq(group),
                ))
                .execute(self)?;
        }
        Ok(())
    }
    fn dissociate_group(&self, role: i32, group: i32) -> Result<()> {
        delete(
            roles_groups::dsl::roles_groups
                .filter(roles_groups::dsl::role_id.eq(role))
                .filter(roles_groups::dsl::group_id.eq(group)),
        )
        .execute(self)?;
        Ok(())
    }
    fn destory(&self, id: i32) -> Result<()> {
        let now = Utc::now().naive_local();
        update(roles::dsl::roles.filter(roles::dsl::parent_id.eq(id)))
            .set((
                roles::dsl::parent_id.eq(None::<i32>),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        delete(roles_groups::dsl::roles_groups.filter(roles_groups::dsl::role_id.eq(id)))
            .execute(self)?;
        delete(roles_users::dsl::roles_users.filter(roles_users::dsl::role_id.eq(id)))
            .execute(self)?;
        delete(
            roles_relations::dsl::roles_relations.filter(
                roles_relations::dsl::a
                    .eq(id)
                    .or(roles_relations::dsl::b.eq(id)),
            ),
        )
        .execute(self)?;
        delete(policies::dsl::policies.filter(policies::dsl::role_id.eq(id))).execute(self)?;
        delete(roles::dsl::roles.filter(roles::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }

    fn has_user(&self, role: i32, user: i32) -> bool {
        let today = Utc::now().naive_local().date();
        if let Ok(c) = roles_users::dsl::roles_users
            .filter(roles_users::dsl::user_id.eq(user))
            .filter(roles_users::dsl::role_id.eq(role))
            .filter(roles_users::dsl::not_before.le(&today))
            .filter(roles_users::dsl::expire_at.ge(&today))
            .count()
            .get_result::<i64>(self)
        {
            if c > 0 {
                return true;
            }
        }
        if let Ok(Some(parent)) = roles::dsl::roles
            .select(roles::dsl::parent_id)
            .filter(roles::dsl::id.eq(role))
            .first::<Option<i32>>(self)
        {
            if self.has_user(parent, user) {
                return true;
            }
        }
        false
    }
    fn has_group(&self, role: i32, group: i32) -> bool {
        let today = Utc::now().naive_local().date();
        if let Ok(c) = roles_groups::dsl::roles_groups
            .filter(roles_groups::dsl::group_id.eq(group))
            .filter(roles_groups::dsl::role_id.eq(role))
            .filter(roles_groups::dsl::not_before.le(&today))
            .filter(roles_groups::dsl::expire_at.ge(&today))
            .count()
            .get_result::<i64>(self)
        {
            if c > 0 {
                return true;
            }
        }
        if let Ok(Some(parent)) = roles::dsl::roles
            .select(roles::dsl::parent_id)
            .filter(roles::dsl::id.eq(role))
            .first::<Option<i32>>(self)
        {
            if self.has_group(role, parent) {
                return true;
            }
        }
        false
    }
}
