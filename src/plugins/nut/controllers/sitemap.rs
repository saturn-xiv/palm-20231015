use std::io::prelude::*;
use std::ops::Deref;

use actix_web::{error::ErrorInternalServerError, get, web, Responder, Result};
use xml::writer::{EventWriter, Result as XmlWriterResult, XmlEvent};

use super::super::super::super::{orm::Pool as DbPool, ToXml};

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
