use nut::orm::postgresql::Config as PostgreSql;
use orchid::Client as Orchid;
use palm::{
    cache::redis::Config as Redis,
    crypto::Key,
    env::{Environment, Http, Rpc},
    minio::Config as Minio,
    musa::Client as Musa,
    queue::amqp::Config as RabbitMqConfig,
    search::Config as OpenSearch,
    thrift::loquat::Config as Loquat,
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub env: Environment,
    #[serde(rename = "cookie-key")]
    pub cookie_key: Key,
    pub loquat: Loquat,
    pub musa: Musa,
    pub orchid: Orchid,
    pub http: Http,
    pub rpc: Rpc,
    pub postgresql: PostgreSql,
    pub redis: Redis,
    pub rabbitmq: RabbitMqConfig,
    pub opensearch: OpenSearch,
    pub minio: Minio,
}
