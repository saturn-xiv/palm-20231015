pub mod address;
pub mod category;
pub mod contact;
pub mod leave_word;
pub mod locale;
pub mod tag;
pub mod user;

use std::default::Default;
use std::sync::Arc;

use chrono::{NaiveDateTime, Utc};
use juniper::{GraphQLInputObject, GraphQLObject};

use super::super::super::{
    aws::{s3::Config as S3, Credentials as Aws},
    cache::redis::Pool as CachePool,
    crypto::{Aes, Hmac},
    jwt::Jwt,
    orm::Pool as DbPool,
    queue::amqp::RabbitMq,
};
use super::handlers::token::Token;

pub struct Context {
    pub hmac: Arc<Hmac>,
    pub aes: Arc<Aes>,
    pub jwt: Arc<Jwt>,
    pub db: DbPool,
    pub cache: CachePool,
    pub queue: Arc<RabbitMq>,
    pub token: Token,
    pub peer: String,
    pub aws: Arc<Aws>,
    pub s3: Arc<S3>,
    pub lang: String,
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

#[derive(GraphQLInputObject)]
pub struct Pager {
    pub size: i32,
    pub index: i32,
}

impl Pager {
    const MAX_SIZE: i32 = 1 << 8;
    const MIN_SIZE: i32 = 1;
    pub fn build(&self, total: i64) -> Pagination {
        let total = total as i32;
        let size = if self.size < Self::MIN_SIZE {
            Self::MIN_SIZE
        } else if self.size > Self::MAX_SIZE {
            Self::MAX_SIZE
        } else {
            self.size
        };
        let capacity = {
            if total % size == 0 {
                total / size
            } else {
                (total / size) + 1
            }
        };
        let index = if self.index < 1 {
            1
        } else if (self.index * size) > total {
            capacity
        } else {
            self.index
        };

        Pagination {
            size,
            index,
            capacity,
        }
    }
}

#[derive(GraphQLObject, Default)]
pub struct Pagination {
    pub capacity: i32,
    pub size: i32,
    pub index: i32,
}

impl Pagination {
    pub fn build(&self) -> (i64, i64) {
        (((self.index - 1) * self.size) as i64, self.size as i64)
    }
}
