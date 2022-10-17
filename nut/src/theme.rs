use std::any::type_name;

use actix_web::{http::header::ContentType, HttpResponse};
use chrono::Duration;
use palm::{
    cache::redis::ClusterConnection as Cache, crypto::Secret, orm::postgresql::Connection as Db,
    Result,
};
use serde::{Deserialize, Serialize};

use super::setting::Dao as SettingDao;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum Theme {
    Bootstrap,
    Bulma,
    MaterialDesign,
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

    let theme = db
        .get(enc, &type_name::<Theme>().to_string(), None)
        .unwrap_or(Theme::Bootstrap);

    //     TODO
    let body = tpl.render(db, &theme, lang)?;

    Ok(HttpResponse::Ok()
        .content_type(ContentType::html())
        .body(body))
}
