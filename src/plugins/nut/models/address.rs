use std::fmt;

use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use juniper::GraphQLInputObject;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::addresses;
use super::Resource;

#[derive(Queryable)]
pub struct Item {
    pub id: Uuid,
    pub resource_type: String,
    pub resouce_id: Uuid,
    pub gate: Option<String>,
    pub unit: Option<String>,
    pub street: String,
    pub city: String,
    pub state: String,
    pub country: String,
    pub zip: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Deserialize, Serialize, GraphQLInputObject)]
#[serde(rename_all = "camelCase")]
pub struct Address {
    pub unit: Option<String>,
    pub gate: Option<String>,
    pub street: String,
    pub city: String,
    pub state: String,
    pub country: String,
    pub zip: String,
}

impl fmt::Display for Address {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{} {} {} {} {} {}",
            self.unit.clone().unwrap_or_else(|| "".to_string()),
            self.street,
            self.city,
            self.state,
            self.country,
            self.zip
        )
    }
}

impl Address {
    pub async fn verify(&mut self) -> Result<()> {
        // TODO
        self.city = "todo".to_string();
        Ok(())
    }
}

pub trait Dao {
    fn by_resource(&self, rescource: &Resource) -> Result<Vec<Item>>;
    fn create(&self, resource: &Resource, address: &Address) -> Result<()>;
    fn update(&self, id: Uuid, address: &Address) -> Result<()>;
    fn destroy(&self, id: Uuid) -> Result<()>;
}

impl Dao for Connection {
    fn by_resource(&self, resource: &Resource) -> Result<Vec<Item>> {
        let items = addresses::dsl::addresses
            .filter(addresses::dsl::resource_type.eq(&resource.type_))
            .filter(addresses::dsl::resource_id.eq(resource.id))
            .order(addresses::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn create(&self, resource: &Resource, address: &Address) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(addresses::dsl::addresses)
            .values((
                addresses::dsl::resource_type.eq(&resource.type_),
                addresses::dsl::resource_id.eq(&resource.id),
                addresses::dsl::street.eq(&address.street),
                addresses::dsl::city.eq(&address.city),
                addresses::dsl::state.eq(&address.state),
                addresses::dsl::country.eq(&address.country),
                addresses::dsl::zip.eq(&address.zip),
                addresses::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&self, id: Uuid, address: &Address) -> Result<()> {
        let now = Utc::now().naive_utc();
        let filter = addresses::dsl::addresses.filter(addresses::dsl::id.eq(id));
        update(filter)
            .set((
                addresses::dsl::street.eq(&address.street),
                addresses::dsl::city.eq(&address.city),
                addresses::dsl::state.eq(&address.state),
                addresses::dsl::country.eq(&address.country),
                addresses::dsl::zip.eq(&address.zip),
                addresses::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn destroy(&self, id: Uuid) -> Result<()> {
        delete(addresses::dsl::addresses.filter(addresses::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
