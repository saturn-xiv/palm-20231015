use std::sync::Arc;

use tonic::transport::Server;

use super::super::{
    crypto::{Aes, Hmac},
    env::Config,
    jwt::Jwt,
    plugins::nut,
    Result,
};

pub async fn web(cfg: &Config) -> Result<()> {
    let addr = cfg.rpc.web.addr();
    info!("run on http://{addr}");
    let pgsql = cfg.postgresql.open()?;
    let redis = cfg.redis.open()?;
    let aes = Arc::new(Aes::new(&cfg.secrets.0)?);
    let hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = Arc::new(Jwt::new(cfg.secrets.0.clone()));
    let rabbitmq = Arc::new(cfg.rabbitmq.open());

    let nut_locale = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::locale_server::LocaleServer::new(
            nut::services::locale::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
            },
        ));
    let nut_setting = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::setting_server::SettingServer::new(
            nut::services::setting::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                aes: aes.clone(),
            },
        ));
    let nut_site = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::site_server::SiteServer::new(
            nut::services::site::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                aes,
                hmac: hmac.clone(),
                redis,
                rabbitmq: rabbitmq.clone(),
            },
        ));
    let nut_user = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::user_server::UserServer::new(
            nut::services::user::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                hmac,
                rabbitmq,
            },
        ));
    let nut_role = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::role_server::RoleServer::new(
            nut::services::role::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
            },
        ));
    let nut_policy = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::policy_server::PolicyServer::new(
            nut::services::policy::Service { pgsql, jwt },
        ));

    Server::builder()
        .accept_http1(true)
        .add_service(nut_locale)
        .add_service(nut_setting)
        .add_service(nut_user)
        .add_service(nut_role)
        .add_service(nut_policy)
        .add_service(nut_site)
        .serve(addr)
        .await?;
    Ok(())
}

pub async fn tcp(cfg: &Config) -> Result<()> {
    let addr = cfg.rpc.addr();
    info!("run on tcp://{addr}");
    let pgsql = cfg.postgresql.open()?;
    let redis = cfg.redis.open()?;
    let aes = Arc::new(Aes::new(&cfg.secrets.0)?);
    let hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = Arc::new(Jwt::new(cfg.secrets.0.clone()));
    let rabbitmq = Arc::new(cfg.rabbitmq.open());

    Server::builder()
        .add_service(nut::v1::role_server::RoleServer::new(
            nut::services::role::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
            },
        ))
        .add_service(nut::v1::policy_server::PolicyServer::new(
            nut::services::policy::Service {
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
        .add_service(nut::v1::site_server::SiteServer::new(
            nut::services::site::Service {
                pgsql,
                jwt,
                aes,
                hmac,
                redis,
                rabbitmq,
            },
        ))
        .serve(addr)
        .await?;
    Ok(())
}
