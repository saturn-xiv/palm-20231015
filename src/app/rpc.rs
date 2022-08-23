use std::sync::Arc;

use tonic::transport::Server;
use uuid::Uuid;

use super::super::{
    crypto::{Aes, Hmac},
    env::Config,
    jwt::Jwt,
    plugins::{nut, ops},
    Result,
};

pub async fn launch(cfg: &Config) -> Result<()> {
    let uid = Uuid::new_v4().to_string();
    let addr = cfg.rpc.tcp_addr();

    let pgsql = cfg.postgresql.open()?;
    let redis = cfg.redis.open()?;
    let aes = Arc::new(Aes::new(&cfg.secrets.0)?);
    let hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = Arc::new(Jwt::new(cfg.secrets.0.clone()));
    let rabbitmq = Arc::new(cfg.rabbitmq.open());
    let search = Arc::new(cfg.opensearch.open()?);

    info!("start rpc-tcp at {}", addr);
    Server::builder()
        .add_service(nut::v1::attachment_server::AttachmentServer::new(
            nut::services::attachment::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                aes: aes.clone(),
            },
        ))
        .add_service(nut::v1::locale_server::LocaleServer::new(
            nut::services::locale::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
            },
        ))
        .add_service(nut::v1::setting_server::SettingServer::new(
            nut::services::setting::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                aes: aes.clone(),
            },
        ))
        .add_service(nut::v1::tag_server::TagServer::new(
            nut::services::tag::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
            },
        ))
        .add_service(nut::v1::category_server::CategoryServer::new(
            nut::services::category::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
            },
        ))
        .add_service(nut::v1::shorter_link_server::ShorterLinkServer::new(
            nut::services::shorter_link::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
            },
        ))
        .add_service(nut::v1::user_server::UserServer::new(
            nut::services::user::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                hmac: hmac.clone(),
                rabbitmq: rabbitmq.clone(),
            },
        ))
        .add_service(nut::v1::policy_server::PolicyServer::new(
            nut::services::policy::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
            },
        ))
        .add_service(nut::v1::site_server::SiteServer::new(
            nut::services::site::Service {
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
