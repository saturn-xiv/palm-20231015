use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::{tags, tags_resources};
use super::Resource;

#[derive(Queryable, Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub code: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&self, id: Uuid) -> Result<Item>;
    fn by_code(&self, code: &str) -> Result<Item>;
    fn create(&self, code: &str) -> Result<()>;
    fn update(&self, id: Uuid, code: &str) -> Result<()>;
    fn all(&self) -> Result<Vec<Item>>;
    fn destroy(&self, id: Uuid) -> Result<()>;
    fn associate(&self, tag: Uuid, resource: &Resource) -> Result<()>;
    fn unassociate(&self, tag: Uuid, resource: &Resource) -> Result<()>;
    fn resources(&self, tag: Uuid) -> Result<Vec<(String, Uuid)>>;
}

impl Dao for Connection {
    fn by_id(&self, id: Uuid) -> Result<Item> {
        let it = tags::dsl::tags
            .filter(tags::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_code(&self, code: &str) -> Result<Item> {
        let it = tags::dsl::tags
            .filter(tags::dsl::code.eq(code))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&self, code: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let code = code.trim().to_lowercase();
        insert_into(tags::dsl::tags)
            .values((tags::dsl::code.eq(code), tags::dsl::updated_at.eq(&now)))
            .execute(self)?;
        Ok(())
    }

    fn update(&self, id: Uuid, code: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let code = code.trim().to_lowercase();
        update(tags::dsl::tags.filter(tags::dsl::id.eq(id)))
            .set((tags::dsl::code.eq(code), tags::dsl::updated_at.eq(&now)))
            .execute(self)?;
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = tags::dsl::tags
            .order(tags::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn destroy(&self, id: Uuid) -> Result<()> {
        delete(tags_resources::dsl::tags_resources.filter(tags_resources::dsl::tag_id.eq(id)))
            .execute(self)?;
        delete(tags::dsl::tags.filter(tags::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }

    fn associate(&self, tag: Uuid, resource: &Resource) -> Result<()> {
        insert_into(tags_resources::dsl::tags_resources)
            .values((
                tags_resources::dsl::tag_id.eq(tag),
                tags_resources::dsl::resource_id.eq(resource.id),
                tags_resources::dsl::resource_type.eq(&resource.type_),
            ))
            .execute(self)?;

        Ok(())
    }

    fn unassociate(&self, tag: Uuid, resource: &Resource) -> Result<()> {
        delete(
            tags_resources::dsl::tags_resources
                .filter(tags_resources::dsl::tag_id.eq(tag))
                .filter(tags_resources::dsl::resource_type.eq(&resource.type_))
                .filter(tags_resources::dsl::resource_id.eq(resource.id)),
        )
        .execute(self)?;
        Ok(())
    }
    fn resources(&self, tag: Uuid) -> Result<Vec<(String, Uuid)>> {
        let items = tags_resources::dsl::tags_resources
            .select((
                tags_resources::dsl::resource_type,
                tags_resources::dsl::resource_id,
            ))
            .filter(tags_resources::dsl::tag_id.eq(tag))
            .order(tags_resources::dsl::created_at.desc())
            .load::<(String, Uuid)>(self)?;
        Ok(items)
    }
}
