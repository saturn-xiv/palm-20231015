use std::ops::{Deref, DerefMut};

use actix_web::{error::ErrorInternalServerError, get, web, Responder, Result as WebResult};
use askama::Template;

use super::super::super::super::{
    cache::redis::Pool as CachePool,
    crypto::Aes,
    orm::postgresql::{Connection as DbConnection, Pool as DbPool},
    theme::{render, Page, Theme},
    Result,
};

#[derive(Template)]
#[template(path = "bootstrap/home.html")]
pub struct BoostrapHome {
    pub lang: String,
}

#[derive(Template)]
#[template(path = "bulma/home.html")]
pub struct BulmlHome {
    pub lang: String,
}

#[derive(Template)]
#[template(path = "material-design/home.html")]
pub struct MaterialDesignHome {
    pub lang: String,
}
#[get("/")]
pub async fn index() -> impl Responder {
    // TODO
    "home"
}

pub struct HomeByLang {}

impl Page for HomeByLang {
    fn render(&self, _db: &mut DbConnection, theme: &Theme, lang: &str) -> Result<String> {
        let body = match *theme {
            Theme::Bootstrap => {
                // TODO
                let tpl = BoostrapHome {
                    lang: lang.to_string(),
                };
                tpl.render()?
            }
            Theme::Bulma => {
                // TODO
                let tpl = BulmlHome {
                    lang: lang.to_string(),
                };
                tpl.render()?
            }
            Theme::MaterialDesign => {
                // TODO
                let tpl = MaterialDesignHome {
                    lang: lang.to_string(),
                };
                tpl.render()?
            }
        };
        Ok(body)
    }
    fn key(&self) -> String {
        "home".to_string()
    }
}

#[get("/{lang}/")]
pub async fn by_lang(
    (db, cache, aes): (web::Data<DbPool>, web::Data<CachePool>, web::Data<Aes>),
    params: web::Path<String>,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let mut ch = try_web!(cache.get())?;
    let ch = ch.deref_mut();
    let aes = aes.deref();
    let aes = aes.deref();
    let lang = params.into_inner();
    try_web!(render(db, ch, aes, &HomeByLang {}, &lang))
}
