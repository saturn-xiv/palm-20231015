use nut::{orm::postgresql::Config as PostgreSql, Oauth};
use palm::{
    cache::redis::Config as Redis,
    crypto::Key,
    env::{Environment, Http, Rpc},
    minio::Config as Minio,
    queue::amqp::Config as RabbitMqConfig,
    search::Config as OpenSearch,
    tink::Loquat,
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub env: Environment,
    #[serde(rename = "cookie-key")]
    pub cookie_key: Key,
    pub aes: Loquat,
    pub hmac: Loquat,
    pub jwt: Loquat,
    pub http: Http,
    pub rpc: Rpc,
    pub postgresql: PostgreSql,
    pub redis: Redis,
    pub rabbitmq: RabbitMqConfig,
    pub opensearch: OpenSearch,
    pub oauth: Oauth,
    pub minio: Minio,
}
