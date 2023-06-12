pub mod mutation;
pub mod query;

use std::sync::Arc;

use casbin::Enforcer;
use chrono::{NaiveDateTime, Utc};
use juniper::{Context as GraphQLContext, GraphQLObject};
use palm::{cache::redis::Pool as CachePool, session::Session, thrift::Thrift};
use tokio::sync::Mutex;

use super::orm::postgresql::Pool as DbPool;

pub struct Context {
    pub db: DbPool,
    pub cache: CachePool,
    pub loquat: Thrift,
    pub orchid: Thrift,
    pub session: Session,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

impl GraphQLContext for Context {}
