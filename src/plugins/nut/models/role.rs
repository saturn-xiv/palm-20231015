use chrono::{NaiveDate, NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::{roles, roles_items};

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
    pub const ADMINISTRATOR: &'static str = "administrator";
    pub const ROOT: &'static str = "root";
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_code(&self, code: &str) -> Result<Item>;
    fn create(&self, parent: Option<i32>, code: &str, name: &str) -> Result<()>;
    fn update(&self, id: i32, parent: Option<i32>, code: &str, name: &str) -> Result<()>;
    fn has_children(&self, id: i32) -> Result<bool>;
    fn destroy(&self, id: i32) -> Result<()>;
    fn associate(
        &self,
        role: i32,
        target_type: &str,
        target_id: i32,
        not_before: &NaiveDate,
        expire_at: &NaiveDate,
    ) -> Result<()>;
    fn unassociate(&self, role: i32, target_type: &str, target_id: i32) -> Result<()>;
    fn has(&self, role: i32, target_type: &str, target_id: i32) -> bool;
}

impl Dao for Connection {
    fn all(&self) -> Result<Vec<Item>> {
        let items = roles::dsl::roles
            .order(roles::dsl::code.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = roles::dsl::roles
            .filter(roles::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_code(&self, code: &str) -> Result<Item> {
        let it = roles::dsl::roles
            .filter(roles::dsl::code.eq(code))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&self, parent: Option<i32>, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(roles::dsl::roles)
            .values((
                roles::dsl::code.eq(code),
                roles::dsl::name.eq(name),
                roles::dsl::parent_id.eq(parent),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }
    fn update(&self, id: i32, parent: Option<i32>, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = roles::dsl::roles.filter(roles::dsl::id.eq(id));
        update(it)
            .set((
                roles::dsl::code.eq(code),
                roles::dsl::name.eq(name),
                roles::dsl::parent_id.eq(parent),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }
    fn has_children(&self, id: i32) -> Result<bool> {
        let c: i64 = roles::dsl::roles
            .filter(roles::dsl::parent_id.eq(id))
            .count()
            .get_result(self)?;
        Ok(c > 0)
    }
    fn destroy(&self, id: i32) -> Result<()> {
        delete(roles_items::dsl::roles_items.filter(roles_items::dsl::role_id.eq(id)))
            .execute(self)?;
        delete(roles::dsl::roles.filter(roles::dsl::parent_id.eq(id))).execute(self)?;
        delete(roles::dsl::roles.filter(roles::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
    fn associate(
        &self,
        role: i32,
        target_type: &str,
        target_id: i32,
        not_before: &NaiveDate,
        expire_at: &NaiveDate,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = roles_items::dsl::roles_items
            .filter(roles_items::dsl::target_type.eq(target_type))
            .filter(roles_items::dsl::target_id.eq(target_id))
            .filter(roles_items::dsl::role_id.eq(role));
        let c: i64 = it.count().get_result(self)?;
        if c == 0 {
            insert_into(roles_items::dsl::roles_items)
                .values((
                    roles_items::dsl::role_id.eq(role),
                    roles_items::dsl::target_type.eq(target_type),
                    roles_items::dsl::target_id.eq(target_id),
                    roles_items::dsl::not_before.eq(not_before),
                    roles_items::dsl::expire_at.eq(expire_at),
                    roles_items::dsl::updated_at.eq(&now),
                ))
                .execute(self)?;
        } else {
            update(it)
                .set((
                    roles_items::dsl::not_before.eq(not_before),
                    roles_items::dsl::expire_at.eq(expire_at),
                    roles_items::dsl::updated_at.eq(&now),
                ))
                .execute(self)?;
        }
        Ok(())
    }
    fn unassociate(&self, role: i32, target_type: &str, target_id: i32) -> Result<()> {
        delete(
            roles_items::dsl::roles_items
                .filter(roles_items::dsl::role_id.eq(role))
                .filter(roles_items::dsl::target_type.eq(target_type))
                .filter(roles_items::dsl::target_id.eq(target_id)),
        )
        .execute(self)?;
        Ok(())
    }
    fn has(&self, role: i32, target_type: &str, target_id: i32) -> bool {
        if let Ok((nbf, exp)) = roles_items::dsl::roles_items
            .select((roles_items::dsl::not_before, roles_items::dsl::expire_at))
            .filter(roles_items::dsl::role_id.eq(role))
            .filter(roles_items::dsl::target_type.eq(target_type))
            .filter(roles_items::dsl::target_id.eq(target_id))
            .first::<(NaiveDate, NaiveDate)>(self)
        {
            let today = Utc::now().naive_utc().date();
            return today.ge(&nbf) && today.le(&exp);
        }
        false
    }
}
