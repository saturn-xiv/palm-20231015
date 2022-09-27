use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use palm::{
    orm::postgresql::Connection,
    schema::{roles, roles_constraints, roles_users},
    Result,
};
use serde::Serialize;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub parent_id: Option<i32>,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

impl Item {
    pub const ROOT: &'static str = "root";
    pub const ADMINISTRATOR: &'static str = "administrator";
}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn create(&mut self, code: &str, parent: Option<i32>) -> Result<()>;
    fn update(&mut self, id: i32, code: &str) -> Result<()>;
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn by_parent(&mut self, id: i32) -> Result<Vec<Item>>;
    fn destroy(&mut self, id: i32) -> Result<()>;
    fn associate(
        &mut self,
        role: i32,
        user: i32,
        not_before: &NaiveDateTime,
        expired_at: &NaiveDateTime,
    ) -> Result<()>;
    fn dissociate(&mut self, role: i32, user: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        Ok(roles::dsl::roles
            .filter(roles::dsl::id.eq(id))
            .first::<Item>(self)?)
    }

    fn create(&mut self, code: &str, parent: Option<i32>) -> Result<()> {
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
    fn update(&mut self, id: i32, code: &str) -> Result<()> {
        let it = roles::dsl::roles.filter(roles::dsl::id.eq(&id));
        let now = Utc::now().naive_utc();
        update(it)
            .set((roles::dsl::code.eq(code), roles::dsl::updated_at.eq(&now)))
            .execute(self)?;
        Ok(())
    }
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        Ok(roles::dsl::roles
            .order(roles::dsl::updated_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?)
    }
    fn by_parent(&mut self, id: i32) -> Result<Vec<Item>> {
        Ok(roles::dsl::roles
            .filter(roles::dsl::parent_id.eq(id))
            .order(roles::dsl::updated_at.asc())
            .load::<Item>(self)?)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(
            roles_constraints::dsl::roles_constraints.filter(
                roles_constraints::dsl::x
                    .eq(id)
                    .or(roles_constraints::dsl::y.eq(id)),
            ),
        )
        .execute(self)?;
        delete(roles_users::dsl::roles_users.filter(roles_users::dsl::role_id.eq(id)))
            .execute(self)?;
        delete(roles::dsl::roles.filter(roles::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
    fn associate(
        &mut self,
        role: i32,
        user: i32,
        not_before: &NaiveDateTime,
        expired_at: &NaiveDateTime,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        match roles_users::dsl::roles_users
            .select(roles_users::dsl::id)
            .filter(roles_users::dsl::role_id.eq(role))
            .filter(roles_users::dsl::user_id.eq(user))
            .first::<i32>(self)
        {
            Ok(id) => {
                update(roles_users::dsl::roles_users.filter(roles_users::dsl::id.eq(id)))
                    .set((
                        roles_users::dsl::not_before.eq(not_before),
                        roles_users::dsl::expired_at.eq(expired_at),
                        roles_users::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
            Err(_) => {
                insert_into(roles_users::dsl::roles_users)
                    .values((
                        roles_users::dsl::role_id.eq(role),
                        roles_users::dsl::user_id.eq(user),
                        roles_users::dsl::not_before.eq(not_before),
                        roles_users::dsl::expired_at.eq(expired_at),
                        roles_users::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        }

        Ok(())
    }
    fn dissociate(&mut self, role: i32, user: i32) -> Result<()> {
        delete(
            roles_users::dsl::roles_users
                .filter(roles_users::dsl::role_id.eq(role))
                .filter(roles_users::dsl::user_id.eq(user)),
        )
        .execute(self)?;
        Ok(())
    }
}
