use std::path::Path;

use palm::{
    cache::redis::Config as Redis,
    crypto::Key,
    env::{Environment, Http, Rpc},
    orm::postgresql::Config as PostgreSql,
    queue::amqp::Config as RabbitMqConfig,
    search::Config as OpenSearch,
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub env: Environment,
    pub secrets: Key,
    pub http: Http,
    pub rpc: Rpc,
    pub postgresql: PostgreSql,
    pub redis: Redis,
    pub rabbitmq: RabbitMqConfig,
    pub opensearch: OpenSearch,
}

pub fn is_stopped() -> bool {
    Path::new(".stop").exists()
}
