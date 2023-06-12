use actix_web::{http::header::ContentType, HttpResponse};
use chrono::Duration;
use lemon::themes::Theme;
use palm::{
    cache::{redis::ClusterConnection as Cache, Provider as CacheProvider},
    crypto::Secret,
    Result,
};

use super::{models::setting::FlatBuffer, orm::postgresql::Connection as Db};

pub trait Page {
    fn render(&self, db: &mut Db, lang: &str, theme: &Theme) -> Result<String>;
    fn key(&self) -> String;
}

pub fn render<P: Page, S: Secret>(
    db: &mut Db,
    ch: &mut Cache,
    enc: &S,
    page: &P,
    lang: &str,
    ttl: Duration,
) -> Result<HttpResponse> {
    let theme: Theme = FlatBuffer::get(db, enc, None).unwrap_or_default();
    let key = format!("pages://{}/{}/{}", lang, theme, page.key());
    let body: String = ch.get(
        &key,
        move || -> Result<String> {
            let buf = page.render(db, lang, &theme)?;
            Ok(buf)
        },
        ttl,
    )?;

    Ok(HttpResponse::Ok()
        .content_type(ContentType::html())
        .body(body))
}
