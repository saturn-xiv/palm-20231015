use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use palm::{
    nut::v1::media_content::{Editor as MediaContentEditor, Status as MediaContentStatus},
    orm::postgresql::Connection,
    schema::vote_logs,
    Result,
};
use serde::Serialize;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub ip: String,
    pub score: i32,
    pub body: String,
    pub editor: i32,
    pub resource_type: String,
    pub resource_id: i32,
    pub status: i32,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}
pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_resource(&mut self, type_: &str, id: i32) -> Result<Vec<Item>>;
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count(&mut self) -> Result<i64>;
    fn by_user(&mut self, user: i32, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count_by_user(&mut self, user: i32) -> Result<i64>;
    fn create(
        &mut self,
        user: i32,
        ip: &str,
        score: i32,
        body: &str,
        editor: MediaContentEditor,
        resource_type: &str,
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
    fn by_resource(&mut self, type_: &str, id: i32) -> Result<Vec<Item>> {
        let items = vote_logs::dsl::vote_logs
            .filter(vote_logs::dsl::resource_type.eq(type_))
            .filter(vote_logs::dsl::resource_id.eq(id))
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
    fn create(
        &mut self,
        user: i32,
        ip: &str,
        score: i32,
        body: &str,
        editor: MediaContentEditor,
        resource_type: &str,
        resource_id: i32,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();

        insert_into(vote_logs::dsl::vote_logs)
            .values((
                vote_logs::dsl::user_id.eq(user),
                vote_logs::dsl::ip.eq(ip),
                vote_logs::dsl::score.eq(score),
                vote_logs::dsl::body.eq(body),
                vote_logs::dsl::editor.eq(editor as i32),
                vote_logs::dsl::resource_id.eq(resource_id),
                vote_logs::dsl::resource_type.eq(resource_type),
                vote_logs::dsl::status.eq(MediaContentStatus::Pending as i32),
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
