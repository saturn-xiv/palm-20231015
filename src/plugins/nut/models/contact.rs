use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use juniper::GraphQLInputObject;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::contacts;
use super::Resource;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub resource_type: String,
    pub resouce_id: Uuid,
    pub code: String,
    pub value: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Serialize, Deserialize, GraphQLInputObject)]
pub struct Property {
    pub code: String,
    pub value: String,
}

pub trait Dao {
    fn by_resource(&self, rescource: &Resource) -> Result<Vec<Item>>;
    fn codes(&self) -> Result<Vec<String>>;
    fn save(&self, resource: &Resource, property: &Property) -> Result<()>;
    fn destroy(&self, id: Uuid) -> Result<()>;
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
    fn save(&self, resource: &Resource, property: &Property) -> Result<()> {
        let now = Utc::now().naive_utc();
        match contacts::dsl::contacts
            .filter(contacts::dsl::resource_type.eq(&resource.type_))
            .filter(contacts::dsl::resource_id.eq(resource.id))
            .filter(contacts::dsl::code.eq(&property.code))
            .first::<Item>(self)
        {
            Ok(it) => {
                let filter = contacts::dsl::contacts.filter(contacts::dsl::id.eq(it.id));
                update(filter)
                    .set((
                        contacts::dsl::value.eq(&property.value),
                        contacts::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
            Err(_) => {
                insert_into(contacts::dsl::contacts)
                    .values((
                        contacts::dsl::resource_type.eq(&resource.type_),
                        contacts::dsl::resource_id.eq(&resource.id),
                        contacts::dsl::code.eq(&property.code),
                        contacts::dsl::value.eq(&property.value),
                        contacts::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        };

        Ok(())
    }
    fn destroy(&self, id: Uuid) -> Result<()> {
        delete(contacts::dsl::contacts.filter(contacts::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
