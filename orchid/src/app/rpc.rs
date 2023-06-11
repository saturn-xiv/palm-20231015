use std::net::{IpAddr, Ipv4Addr, SocketAddr};
use std::sync::Arc;

use clap::Parser;
use palm::Result;
use tonic::transport::Server;

use super::super::{
    env::Config as Env,
    services::{
        health::Service as HealthService,
        wechat::{
            mini_program::Service as WechatMiniProgramService,
            oauth2::Service as WechatOauth2Service,
        },
    },
    v1,
};

#[derive(Parser, PartialEq, Eq, Debug, Clone)]
pub struct Config {
    #[arg(short = 'p', long, default_value = "8080")]
    pub port: u16,
}

impl Config {
    pub async fn launch(&self, config: Arc<Env>) -> Result<()> {
        let addr = SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0)), self.port);

        info!("start oauth gRPC at {}", addr);
        let redis = config.redis.open()?;
        Server::builder()
            .add_service(v1::health_server::HealthServer::new(HealthService {
                config: config.clone(),
            }))
            .add_service(v1::wechat_oauth2_server::WechatOauth2Server::new(
                WechatOauth2Service {
                    config: config.clone(),
                    redis: redis.clone(),
                },
            ))
            .add_service(
                v1::wechat_mini_program_server::WechatMiniProgramServer::new(
                    WechatMiniProgramService { config, redis },
                ),
            )
            .serve(addr)
            .await?;
        Ok(())
    }
}
