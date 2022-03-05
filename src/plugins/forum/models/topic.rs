use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::Connection, Result};
use super::super::super::nut::models::{Status, WYSIWYG};
use super::super::schema::{forum_posts, forum_topics};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub user_id: Uuid,
    pub title: String,
    pub summary: String,
    pub body: String,
    pub body_editor: String,
    pub state: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn by_id(&self, id: Uuid) -> Result<Item>;
    fn create(&self, user: Uuid, title: &str, summary: &str, body: &WYSIWYG) -> Result<()>;
    fn update(&self, id: Uuid, title: &str, summary: &str, body: &WYSIWYG) -> Result<()>;
    fn all(&self) -> Result<Vec<Item>>;
    fn count(&self) -> Result<i64>;
    fn delete(&self, id: Uuid) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&self, id: Uuid) -> Result<Item> {
        let it = forum_topics::dsl::forum_topics
            .filter(forum_topics::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&self, user: Uuid, title: &str, summary: &str, body: &WYSIWYG) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(forum_topics::dsl::forum_topics)
            .values((
                forum_topics::dsl::user_id.eq(user),
                forum_topics::dsl::title.eq(title),
                forum_topics::dsl::summary.eq(summary),
                forum_topics::dsl::body.eq(&body.content),
                forum_topics::dsl::body_editor.eq(&body.editor.to_string()),
                forum_topics::dsl::status.eq(&serde_json::to_string(&Status::Pending)?),
                forum_topics::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn update(&self, id: Uuid, title: &str, summary: &str, body: &WYSIWYG) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(forum_topics::dsl::forum_topics.filter(forum_topics::dsl::id.eq(id)))
            .set((
                forum_topics::dsl::title.eq(title),
                forum_topics::dsl::summary.eq(summary),
                forum_topics::dsl::body.eq(&body.content),
                forum_topics::dsl::body_editor.eq(&body.editor.to_string()),
                forum_topics::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = forum_topics::dsl::forum_topics
            .order(forum_topics::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn count(&self) -> Result<i64> {
        let cnt: i64 = forum_topics::dsl::forum_topics.count().get_result(self)?;
        Ok(cnt)
    }

    fn delete(&self, id: Uuid) -> Result<()> {
        delete(forum_posts::dsl::forum_posts.filter(forum_posts::dsl::topic_id.eq(id)))
            .execute(self)?;
        delete(forum_topics::dsl::forum_topics.filter(forum_topics::dsl::id.eq(id)))
            .execute(self)?;
        Ok(())
    }
}
