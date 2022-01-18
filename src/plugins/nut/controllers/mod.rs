pub mod attachments;
pub mod home;
pub mod sitemap;

use std::convert::Infallible;
use std::ops::Deref;

use askama::Template;
use hyper::header::CONTENT_TYPE;
use mime::TEXT_XML;
use rss::ChannelBuilder as RssChannelBuilder;
use warp::{host::Authority, http::Response, Filter, Reply};
use xml::writer::EmitterConfig;

use super::super::super::{
    cache::redis::Pool as CachePool, orm::Pool as DbPool, InfallibleResult, Result, ToXml,
};

pub fn with_db(db: DbPool) -> impl Filter<Extract = (DbPool,), Error = Infallible> + Clone {
    warp::any().map(move || db.clone())
}

pub fn with_cache(
    ch: CachePool,
) -> impl Filter<Extract = (CachePool,), Error = Infallible> + Clone {
    warp::any().map(move || ch.clone())
}

pub fn to_xml<T: ToXml>(it: &T) -> Result<Box<dyn Reply>> {
    let mut buffer = Vec::new();
    {
        let mut wrt = EmitterConfig::new()
            .perform_indent(true)
            .create_writer(&mut buffer);
        it.write(&mut wrt)?;
    }

    Ok(Box::new(
        Response::builder()
            .header(CONTENT_TYPE.to_string(), TEXT_XML.to_string())
            .body(buffer),
    ))
}

// https://developers.google.com/search/docs/advanced/robots/create-robots-txt
#[derive(Template)]
#[template(path = "robots.txt", escape = "none")]
struct RobotsTxt {
    host: String,
}

pub async fn robots_txt(auth: Option<Authority>) -> InfallibleResult<Box<dyn Reply>> {
    let tpl = RobotsTxt {
        host: auth.unwrap().host().to_string(),
    };
    Ok(Box::new(tpl))
}

pub async fn rss(_lang: String, db: DbPool) -> InfallibleResult<Box<dyn Reply>> {
    let db = db.get().unwrap();
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
    Ok(Box::new(
        Response::builder()
            .header(CONTENT_TYPE.to_string(), TEXT_XML.to_string())
            .body(buffer),
    ))
}
