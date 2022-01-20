use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::super::nut::models::WYSIWYG;
use super::super::schema::forum_posts;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub topic_id: i32,
    pub body: String,
    pub body_editor: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&self) -> Result<Vec<Item>>;
    fn count(&self) -> Result<i64>;
    fn by_topic(&self, topic: i32) -> Result<Vec<Item>>;
    fn by_id(&self, id: i32) -> Result<Item>;
    fn create(&self, user: i32, topic: i32, body: &WYSIWYG) -> Result<()>;
    fn update(&self, id: i32, body: &WYSIWYG) -> Result<()>;
    fn delete(&self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = forum_posts::dsl::forum_posts
            .filter(forum_posts::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&self, user: i32, topic: i32, body: &WYSIWYG) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(forum_posts::dsl::forum_posts)
            .values((
                forum_posts::dsl::user_id.eq(user),
                forum_posts::dsl::topic_id.eq(topic),
                forum_posts::dsl::body.eq(&body.content),
                forum_posts::dsl::body_editor.eq(&body.editor.to_string()),
                forum_posts::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn update(&self, id: i32, body: &WYSIWYG) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(forum_posts::dsl::forum_posts.filter(forum_posts::dsl::id.eq(id)))
            .set((
                forum_posts::dsl::body.eq(&body.content),
                forum_posts::dsl::body_editor.eq(&body.editor.to_string()),
                forum_posts::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = forum_posts::dsl::forum_posts
            .order(forum_posts::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn count(&self) -> Result<i64> {
        let cnt: i64 = forum_posts::dsl::forum_posts.count().get_result(self)?;
        Ok(cnt)
    }
    fn by_topic(&self, topic: i32) -> Result<Vec<Item>> {
        let items = forum_posts::dsl::forum_posts
            .filter(forum_posts::dsl::topic_id.eq(topic))
            .order(forum_posts::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn delete(&self, id: i32) -> Result<()> {
        delete(forum_posts::dsl::forum_posts.filter(forum_posts::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
