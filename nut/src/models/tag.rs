use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use palm::Result;
use serde::Serialize;

use super::super::{
    orm::postgresql::Connection,
    schema::{tag_resources, tags},
};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub sort_order: i32,
    pub deleted_at: Option<NaiveDateTime>,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn create(&mut self, code: &str, sort_order: i32) -> Result<()>;
    fn update(&mut self, id: i32, code: &str, sort_order: i32) -> Result<()>;
    fn all(&mut self) -> Result<Vec<Item>>;
    fn destroy(&mut self, id: i32) -> Result<()>;
    fn associate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()>;
    fn dissociate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        Ok(tags::dsl::tags
            .filter(tags::dsl::id.eq(id))
            .first::<Item>(self)?)
    }

    fn create(&mut self, code: &str, sort_order: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(tags::dsl::tags)
            .values((
                tags::dsl::code.eq(code),
                tags::dsl::sort_order.eq(sort_order),
                tags::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&mut self, id: i32, code: &str, sort_order: i32) -> Result<()> {
        let it = tags::dsl::tags.filter(tags::dsl::id.eq(&id));
        let now = Utc::now().naive_utc();
        update(it)
            .set((
                tags::dsl::code.eq(code),
                tags::dsl::sort_order.eq(sort_order),
                tags::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn all(&mut self) -> Result<Vec<Item>> {
        Ok(tags::dsl::tags
            .order(tags::dsl::updated_at.desc())
            .load::<Item>(self)?)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(tag_resources::dsl::tag_resources.filter(tag_resources::dsl::tag_id.eq(id)))
            .execute(self)?;
        delete(tags::dsl::tags.filter(tags::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
    fn associate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()> {
        let cnt: i64 = tag_resources::dsl::tag_resources
            .filter(tag_resources::dsl::tag_id.eq(id))
            .filter(tag_resources::dsl::resource_type.eq(resource_type))
            .filter(tag_resources::dsl::resource_id.eq(resource_id))
            .count()
            .get_result(self)?;
        if cnt == 0 {
            insert_into(tag_resources::dsl::tag_resources)
                .values((
                    tag_resources::dsl::tag_id.eq(id),
                    tag_resources::dsl::resource_type.eq(resource_type),
                    tag_resources::dsl::resource_id.eq(resource_id),
                ))
                .execute(self)?;
        }

        Ok(())
    }
    fn dissociate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()> {
        delete(
            tag_resources::dsl::tag_resources
                .filter(tag_resources::dsl::tag_id.eq(id))
                .filter(tag_resources::dsl::resource_type.eq(resource_type))
                .filter(tag_resources::dsl::resource_id.eq(resource_id)),
        )
        .execute(self)?;
        Ok(())
    }
}
