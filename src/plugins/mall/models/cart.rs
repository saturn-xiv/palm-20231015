use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
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
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn by_code(&self, code: &str) -> Result<Vec<Item>>;
    fn set(&self, code: &str, sku: i32, count: i32) -> Result<()>;
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

    fn set(&self, code: &str, sku: i32, count: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        match erp_carts::dsl::erp_carts
            .filter(erp_carts::dsl::code.eq(code))
            .filter(erp_carts::dsl::sku_id.eq(sku))
            .first::<Item>(self)
        {
            Ok(it) => {
                update(erp_carts::dsl::erp_carts.filter(erp_carts::dsl::id.eq(it.id)))
                    .set((
                        erp_carts::dsl::count.eq(count),
                        erp_carts::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
            Err(_) => {
                insert_into(erp_carts::dsl::erp_carts)
                    .values((
                        erp_carts::dsl::code.eq(code),
                        erp_carts::dsl::sku_id.eq(sku),
                        erp_carts::dsl::count.eq(count),
                        erp_carts::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        };

        Ok(())
    }

    fn destroy(&self, code: &str) -> Result<()> {
        delete(erp_carts::dsl::erp_carts.filter(erp_carts::dsl::code.eq(code))).execute(self)?;
        Ok(())
    }
}
