pub mod mutation;
pub mod query;

use std::default::Default;

use chrono::{NaiveDateTime, Utc};
use juniper::GraphQLObject;

use super::super::super::{cache::redis::Pool as CachePool, orm::Pool as DbPool};

pub struct Context {
    pub db: DbPool,
    pub cache: CachePool,
}

impl juniper::Context for Context {}

#[derive(GraphQLObject)]
pub struct Success {
    pub created_at: NaiveDateTime,
}

impl Default for Success {
    fn default() -> Self {
        Self {
            created_at: Utc::now().naive_local(),
        }
    }
}
