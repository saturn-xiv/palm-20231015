use std::io::prelude::*;
use std::ops::Deref;

use warp::Reply;
use xml::writer::{EventWriter, Result as XmlWriterResult, XmlEvent};

use super::super::super::super::{orm::Pool as DbPool, InfallibleResult, ToXml};
use super::to_xml;

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

pub async fn index(db: DbPool) -> InfallibleResult<Box<dyn Reply>> {
    let db = db.get().unwrap();
    let _db = db.deref();
    // TODO
    let it = Sitemap { items: Vec::new() };
    Ok(to_xml(&it).unwrap())
}

pub async fn by_lang(_lang: String, db: DbPool) -> InfallibleResult<Box<dyn Reply>> {
    let db = db.get().unwrap();
    let _db = db.deref();
    let it = Sitemap { items: Vec::new() };
    Ok(to_xml(&it).unwrap())
}
