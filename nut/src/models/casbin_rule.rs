use diesel::prelude::*;
use palm::Result;
use serde::Serialize;

use super::super::{orm::postgresql::Connection, schema::casbin_rule};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub ptype: String,
    pub v0: String,
    pub v1: String,
    pub v2: String,
    pub v3: String,
    pub v4: String,
    pub v5: String,
}

pub trait Dao {
    fn all(&mut self) -> Result<Vec<Item>>;
}

impl Dao for Connection {
    fn all(&mut self) -> Result<Vec<Item>> {
        let items = casbin_rule::dsl::casbin_rule
            .order(casbin_rule::dsl::id.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
}
