use juniper::GraphQLObject;
use redis::Connection;
use serde::{Deserialize, Serialize};

use super::super::super::super::super::super::{cache::Provider as CacheProvider, Result};

#[derive(GraphQLObject, Serialize, Deserialize, Debug)]
pub struct RedisStatus {
    pub info: String,
    pub items: Vec<RedisCacheItem>,
}

#[derive(GraphQLObject, Serialize, Deserialize, Debug)]
pub struct RedisCacheItem {
    pub key: String,
    pub ttl: i32,
}
impl RedisStatus {
    pub fn new(db: &mut Connection) -> Result<Self> {
        let it = Self {
            info: db.version()?,
            items: {
                let mut items = Vec::new();
                for (k, t) in db.keys()? {
                    items.push(RedisCacheItem {
                        key: k,
                        ttl: t as i32,
                    })
                }
                items
            },
        };
        Ok(it)
    }
}
