use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::erp_carts;

#[derive(Queryable, Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub sku_id: i32,
    pub count: i32,
    pub created_at: NaiveDateTime,
}

pub struct Sku {
    pub id: i32,
    pub count: i32,
}

pub trait Dao {
    fn by_code(&self, code: &str) -> Result<Vec<Item>>;
    fn create(&self, code: &str, items: &[Sku]) -> Result<()>;
    fn destroy(&self, code: &str) -> Result<()>;
}

impl Dao for Connection {
    fn by_code(&self, code: &str) -> Result<Vec<Item>> {
        let items = erp_carts::dsl::erp_carts
            .filter(erp_carts::dsl::code.eq(code))
            .order(erp_carts::dsl::created_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn create(&self, code: &str, items: &[Sku]) -> Result<()> {
        for it in items.iter() {
            insert_into(erp_carts::dsl::erp_carts)
                .values((
                    erp_carts::dsl::code.eq(code),
                    erp_carts::dsl::sku_id.eq(it.id),
                    erp_carts::dsl::count.eq(it.count),
                ))
                .execute(self)?;
        }
        Ok(())
    }

    fn destroy(&self, code: &str) -> Result<()> {
        delete(erp_carts::dsl::erp_carts.filter(erp_carts::dsl::code.eq(code))).execute(self)?;
        Ok(())
    }
}
