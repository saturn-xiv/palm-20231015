pub mod mutation;
pub mod query;

use chrono::{NaiveDateTime, Utc};
use juniper::{Context as GraphQLContext, GraphQLObject};
use palm::{cache::redis::Pool as CachePool, session::Session, thrift::Thrift};

use super::orm::postgresql::Pool as DbPool;

pub struct Context {
    pub db: DbPool,
    pub cache: CachePool,
    pub loquat: Thrift,
    pub orchid: Thrift,
    pub session: Session,
}

impl GraphQLContext for Context {}

#[derive(GraphQLObject)]
#[graphql(description = "Success")]
pub struct Succeeded {
    pub created_at: NaiveDateTime,
}

impl Default for Succeeded {
    fn default() -> Self {
        Self {
            created_at: Utc::now().naive_local(),
        }
    }
}
