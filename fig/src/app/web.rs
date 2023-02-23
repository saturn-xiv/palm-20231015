use std::path::{Component, Path};
use std::time::Duration as StdDuration;

use actix_cors::Cors;
use actix_identity::IdentityMiddleware;
use actix_session::{
    config::{BrowserSession, CookieContentSecurity, SessionLifecycle},
    storage::CookieSessionStore,
    SessionMiddleware,
};
use actix_web::{
    cookie::{time::Duration as CookieDuration, Key as CookieKey, SameSite},
    middleware, web, App, HttpServer,
};
use casbin::CoreApi;
use chrono::Duration;
use data_encoding::BASE64;
use hyper::{
    header::{ACCEPT_LANGUAGE, AUTHORIZATION, CONTENT_TYPE, COOKIE},
    Method,
};
use nix::unistd::getpid;
use palm::{
    aws::s3::Config as S3,
    env::Environment,
    queue::amqp::RabbitMq,
    rbac::{Handler as RbacHandler, Watcher as RbacWatcher},
    Result, NAME,
};
use tokio::sync::Mutex;

use super::super::env::Config;

pub async fn launch(cfg: &Config) -> Result<()> {
    let pg_pool = cfg.postgresql.open()?;

    let pgsql = web::Data::new(pg_pool);
    let redis = web::Data::new(cfg.redis.open()?);
    let jwt = web::Data::new(cfg.loquat.clone());
    let rabbitmq = web::Data::new(cfg.rabbitmq.open());
    let oauth = web::Data::new(cfg.oauth.clone());
    let s3 = web::Data::new(S3::from(cfg.minio.clone()));

    let enforcer = web::Data::new(Mutex::new(cfg.postgresql.casbin().await?));
    {
        let enforcer = enforcer.clone();
        let enforcer = enforcer.into_inner();

        let watcher = {
            let rabbitmq = rabbitmq.clone();
            let rabbitmq = rabbitmq.into_inner();
            RbacWatcher::new(rabbitmq.clone()).await?
        };

        {
            let name = format!("{}-casbin-web-{}", palm::NAME, getpid());
            let (ch, queue) = watcher.consume().await?;
            let handler = RbacHandler {
                enforcer: enforcer.clone(),
            };
            tokio::task::spawn(async move {
                loop {
                    if let Err(e) = RabbitMq::consume(&ch, &name, &queue, &handler).await {
                        error!("{:?}", e);
                    }
                    tokio::time::sleep(StdDuration::from_secs(5)).await;
                }
            });
        }
        {
            let mut enf = enforcer.lock().await;
            enf.set_watcher(Box::new(watcher));
        }
    }

    let addr = cfg.http.addr();
    info!("run on http://{addr}");

    let cookie_key = BASE64.decode(cfg.cookie_key.0.as_bytes())?;
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
            .app_data(redis.clone())
            .app_data(jwt.clone())
            .app_data(rabbitmq.clone())
            .app_data(oauth.clone())
            .app_data(s3.clone())
            .app_data(enforcer.clone())
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
            .service(
                web::scope("/twilio").service(
                    web::scope("/sms")
                        .service(nut::controllers::twilio::sms::delivery_status)
                        .service(nut::controllers::twilio::sms::incoming_messages),
                ),
            )
            .service(
                web::scope("/api")
                    .service(
                        web::scope("/flashcard").service(
                            web::scope("/books")
                                .service(flashcard::controllers::books::show)
                                .service(flashcard::controllers::books::create)
                                .service(flashcard::controllers::books::index),
                        ),
                    )
                    .service(
                        web::scope("/wechat")
                            .service(
                                web::scope("/web")
                                    .service(
                                        web::scope("/messaging")
                                            .service(
                                                nut::controllers::wechat::web::messaging::verify,
                                            )
                                            .service(
                                                nut::controllers::wechat::web::messaging::callback,
                                            ),
                                    )
                                    .service(
                                        web::scope("/sign-in")
                                            .service(nut::controllers::wechat::web::sign_in::url)
                                            .service(
                                                nut::controllers::wechat::web::sign_in::callback,
                                            ),
                                    ),
                            )
                            .service(
                                web::scope("/mini-program")
                                    .service(nut::controllers::wechat::mini_program::sign_in)
                                    .service(nut::controllers::wechat::mini_program::profile),
                            ),
                    )
                    .service(nut::controllers::echo)
                    .service(nut::controllers::version),
            )
            .service(nut::controllers::swagger_ui)
            .service(nut::controllers::sitemap::google)
            .service(nut::controllers::sitemap::baidu)
            .service(nut::controllers::sitemap::index_now)
            .service(nut::controllers::sitemap::by_lang)
            .service(nut::controllers::sitemap::index)
            .service(nut::controllers::rss_xml)
            .service(nut::controllers::robots_txt)
            .service(nut::controllers::home::by_lang)
            .service(nut::controllers::home::index)
    })
    .bind(addr)?
    .run()
    .await?;
    Ok(())
}
