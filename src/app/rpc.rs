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
    let _cache = cfg.redis.open()?;
    let aes = Arc::new(Aes::new(&cfg.secrets.0)?);
    let _hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = Arc::new(Jwt::new(cfg.secrets.0.clone()));
    let _queue = Arc::new(cfg.rabbitmq.open());
    let _aws = Arc::new(cfg.aws.clone());
    let _s3 = Arc::new(cfg.s3.clone());

    Server::builder()
        .accept_http1(true)
        .add_service(tonic_web::enable(
            nut::v1::locale_server::LocaleServer::new(nut::services::locale::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
            }),
        ))
        .add_service(tonic_web::enable(
            nut::v1::setting_server::SettingServer::new(nut::services::setting::Service {
                pgsql,
                jwt,
                aes,
            }),
        ))
        // .add_service(nut::v1::site_server::SiteServer::new(
        //     nut::services::site::Service {
        //         pgsql,
        //         mysql,
        //         jwt,
        //         aes,
        //     },
        // ))
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
