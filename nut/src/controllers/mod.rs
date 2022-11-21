pub mod attachments;
pub mod captcha;
pub mod home;
pub mod sitemap;
pub mod twilio;

use std::ops::DerefMut;

use actix_web::{
    get, http::header::ContentType, web, HttpResponse, Responder, Result as WebResult,
};
use askama::Template;
use palm::{
    cache::redis::Pool as CachePool,
    handlers::home::Home,
    seo::{rss, Provider as SeoProvider},
    try_web,
};

use super::{i18n::I18n, orm::postgresql::Pool as DbPool, services::site::Service as SiteService};

// https://developers.google.com/search/docs/advanced/robots/create-robots-txt
#[derive(Template)]
#[template(path = "robots.txt", escape = "none")]
struct RobotsTxt {
    home: String,
}

#[get("/robots.txt")]
pub async fn robots_txt(home: Home) -> WebResult<impl Responder> {
    let home = home.0.unwrap_or_default();
    let body = try_web!(RobotsTxt { home }.render())?;
    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(body))
}

#[get("/{lang}/rss.xml")]
pub async fn rss_xml(
    home: Home,
    db: web::Data<DbPool>,
    ch: web::Data<CachePool>,
    params: web::Path<(String,)>,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let mut ch = try_web!(ch.get())?;
    let ch = ch.deref_mut();
    let home = home.0.unwrap_or_default();
    let params = params.into_inner();
    let lang = params.0;

    let links = try_web!(SeoProvider::by_lang(ch, &lang))?;
    let title = I18n::t(db, &lang, SiteService::SITE_TITLE, &None::<String>);
    let description = I18n::t(db, &lang, SiteService::SITE_DESCRIPTION, &None::<String>);
    let buf = try_web!(rss(&home, &title, &description, &links))?;
    Ok(HttpResponse::Ok()
        .content_type(ContentType::xml())
        .body(buf))
}

#[derive(Template)]
#[template(path = "swagger-ui.html")]
pub struct SwaggerUI {}

#[get("/swagger-ui")]
pub async fn swagger_ui() -> WebResult<impl Responder> {
    let body = try_web!(SwaggerUI {}.render())?;
    Ok(HttpResponse::Ok()
        .content_type(ContentType::html())
        .body(body))
}
