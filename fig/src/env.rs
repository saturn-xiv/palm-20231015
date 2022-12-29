use nut::{orm::postgresql::Config as PostgreSql, Oauth};
use palm::{
    cache::redis::Config as Redis,
    crypto::Key,
    env::{Environment, Http, Rpc},
    queue::amqp::Config as RabbitMqConfig,
    search::Config as OpenSearch,
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub env: Environment,
    #[serde(rename = "secret-key")]
    pub secret_key: Key,
    #[serde(rename = "cookie-key")]
    pub cookie_key: Key,
    #[serde(rename = "jwt-key")]
    pub jwt_key: Key,
    pub http: Http,
    pub rpc: Rpc,
    pub postgresql: PostgreSql,
    pub redis: Redis,
    pub rabbitmq: RabbitMqConfig,
    pub opensearch: OpenSearch,
    pub oauth: Oauth,
}
