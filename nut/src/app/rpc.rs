use std::sync::Arc;

use tonic::transport::Server;

use super::super::{
    env::Config,
    services::s3::{v1::s3_server::S3Server, Service as S3Service},
    Result,
};

pub async fn launch(cfg: &Config) -> Result<()> {
    let addr = cfg.rpc.addr();
    info!("start gRPC server at {}", addr);
    let s3 = Arc::new(cfg.s3.clone());

    Server::builder()
        .add_service(S3Server::new(S3Service { client: s3 }))
        .serve(addr)
        .await?;
    Ok(())
}
