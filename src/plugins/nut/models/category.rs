use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::{categories, categories_resources};
use super::Resource;

#[derive(Queryable, Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub code: String,
    pub parent_id: Option<Uuid>,
    pub order: i32,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&self, id: Uuid) -> Result<Item>;
    fn create(&self, parent: Option<Uuid>, code: &str, order: i32) -> Result<()>;
    fn update(&self, id: Uuid, parent: Option<Uuid>, code: &str, order: i32) -> Result<()>;
    fn all(&self) -> Result<Vec<Item>>;
    fn destroy(&self, id: Uuid) -> Result<()>;
    fn associate(&self, category: Uuid, resource: &Resource) -> Result<()>;
    fn unassociate(&self, category: Uuid, resouce: &Resource) -> Result<()>;
    fn resources(&self, category: Uuid, rty: &str) -> Result<Vec<Uuid>>;
    fn children(&self, category: Option<Uuid>) -> Result<Vec<Item>>;
}

impl Dao for Connection {
    fn by_id(&self, id: Uuid) -> Result<Item> {
        let it = categories::dsl::categories
            .filter(categories::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&self, parent: Option<Uuid>, code: &str, order: i32) -> Result<()> {
        let now = Utc::now().naive_utc();

        insert_into(categories::dsl::categories)
            .values((
                categories::dsl::parent_id.eq(parent),
                categories::dsl::code.eq(code),
                categories::dsl::order.eq(&order),
                categories::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn update(&self, id: Uuid, parent: Option<Uuid>, code: &str, order: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(categories::dsl::categories.filter(categories::dsl::id.eq(id)))
            .set((
                categories::dsl::parent_id.eq(parent),
                categories::dsl::code.eq(code),
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

    fn destroy(&self, id: Uuid) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(categories::dsl::categories.filter(categories::dsl::parent_id.eq(&Some(id))))
            .set((
                categories::dsl::parent_id.eq(&None::<Uuid>),
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

    fn associate(&self, category: Uuid, resource: &Resource) -> Result<()> {
        let now = Utc::now().naive_utc();
        let cnt: i64 = categories_resources::dsl::categories_resources
            .filter(categories_resources::dsl::category_id.eq(category))
            .filter(categories_resources::dsl::resource_type.eq(&resource.type_))
            .filter(categories_resources::dsl::resource_id.eq(resource.id))
            .count()
            .get_result(self)?;

        if cnt == 0 {
            insert_into(categories_resources::dsl::categories_resources)
                .values((
                    categories_resources::dsl::category_id.eq(category),
                    categories_resources::dsl::resource_id.eq(resource.id),
                    categories_resources::dsl::resource_type.eq(&resource.type_),
                    categories_resources::dsl::created_at.eq(&now),
                ))
                .execute(self)?;
        }

        Ok(())
    }
    fn unassociate(&self, category: Uuid, resource: &Resource) -> Result<()> {
        delete(
            categories_resources::dsl::categories_resources
                .filter(categories_resources::dsl::category_id.eq(category))
                .filter(categories_resources::dsl::resource_type.eq(&resource.type_))
                .filter(categories_resources::dsl::resource_id.eq(resource.id)),
        )
        .execute(self)?;
        Ok(())
    }
    fn resources(&self, category: Uuid, rty: &str) -> Result<Vec<Uuid>> {
        let items = categories_resources::dsl::categories_resources
            .select(categories_resources::dsl::resource_id)
            .filter(categories_resources::dsl::category_id.eq(category))
            .filter(categories_resources::dsl::resource_type.eq(rty))
            .order(categories_resources::dsl::created_at.desc())
            .load::<Uuid>(self)?;
        Ok(items)
    }
    fn children(&self, parent: Option<Uuid>) -> Result<Vec<Item>> {
        let items = match parent {
            Some(parent) => categories::dsl::categories
                .filter(categories::dsl::parent_id.eq(parent))
                .order(categories::dsl::order.asc())
                .load::<Item>(self)?,
            None => categories::dsl::categories
                .filter(categories::dsl::parent_id.is_null())
                .order(categories::dsl::order.asc())
                .load::<Item>(self)?,
        };
        Ok(items)
    }
}
