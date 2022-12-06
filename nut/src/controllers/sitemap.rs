use std::ops::{Deref, DerefMut};

use actix_web::{
    error::ErrorBadRequest, get, http::header::ContentType, web, HttpResponse, Responder,
    Result as WebResult, Result,
};
use askama::Template;
use palm::{
    cache::redis::Pool as CachePool,
    crypto::Aes,
    handlers::home::Home,
    nut::v1::{BaiduProfile, GoogleProfile, IndexNowProfile},
    seo::{
        sitemap::{index as sitemap_index, urlset as sitemap_urlset, Link as SitemapLink},
        Provider as SeoProvider,
    },
    try_web,
};
use serde::{Deserialize, Serialize};
use validator::Validate;

use super::super::{
    models::{locale::Dao as LocaleDao, setting::get},
    orm::postgresql::Pool as DbPool,
};

#[get("/sitemap.xml")]
pub async fn index(home: Home, db: web::Data<DbPool>) -> Result<impl Responder> {
    let home = home.0.unwrap_or_default();
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();

    let links: Vec<String> = try_web!(LocaleDao::languages(db))?
        .iter()
        .map(|x| format!("/{}/sitemap.xml", x))
        .collect::<_>();

    let buf: Vec<u8> = try_web!(sitemap_index(&home, &links))?;
    Ok(HttpResponse::Ok()
        .content_type(ContentType::xml())
        .body(buf))
}

#[get("/{lang}/sitemap.xml")]
pub async fn by_lang(
    home: Home,
    ch: web::Data<CachePool>,
    params: web::Path<(String,)>,
) -> Result<impl Responder> {
    let params = params.into_inner();
    let mut ch = try_web!(ch.get())?;
    let ch = ch.deref_mut();
    let home = home.0.unwrap_or_default();
    let links = try_web!(SeoProvider::by_lang(ch, &params.0))?;
    let links: Vec<SitemapLink> = links.into_iter().map(|x| x.into()).collect::<_>();
    let body = try_web!(sitemap_urlset(&home, &links))?;
    Ok(HttpResponse::Ok()
        .content_type(ContentType::xml())
        .body(body))
}

#[derive(Template, Validate, Serialize, Deserialize)]
#[template(path = "google/verify.html", escape = "none")]

pub struct GoogleRequest {
    #[validate(length(min = 1))]
    pub site_verify_code: String,
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
    let cfg = try_web!(get::<GoogleProfile, Aes>(db, aes, None))?;

    if let Some(it) = cfg.site_verify_id {
        if params.0 == it {
            let body = try_web!(GoogleRequest {
                site_verify_code: it
            }
            .render())?;

            return Ok(HttpResponse::Ok()
                .content_type(ContentType::html())
                .body(body));
        }
    }

    Err(ErrorBadRequest("bad google verify site id"))
}

#[derive(Template, Validate, Serialize, Deserialize)]
#[template(path = "baidu/verify.html", escape = "none")]

pub struct BaiduRequest {
    #[validate(length(min = 1))]
    pub site_verify_code: String,
    #[validate(length(min = 1))]
    pub site_verify_content: String,
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
    let cfg = try_web!(get::<BaiduProfile, Aes>(db, aes, None))?;
    if let Some(it) = cfg.site_verify {
        if params.0 == it.id {
            let body = try_web!(BaiduRequest {
                site_verify_code: it.id.clone(),
                site_verify_content: it.content,
            }
            .render())?;

            return Ok(HttpResponse::Ok()
                .content_type(ContentType::html())
                .body(body));
        }
    }
    Err(ErrorBadRequest("bad baidu verify site id"))
}

#[derive(Template, Validate, Serialize, Deserialize)]
#[template(path = "index-now/verify.txt", escape = "none")]

pub struct IndexNowRequest {
    #[validate(length(min = 1))]
    pub key: String,
}

#[get("/{id}.txt")]
pub async fn index_now(
    (db, aes): (web::Data<DbPool>, web::Data<Aes>),
    params: web::Path<(String,)>,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let params = params.into_inner();
    let aes = aes.deref();
    let aes = aes.deref();
    let cfg = try_web!(get::<IndexNowProfile, Aes>(db, aes, None))?;

    if params.0 == cfg.key {
        let body = try_web!(IndexNowRequest { key: cfg.key }.render())?;

        return Ok(HttpResponse::Ok()
            .content_type(ContentType::html())
            .body(body));
    }

    Err(ErrorBadRequest("bad index-now verify site key"))
}
