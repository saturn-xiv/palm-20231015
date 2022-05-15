use tonic::transport::Server;

use super::super::{env::Config, plugins::nut, Result};

pub async fn launch(cfg: &Config) -> Result<()> {
    let addr = cfg.rpc.addr();
    info!("run on http://{addr}");
    let pgsql = cfg.postgresql.open()?;
    let mysql = cfg.mysql.open()?;

    // Server::builder()
    //     .add_service(nut::v1::site_server::SiteServer::new(
    //         nut::services::site::Service { pgsql, mysql },
    //     ))
    //     .serve(addr)
    //     .await?;
    Ok(())
}

pub async fn launch_(cfg: &Config) -> Result<()> {
    let addr = cfg.rpc.addr();
    info!("run on http://{addr}");
    let pgsql = cfg.postgresql.open()?;
    let mysql = cfg.mysql.open()?;

    // Server::builder()
    //     .add_service(nut::v1::site_server::SiteServer::new(
    //         nut::services::site::Service { pgsql, mysql },
    //     ))
    //     .serve(addr)
    //     .await?;
    Ok(())
}
