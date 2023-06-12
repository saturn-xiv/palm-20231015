use chrono::{NaiveDateTime, Utc};
use diesel::{insert_into, prelude::*, sqlite::SqliteConnection as Connection, update};
use palm::Result;
use serde::{Deserialize, Serialize};

use super::super::schema::users;

#[derive(Queryable)]
pub struct Item {
    pub id: i32,
    pub name: String,
    pub contact: Vec<u8>,
    pub updated_at: NaiveDateTime,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Contact {
    pub wechat: Option<String>,
    pub phone: Option<String>,
    pub email: Option<String>,
}

pub trait Dao {
    fn create(&mut self, name: &str, contact: &Contact) -> Result<()>;
    fn update(&mut self, id: i32, name: &str, contact: &Contact) -> Result<()>;
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_name(&mut self, name: &str) -> Result<Item>;
    fn all(&mut self) -> Result<Vec<Item>>;
}

impl Dao for Connection {
    fn create(&mut self, name: &str, contact: &Contact) -> Result<()> {
        let contact = flexbuffers::to_vec(contact)?;

        let now = Utc::now().naive_utc();
        insert_into(users::dsl::users)
            .values((
                users::dsl::name.eq(name),
                users::dsl::contact.eq(&contact),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&mut self, id: i32, name: &str, contact: &Contact) -> Result<()> {
        let contact = flexbuffers::to_vec(contact)?;

        let now = Utc::now().naive_utc();
        let it = users::dsl::users.filter(users::dsl::id.eq(&id));

        update(it)
            .set((
                users::dsl::name.eq(name),
                users::dsl::contact.eq(&contact),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_name(&mut self, name: &str) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::name.eq(name))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn all(&mut self) -> Result<Vec<Item>> {
        let items = users::dsl::users
            .order(users::dsl::name.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
}
