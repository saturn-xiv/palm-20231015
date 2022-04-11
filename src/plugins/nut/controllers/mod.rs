pub mod api;
pub mod attachments;
pub mod captcha;
pub mod home;
pub mod sitemap;

use std::ops::Deref;

use actix_web::{error::ErrorInternalServerError, get, web, Responder, Result};
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
pub async fn rss_xml(db: web::Data<DbPool>, _params: web::Path<String>) -> Result<impl Responder> {
    let db = db.get().map_err(ErrorInternalServerError)?;
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
