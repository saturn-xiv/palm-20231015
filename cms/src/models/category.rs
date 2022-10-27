use auth::orm::postgresql::Connection;
use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use palm::Result;
use serde::Serialize;

use super::super::schema::{categories, categories_resources};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub left: i32,
    pub right: i32,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn create(&mut self, code: &str, left: i32, right: i32) -> Result<()>;
    fn update(&mut self, id: i32, code: &str, left: i32, right: i32) -> Result<()>;
    fn all(&mut self) -> Result<Vec<Item>>;
    fn children(&mut self, id: i32) -> Result<Vec<Item>>;
    fn destroy(&mut self, id: i32) -> Result<()>;
    fn associate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()>;
    fn dissociate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        Ok(categories::dsl::categories
            .filter(categories::dsl::id.eq(id))
            .first::<Item>(self)?)
    }

    fn create(&mut self, code: &str, left: i32, right: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(categories::dsl::categories)
            .values((
                categories::dsl::code.eq(code),
                categories::dsl::left.eq(left),
                categories::dsl::right.eq(right),
                categories::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&mut self, id: i32, code: &str, left: i32, right: i32) -> Result<()> {
        let it = categories::dsl::categories.filter(categories::dsl::id.eq(&id));
        let now = Utc::now().naive_utc();
        update(it)
            .set((
                categories::dsl::code.eq(code),
                categories::dsl::left.eq(left),
                categories::dsl::right.eq(right),
                categories::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn all(&mut self) -> Result<Vec<Item>> {
        Ok(categories::dsl::categories
            .order(categories::dsl::left.asc())
            .load::<Item>(self)?)
    }
    fn children(&mut self, id: i32) -> Result<Vec<Item>> {
        let it = self.by_id(id)?;
        Ok(categories::dsl::categories
            .filter(categories::dsl::left.gt(it.left))
            .filter(categories::dsl::right.lt(it.right))
            .order(categories::dsl::left.asc())
            .load::<Item>(self)?)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(
            categories_resources::dsl::categories_resources
                .filter(categories_resources::dsl::category_id.eq(id)),
        )
        .execute(self)?;
        delete(categories::dsl::categories.filter(categories::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
    fn associate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()> {
        let cnt: i64 = categories_resources::dsl::categories_resources
            .filter(categories_resources::dsl::category_id.eq(id))
            .filter(categories_resources::dsl::resource_type.eq(resource_type))
            .filter(categories_resources::dsl::resource_id.eq(resource_id))
            .count()
            .get_result(self)?;
        if cnt == 0 {
            insert_into(categories_resources::dsl::categories_resources)
                .values((
                    categories_resources::dsl::category_id.eq(id),
                    categories_resources::dsl::resource_type.eq(resource_type),
                    categories_resources::dsl::resource_id.eq(resource_id),
                ))
                .execute(self)?;
        }

        Ok(())
    }
    fn dissociate(&mut self, id: i32, resource_type: &str, resource_id: i32) -> Result<()> {
        delete(
            categories_resources::dsl::categories_resources
                .filter(categories_resources::dsl::category_id.eq(id))
                .filter(categories_resources::dsl::resource_type.eq(resource_type))
                .filter(categories_resources::dsl::resource_id.eq(resource_id)),
        )
        .execute(self)?;
        Ok(())
    }
}

// TODO
pub trait Adapter {
    fn create(&mut self, code: &str, left: i32, right: i32) -> Result<()>;
    fn delete(&mut self, id: i32) -> Result<()>;
    fn update(&mut self, code: &str, left_id: i32, right_id: i32) -> Result<()>;
}
