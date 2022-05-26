use chrono::{NaiveDate, NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::{roles, users_roles};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub lang: String,
    pub code: String,
    pub name: String,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_lang_and_code(&mut self, lang: &str, code: &str) -> Result<Item>;
    fn create(&mut self, lang: &str, code: &str, name: &str) -> Result<()>;
    fn update(&mut self, id: i32, code: &str, name: &str) -> Result<()>;
    fn by_lang(&mut self, lang: &str) -> Result<Vec<Item>>;
    fn roles_by_user(&mut self, user: i32) -> Result<Vec<i32>>;
    fn users_by_role(&mut self, role: i32) -> Result<Vec<i32>>;
    fn is(&mut self, user: i32, role: i32) -> Result<bool>;
    fn associate(
        &mut self,
        user: i32,
        role: i32,
        not_before: &NaiveDate,
        expired_at: &NaiveDate,
    ) -> Result<()>;
    fn unassociate(&mut self, user: i32, role: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        Ok(roles::dsl::roles
            .filter(roles::dsl::id.eq(id))
            .first::<Item>(self)?)
    }
    fn by_lang_and_code(&mut self, lang: &str, code: &str) -> Result<Item> {
        let it = roles::dsl::roles
            .filter(roles::dsl::lang.eq(lang))
            .filter(roles::dsl::code.eq(code))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&mut self, lang: &str, code: &str, name: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(roles::dsl::roles)
            .values((
                roles::dsl::lang.eq(lang),
                roles::dsl::code.eq(code),
                roles::dsl::name.eq(name),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&mut self, id: i32, code: &str, name: &str) -> Result<()> {
        let it = roles::dsl::roles.filter(roles::dsl::id.eq(&id));
        let now = Utc::now().naive_utc();
        update(it)
            .set((
                roles::dsl::code.eq(code),
                roles::dsl::name.eq(name),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn by_lang(&mut self, lang: &str) -> Result<Vec<Item>> {
        Ok(roles::dsl::roles
            .filter(roles::dsl::lang.eq(lang))
            .order(roles::dsl::code.asc())
            .load::<Item>(self)?)
    }
    fn roles_by_user(&mut self, user: i32) -> Result<Vec<i32>> {
        Ok(users_roles::dsl::users_roles
            .select(users_roles::dsl::role_id)
            .filter(users_roles::dsl::user_id.eq(user))
            .order(users_roles::dsl::updated_at.asc())
            .load::<i32>(self)?)
    }
    fn users_by_role(&mut self, role: i32) -> Result<Vec<i32>> {
        Ok(users_roles::dsl::users_roles
            .select(users_roles::dsl::user_id)
            .filter(users_roles::dsl::role_id.eq(role))
            .order(users_roles::dsl::user_id.asc())
            .load::<i32>(self)?)
    }
    fn is(&mut self, user: i32, role: i32) -> Result<bool> {
        let (nbf, exp) = users_roles::dsl::users_roles
            .select((users_roles::dsl::not_before, users_roles::dsl::expired_at))
            .filter(users_roles::dsl::user_id.eq(user))
            .filter(users_roles::dsl::role_id.eq(role))
            .first::<(NaiveDate, NaiveDate)>(self)?;

        let it = Utc::now().naive_utc().date();
        Ok(nbf <= it && it <= exp)
    }
    fn associate(
        &mut self,
        user: i32,
        role: i32,
        not_before: &NaiveDate,
        expired_at: &NaiveDate,
    ) -> Result<()> {
        let it = users_roles::dsl::users_roles
            .select(users_roles::dsl::id)
            .filter(users_roles::dsl::user_id.eq(user))
            .filter(users_roles::dsl::role_id.eq(role))
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
                        users_roles::dsl::role_id.eq(role),
                        users_roles::dsl::not_before.eq(not_before),
                        users_roles::dsl::expired_at.eq(expired_at),
                        users_roles::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        };
        Ok(())
    }
    fn unassociate(&mut self, user: i32, role: i32) -> Result<()> {
        delete(
            users_roles::dsl::users_roles
                .filter(users_roles::dsl::user_id.eq(user))
                .filter(users_roles::dsl::role_id.eq(role)),
        )
        .execute(self)?;
        Ok(())
    }
}
