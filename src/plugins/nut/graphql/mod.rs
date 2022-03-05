pub mod address;
pub mod category;
pub mod contact;
pub mod leave_word;
pub mod locale;
pub mod tag;
pub mod user;

use std::default::Default;
use std::fmt;
use std::ops::Deref;
use std::sync::Arc;

use chrono::{NaiveDateTime, Utc};
use juniper::{GraphQLInputObject, GraphQLObject};
use serde::{Deserialize, Serialize};

use super::super::super::{
    aws::{s3::Config as S3, Credentials as Aws},
    cache::redis::Pool as CachePool,
    crypto::{Aes, Hmac},
    i18n::{locale::Dao as LocaleDao, I18n},
    jwt::Jwt,
    orm::Pool as DbPool,
    queue::amqp::RabbitMq,
    settings::Dao as SettingDao,
    Result,
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

#[derive(GraphQLObject, Deserialize, Serialize, Debug, Default)]
pub struct Author {
    pub email: String,
    pub name: String,
}

impl fmt::Display for Author {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}<{}>", self.name, self.email)
    }
}

#[derive(GraphQLObject)]
pub struct Site {
    pub locale: String,
    pub languages: Vec<String>,
    pub title: String,
    pub subhead: String,
    pub keywords: Vec<String>,
    pub description: String,
    pub author: Author,
    pub copyright: String,
}

impl Site {
    pub const TITLE: &'static str = "site.title";
    pub const SUBHEAD: &'static str = "site.subhead";
    pub const KEYWORDS: &'static str = "site.keywords";
    pub const DESCRIPTION: &'static str = "site.description";
    pub const AUTHOR: &'static str = "site.author";
    pub const COPYRIGHT: &'static str = "site.copyright";
    pub fn new(ctx: &Context) -> Result<Self> {
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let lang = match ctx.token.current_user(db, jwt) {
            Ok(it) => it.lang,
            Err(_) => ctx.lang.clone(),
        };
        let enc = ctx.aes.deref();
        Ok(Self {
            languages: LocaleDao::languages(db)?,
            title: I18n::t(db, &lang, Self::TITLE, &None::<String>),
            subhead: I18n::t(db, &lang, Self::SUBHEAD, &None::<String>),
            keywords: SettingDao::get::<String, Vec<String>, Aes>(
                db,
                enc,
                &Self::KEYWORDS.to_string(),
                None,
            )
            .unwrap_or_default(),
            author: SettingDao::get::<String, Author, Aes>(
                db,
                enc,
                &Self::AUTHOR.to_string(),
                None,
            )
            .unwrap_or_default(),
            description: I18n::t(db, &lang, Self::DESCRIPTION, &None::<String>),
            copyright: SettingDao::get::<String, String, Aes>(
                db,
                enc,
                &Self::COPYRIGHT.to_string(),
                None,
            )
            .unwrap_or_default(),
            locale: lang,
        })
    }
}
