pub mod attachments;
pub mod captcha;
pub mod home;
pub mod sitemap;
pub mod twilio;
pub mod wechat;

use std::ops::DerefMut;
use std::path::{Component, Path};

use actix_web::{
    get, http::header::ContentType, post, web, HttpResponse, Responder, Result as WebResult,
};
use askama::Template;
use lemon::themes::Layout;
use palm::{
    cache::redis::Pool as CachePool,
    handlers::home::Home,
    seo::{
        rss::{build as build_rss, Link as RssLink},
        Provider as SeoProvider, RobotsTxt,
    },
    try_web, BUILD_TIME, GIT_VERSION, NAME,
};

use super::{i18n::I18n, orm::postgresql::Pool as DbPool};

pub fn register(config: &mut web::ServiceConfig) {
    config
        .service(
            actix_files::Files::new(
                "/3rd",
                if cfg!(debug_assertions) {
                    Path::new("node_modules").to_path_buf()
                } else {
                    Path::new(&Component::RootDir)
                        .join("usr")
                        .join("share")
                        .join(NAME)
                        .join("node_modules")
                },
            )
            .show_files_listing(),
        )
        .service(
            actix_files::Files::new(
                "/assets",
                if cfg!(debug_assertions) {
                    Path::new("assets").to_path_buf()
                } else {
                    Path::new(&Component::RootDir)
                        .join("usr")
                        .join("share")
                        .join(NAME)
                        .join("assets")
                },
            )
            .show_files_listing(),
        )
        .service(attachments::create)
        .service(captcha::get)
        .service(
            web::scope("/api")
                .service(
                    web::scope("/twilio")
                        .service(
                            web::scope("/sms")
                                .service(twilio::sms::delivery_status)
                                .service(twilio::sms::incoming_messages)
                                .service(twilio::sms::reply),
                        )
                        .service(web::scope("/voice").service(twilio::voice::call_in)),
                )
                .service(
                    web::scope("/wechat")
                        .service(
                            web::scope("/oauth2").service(
                                web::scope("/messaging")
                                    .service(wechat::oauth2::messaging::verify)
                                    .service(wechat::oauth2::messaging::callback),
                            ),
                        )
                        .service(
                            web::scope("/mini-program").service(
                                web::scope("/messaging")
                                    .service(wechat::mini_program::messaging::verify)
                                    .service(wechat::mini_program::messaging::callback),
                            ),
                        ),
                )
                .service(echo)
                .service(version),
        )
        .service(swagger_ui)
        .service(sitemap::google)
        .service(sitemap::baidu)
        .service(sitemap::index_now)
        .service(sitemap::by_lang)
        .service(sitemap::index)
        .service(rss_xml)
        .service(robots_txt)
        .service(home::by_lang)
        .service(home::index);
}

#[get("/version")]
pub async fn version() -> WebResult<impl Responder> {
    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(format!("{}({})", GIT_VERSION, BUILD_TIME)))
}

#[post("/echo")]
pub async fn echo(body: web::Bytes) -> WebResult<impl Responder> {
    let body = try_web!(String::from_utf8(body.to_vec()))?;
    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(body))
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
    let title = I18n::t(db, &lang, Layout::SITE_TITLE, &None::<String>);
    let description = I18n::t(db, &lang, Layout::SITE_DESCRIPTION, &None::<String>);

    let links: Vec<RssLink> = links.into_iter().map(|x| x.into()).collect::<_>();
    let buf = try_web!(build_rss(&home, &title, &description, &links))?;
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
