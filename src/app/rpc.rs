use std::sync::Arc;

use tonic::transport::Server;

use super::super::{
    crypto::{Aes, Hmac},
    env::Config,
    jwt::Jwt,
    plugins::nut,
    Result,
};

pub async fn launch(cfg: &Config) -> Result<()> {
    let addr = cfg.rpc.addr();
    info!("run on http://{addr}");
    let pgsql = cfg.postgresql.open()?;
    let redis = cfg.redis.open()?;
    let aes = Arc::new(Aes::new(&cfg.secrets.0)?);
    let hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = Arc::new(Jwt::new(cfg.secrets.0.clone()));
    let rabbitmq = Arc::new(cfg.rabbitmq.open());
    let _aws = Arc::new(cfg.aws.clone());
    let _s3 = Arc::new(cfg.s3.clone());

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
                pgsql,
                jwt,
                hmac,
                rabbitmq,
            },
        ));

    Server::builder()
        .accept_http1(true)
        .add_service(nut_locale)
        .add_service(nut_setting)
        .add_service(nut_site)
        .add_service(nut_user)
        .serve(addr)
        .await?;
    Ok(())
}

// pub async fn launch_(cfg: &Config) -> Result<()> {
//     let addr = cfg.rpc.addr();
//     info!("run on http://{addr}");
//     let pgsql = cfg.postgresql.open()?;
//     let mysql = cfg.mysql.open()?;

//     Server::builder()
//         .add_service(nut::v1::site_server::SiteServer::new(
//             nut::services::site::Service { pgsql, mysql },
//         ))
//         .serve(addr)
//         .await?;
//     Ok(())
// }
