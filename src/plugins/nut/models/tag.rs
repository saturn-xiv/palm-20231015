use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::{tags, tags_resources};
use super::{Color, Font, Icon};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub name: String,
    pub font: Vec<u8>,
    pub icon: Vec<u8>,
    pub color: Vec<u8>,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_code(&self, code: &str) -> Result<Item>;
    fn create(&self, code: &str, name: &str, font: &Font, icon: &Icon, color: &Color)
        -> Result<()>;
    fn update(
        &self,
        id: i32,
        code: &str,
        name: &str,
        font: &Font,
        icon: &Icon,
        color: &Color,
    ) -> Result<()>;
    fn all(&self) -> Result<Vec<Item>>;
    fn destory(&self, id: i32) -> Result<()>;
    fn bind(&self, tags: &[i32], rty: &str, rid: i32) -> Result<()>;
    fn unbind(&self, rty: &str, rid: i32) -> Result<()>;
    fn resources(&self, tag: i32) -> Result<Vec<(String, i32)>>;
}

impl Dao for Connection {
    fn by_id(&self, id: i32) -> Result<Item> {
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
    fn create(
        &self,
        code: &str,
        name: &str,
        font: &Font,
        icon: &Icon,
        color: &Color,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(tags::dsl::tags)
            .values((
                tags::dsl::code.eq(code),
                tags::dsl::name.eq(name),
                tags::dsl::font.eq(&flexbuffers::to_vec(font)?),
                tags::dsl::icon.eq(&flexbuffers::to_vec(icon)?),
                tags::dsl::color.eq(&flexbuffers::to_vec(color)?),
                tags::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn update(
        &self,
        id: i32,
        code: &str,
        name: &str,
        font: &Font,
        icon: &Icon,
        color: &Color,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(tags::dsl::tags.filter(tags::dsl::id.eq(id)))
            .set((
                tags::dsl::code.eq(code),
                tags::dsl::name.eq(name),
                tags::dsl::font.eq(&flexbuffers::to_vec(font)?),
                tags::dsl::icon.eq(&flexbuffers::to_vec(icon)?),
                tags::dsl::color.eq(&flexbuffers::to_vec(color)?),
                tags::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = tags::dsl::tags
            .order(tags::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn destory(&self, id: i32) -> Result<()> {
        delete(tags_resources::dsl::tags_resources.filter(tags_resources::dsl::tag_id.eq(id)))
            .execute(self)?;
        delete(tags::dsl::tags.filter(tags::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }

    fn bind(&self, tags: &[i32], rty: &str, rid: i32) -> Result<()> {
        for it in tags {
            insert_into(tags_resources::dsl::tags_resources)
                .values((
                    tags_resources::dsl::tag_id.eq(it),
                    tags_resources::dsl::resource_id.eq(rid),
                    tags_resources::dsl::resource_type.eq(rty),
                ))
                .execute(self)?;
        }
        Ok(())
    }

    fn unbind(&self, rty: &str, rid: i32) -> Result<()> {
        delete(
            tags_resources::dsl::tags_resources
                .filter(tags_resources::dsl::resource_type.eq(rty))
                .filter(tags_resources::dsl::resource_id.eq(rid)),
        )
        .execute(self)?;
        Ok(())
    }
    fn resources(&self, tag: i32) -> Result<Vec<(String, i32)>> {
        let items = tags_resources::dsl::tags_resources
            .select((
                tags_resources::dsl::resource_type,
                tags_resources::dsl::resource_id,
            ))
            .filter(tags_resources::dsl::tag_id.eq(tag))
            .order(tags_resources::dsl::created_at.desc())
            .load::<(String, i32)>(self)?;
        Ok(items)
    }
}
