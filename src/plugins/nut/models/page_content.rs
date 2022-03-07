use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::page_contents;
use super::{Resource, WYSIWYG};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub resource_type: String,
    pub resource_id: Uuid,
    pub body: String,
    pub editor: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn by_resource(&self, resource: &Resource) -> Result<Item>;
    fn create(&self, resource: &Resource, body: &WYSIWYG) -> Result<()>;
    fn update(&self, id: Uuid, body: &WYSIWYG) -> Result<()>;
    fn update_by_resource(&self, resource: &Resource, body: &WYSIWYG) -> Result<()>;
    fn delete(&self, id: Uuid) -> Result<()>;
}

impl Dao for Connection {
    fn create(&self, resource: &Resource, body: &WYSIWYG) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(page_contents::dsl::page_contents)
            .values((
                page_contents::dsl::resource_id.eq(resource.id),
                page_contents::dsl::resource_type.eq(&resource.type_),
                page_contents::dsl::body.eq(&body.content),
                page_contents::dsl::editor.eq(&body.editor.to_string()),
                page_contents::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }

    fn update(&self, id: Uuid, body: &WYSIWYG) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = page_contents::dsl::page_contents.filter(page_contents::dsl::id.eq(id));
        update(it)
            .set((
                page_contents::dsl::body.eq(&body.content),
                page_contents::dsl::editor.eq(&body.editor.to_string()),
                page_contents::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update_by_resource(&self, resource: &Resource, body: &WYSIWYG) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = page_contents::dsl::page_contents
            .filter(page_contents::dsl::resource_id.eq(resource.id))
            .filter(page_contents::dsl::resource_type.eq(&resource.type_));
        update(it)
            .set((
                page_contents::dsl::body.eq(&body.content),
                page_contents::dsl::editor.eq(&body.editor.to_string()),
                page_contents::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = page_contents::dsl::page_contents
            .order(page_contents::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: Uuid) -> Result<()> {
        delete(page_contents::dsl::page_contents.filter(page_contents::dsl::id.eq(id)))
            .execute(self)?;
        Ok(())
    }

    fn by_resource(&self, resource: &Resource) -> Result<Item> {
        let it = page_contents::dsl::page_contents
            .filter(page_contents::dsl::resource_type.eq(&resource.type_))
            .filter(page_contents::dsl::resource_id.eq(resource.id))
            .first::<Item>(self)?;
        Ok(it)
    }
}
