use std::any::type_name;

use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::rating_logs;
use super::{page_content::Dao as PageContentDao, Resource, WYSIWYG};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub user_id: Uuid,
    pub point: i32,
    pub resource_type: String,
    pub resource_id: Uuid,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_resource(&self, resource: &Resource) -> Result<Vec<Item>>;
    fn create(&self, user: Uuid, resource: &Resource, point: i32, body: &WYSIWYG) -> Result<()>;
    fn update(&self, id: Uuid, resource: &Resource, point: i32, body: &WYSIWYG) -> Result<()>;
    fn delete(&self, id: Uuid) -> Result<()>;
}

impl Dao for Connection {
    fn create(&self, user: Uuid, resource: &Resource, point: i32, body: &WYSIWYG) -> Result<()> {
        let now = Utc::now().naive_utc();
        let id = Uuid::new_v4();
        insert_into(rating_logs::dsl::rating_logs)
            .values((
                rating_logs::dsl::id.eq(id),
                rating_logs::dsl::user_id.eq(user),
                rating_logs::dsl::resource_id.eq(resource.id),
                rating_logs::dsl::resource_type.eq(&resource.type_),
                rating_logs::dsl::point.eq(point),
                rating_logs::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        PageContentDao::create(
            self,
            &Resource {
                type_: type_name::<Item>().to_string(),
                id,
            },
            body,
        )?;

        Ok(())
    }

    fn update(&self, id: Uuid, resource: &Resource, point: i32, body: &WYSIWYG) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = rating_logs::dsl::rating_logs.filter(rating_logs::dsl::id.eq(id));
        update(it)
            .set((
                rating_logs::dsl::resource_id.eq(resource.id),
                rating_logs::dsl::resource_type.eq(&resource.type_),
                rating_logs::dsl::point.eq(point),
                rating_logs::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        PageContentDao::update_by_resource(self, resource, body)?;
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = rating_logs::dsl::rating_logs
            .order(rating_logs::dsl::point.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: Uuid) -> Result<()> {
        delete(rating_logs::dsl::rating_logs.filter(rating_logs::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }

    fn by_resource(&self, resource: &Resource) -> Result<Vec<Item>> {
        let items = rating_logs::dsl::rating_logs
            .filter(rating_logs::dsl::resource_type.eq(&resource.type_))
            .filter(rating_logs::dsl::resource_id.eq(resource.id))
            .order(rating_logs::dsl::point.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
}
