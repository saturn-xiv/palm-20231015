use std::net::SocketAddr;
use std::path::{Component, Path};

use actix_cors::Cors;
use actix_session::{storage::CookieSessionStore, SessionMiddleware};
use actix_web::{middleware, web, App, HttpServer};
use chrono::Duration;
use cookie::{Key as CookieKey, SameSite};

use hyper::{
    header::{ACCEPT, ACCEPT_LANGUAGE, AUTHORIZATION, CONTENT_TYPE},
    Method,
};
use juniper::EmptySubscription;

use super::super::{
    crypto::{Aes, Hmac},
    env::{Config, Environment},
    jwt::Jwt,
    plugins::{forum, nut},
    Result, NAME,
};
use super::graphql::{self, mutation::Mutation, query::Query, Schema};

pub async fn launch(cfg: &Config) -> Result<()> {
    let db = web::Data::new(cfg.postgresql.open()?);
    let cache = web::Data::new(cfg.redis.open()?);
    let aes = web::Data::new(Aes::new(&cfg.secrets.0)?);
    let hmac = web::Data::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = web::Data::new(Jwt::new(cfg.secrets.0.clone()));
    let queue = web::Data::new(cfg.rabbitmq.open());
    let aws = web::Data::new(cfg.aws.clone());
    let s3 = web::Data::new(cfg.s3.clone());
    let schema = web::Data::new(Schema::new(Query, Mutation, EmptySubscription::new()));

    let addr = SocketAddr::from(([127, 0, 0, 1], cfg.http.port));
    info!("run on http://{addr}");

    let cookie_key: Result<Vec<u8>> = cfg.secrets.clone().into();
    let cookie_key = cookie_key?;
    let is_prod = cfg.env == Environment::Production;

    HttpServer::new(move || {
        App::new()
            .app_data(db.clone())
            .app_data(cache.clone())
            .app_data(aes.clone())
            .app_data(hmac.clone())
            .app_data(jwt.clone())
            .app_data(queue.clone())
            .app_data(aws.clone())
            .app_data(s3.clone())
            .app_data(schema.clone())
            .wrap(middleware::Logger::default())
            .wrap(
                // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
                Cors::default()
                    // TODO allowed
                    .allow_any_origin()
                    .allowed_header(CONTENT_TYPE)
                    .allowed_header(AUTHORIZATION)
                    .allowed_header(ACCEPT_LANGUAGE)
                    .allowed_header(ACCEPT)
                    .allowed_methods(vec![Method::OPTIONS, Method::POST, Method::GET])
                    .supports_credentials()
                    .max_age(Duration::hours(1).num_seconds() as usize),
            )
            .wrap(
                SessionMiddleware::builder(
                    CookieSessionStore::default(),
                    CookieKey::from(&cookie_key),
                )
                .cookie_name(NAME.to_string())
                .cookie_same_site(SameSite::None)
                .cookie_http_only(true)
                // .cookie_max_age(Duration::hours(1).num_seconds())
                .cookie_path("/".to_string())
                .cookie_secure(is_prod)
                .build(),
            )
            .service(
                web::resource(graphql::GRAPHQL_ROUTE)
                    .route(web::post().to(graphql::index))
                    .route(web::get().to(graphql::index)),
            )
            .service(
                web::resource(graphql::PLAYGROUND_ROUTE).route(web::get().to(graphql::playground)),
            )
            .service(web::resource(graphql::GRAPHIQL_ROUTE).route(web::get().to(graphql::graphiql)))
            .service(forum::controllers::topics::show)
            .service(forum::controllers::topics::index)
            .service(forum::controllers::posts::show)
            .service(forum::controllers::posts::index)
            .service(forum::controllers::index)
            .service(nut::controllers::attachments::create)
            .service(nut::controllers::sitemap::index)
            .service(nut::controllers::sitemap::by_lang)
            .service(nut::controllers::rss_xml)
            .service(nut::controllers::robots_txt)
            .service(actix_files::Files::new("/3rd", "node_modules").show_files_listing())
            .service(
                actix_files::Files::new(
                    "/assets",
                    if cfg!(debug_assertions) {
                        Path::new("assets").to_path_buf()
                    } else {
                        Path::new(&Component::RootDir)
                            .join("user")
                            .join("share")
                            .join(NAME)
                            .join("assets")
                    },
                )
                .show_files_listing(),
            )
            .service(nut::controllers::home::by_lang)
            .service(nut::controllers::home::index)
    })
    .bind(addr)?
    .run()
    .await?;
    Ok(())
}
