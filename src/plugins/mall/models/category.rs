use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::{erp_categories, erp_categories_brands};

#[derive(Queryable, Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub name: String,
    pub parent_id: Option<i32>,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_code(&self, code: &str) -> Result<Item>;
    fn create(&self, code: &str, name: &str, parent: Option<i32>) -> Result<()>;
    fn update(&self, id: i32, code: &str, name: &str, parent: Option<i32>) -> Result<()>;
    fn all(&self) -> Result<Vec<Item>>;
    fn destroy(&self, id: i32) -> Result<()>;
    fn associate(&self, category: i32, brand: i32) -> Result<()>;
    fn unassociate(&self, category: i32, brand: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = erp_categories::dsl::erp_categories
            .filter(erp_categories::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_code(&self, code: &str) -> Result<Item> {
        let it = erp_categories::dsl::erp_categories
            .filter(erp_categories::dsl::code.eq(code))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&self, code: &str, name: &str, parent: Option<i32>) -> Result<()> {
        let now = Utc::now().naive_utc();
        let code = code.trim().to_lowercase();
        insert_into(erp_categories::dsl::erp_categories)
            .values((
                erp_categories::dsl::code.eq(code),
                erp_categories::dsl::name.eq(name),
                erp_categories::dsl::parent_id.eq(parent),
                erp_categories::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn update(&self, id: i32, code: &str, name: &str, parent: Option<i32>) -> Result<()> {
        let now = Utc::now().naive_utc();
        let code = code.trim().to_lowercase();
        update(erp_categories::dsl::erp_categories.filter(erp_categories::dsl::id.eq(id)))
            .set((
                erp_categories::dsl::code.eq(code),
                erp_categories::dsl::name.eq(name),
                erp_categories::dsl::parent_id.eq(parent),
                erp_categories::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = erp_categories::dsl::erp_categories
            .order(erp_categories::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn destroy(&self, id: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(
            erp_categories::dsl::erp_categories
                .filter(erp_categories::dsl::parent_id.eq(&Some(id))),
        )
        .set((
            erp_categories::dsl::parent_id.eq(&None::<i32>),
            erp_categories::dsl::updated_at.eq(&now),
        ))
        .execute(self)?;
        delete(
            erp_categories_brands::dsl::erp_categories_brands
                .filter(erp_categories_brands::dsl::category_id.eq(id)),
        )
        .execute(self)?;
        delete(erp_categories::dsl::erp_categories.filter(erp_categories::dsl::id.eq(id)))
            .execute(self)?;
        Ok(())
    }
    fn associate(&self, category: i32, brand: i32) -> Result<()> {
        let cnt = erp_categories_brands::dsl::erp_categories_brands
            .filter(erp_categories_brands::dsl::category_id.eq(category))
            .filter(erp_categories_brands::dsl::brand_id.eq(brand))
            .count()
            .get_result::<i64>(self)?;
        if cnt == 0 {
            insert_into(erp_categories_brands::dsl::erp_categories_brands)
                .values((
                    erp_categories_brands::dsl::category_id.eq(category),
                    erp_categories_brands::dsl::brand_id.eq(brand),
                ))
                .execute(self)?;
        }
        Ok(())
    }
    fn unassociate(&self, category: i32, brand: i32) -> Result<()> {
        delete(
            erp_categories_brands::dsl::erp_categories_brands
                .filter(erp_categories_brands::dsl::category_id.eq(category))
                .filter(erp_categories_brands::dsl::brand_id.eq(brand)),
        )
        .execute(self)?;
        Ok(())
    }
}
