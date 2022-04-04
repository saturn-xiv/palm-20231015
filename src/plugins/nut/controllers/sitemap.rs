use std::io::prelude::*;
use std::ops::Deref;

use actix_web::{
    error::{ErrorBadRequest, ErrorInternalServerError},
    get,
    http::header::ContentType,
    web, HttpResponse, Responder, Result as WebResult, Result,
};
use askama::Template;
use xml::writer::{EventWriter, Result as XmlWriterResult, XmlEvent};

use super::super::super::super::{
    crypto::Aes, orm::postgresql::Pool as DbPool, settings::Dao as SettingDao, ToXml,
};
use super::super::graphql::site::{baidu::BaiduRequest, google::GoogleRequest};

pub struct Item {}

impl ToXml for Item {
    fn write<W: Write>(&self, wrt: &mut EventWriter<W>) -> XmlWriterResult<()> {
        // TODO
        {
            let it: XmlEvent = XmlEvent::start_element("aaa").into();
            wrt.write(it)?;
        }
        {
            let it: XmlEvent = XmlEvent::characters("123");
            wrt.write(it)?;
        }
        {
            let it: XmlEvent = XmlEvent::end_element().into();
            wrt.write(it)?;
        }
        Ok(())
    }
}

// https://www.sitemaps.org/protocol.html

pub struct Sitemap {
    pub items: Vec<Item>,
}
impl ToXml for Sitemap {
    fn write<W: Write>(&self, wrt: &mut EventWriter<W>) -> XmlWriterResult<()> {
        // TODO
        {
            let it: XmlEvent = XmlEvent::start_element("bbb").into();
            wrt.write(it)?;
        }
        for it in self.items.iter() {
            it.write(wrt)?;
        }
        {
            let it: XmlEvent = XmlEvent::end_element().into();
            wrt.write(it)?;
        }
        Ok(())
    }
}

#[get("/sitemap.xml")]
pub async fn index(db: web::Data<DbPool>) -> Result<impl Responder> {
    let db = db.get().map_err(ErrorInternalServerError)?;
    let _db = db.deref();
    // TODO
    Ok("sitemap.xml")
}

#[get("/{lang}/sitemap.xml")]
pub async fn by_lang(_params: web::Path<String>) -> impl Responder {
    // TODO
    "sitemap.xml by lang"
}

#[get("/google{id}.html")]
pub async fn google(
    (db, aes): (web::Data<DbPool>, web::Data<Aes>),
    params: web::Path<(String,)>,
) -> WebResult<impl Responder> {
    let db = db.get().map_err(ErrorInternalServerError)?;
    let db = db.deref();
    let params = params.into_inner();
    let aes = aes.deref();
    let aes = aes.deref();
    let it: GoogleRequest = SettingDao::get(db, aes, &GoogleRequest::KEY.to_string(), None)
        .map_err(ErrorInternalServerError)?;
    if params.0 != it.site_verify_code {
        return Err(ErrorBadRequest("bad google verify site id"));
    }
    let body = it.render().map_err(ErrorInternalServerError)?;

    Ok(HttpResponse::Ok()
        .content_type(ContentType::html())
        .body(body))
}

#[get("/baidu_verify_code-{id}.html")]
pub async fn baidu(
    (db, aes): (web::Data<DbPool>, web::Data<Aes>),
    params: web::Path<(String,)>,
) -> WebResult<impl Responder> {
    let db = db.get().map_err(ErrorInternalServerError)?;
    let db = db.deref();
    let params = params.into_inner();
    let aes = aes.deref();
    let aes = aes.deref();
    let it: BaiduRequest = SettingDao::get(db, aes, &BaiduRequest::KEY.to_string(), None)
        .map_err(ErrorInternalServerError)?;
    if params.0 != it.site_verify_code {
        return Err(ErrorBadRequest("bad baidu verify site id"));
    }
    let body = it.render().map_err(ErrorInternalServerError)?;

    Ok(HttpResponse::Ok()
        .content_type(ContentType::html())
        .body(body))
}
