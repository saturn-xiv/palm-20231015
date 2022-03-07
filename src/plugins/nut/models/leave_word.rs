use std::any::type_name;

use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use juniper::GraphQLObject;
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::leave_words;
use super::{page_content::Dao as PageContentDao, Resource, WYSIWYG};

#[derive(Queryable, GraphQLObject, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub ip: String,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn add(&self, ip: &str, body: &WYSIWYG) -> Result<()>;
    fn all(&self, limit: i64) -> Result<Vec<Item>>;
    fn delete(&self, id: Uuid) -> Result<()>;
}

impl Dao for Connection {
    fn add(&self, ip: &str, body: &WYSIWYG) -> Result<()> {
        let id = Uuid::new_v4();
        insert_into(leave_words::dsl::leave_words)
            .values((leave_words::dsl::id.eq(id), leave_words::dsl::ip.eq(ip)))
            .execute(self)?;
        PageContentDao::create(
            self,
            &Resource {
                type_: type_name::<Item>().to_string(),
                id,
            },
            body,
        )?;
        Ok(())
    }

    fn all(&self, limit: i64) -> Result<Vec<Item>> {
        let items = leave_words::dsl::leave_words
            .order(leave_words::dsl::created_at.desc())
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: Uuid) -> Result<()> {
        delete(leave_words::dsl::leave_words.filter(leave_words::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
