use std::any::type_name;

use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::notifications;
use super::{page_content::Dao as PageContentDao, Resource, WYSIWYG};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub user_id: Uuid,
    pub url: String,
    pub level: String,
    pub read: bool,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn read(&self, id: Uuid) -> Result<()>;
    fn create(&self, user: Uuid, url: &str, body: &WYSIWYG, level: &str) -> Result<()>;
    fn delete(&self, id: Uuid) -> Result<()>;
}

impl Dao for Connection {
    fn create(&self, user: Uuid, url: &str, body: &WYSIWYG, level: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let id = Uuid::new_v4();
        insert_into(notifications::dsl::notifications)
            .values((
                notifications::dsl::id.eq(id),
                notifications::dsl::user_id.eq(user),
                notifications::dsl::url.eq(url),
                notifications::dsl::level.eq(level),
                notifications::dsl::updated_at.eq(&now),
            ))
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
    fn read(&self, id: Uuid) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(notifications::dsl::notifications.filter(notifications::dsl::id.eq(id)))
            .set((
                notifications::dsl::read.eq(true),
                notifications::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;

        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = notifications::dsl::notifications
            .order(notifications::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: Uuid) -> Result<()> {
        delete(notifications::dsl::notifications.filter(notifications::dsl::id.eq(id)))
            .execute(self)?;
        Ok(())
    }
}
