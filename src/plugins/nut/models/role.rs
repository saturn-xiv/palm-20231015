use chrono::{NaiveDate, NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::users_roles;

pub const ADMINISTRATOR: &str = "administrator";
pub const ROOT: &str = "root";

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub role: String,
    pub not_before: NaiveDate,
    pub expired_at: NaiveDate,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

impl Item {
    pub fn is_valid(&self) -> bool {
        let it = Utc::now().naive_utc().date();
        self.not_before <= it && it <= self.expired_at
    }
}

pub trait Dao {
    fn all(&mut self) -> Result<Vec<String>>;
    fn index(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count(&mut self) -> Result<i64>;
    fn roles_by_user(&mut self, user: i32) -> Result<Vec<String>>;
    fn users_by_role(&mut self, role: &str) -> Result<Vec<i32>>;
    fn is(&mut self, user: i32, role: &str) -> Result<bool>;
    fn associate(
        &mut self,
        user: i32,
        role: &str,
        not_before: &NaiveDate,
        expired_at: &NaiveDate,
    ) -> Result<()>;
    fn unassociate(&mut self, user: i32, role: &str) -> Result<()>;
    fn clear(&mut self, user: i32) -> Result<()>;
}

impl Dao for Connection {
    fn all(&mut self) -> Result<Vec<String>> {
        Ok(users_roles::dsl::users_roles
            .select(users_roles::dsl::role)
            .distinct()
            .order(users_roles::dsl::role.asc())
            .load::<String>(self)?)
    }
    fn index(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = users_roles::dsl::users_roles
            .order(users_roles::dsl::created_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn count(&mut self) -> Result<i64> {
        let cnt: i64 = users_roles::dsl::users_roles.count().get_result(self)?;
        Ok(cnt)
    }
    fn roles_by_user(&mut self, user: i32) -> Result<Vec<String>> {
        Ok(users_roles::dsl::users_roles
            .select(users_roles::dsl::role)
            .filter(users_roles::dsl::user_id.eq(user))
            .order(users_roles::dsl::updated_at.asc())
            .load::<String>(self)?)
    }
    fn users_by_role(&mut self, role: &str) -> Result<Vec<i32>> {
        Ok(users_roles::dsl::users_roles
            .select(users_roles::dsl::user_id)
            .filter(users_roles::dsl::role.eq(role))
            .order(users_roles::dsl::user_id.asc())
            .load::<i32>(self)?)
    }
    fn is(&mut self, user: i32, role: &str) -> Result<bool> {
        let it = users_roles::dsl::users_roles
            .filter(users_roles::dsl::user_id.eq(user))
            .filter(users_roles::dsl::role.eq(role))
            .first::<Item>(self)?;
        Ok(it.is_valid())
    }
    fn associate(
        &mut self,
        user: i32,
        role: &str,
        not_before: &NaiveDate,
        expired_at: &NaiveDate,
    ) -> Result<()> {
        let it = users_roles::dsl::users_roles
            .select(users_roles::dsl::id)
            .filter(users_roles::dsl::user_id.eq(user))
            .filter(users_roles::dsl::role.eq(role))
            .first::<i32>(self);

        let now = Utc::now().naive_utc();
        match it {
            Ok(it) => {
                let it = users_roles::dsl::users_roles.filter(users_roles::dsl::id.eq(it));

                update(it)
                    .set((
                        users_roles::dsl::not_before.eq(not_before),
                        users_roles::dsl::expired_at.eq(expired_at),
                        users_roles::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
            Err(_) => {
                insert_into(users_roles::dsl::users_roles)
                    .values((
                        users_roles::dsl::user_id.eq(user),
                        users_roles::dsl::role.eq(role),
                        users_roles::dsl::not_before.eq(not_before),
                        users_roles::dsl::expired_at.eq(expired_at),
                        users_roles::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        };
        Ok(())
    }
    fn unassociate(&mut self, user: i32, role: &str) -> Result<()> {
        delete(
            users_roles::dsl::users_roles
                .filter(users_roles::dsl::user_id.eq(user))
                .filter(users_roles::dsl::role.eq(role)),
        )
        .execute(self)?;
        Ok(())
    }
    fn clear(&mut self, user: i32) -> Result<()> {
        delete(users_roles::dsl::users_roles.filter(users_roles::dsl::user_id.eq(user)))
            .execute(self)?;
        Ok(())
    }
}
