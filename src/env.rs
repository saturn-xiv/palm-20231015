use std::default::Default;
use std::fmt;
use std::net::{IpAddr, Ipv4Addr, SocketAddr};
use std::path::Path;

use casbin::{CoreApi, DefaultModel as CasbinModel, Enforcer as CasbinEnforcer};
use serde::{Deserialize, Serialize};
use sqlx_adapter::SqlxAdapter;

use super::{
    cache::redis::Config as Redis, crypto::Key, orm::postgresql::Config as PostgreSql,
    plugins::nut, queue::amqp::Config as RabbitMq, search::Config as OpenSearch, Result,
};

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub enum Environment {
    Production,
    Staging,
    Development,
    Test,
}

impl Default for Environment {
    fn default() -> Self {
        Self::Development
    }
}

impl fmt::Display for Environment {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Environment::Production => fmt.write_str("production"),
            Environment::Staging => fmt.write_str("staging"),
            Environment::Development => fmt.write_str("development"),
            Environment::Test => fmt.write_str("test"),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Http {
    pub port: u16,
    #[serde(rename = "allow-origins")]
    pub allow_origins: Vec<String>,
}

impl Http {
    pub fn addr(&self) -> SocketAddr {
        SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), self.port)
    }
}

impl Default for Http {
    fn default() -> Self {
        Self {
            port: 8080,
            allow_origins: Vec::new(),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Rpc {
    #[serde(rename = "tcp-port")]
    pub tcp_port: u16,
    #[serde(rename = "web-port")]
    pub web_port: u16,
}

impl Rpc {
    fn addr(port: u16) -> SocketAddr {
        SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0)), port)
    }
    pub fn tcp_addr(&self) -> SocketAddr {
        Self::addr(self.tcp_port)
    }
    pub fn web_addr(&self) -> SocketAddr {
        Self::addr(self.web_port)
    }
}

impl Default for Rpc {
    fn default() -> Self {
        Self {
            tcp_port: 10001,
            web_port: 10002,
        }
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub env: Environment,
    pub secrets: Key,
    pub http: Http,
    pub rpc: Rpc,
    pub postgresql: PostgreSql,
    pub redis: Redis,
    pub rabbitmq: RabbitMq,
    pub opensearch: OpenSearch,
}

impl Config {
    pub async fn enforcer(&self, pool: u32) -> Result<CasbinEnforcer> {
        let m = CasbinModel::from_str(include_str!("rbac_model.conf")).await?;
        let a = SqlxAdapter::new(self.postgresql.to_string(), pool).await?;
        let mut e = CasbinEnforcer::new(m, a).await?;
        let w = {
            let it = nut::tasks::casbin::Watcher::new(redis::Client::open(self.redis.to_string())?);
            Box::new(it)
        };
        e.set_watcher(w);
        Ok(e)
    }
}

pub fn is_stopped() -> bool {
    Path::new(".stop").exists()
}
