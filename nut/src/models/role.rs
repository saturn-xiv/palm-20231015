use std::collections::HashSet;

use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use palm::Result;
use serde::{Deserialize, Serialize};

use super::super::{
    orm::postgresql::Connection,
    schema::{roles, roles_constraints, roles_users},
};
use super::user::{Dao as UserDao, Item as User};

#[derive(Hash, Eq, PartialEq, Clone, Queryable, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub left: i32,
    pub right: i32,
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
    fn by_code(&mut self, code: &str) -> Result<Item>;
    fn by_user(&mut self, user: i32) -> Result<Vec<Item>>;
    fn offsprings(&mut self, id: i32) -> Result<Vec<Item>>;
    fn create(&mut self, code: &str) -> Result<()>;
    fn create_by_left(&mut self, code: &str, left: i32) -> Result<()>;
    fn create_by_parent(&mut self, code: &str, parent: i32) -> Result<()>;
    fn update(&mut self, id: i32, code: &str) -> Result<()>;
    fn all(&mut self) -> Result<Vec<Item>>;
    fn count(&mut self) -> Result<i64>;
    fn destroy(&mut self, id: i32) -> Result<()>;
    fn associate(
        &mut self,
        role: i32,
        user: i32,
        not_before: &NaiveDateTime,
        expired_at: &NaiveDateTime,
    ) -> Result<()>;
    fn dissociate(&mut self, role: i32, user: i32) -> Result<()>;
    fn range(&mut self, role: i32, user: i32) -> Result<(NaiveDateTime, NaiveDateTime)>;

    fn users_for_role(&mut self, role: i32) -> Result<Vec<User>>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        Ok(roles::dsl::roles
            .filter(roles::dsl::id.eq(id))
            .first::<Item>(self)?)
    }
    fn by_code(&mut self, code: &str) -> Result<Item> {
        Ok(roles::dsl::roles
            .filter(roles::dsl::code.eq(code))
            .first::<Item>(self)?)
    }
    fn by_user(&mut self, user: i32) -> Result<Vec<Item>> {
        let mut items = Vec::new();
        for it in roles_users::dsl::roles_users
            .select(roles_users::dsl::role_id)
            .filter(roles_users::dsl::user_id.eq(user))
            .load::<i32>(self)?
        {
            let it = Dao::by_id(self, it)?;
            items.push(it);
        }
        Ok(items)
    }
    fn offsprings(&mut self, id: i32) -> Result<Vec<Item>> {
        let it = Dao::by_id(self, id)?;
        Ok(roles::dsl::roles
            .filter(roles::dsl::left.gt(it.left))
            .filter(roles::dsl::right.lt(it.right))
            .order(roles::dsl::updated_at.desc())
            .load::<Item>(self)?)
    }
    fn create(&mut self, code: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(roles::dsl::roles)
            .values((
                roles::dsl::code.eq(code),
                roles::dsl::left.eq(1),
                roles::dsl::right.eq(2),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn create_by_parent(&mut self, code: &str, parent: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        let nested = Dao::by_id(self, parent)?;
        update(roles::dsl::roles.filter(roles::dsl::left.gt(nested.left)))
            .set((
                roles::dsl::left.eq(roles::dsl::left + 2),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        update(roles::dsl::roles.filter(roles::dsl::right.gt(nested.left)))
            .set((
                roles::dsl::right.eq(roles::dsl::right + 2),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        insert_into(roles::dsl::roles)
            .values((
                roles::dsl::code.eq(code),
                roles::dsl::left.eq(nested.left + 1),
                roles::dsl::right.eq(nested.left + 2),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn create_by_left(&mut self, code: &str, left: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        let nested = Dao::by_id(self, left)?;
        update(roles::dsl::roles.filter(roles::dsl::left.gt(nested.right)))
            .set((
                roles::dsl::left.eq(roles::dsl::left + 2),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        update(roles::dsl::roles.filter(roles::dsl::right.gt(nested.right)))
            .set((
                roles::dsl::right.eq(roles::dsl::right + 2),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        insert_into(roles::dsl::roles)
            .values((
                roles::dsl::code.eq(code),
                roles::dsl::left.eq(nested.right + 1),
                roles::dsl::right.eq(nested.right + 2),
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
    fn all(&mut self) -> Result<Vec<Item>> {
        Ok(roles::dsl::roles
            .order(roles::dsl::updated_at.desc())
            .load::<Item>(self)?)
    }
    fn count(&mut self) -> Result<i64> {
        let cnt: i64 = roles::dsl::roles.count().get_result(self)?;
        Ok(cnt)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        let it = Dao::by_id(self, id)?;
        let width = it.right - it.left + 1;
        let now = Utc::now().naive_utc();

        for id in roles::dsl::roles
            .select(roles::dsl::id)
            .filter(roles::dsl::left.ge(it.left))
            .filter(roles::dsl::left.le(it.right))
            .load::<i32>(self)?
        {
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
        }

        delete(
            roles::dsl::roles
                .filter(roles::dsl::left.ge(it.left))
                .filter(roles::dsl::left.le(it.right)),
        )
        .execute(self)?;
        update(roles::dsl::roles.filter(roles::dsl::left.gt(it.right)))
            .set((
                roles::dsl::left.eq(roles::dsl::left - width),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        update(roles::dsl::roles.filter(roles::dsl::right.gt(it.right)))
            .set((
                roles::dsl::right.eq(roles::dsl::right - width),
                roles::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

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

    fn range(&mut self, role: i32, user: i32) -> Result<(NaiveDateTime, NaiveDateTime)> {
        let it = roles_users::dsl::roles_users
            .select((roles_users::dsl::not_before, roles_users::dsl::expired_at))
            .filter(roles_users::dsl::role_id.eq(role))
            .filter(roles_users::dsl::user_id.eq(user))
            .first::<(NaiveDateTime, NaiveDateTime)>(self)?;
        Ok(it)
    }

    fn users_for_role(&mut self, role: i32) -> Result<Vec<User>> {
        let mut items = Vec::new();
        for it in roles_users::dsl::roles_users
            .select(roles_users::dsl::user_id)
            .filter(roles_users::dsl::role_id.eq(role))
            .load::<i32>(self)?
        {
            let it = UserDao::by_id(self, it)?;
            items.push(it);
        }
        Ok(items)
    }
}

pub trait Adapter {
    fn get_implicit_roles_for_role(&mut self, role: i32) -> Result<Vec<Item>>;
    fn get_implicit_roles_for_user(&mut self, user: i32) -> Result<HashSet<Item>>;
    fn get_implicit_users_for_role(&mut self, role: i32) -> Result<HashSet<User>>;
}

impl Adapter for Connection {
    fn get_implicit_roles_for_role(&mut self, id: i32) -> Result<Vec<Item>> {
        let it = Dao::by_id(self, id)?;
        Ok(roles::dsl::roles
            .filter(roles::dsl::left.gt(it.left))
            .filter(roles::dsl::right.lt(it.right))
            .order(roles::dsl::left.asc())
            .load::<Item>(self)?)
    }
    fn get_implicit_roles_for_user(&mut self, user: i32) -> Result<HashSet<Item>> {
        let mut items = HashSet::new();
        for it in Dao::by_user(self, user)?.iter() {
            items.insert(it.clone());
            items.extend(self.get_implicit_roles_for_role(it.id)?);
        }
        Ok(items)
    }
    fn get_implicit_users_for_role(&mut self, role: i32) -> Result<HashSet<User>> {
        let mut items = HashSet::new();
        for role in Adapter::get_implicit_roles_for_role(self, role)? {
            items.extend(Dao::users_for_role(self, role.id)?);
        }
        Ok(items)
    }
}
