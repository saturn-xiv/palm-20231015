use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use nut::orm::postgresql::Connection;
use palm::{
    nut::v1::media_content::{Editor, Status},
    Result,
};
use serde::Serialize;

use super::super::schema::flashcard_books;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub subject: String,
    pub editor: i32,
    pub description: String,
    pub cover: Option<String>,
    pub user_id: i32,
    pub tag_id: i32,
    pub status: i32,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn get(&mut self, id: i32) -> Result<Item>;
    fn by_user(&mut self, user: i32) -> Result<Vec<Item>>;
    fn create(
        &mut self,
        user: i32,
        tag: i32,
        subject: &str,
        description: &str,
        editor: Editor,
    ) -> Result<()>;
    fn update(&mut self, id: i32, subject: &str, description: &str, editor: Editor) -> Result<()>;
    fn set_cover(&mut self, id: i32, cover: &str) -> Result<()>;
    fn destroy(&mut self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn get(&mut self, id: i32) -> Result<Item> {
        Ok(flashcard_books::dsl::flashcard_books
            .filter(flashcard_books::dsl::id.eq(id))
            .first::<Item>(self)?)
    }

    fn by_user(&mut self, user: i32) -> Result<Vec<Item>> {
        Ok(flashcard_books::dsl::flashcard_books
            .filter(flashcard_books::dsl::user_id.eq(user))
            .order_by(flashcard_books::dsl::updated_at.desc())
            .load::<_>(self)?)
    }
    fn create(
        &mut self,
        user: i32,
        tag: i32,
        subject: &str,
        description: &str,
        editor: Editor,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(flashcard_books::dsl::flashcard_books)
            .values((
                flashcard_books::dsl::user_id.eq(user),
                flashcard_books::dsl::tag_id.eq(tag),
                flashcard_books::dsl::subject.eq(subject),
                flashcard_books::dsl::editor.eq(editor as i32),
                flashcard_books::dsl::description.eq(description),
                flashcard_books::dsl::status.eq(Status::Private as i32),
                flashcard_books::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&mut self, id: i32, subject: &str, description: &str, editor: Editor) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(flashcard_books::dsl::flashcard_books.filter(flashcard_books::dsl::id.eq(id)))
            .set((
                flashcard_books::dsl::subject.eq(subject),
                flashcard_books::dsl::editor.eq(editor as i32),
                flashcard_books::dsl::description.eq(description),
                flashcard_books::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn set_cover(&mut self, id: i32, cover: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(flashcard_books::dsl::flashcard_books.filter(flashcard_books::dsl::id.eq(id)))
            .set((
                flashcard_books::dsl::cover.eq(Some(cover.to_string())),
                flashcard_books::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(flashcard_books::dsl::flashcard_books.filter(flashcard_books::dsl::id.eq(id)))
            .execute(self)?;
        Ok(())
    }
}
