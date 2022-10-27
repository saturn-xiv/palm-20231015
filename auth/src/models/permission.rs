use std::any::type_name;
use std::collections::HashSet;

use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use palm::Result;
use serde::{Deserialize, Serialize};

use super::super::{orm::postgresql::Connection, schema::permissions};
use super::{
    role::{Adapter as RoleAdapter, Item as Role},
    user::Item as User,
};

#[derive(Hash, Eq, PartialEq, Clone, Queryable, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub subject_type: String,
    pub subject_id: i32,
    pub operation: String,
    pub resource_type: String,
    pub resource_id: Option<i32>,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn create(
        &mut self,
        subject_type: &str,
        subject_id: i32,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<()>;
    fn get(
        &mut self,
        subject_type: &str,
        subject_id: i32,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<Item>;
    fn by_subject(&mut self, type_: &str, id: i32) -> Result<Vec<Item>>;
    fn by_resource(&mut self, type_: &str, id: Option<i32>) -> Result<Vec<Item>>;
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn destroy(&mut self, id: i32) -> Result<()>;
    fn destroy_by_subject(&mut self, type_: &str, id: i32) -> Result<()>;
    fn exists(
        &mut self,
        subject_type: &str,
        subject_id: i32,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<bool>;
}

impl Dao for Connection {
    fn create(
        &mut self,
        subject_type: &str,
        subject_id: i32,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<()> {
        insert_into(permissions::dsl::permissions)
            .values((
                permissions::dsl::subject_type.eq(subject_type),
                permissions::dsl::subject_id.eq(subject_id),
                permissions::dsl::operation.eq(operation),
                permissions::dsl::resource_type.eq(resource_type),
                permissions::dsl::resource_id.eq(resource_id),
            ))
            .execute(self)?;
        Ok(())
    }
    fn get(
        &mut self,
        subject_type: &str,
        subject_id: i32,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<Item> {
        let it = match resource_id {
            Some(resource_id) => permissions::dsl::permissions
                .filter(permissions::dsl::subject_type.eq(subject_type))
                .filter(permissions::dsl::subject_id.eq(subject_id))
                .filter(permissions::dsl::operation.eq(operation))
                .filter(permissions::dsl::resource_type.eq(resource_type))
                .filter(permissions::dsl::resource_id.eq(resource_id))
                .first::<Item>(self)?,
            None => permissions::dsl::permissions
                .filter(permissions::dsl::subject_type.eq(subject_type))
                .filter(permissions::dsl::subject_id.eq(subject_id))
                .filter(permissions::dsl::operation.eq(operation))
                .filter(permissions::dsl::resource_type.eq(resource_type))
                .filter(permissions::dsl::resource_id.is_null())
                .first::<Item>(self)?,
        };
        Ok(it)
    }
    fn by_subject(&mut self, type_: &str, id: i32) -> Result<Vec<Item>> {
        let items = permissions::dsl::permissions
            .filter(permissions::dsl::subject_type.eq(type_))
            .filter(permissions::dsl::subject_id.eq(id))
            .order(permissions::dsl::created_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_resource(&mut self, type_: &str, id: Option<i32>) -> Result<Vec<Item>> {
        let items = match id {
            Some(id) => permissions::dsl::permissions
                .filter(permissions::dsl::resource_type.eq(type_))
                .filter(permissions::dsl::resource_id.eq(id))
                .order(permissions::dsl::created_at.desc())
                .load::<Item>(self)?,
            None => permissions::dsl::permissions
                .filter(permissions::dsl::resource_type.eq(type_))
                .filter(permissions::dsl::resource_id.is_null())
                .order(permissions::dsl::created_at.desc())
                .load::<Item>(self)?,
        };

        Ok(items)
    }
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = permissions::dsl::permissions
            .order(permissions::dsl::created_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(permissions::dsl::permissions.filter(permissions::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }

    fn destroy_by_subject(&mut self, type_: &str, id: i32) -> Result<()> {
        delete(
            permissions::dsl::permissions
                .filter(permissions::dsl::subject_type.eq(type_))
                .filter(permissions::dsl::subject_id.eq(id)),
        )
        .execute(self)?;
        Ok(())
    }
    fn exists(
        &mut self,
        subject_type: &str,
        subject_id: i32,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<bool> {
        let cnt: i64 = match resource_id {
            Some(resource_id) => permissions::dsl::permissions
                .filter(permissions::dsl::subject_type.eq(subject_type))
                .filter(permissions::dsl::subject_id.eq(subject_id))
                .filter(permissions::dsl::operation.eq(operation))
                .filter(permissions::dsl::resource_type.eq(resource_type))
                .filter(permissions::dsl::resource_id.eq(resource_id))
                .count()
                .get_result(self)?,
            None => permissions::dsl::permissions
                .filter(permissions::dsl::subject_type.eq(subject_type))
                .filter(permissions::dsl::subject_id.eq(subject_id))
                .filter(permissions::dsl::operation.eq(operation))
                .filter(permissions::dsl::resource_type.eq(resource_type))
                .filter(permissions::dsl::resource_id.is_null())
                .count()
                .get_result(self)?,
        };
        Ok(cnt > 0)
    }
}

pub trait Adapter {
    fn get_implicit_permissions_for_user(&mut self, user: i32) -> Result<HashSet<Item>>;
    fn get_implicit_permissions_for_role(&mut self, user: i32) -> Result<HashSet<Item>>;
}

impl Adapter for Connection {
    fn get_implicit_permissions_for_user(&mut self, user: i32) -> Result<HashSet<Item>> {
        let mut items = HashSet::new();
        items.extend(self.by_subject(type_name::<User>(), user)?);
        for it in RoleAdapter::get_implicit_roles_for_user(self, user)? {
            items.extend(self.by_subject(type_name::<Role>(), it.id)?);
        }
        Ok(items)
    }
    fn get_implicit_permissions_for_role(&mut self, role: i32) -> Result<HashSet<Item>> {
        let mut items = HashSet::new();
        items.extend(self.by_subject(type_name::<Role>(), role)?);
        for it in RoleAdapter::get_implicit_roles_for_role(self, role)? {
            items.extend(self.by_subject(type_name::<Role>(), it.id)?);
        }
        Ok(items)
    }
}
