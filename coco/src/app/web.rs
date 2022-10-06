use std::path::{Component, Path};

use actix_cors::Cors;
use actix_identity::IdentityMiddleware;
use actix_session::{
    config::{BrowserSession, CookieContentSecurity, SessionLifecycle},
    storage::CookieSessionStore,
    SessionMiddleware,
};
use actix_web::{middleware, web, App, HttpServer};
use chrono::Duration;
use cookie::{time::Duration as CookieDuration, Key as CookieKey, SameSite};

use hyper::{
    header::{ACCEPT_LANGUAGE, AUTHORIZATION, CONTENT_TYPE, COOKIE},
    Method,
};
use palm::{
    crypto::{Aes, Hmac},
    env::Environment,
    jwt::Jwt,
    Result, NAME,
};

use super::super::env::Config;

pub async fn launch(cfg: &Config) -> Result<()> {
    let pg_pool = cfg.postgresql.open()?;

    let pgsql = web::Data::new(pg_pool);
    let cache = web::Data::new(cfg.redis.open()?);
    let aes = web::Data::new(Aes::new(&cfg.secrets.0)?);
    let hmac = web::Data::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = web::Data::new(Jwt::new(cfg.secrets.0.clone()));
    let queue = web::Data::new(cfg.rabbitmq.open());

    let addr = cfg.http.addr();
    info!("run on http://{addr}");

    let cookie_key = {
        let it = base64::encode(base64::encode(&cfg.secrets.0));
        it.as_bytes().to_vec()
    };
    let is_prod = cfg.env == Environment::Production;

    let allow_origins = cfg.http.allow_origins.clone();
    HttpServer::new(move || {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
        let cors = {
            let mut cs = Cors::default();
            for it in allow_origins.iter() {
                cs = cs.allowed_origin(it);
            }
            cs.allowed_methods(vec![
                Method::OPTIONS,
                Method::DELETE,
                Method::PATCH,
                Method::PUT,
                Method::POST,
                Method::GET,
                Method::HEAD,
            ])
            .allowed_header(CONTENT_TYPE)
            .allowed_header(AUTHORIZATION)
            .allowed_header(ACCEPT_LANGUAGE)
            .allowed_header(COOKIE)
            .allowed_header("X-Requested-With")
            .supports_credentials()
            .max_age(Duration::hours(1).num_seconds() as usize)
        };
        App::new()
            .app_data(pgsql.clone())
            .app_data(cache.clone())
            .app_data(aes.clone())
            .app_data(hmac.clone())
            .app_data(jwt.clone())
            .app_data(queue.clone())
            .wrap(cors)
            .wrap(middleware::Logger::default())
            .wrap(IdentityMiddleware::default())
            .wrap(
                SessionMiddleware::builder(
                    CookieSessionStore::default(),
                    CookieKey::from(&cookie_key),
                )
                .cookie_name(format!("{}.ss", NAME))
                .cookie_same_site(SameSite::Strict)
                .cookie_http_only(true)
                .cookie_content_security(CookieContentSecurity::Private)
                .cookie_path("/".to_string())
                .session_lifecycle(SessionLifecycle::BrowserSession(
                    BrowserSession::default().state_ttl(CookieDuration::hours(1)),
                ))
                .cookie_secure(is_prod)
                .build(),
            )
            .service(nut::controllers::attachments::create)
            .service(nut::controllers::captcha::get)
            .service(nut::controllers::sitemap::index)
            .service(nut::controllers::sitemap::by_lang)
            .service(nut::controllers::rss_xml)
            .service(nut::controllers::robots_txt)
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
            .service(nut::controllers::home::by_lang)
            .service(nut::controllers::sitemap::google)
            .service(nut::controllers::sitemap::baidu)
            .service(nut::controllers::swagger_ui)
            .service(nut::controllers::home::index)
    })
    .bind(addr)?
    .run()
    .await?;
    Ok(())
}
