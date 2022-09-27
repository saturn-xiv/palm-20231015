use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use palm::{orm::postgresql::Connection, schema::permissions, Result};
use serde::Serialize;

#[derive(Queryable, Serialize)]
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
