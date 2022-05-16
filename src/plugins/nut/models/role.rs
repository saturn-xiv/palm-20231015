use chrono::{NaiveDate, NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::users_roles;

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
    pub fn available(&self) -> bool {
        let it = Utc::now().naive_utc().date();
        self.not_before <= it && it <= self.expired_at
    }
}

pub trait Dao {
    fn by_user(&mut self, user: i32) -> Result<Vec<String>>;
    fn by_role(&mut self, role: &str) -> Result<Vec<i32>>;
    fn is(&mut self, user: i32, role: &str) -> Result<bool>;
    fn associate(
        &mut self,
        user: i32,
        role: &str,
        not_before: &NaiveDate,
        expired_at: &NaiveDate,
    ) -> Result<()>;
    fn unassociate(&mut self, user: i32, role: &str) -> Result<()>;
}

impl Dao for Connection {
    fn by_user(&mut self, user: i32) -> Result<Vec<String>> {
        Ok(users_roles::dsl::users_roles
            .select(users_roles::dsl::role)
            .filter(users_roles::dsl::user_id.eq(user))
            .distinct()
            .order(users_roles::dsl::role.asc())
            .load::<String>(self)?)
    }
    fn by_role(&mut self, role: &str) -> Result<Vec<i32>> {
        Ok(users_roles::dsl::users_roles
            .select(users_roles::dsl::user_id)
            .filter(users_roles::dsl::role.eq(role))
            .distinct()
            .order(users_roles::dsl::user_id.asc())
            .load::<i32>(self)?)
    }
    fn is(&mut self, user: i32, role: &str) -> Result<bool> {
        let it = users_roles::dsl::users_roles
            .filter(users_roles::dsl::user_id.eq(user))
            .filter(users_roles::dsl::role.eq(role))
            .first::<Item>(self)?;
        Ok(it.available())
    }
    fn associate(
        &mut self,
        user: i32,
        role: &str,
        not_before: &NaiveDate,
        expired_at: &NaiveDate,
    ) -> Result<()> {
        let it = users_roles::dsl::users_roles
            .filter(users_roles::dsl::user_id.eq(user))
            .filter(users_roles::dsl::role.eq(role))
            .first::<Item>(self);

        let now = Utc::now().naive_utc();
        match it {
            Ok(it) => {
                let it = users_roles::dsl::users_roles.filter(users_roles::dsl::id.eq(&it.id));

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
}
