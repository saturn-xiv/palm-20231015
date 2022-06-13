use std::any::type_name;

use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use serde::Serialize;

use super::super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::super::schema::vote_logs;
use super::super::Status;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub ip: String,
    pub score: i32,
    pub body: String,
    pub body_editor: String,
    pub resource_type: String,
    pub resource_id: i32,
    pub status: String,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}
pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_resource<T>(&mut self, resource_id: i32) -> Result<Vec<Item>>;
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count(&mut self) -> Result<i64>;
    fn by_user(&mut self, user: i32, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count_by_user(&mut self, user: i32) -> Result<i64>;
    fn create<T>(
        &mut self,
        user: i32,
        ip: &str,
        score: i32,
        body: &str,
        body_editor: &str,
        resource_id: i32,
    ) -> Result<()>;
    fn update(&mut self, id: i32, score: i32, body: &str) -> Result<()>;
    fn destroy(&mut self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = vote_logs::dsl::vote_logs
            .filter(vote_logs::dsl::id.eq(id))
            .first(self)?;
        Ok(it)
    }
    fn by_resource<T>(&mut self, resource_id: i32) -> Result<Vec<Item>> {
        let items = vote_logs::dsl::vote_logs
            .filter(vote_logs::dsl::resource_type.eq(type_name::<T>()))
            .filter(vote_logs::dsl::resource_id.eq(resource_id))
            .order(vote_logs::dsl::updated_at.desc())
            .load(self)?;
        Ok(items)
    }
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = vote_logs::dsl::vote_logs
            .order(vote_logs::dsl::updated_at.desc())
            .offset(offset)
            .limit(limit)
            .load(self)?;
        Ok(items)
    }
    fn count(&mut self) -> Result<i64> {
        let it = vote_logs::dsl::vote_logs.count().first(self)?;
        Ok(it)
    }
    fn by_user(&mut self, user: i32, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = vote_logs::dsl::vote_logs
            .filter(vote_logs::dsl::user_id.eq(user))
            .order(vote_logs::dsl::updated_at.desc())
            .offset(offset)
            .limit(limit)
            .load(self)?;
        Ok(items)
    }
    fn count_by_user(&mut self, user: i32) -> Result<i64> {
        let it = vote_logs::dsl::vote_logs
            .filter(vote_logs::dsl::user_id.eq(user))
            .count()
            .first(self)?;
        Ok(it)
    }
    fn create<T>(
        &mut self,
        user: i32,
        ip: &str,
        score: i32,
        body: &str,
        body_editor: &str,
        resource_id: i32,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();

        insert_into(vote_logs::dsl::vote_logs)
            .values((
                vote_logs::dsl::user_id.eq(user),
                vote_logs::dsl::ip.eq(ip),
                vote_logs::dsl::score.eq(score),
                vote_logs::dsl::body.eq(body),
                vote_logs::dsl::body_editor.eq(body_editor),
                vote_logs::dsl::resource_id.eq(resource_id),
                vote_logs::dsl::resource_type.eq(type_name::<T>()),
                vote_logs::dsl::status.eq(&serde_json::to_string(&Status::Pending)?),
                vote_logs::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn update(&mut self, id: i32, score: i32, body: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(vote_logs::dsl::vote_logs.filter(vote_logs::dsl::id.eq(id)))
            .set((
                vote_logs::dsl::score.eq(score),
                vote_logs::dsl::body.eq(body),
                vote_logs::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(vote_logs::dsl::vote_logs.filter(vote_logs::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
