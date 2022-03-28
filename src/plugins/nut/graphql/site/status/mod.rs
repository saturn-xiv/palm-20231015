pub mod postgresql;
pub mod rabbitmq;
pub mod redis;
pub mod system;

use std::ops::{Deref, DerefMut};

use juniper::GraphQLObject;
use serde::{Deserialize, Serialize};

use super::super::super::super::super::Result;
use super::super::Context;

#[derive(GraphQLObject, Serialize, Deserialize, Debug)]
pub struct SiteStatus {
    pub postgresql: postgresql::PostgreSqlStatus,
    pub redis: redis::RedisStatus,
    pub rabbitmq: rabbitmq::RabbitMqStatus,
    pub system: system::SystemStatus,
}

impl SiteStatus {
    pub fn new(ctx: &Context) -> Result<Self> {
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        ctx.token.administrator(db, jwt)?;
        let it = Self {
            postgresql: postgresql::PostgreSqlStatus::new(db)?,
            redis: {
                let mut ch = ctx.cache.get()?;
                let ch = ch.deref_mut();
                redis::RedisStatus::new(ch)?
            },
            rabbitmq: {
                let qu = ctx.queue.deref();
                rabbitmq::RabbitMqStatus::new(qu)?
            },
            system: system::SystemStatus::new()?,
        };
        Ok(it)
    }
}
