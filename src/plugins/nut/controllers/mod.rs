pub mod api;
pub mod captcha;
pub mod home;
pub mod sitemap;

use std::ops::Deref;

use actix_web::{
    error::ErrorInternalServerError, get, http::header::ContentType, web, HttpResponse, Responder,
    Result as WebResult,
};
use askama::Template;
use rss::ChannelBuilder as RssChannelBuilder;

use super::super::super::orm::postgresql::Pool as DbPool;

// https://developers.google.com/search/docs/advanced/robots/create-robots-txt
#[derive(Template)]
#[template(path = "robots.txt", escape = "none")]
struct RobotsTxt {
    host: String,
}

#[get("/robots.txt")]
pub async fn robots_txt() -> impl Responder {
    // TODO
    // let tpl = RobotsTxt {
    //     host: auth.unwrap().host().to_string(),
    // };
    "robots txt"
}

#[get("/{lang}/rss.xml")]
pub async fn rss_xml(
    db: web::Data<DbPool>,
    _params: web::Path<String>,
) -> WebResult<impl Responder> {
    let db = try_web!(db.get())?;
    let _db = db.deref();

    let mut buffer = Vec::new();
    {
        // TODO
        let ch = RssChannelBuilder::default()
            .title("Channel Title")
            .link("http://example.com")
            .description("An RSS feed.")
            .build();
        ch.write_to(&mut buffer).unwrap();
    }
    Ok("rss.xml")
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
