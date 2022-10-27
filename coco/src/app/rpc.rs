use std::sync::Arc;

use palm::{
    crypto::{Aes, Hmac},
    jwt::Jwt,
    Result,
};
use tonic::transport::Server;

use super::super::env::Config;

pub async fn launch(cfg: &Config) -> Result<()> {
    let addr = cfg.rpc.addr();

    let pgsql = cfg.postgresql.open()?;
    let redis = cfg.redis.open()?;
    let aes = Arc::new(Aes::new(&cfg.secrets.0)?);
    let hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = Arc::new(Jwt::new(cfg.secrets.0.clone()));
    let rabbitmq = Arc::new(cfg.rabbitmq.open());
    let search = Arc::new(cfg.opensearch.open()?);

    info!("start rpc-tcp at {}", addr);
    Server::builder()
        .add_service(palm::auth::v1::attachment_server::AttachmentServer::new(
            auth::services::attachment::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                aes: aes.clone(),
                redis: redis.clone(),
            },
        ))
        .add_service(palm::auth::v1::locale_server::LocaleServer::new(
            auth::services::locale::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
            },
        ))
        .add_service(palm::auth::v1::user_server::UserServer::new(
            auth::services::user::Service {
                pgsql: pgsql.clone(),
                redis: redis.clone(),
                jwt: jwt.clone(),
                hmac: hmac.clone(),
                rabbitmq: rabbitmq.clone(),
            },
        ))
        .add_service(palm::auth::v1::policy_server::PolicyServer::new(
            auth::services::policy::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
            },
        ))
        .add_service(palm::cms::v1::tag_server::TagServer::new(
            cms::services::tag::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
            },
        ))
        .add_service(palm::cms::v1::category_server::CategoryServer::new(
            cms::services::category::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
            },
        ))
        .add_service(palm::cms::v1::shorter_link_server::ShorterLinkServer::new(
            cms::services::shorter_link::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
            },
        ))
        .add_service(palm::cms::v1::site_server::SiteServer::new(
            cms::services::site::Service {
                pgsql,
                jwt,
                aes,
                hmac,
                redis,
                rabbitmq,
                search,
            },
        ))
        .serve(addr)
        .await?;
    Ok(())
}
