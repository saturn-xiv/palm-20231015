use std::any::type_name;
use std::net::{IpAddr, Ipv4Addr, SocketAddr};
use std::sync::Arc;

use clap::Parser;
use palm::{
    thrift::cactus::protocols::{HealthSyncProcessor, RpcSyncProcessor},
    Result,
};
use thrift::{
    protocol::{TBinaryInputProtocolFactory, TBinaryOutputProtocolFactory},
    server::{TMultiplexedProcessor, TServer},
    transport::{TFramedReadTransportFactory, TFramedWriteTransportFactory},
};

use super::super::{
    env::Config as Env,
    services::{
        health::Service as HealthService,
        wechat::{
            mini_program::Service as WechatMiniProgramService,
            oauth2::Service as WechatOauth2Service,
        },
    },
};

#[derive(Parser, PartialEq, Eq, Debug, Clone)]
pub struct Config {
    #[arg(short = 'p', long, default_value = "8080")]
    pub port: u16,
}

impl Config {
    pub fn launch(&self, config: Arc<Env>) -> Result<()> {
        let addr = SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0)), self.port);

        info!("start orchid rpc at {}", addr);
        let redis = config.redis.open()?;

        let processor = {
            let mut it = TMultiplexedProcessor::new();
            {
                let name = type_name::<HealthService>();
                info!("register processor {}", name);
                it.register(
                    name,
                    Box::new(HealthSyncProcessor::new(HealthService {})),
                    false,
                )?;
            }
            {
                let name = type_name::<WechatOauth2Service>();
                info!("register processor {}", name);
                it.register(
                    name,
                    Box::new(RpcSyncProcessor::new(WechatOauth2Service {
                        config: config.clone(),
                        redis: redis.clone(),
                    })),
                    false,
                )?;
            }
            {
                let name = type_name::<WechatMiniProgramService>();
                info!("register processor {}", name);
                it.register(
                    name,
                    Box::new(RpcSyncProcessor::new(WechatMiniProgramService {
                        config: config.clone(),
                        redis,
                    })),
                    false,
                )?;
            }
            it
        };

        let mut server = TServer::new(
            TFramedReadTransportFactory::new(),
            TBinaryInputProtocolFactory::new(),
            TFramedWriteTransportFactory::new(),
            TBinaryOutputProtocolFactory::new(),
            processor,
            config.threads,
        );

        server.listen(addr)?;

        Ok(())
    }
}
