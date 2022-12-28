use std::net::{IpAddr, Ipv4Addr, SocketAddr};
use std::sync::Arc;

use clap::Parser;
use palm::{orchid::v1, Result};
use tonic::transport::Server;

use super::super::{env::Config as Env, wechat::service::Service as WeChatService};

#[derive(Parser, PartialEq, Eq, Debug, Clone)]
pub struct Config {
    #[arg(short = 'p', long, default_value = "9999")]
    pub port: u16,
}

impl Config {
    pub async fn launch(&self, config: Arc<Env>) -> Result<()> {
        let addr = SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0)), self.port);

        info!("start oauth gRPC at {}", addr);
        let redis = config.redis.open()?;
        Server::builder()
            .add_service(v1::we_chat_server::WeChatServer::new(WeChatService {
                config,
                redis,
            }))
            .serve(addr)
            .await?;
        Ok(())
    }
}
