use actix_web::http::StatusCode;
use chrono::NaiveDateTime;
use diesel::{
    delete,
    dsl::{now, IntervalDsl},
    insert_into,
    prelude::*,
};
use palm::{HttpError, Result};
use serde::Serialize;

use super::super::{orm::postgresql::Connection, schema::crawler_logs};

pub async fn pull(db: &mut Connection, url: &str) -> Result<()> {
    info!("fetch {}", url);
    let res = reqwest::get(url).await?;
    let status = res.status();
    let body = res.bytes().await?;
    // let body = body.replace(char::from(0), "");
    match status {
        StatusCode::OK => {
            if let Ok(last) = db.latest(url) {
                if last.body == body {
                    debug!("ignore to save {}", url);
                    return Ok(());
                }
            }
            info!("save {}", url);
            db.create(url, &body)?;
            Ok(())
        }
        _ => Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None))),
    }
}

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub url: String,
    pub body: Vec<u8>,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn latest(&mut self, url: &str) -> Result<Item>;
    fn create(&mut self, url: &str, body: &[u8]) -> Result<()>;
    fn delete(&mut self, years: i32) -> Result<()>;
}

impl Dao for Connection {
    fn latest(&mut self, url: &str) -> Result<Item> {
        let it = crawler_logs::dsl::crawler_logs
            .filter(crawler_logs::dsl::url.eq(url))
            .order(crawler_logs::dsl::created_at.desc())
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(&mut self, url: &str, body: &[u8]) -> Result<()> {
        insert_into(crawler_logs::dsl::crawler_logs)
            .values((
                crawler_logs::dsl::url.eq(url),
                crawler_logs::dsl::body.eq(body),
            ))
            .execute(self)?;
        Ok(())
    }

    fn delete(&mut self, years: i32) -> Result<()> {
        delete(
            crawler_logs::dsl::crawler_logs
                .filter(crawler_logs::dsl::created_at.lt(now - years.years())),
        )
        .execute(self)?;
        Ok(())
    }
}
