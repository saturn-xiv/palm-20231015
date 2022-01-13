use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::friend_links;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub title: String,
    pub home: String,
    pub logo: Option<String>,
    pub order: i32,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&self, id: i32) -> Result<Item>;
    fn create(&self, title: &str, home: &str, logo: Option<&str>, order: i32) -> Result<()>;
    fn update(
        &self,
        id: i32,
        title: &str,
        home: &str,
        logo: Option<&str>,
        order: i32,
    ) -> Result<()>;
    fn all(&self) -> Result<Vec<Item>>;
    fn delete(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = friend_links::dsl::friend_links
            .filter(friend_links::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&self, title: &str, home: &str, logo: Option<&str>, order: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(friend_links::dsl::friend_links)
            .values((
                friend_links::dsl::title.eq(title),
                friend_links::dsl::home.eq(home),
                friend_links::dsl::logo.eq(logo),
                friend_links::dsl::order.eq(order),
                friend_links::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn update(
        &self,
        id: i32,
        title: &str,
        home: &str,
        logo: Option<&str>,
        order: i32,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(friend_links::dsl::friend_links.filter(friend_links::dsl::id.eq(id)))
            .set((
                friend_links::dsl::title.eq(title),
                friend_links::dsl::home.eq(home),
                friend_links::dsl::logo.eq(logo),
                friend_links::dsl::order.eq(order),
                friend_links::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = friend_links::dsl::friend_links
            .order(friend_links::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: i32) -> Result<()> {
        delete(friend_links::dsl::friend_links.filter(friend_links::dsl::id.eq(id)))
            .execute(self)?;
        Ok(())
    }
}
