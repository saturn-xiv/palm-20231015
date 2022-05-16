use actix_web::{http::header::ContentType, HttpResponse};
use chrono::Duration;
use redis::Connection as Cache;
use serde::{Deserialize, Serialize};

use super::{
    cache::Provider, crypto::Secret, orm::postgresql::Connection as Db, setting::Dao as SettingDao,
    Result,
};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum Theme {
    Bootstrap,
    Bulma,
    MaterialDesign,
}

impl Theme {
    pub const KEY: &'static str = "site.theme";
}

pub trait Page {
    fn render(&self, db: &mut Db, theme: &Theme, lang: &str) -> Result<String>;
    fn key(&self) -> String;
}

pub fn render<P: Page, S: Secret>(
    db: &mut Db,
    _ch: &mut Cache,
    enc: &S,
    tpl: &P,
    lang: &str,
) -> Result<HttpResponse> {
    let _ttl = Duration::days(1).to_std()?;
    // let theme = ch
    //     .get(
    //         &Theme::KEY.to_string(),
    //         move || db.get(enc, &Theme::KEY.to_string(), None),
    //         &ttl,
    //     )
    //     .unwrap_or(Theme::Bootstrap);

    let theme = db
        .get(enc, &Theme::KEY.to_string(), None)
        .unwrap_or(Theme::Bootstrap);

    // let key = format!("{}.{}", lang, tpl.key());
    // let body = ch.get(&key, move || tpl.render(db, &theme, lang), &ttl)?;
    //     TODO
    let body = tpl.render(db, &theme, lang)?;

    Ok(HttpResponse::Ok()
        .content_type(ContentType::html())
        .body(body))
}
