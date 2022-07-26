use std::io::prelude::*;
use std::ops::{Deref, DerefMut};

use actix_web::{
    error::ErrorBadRequest, get, http::header::ContentType, web, HttpResponse, Responder,
    Result as WebResult, Result,
};
use askama::Template;
use serde::{Deserialize, Serialize};
use validator::Validate;
use xml::writer::{EventWriter, Result as XmlWriterResult, XmlEvent};

use super::super::super::super::{
    crypto::Aes, orm::postgresql::Pool as DbPool, setting::Dao as SettingDao, ToXml,
};

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
    let db = try_web!(db.get())?;
    let _db = db.deref();
    // TODO
    Ok("sitemap.xml")
}

#[get("/{lang}/sitemap.xml")]
pub async fn by_lang(_params: web::Path<String>) -> impl Responder {
    // TODO
    "sitemap.xml by lang"
}

#[derive(Template, Validate, Serialize, Deserialize)]
#[template(path = "google/verify.html", escape = "none")]

pub struct GoogleRequest {
    #[validate(length(min = 1))]
    pub site_verify_code: String,
}

impl GoogleRequest {
    pub const KEY: &'static str = "site.google";
}

#[get("/google{id}.html")]
pub async fn google(
    (db, aes): (web::Data<DbPool>, web::Data<Aes>),
    params: web::Path<(String,)>,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let params = params.into_inner();
    let aes = aes.deref();
    let aes = aes.deref();
    let it: GoogleRequest = try_web!(SettingDao::get(
        db,
        aes,
        &GoogleRequest::KEY.to_string(),
        None
    ))?;
    if params.0 != it.site_verify_code {
        return Err(ErrorBadRequest("bad google verify site id"));
    }
    let body = try_web!(it.render())?;

    Ok(HttpResponse::Ok()
        .content_type(ContentType::html())
        .body(body))
}

#[derive(Template, Validate, Serialize, Deserialize)]
#[template(path = "baidu/verify.html", escape = "none")]

pub struct BaiduRequest {
    #[validate(length(min = 1))]
    pub site_verify_code: String,
    #[validate(length(min = 1))]
    pub site_verify_content: String,
}

impl BaiduRequest {
    pub const KEY: &'static str = "site.baidu";
}

#[get("/baidu_verify_code-{id}.html")]
pub async fn baidu(
    (db, aes): (web::Data<DbPool>, web::Data<Aes>),
    params: web::Path<(String,)>,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let params = params.into_inner();
    let aes = aes.deref();
    let aes = aes.deref();
    let it: BaiduRequest = try_web!(SettingDao::get(
        db,
        aes,
        &BaiduRequest::KEY.to_string(),
        None
    ))?;
    if params.0 != it.site_verify_code {
        return Err(ErrorBadRequest("bad baidu verify site id"));
    }
    let body = try_web!(it.render())?;

    Ok(HttpResponse::Ok()
        .content_type(ContentType::html())
        .body(body))
}
