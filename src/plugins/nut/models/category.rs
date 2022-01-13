use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::{categories, categories_resources};
use super::{Color, Font, Icon};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub name: String,
    pub parent_id: Option<i32>,
    pub order: i32,
    pub font: Vec<u8>,
    pub icon: Vec<u8>,
    pub color: Vec<u8>,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&self, id: i32) -> Result<Item>;
    fn create(
        &self,
        parent: Option<i32>,
        code: &str,
        name: &str,
        font: &Font,
        icon: &Icon,
        color: &Color,
        order: i32,
    ) -> Result<()>;
    fn update(
        &self,
        id: i32,
        parent: Option<i32>,
        code: &str,
        name: &str,
        font: &Font,
        icon: &Icon,
        color: &Color,
        order: i32,
    ) -> Result<()>;
    fn all(&self) -> Result<Vec<Item>>;
    fn delete(&self, id: i32) -> Result<()>;
    fn bind(&self, categories: &[i32], rty: &str, rid: i32) -> Result<()>;
    fn unbind(&self, rty: &str, rid: i32) -> Result<()>;
    fn resources(&self, category: i32, rty: &str) -> Result<Vec<i32>>;
    fn children(&self, category: Option<i32>) -> Result<Vec<Item>>;
}

impl Dao for Connection {
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = categories::dsl::categories
            .filter(categories::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(
        &self,
        parent: Option<i32>,
        code: &str,
        name: &str,
        font: &Font,
        icon: &Icon,
        color: &Color,
        order: i32,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();

        insert_into(categories::dsl::categories)
            .values((
                categories::dsl::parent_id.eq(parent),
                categories::dsl::code.eq(code),
                categories::dsl::name.eq(name),
                categories::dsl::font.eq(&flexbuffers::to_vec(font)?),
                categories::dsl::icon.eq(&flexbuffers::to_vec(icon)?),
                categories::dsl::color.eq(&flexbuffers::to_vec(color)?),
                categories::dsl::order.eq(&order),
                categories::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn update(
        &self,
        id: i32,
        parent: Option<i32>,
        code: &str,
        name: &str,
        font: &Font,
        icon: &Icon,
        color: &Color,
        order: i32,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(categories::dsl::categories.filter(categories::dsl::id.eq(id)))
            .set((
                categories::dsl::parent_id.eq(parent),
                categories::dsl::code.eq(code),
                categories::dsl::name.eq(name),
                categories::dsl::font.eq(&flexbuffers::to_vec(font)?),
                categories::dsl::icon.eq(&flexbuffers::to_vec(icon)?),
                categories::dsl::color.eq(&flexbuffers::to_vec(color)?),
                categories::dsl::order.eq(&order),
                categories::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = categories::dsl::categories
            .order(categories::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(categories::dsl::categories.filter(categories::dsl::parent_id.eq(&Some(id))))
            .set((
                categories::dsl::parent_id.eq(&None::<i32>),
                categories::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        delete(
            categories_resources::dsl::categories_resources
                .filter(categories_resources::dsl::id.eq(id)),
        )
        .execute(self)?;
        delete(categories::dsl::categories.filter(categories::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }

    fn bind(&self, categories: &[i32], rty: &str, rid: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        for it in categories {
            insert_into(categories_resources::dsl::categories_resources)
                .values((
                    categories_resources::dsl::category_id.eq(it),
                    categories_resources::dsl::resource_id.eq(&rid),
                    categories_resources::dsl::resource_type.eq(&rty),
                    categories_resources::dsl::created_at.eq(&now),
                ))
                .execute(self)?;
        }
        Ok(())
    }
    fn unbind(&self, rty: &str, rid: i32) -> Result<()> {
        delete(
            categories_resources::dsl::categories_resources
                .filter(categories_resources::dsl::resource_type.eq(rty))
                .filter(categories_resources::dsl::resource_id.eq(rid)),
        )
        .execute(self)?;
        Ok(())
    }
    fn resources(&self, category: i32, rty: &str) -> Result<Vec<i32>> {
        let items = categories_resources::dsl::categories_resources
            .select(categories_resources::dsl::resource_id)
            .filter(categories_resources::dsl::category_id.eq(category))
            .filter(categories_resources::dsl::resource_type.eq(rty))
            .order(categories_resources::dsl::created_at.desc())
            .load::<i32>(self)?;
        Ok(items)
    }
    fn children(&self, parent: Option<i32>) -> Result<Vec<Item>> {
        let items = if parent == None {
            categories::dsl::categories
                .filter(categories::dsl::parent_id.is_null())
                .order(categories::dsl::order.asc())
                .load::<Item>(self)?
        } else {
            categories::dsl::categories
                .filter(categories::dsl::parent_id.eq(parent))
                .order(categories::dsl::order.asc())
                .load::<Item>(self)?
        };

        Ok(items)
    }
}
