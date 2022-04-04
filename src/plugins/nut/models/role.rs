use std::ops::Add;

use chrono::{Duration, NaiveDate, NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::{roles, roles_items};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub code: String,
    pub parent_id: Option<Uuid>,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

impl Item {
    pub const ADMINISTRATOR: &'static str = "administrator";
    pub const ROOT: &'static str = "root";

    pub fn timestamps(ttl: Duration) -> (NaiveDate, NaiveDate) {
        let nbf = Utc::now().naive_utc();
        let exp = nbf.add(ttl);
        (nbf.date(), exp.date())
    }
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_id(&self, id: Uuid) -> Result<Item>;
    fn by_code(&self, code: &str) -> Result<Item>;
    fn create(&self, parent: Option<Uuid>, code: &str) -> Result<()>;
    fn update(&self, id: Uuid, parent: Option<Uuid>, code: &str) -> Result<()>;
    fn has_children(&self, id: Uuid) -> Result<bool>;
    fn destroy(&self, id: Uuid) -> Result<()>;
    fn associate(
        &self,
        role: Uuid,
        target_type: &str,
        target_id: Uuid,
        not_before: &NaiveDate,
        expire_at: &NaiveDate,
    ) -> Result<()>;
    fn unassociate(&self, role: Uuid, target_type: &str, target_id: Uuid) -> Result<()>;
    fn has(&self, role: Uuid, target_type: &str, target_id: Uuid) -> bool;
}

impl Dao for Connection {
    fn all(&self) -> Result<Vec<Item>> {
        let items = roles::dsl::roles
            .order(roles::dsl::code.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_id(&self, id: Uuid) -> Result<Item> {
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
    fn create(&self, parent: Option<Uuid>, code: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(roles::dsl::roles)
            .values((
                roles::dsl::code.eq(code),
                roles::dsl::parent_id.eq(parent),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }
    fn update(&self, id: Uuid, parent: Option<Uuid>, code: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = roles::dsl::roles.filter(roles::dsl::id.eq(id));
        update(it)
            .set((
                roles::dsl::code.eq(code),
                roles::dsl::parent_id.eq(parent),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }
    fn has_children(&self, id: Uuid) -> Result<bool> {
        let c: i64 = roles::dsl::roles
            .filter(roles::dsl::parent_id.eq(id))
            .count()
            .get_result(self)?;
        Ok(c > 0)
    }
    fn destroy(&self, id: Uuid) -> Result<()> {
        delete(roles_items::dsl::roles_items.filter(roles_items::dsl::role_id.eq(id)))
            .execute(self)?;
        delete(roles::dsl::roles.filter(roles::dsl::parent_id.eq(id))).execute(self)?;
        delete(roles::dsl::roles.filter(roles::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
    fn associate(
        &self,
        role: Uuid,
        target_type: &str,
        target_id: Uuid,
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
    fn unassociate(&self, role: Uuid, target_type: &str, target_id: Uuid) -> Result<()> {
        delete(
            roles_items::dsl::roles_items
                .filter(roles_items::dsl::role_id.eq(role))
                .filter(roles_items::dsl::target_type.eq(target_type))
                .filter(roles_items::dsl::target_id.eq(target_id)),
        )
        .execute(self)?;
        Ok(())
    }
    fn has(&self, role: Uuid, target_type: &str, target_id: Uuid) -> bool {
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
