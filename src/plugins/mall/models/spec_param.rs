use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::erp_spec_params;

#[derive(Queryable, Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub spec_group_id: i32,
    pub code: String,
    pub name: String,
    pub unit: Option<String>,
    pub type_: String,
    pub segements: Option<Vec<u8>>,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_code(&self, code: &str) -> Result<Item>;
    fn units(&self) -> Result<Vec<String>>;
    fn create(
        &self,
        code: &str,
        name: &str,
        unit: Option<String>,
        type_: &str,
        segements: Option<&[u8]>,
    ) -> Result<()>;
    fn update(
        &self,
        id: i32,
        code: &str,
        name: &str,
        unit: Option<String>,
        type_: &str,
        segements: Option<&[u8]>,
    ) -> Result<()>;
    fn all(&self) -> Result<Vec<Item>>;
    fn destroy(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = erp_spec_params::dsl::erp_spec_params
            .filter(erp_spec_params::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_code(&self, code: &str) -> Result<Item> {
        let it = erp_spec_params::dsl::erp_spec_params
            .filter(erp_spec_params::dsl::code.eq(code))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn units(&self) -> Result<Vec<String>> {
        Ok(erp_spec_params::dsl::erp_spec_params
            .select(erp_spec_params::dsl::unit)
            .filter(erp_spec_params::dsl::unit.is_not_null())
            .distinct()
            .load::<Option<String>>(self)?
            .iter()
            .map(|x| x.as_ref().unwrap().clone())
            .collect())
    }
    fn create(
        &self,
        code: &str,
        name: &str,
        unit: Option<String>,
        type_: &str,
        segements: Option<&[u8]>,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        let code = code.trim().to_lowercase();
        insert_into(erp_spec_params::dsl::erp_spec_params)
            .values((
                erp_spec_params::dsl::code.eq(code),
                erp_spec_params::dsl::name.eq(name),
                erp_spec_params::dsl::unit.eq(unit),
                erp_spec_params::dsl::type_.eq(type_),
                erp_spec_params::dsl::segements.eq(segements),
                erp_spec_params::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn update(
        &self,
        id: i32,
        code: &str,
        name: &str,
        unit: Option<String>,
        type_: &str,
        segements: Option<&[u8]>,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        let code = code.trim().to_lowercase();
        update(erp_spec_params::dsl::erp_spec_params.filter(erp_spec_params::dsl::id.eq(id)))
            .set((
                erp_spec_params::dsl::code.eq(code),
                erp_spec_params::dsl::name.eq(name),
                erp_spec_params::dsl::unit.eq(unit),
                erp_spec_params::dsl::type_.eq(type_),
                erp_spec_params::dsl::segements.eq(segements),
                erp_spec_params::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = erp_spec_params::dsl::erp_spec_params
            .order(erp_spec_params::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn destroy(&self, id: i32) -> Result<()> {
        delete(erp_spec_params::dsl::erp_spec_params.filter(erp_spec_params::dsl::id.eq(id)))
            .execute(self)?;
        Ok(())
    }
}
