use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use nut::orm::postgresql::Connection;
use palm::Result;
use serde::Serialize;

use super::super::schema::flashcard_scores;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub quiz_id: i32,
    pub user_id: i32,
    pub retry_times: i32,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn get(&mut self, id: i32) -> Result<Item>;
    fn by_user(&mut self, user: i32) -> Result<Vec<Item>>;
    fn by_quiz(&mut self, quiz: i32) -> Result<Vec<Item>>;
    fn create(&mut self, user: i32, quiz: i32, retry_times: i32) -> Result<()>;
    fn destroy_by_quiz(&mut self, quiz: i32) -> Result<()>;
}

impl Dao for Connection {
    fn get(&mut self, id: i32) -> Result<Item> {
        Ok(flashcard_scores::dsl::flashcard_scores
            .filter(flashcard_scores::dsl::id.eq(id))
            .first::<Item>(self)?)
    }
    fn by_user(&mut self, user: i32) -> Result<Vec<Item>> {
        Ok(flashcard_scores::dsl::flashcard_scores
            .filter(flashcard_scores::dsl::user_id.eq(user))
            .order_by(flashcard_scores::dsl::created_at.desc())
            .load::<_>(self)?)
    }
    fn by_quiz(&mut self, quiz: i32) -> Result<Vec<Item>> {
        Ok(flashcard_scores::dsl::flashcard_scores
            .filter(flashcard_scores::dsl::quiz_id.eq(quiz))
            .order_by(flashcard_scores::dsl::created_at.desc())
            .load::<_>(self)?)
    }
    fn create(&mut self, user: i32, quiz: i32, retry_times: i32) -> Result<()> {
        insert_into(flashcard_scores::dsl::flashcard_scores)
            .values((
                flashcard_scores::dsl::user_id.eq(user),
                flashcard_scores::dsl::quiz_id.eq(quiz),
                flashcard_scores::dsl::retry_times.eq(retry_times),
            ))
            .execute(self)?;
        Ok(())
    }

    fn destroy_by_quiz(&mut self, quiz: i32) -> Result<()> {
        delete(
            flashcard_scores::dsl::flashcard_scores.filter(flashcard_scores::dsl::quiz_id.eq(quiz)),
        )
        .execute(self)?;
        Ok(())
    }
}
