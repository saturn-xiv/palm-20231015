use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use nut::orm::postgresql::Connection;
use palm::{nut::v1::media_content::Editor, Result};
use serde::Serialize;

use super::super::schema::flashcard_quizzes;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub book_id: i32,
    pub subject: String,
    pub content: String,
    pub editor: i32,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn get(&mut self, id: i32) -> Result<Item>;
    fn by_book(&mut self, book: i32) -> Result<Vec<Item>>;
    fn create(&mut self, book: i32, subject: &str, content: &str, editor: Editor) -> Result<()>;
    fn update(&mut self, id: i32, subject: &str, content: &str, editor: Editor) -> Result<()>;
    fn destroy(&mut self, id: i32) -> Result<()>;
    fn destroy_by_book(&mut self, book: i32) -> Result<()>;
}

impl Dao for Connection {
    fn get(&mut self, id: i32) -> Result<Item> {
        Ok(flashcard_quizzes::dsl::flashcard_quizzes
            .filter(flashcard_quizzes::dsl::id.eq(id))
            .first::<Item>(self)?)
    }

    fn by_book(&mut self, book: i32) -> Result<Vec<Item>> {
        Ok(flashcard_quizzes::dsl::flashcard_quizzes
            .filter(flashcard_quizzes::dsl::book_id.eq(book))
            .order_by(flashcard_quizzes::dsl::updated_at.desc())
            .load::<_>(self)?)
    }
    fn create(&mut self, book: i32, subject: &str, content: &str, editor: Editor) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(flashcard_quizzes::dsl::flashcard_quizzes)
            .values((
                flashcard_quizzes::dsl::book_id.eq(book),
                flashcard_quizzes::dsl::subject.eq(subject),
                flashcard_quizzes::dsl::editor.eq(editor as i32),
                flashcard_quizzes::dsl::content.eq(content),
                flashcard_quizzes::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&mut self, id: i32, subject: &str, content: &str, editor: Editor) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(flashcard_quizzes::dsl::flashcard_quizzes.filter(flashcard_quizzes::dsl::id.eq(id)))
            .set((
                flashcard_quizzes::dsl::subject.eq(subject),
                flashcard_quizzes::dsl::editor.eq(editor as i32),
                flashcard_quizzes::dsl::content.eq(content),
                flashcard_quizzes::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(flashcard_quizzes::dsl::flashcard_quizzes.filter(flashcard_quizzes::dsl::id.eq(id)))
            .execute(self)?;
        Ok(())
    }
    fn destroy_by_book(&mut self, book: i32) -> Result<()> {
        delete(
            flashcard_quizzes::dsl::flashcard_quizzes
                .filter(flashcard_quizzes::dsl::book_id.eq(book)),
        )
        .execute(self)?;
        Ok(())
    }
}
