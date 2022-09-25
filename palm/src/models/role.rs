use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::{permissions, roles, roles_constraints, roles_users};

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

pub enum Constraint {}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn create(&mut self, code: &str, parent: Option<i32>) -> Result<()>;
    fn update(&mut self, id: i32, code: &str) -> Result<()>;
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn by_parent(&mut self, id: i32) -> Result<Vec<Item>>;
    fn destroy(&mut self, id: i32) -> Result<()>;
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
        delete(roles_users::dsl::roles_users.filter(roles_users::dsl::role.eq(id)))
            .execute(self)?;
        delete(permissions::dsl::permissions.filter(permissions::dsl::role.eq(id)))
            .execute(self)?;
        delete(roles::dsl::roles.filter(roles::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
    // fn associate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()> {
    //     let cnt: i64 = tags_resources::dsl::tags_resources
    //         .filter(tags_resources::dsl::tag_id.eq(id))
    //         .filter(tags_resources::dsl::resource_type.eq(resource_type))
    //         .filter(tags_resources::dsl::resource_id.eq(resource_id))
    //         .count()
    //         .get_result(self)?;
    //     if cnt == 0 {
    //         insert_into(tags_resources::dsl::tags_resources)
    //             .values((
    //                 tags_resources::dsl::tag_id.eq(id),
    //                 tags_resources::dsl::resource_type.eq(resource_type),
    //                 tags_resources::dsl::resource_id.eq(resource_id),
    //             ))
    //             .execute(self)?;
    //     }

    //     Ok(())
    // }
    // fn unassociate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()> {
    //     delete(
    //         tags_resources::dsl::tags_resources
    //             .filter(tags_resources::dsl::tag_id.eq(id))
    //             .filter(tags_resources::dsl::resource_type.eq(resource_type))
    //             .filter(tags_resources::dsl::resource_id.eq(resource_id)),
    //     )
    //     .execute(self)?;
    //     Ok(())
    // }
}
