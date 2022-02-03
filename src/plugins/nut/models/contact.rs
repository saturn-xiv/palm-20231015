use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*};
use juniper::GraphQLInputObject;
use serde::{Deserialize, Serialize};

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::contacts;
use super::Resource;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub resource_type: String,
    pub resouce_id: i32,
    pub code: String,
    pub name: String,
    pub value: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Serialize, Deserialize, GraphQLInputObject)]
pub struct Property {
    pub code: String,
    pub name: String,
    pub value: String,
}

pub trait Dao {
    fn by_resource(&self, rescource: &Resource) -> Result<Vec<Item>>;
    fn codes(&self) -> Result<Vec<String>>;
    fn save(&self, resource: &Resource, items: &[Property]) -> Result<()>;
}

impl Dao for Connection {
    fn by_resource(&self, resource: &Resource) -> Result<Vec<Item>> {
        let items = contacts::dsl::contacts
            .filter(contacts::dsl::resource_type.eq(&resource.type_))
            .filter(contacts::dsl::resource_id.eq(resource.id))
            .order(contacts::dsl::code.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn codes(&self) -> Result<Vec<String>> {
        Ok(contacts::dsl::contacts
            .select(contacts::dsl::code)
            .distinct()
            .load::<String>(self)?)
    }
    fn save(&self, resource: &Resource, items: &[Property]) -> Result<()> {
        delete(
            contacts::dsl::contacts
                .filter(contacts::dsl::resource_id.eq(resource.id))
                .filter(contacts::dsl::resource_type.eq(&resource.type_)),
        )
        .execute(self)?;
        let now = Utc::now().naive_utc();
        for it in items.iter() {
            insert_into(contacts::dsl::contacts)
                .values((
                    contacts::dsl::resource_type.eq(&resource.type_),
                    contacts::dsl::resource_id.eq(&resource.id),
                    contacts::dsl::code.eq(&it.code),
                    contacts::dsl::name.eq(&it.name),
                    contacts::dsl::value.eq(&it.value),
                    contacts::dsl::updated_at.eq(&now),
                ))
                .execute(self)?;
        }
        Ok(())
    }
}
