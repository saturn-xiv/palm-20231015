use actix_web::http::StatusCode;
use chrono::NaiveDateTime;
use diesel::{
    delete,
    dsl::{now, IntervalDsl},
    insert_into,
    prelude::*,
};
use palm::{HttpError, Result};
use rand::{rngs::SmallRng, seq::SliceRandom, SeedableRng};
use serde::Serialize;

use super::super::{orm::postgresql::Connection, schema::crawler_logs};

pub async fn pull(db: &mut Connection, url: &str) -> Result<()> {
    // https://www.useragentstring.com/pages/useragentstring.php
    let agents =
            ["Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19582",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0"];
    let mut rng = SmallRng::from_entropy();
    let agent = agents
        .choose(&mut rng)
        .map_or_else(
            || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 OPR/98.0.4759.3".to_string(), 
        |x| x.to_string()
    );
    info!("fetch({}) {}", agent, url);

    let client = reqwest::Client::builder().user_agent(agent).build()?;
    let response = client.get(url).send().await?;
    let status = response.status();
    let body = response.bytes().await?;
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
