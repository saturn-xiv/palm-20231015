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
    header::{ACCEPT, ACCEPT_LANGUAGE, AUTHORIZATION, CONTENT_TYPE, COOKIE},
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
    let loquat = web::Data::new(cfg.loquat.clone());
    let musa = web::Data::new(cfg.musa.clone());
    let rabbitmq = web::Data::new(cfg.rabbitmq.open());
    let orchid = web::Data::new(cfg.orchid.clone());
    let s3 = web::Data::new(S3::from(cfg.minio.clone()));
    let opensearch = web::Data::new(cfg.opensearch.open()?);

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
                        error!("consume casbin message queue({}) {:?}", queue, e);
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

    HttpServer::new(move || {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
        App::new()
            .app_data(pgsql.clone())
            .app_data(redis.clone())
            .app_data(loquat.clone())
            .app_data(rabbitmq.clone())
            .app_data(orchid.clone())
            .app_data(musa.clone())
            .app_data(s3.clone())
            .app_data(opensearch.clone())
            .app_data(enforcer.clone())
            .wrap(
                Cors::default()
                    .allow_any_origin()
                    .allowed_methods(vec![Method::POST, Method::GET])
                    .allowed_headers(vec![
                        AUTHORIZATION,
                        ACCEPT,
                        CONTENT_TYPE,
                        ACCEPT_LANGUAGE,
                        COOKIE,
                    ])
                    .allowed_header("X-Requested-With")
                    .supports_credentials()
                    .allow_any_origin()
                    .max_age(Duration::hours(1).num_seconds() as usize),
            )
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
            .configure(nut::controllers::register)
            .configure(cms::controllers::register)
            .configure(forum::controllers::register)
    })
    .bind(addr)?
    .run()
    .await?;
    Ok(())
}
