use serde::{Deserialize, Serialize};

use super::{
    aws::s3::Config as S3, cache::redis::Config as Redis, crypto::Key, orm::Config as Database,
    queue::amqp::Config as RabbitMq,
};

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Http {
    pub port: u16,
}

impl Default for Http {
    fn default() -> Self {
        Self { port: 8080 }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub secrets: String,
    pub http: Http,
    pub database: Database,
    pub redis: Redis,
    pub rabbitmq: RabbitMq,
    pub s3: S3,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            secrets: Key::default().0,
            database: Database::default(),
            redis: Redis::default(),
            rabbitmq: RabbitMq::default(),
            http: Http::default(),
            s3: S3::default(),
        }
    }
}
