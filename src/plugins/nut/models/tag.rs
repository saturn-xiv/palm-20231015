use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::{tags, tags_resources};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub lang: String,
    pub code: String,
    pub name: String,
    pub priority: i32,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn create(&mut self, lang: &str, code: &str, name: &str, priority: i32) -> Result<()>;
    fn update(&mut self, id: i32, code: &str, name: &str, priority: i32) -> Result<()>;
    fn by_lang(&mut self, lang: &str) -> Result<Vec<Item>>;
    fn destroy(&mut self, id: i32) -> Result<()>;
    fn associate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()>;
    fn unassociate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        Ok(tags::dsl::tags
            .filter(tags::dsl::id.eq(id))
            .first::<Item>(self)?)
    }

    fn create(&mut self, lang: &str, code: &str, name: &str, priority: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(tags::dsl::tags)
            .values((
                tags::dsl::lang.eq(lang),
                tags::dsl::code.eq(code),
                tags::dsl::name.eq(name),
                tags::dsl::priority.eq(priority),
                tags::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&mut self, id: i32, code: &str, name: &str, priority: i32) -> Result<()> {
        let it = tags::dsl::tags.filter(tags::dsl::id.eq(&id));
        let now = Utc::now().naive_utc();
        update(it)
            .set((
                tags::dsl::code.eq(code),
                tags::dsl::name.eq(name),
                tags::dsl::priority.eq(priority),
                tags::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn by_lang(&mut self, lang: &str) -> Result<Vec<Item>> {
        Ok(tags::dsl::tags
            .filter(tags::dsl::lang.eq(lang))
            .order(tags::dsl::priority.asc())
            .load::<Item>(self)?)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(tags_resources::dsl::tags_resources.filter(tags_resources::dsl::tag_id.eq(id)))
            .execute(self)?;
        delete(tags::dsl::tags.filter(tags::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
    fn associate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()> {
        let cnt: i64 = tags_resources::dsl::tags_resources
            .filter(tags_resources::dsl::tag_id.eq(id))
            .filter(tags_resources::dsl::resource_type.eq(resource_type))
            .filter(tags_resources::dsl::resource_id.eq(resource_id))
            .count()
            .get_result(self)?;
        if cnt == 0 {
            insert_into(tags_resources::dsl::tags_resources)
                .values((
                    tags_resources::dsl::tag_id.eq(id),
                    tags_resources::dsl::resource_type.eq(resource_type),
                    tags_resources::dsl::resource_id.eq(resource_id),
                ))
                .execute(self)?;
        }

        Ok(())
    }
    fn unassociate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()> {
        delete(
            tags_resources::dsl::tags_resources
                .filter(tags_resources::dsl::tag_id.eq(id))
                .filter(tags_resources::dsl::resource_type.eq(resource_type))
                .filter(tags_resources::dsl::resource_id.eq(resource_id)),
        )
        .execute(self)?;
        Ok(())
    }
}
