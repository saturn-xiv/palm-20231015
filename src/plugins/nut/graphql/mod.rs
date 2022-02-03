pub mod address;
pub mod category;
pub mod contact;
pub mod leave_word;
pub mod locale;
pub mod tag;
pub mod user;

use std::any::type_name;
use std::default::Default;
use std::fmt;
use std::net::SocketAddr;
use std::ops::Deref;
use std::sync::Arc;

use chrono::{NaiveDateTime, Utc};
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use language_tags::LanguageTag;
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
    HttpError, Result,
};
use super::models::{
    policy::Dao as PolicyDao,
    role::Item as Role,
    user::{Dao as UserDao, Item as User},
};

pub struct Context {
    pub hmac: Arc<Hmac>,
    pub aes: Arc<Aes>,
    pub jwt: Arc<Jwt>,
    pub db: DbPool,
    pub cache: CachePool,
    pub queue: Arc<RabbitMq>,
    pub token: Option<String>,
    pub peer: Option<SocketAddr>,
    pub aws: Arc<Aws>,
    pub s3: Arc<S3>,
    pub lang: String,
}

impl juniper::Context for Context {}

impl Context {
    pub fn lang(locale: Option<String>) -> String {
        if let Some(ref it) = locale {
            if let Ok(it) = LanguageTag::parse(it) {
                return it.to_string();
            }
        }
        "en-US".to_string()
    }
    pub fn peer(&self) -> String {
        if let Some(ref it) = self.peer {
            return it.ip().to_string();
        }
        "n/a".to_string()
    }
    pub fn token(&self) -> Option<String> {
        if let Some(ref token) = self.token {
            if let Some(token) = token.strip_prefix(Jwt::BEARER) {
                return Some(token.to_string());
            }
        }
        None
    }
    pub fn current_user(&self) -> Result<User> {
        if let Some(ref token) = self.token() {
            let token = self.jwt.parse::<Token>(token)?;
            let token = token.claims;
            if token.act == Action::SignIn {
                let db = self.db.get()?;
                let db = db.deref();
                let user = UserDao::by_uid(db, &token.aud)?;
                user.available()?;
                return Ok(user);
            }
        }

        Err(Box::new(HttpError(
            StatusCode::NON_AUTHORITATIVE_INFORMATION,
            None,
        )))
    }
    pub fn administrator(&self) -> Result<User> {
        let user = self.current_user()?;
        let db = self.db.get()?;
        let db = db.deref();
        if PolicyDao::is(db, type_name::<User>(), user.id, Role::ADMINISTRATOR) {
            return Ok(user);
        }
        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
    }
}

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

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub enum Action {
    SignIn,
    ResetPassword,
    Unlock,
    Confirm,
    Other(String),
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Token {
    pub aud: String,
    pub act: Action,
    pub nbf: i64,
    pub exp: i64,
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
        let lang = match ctx.current_user() {
            Ok(it) => it.lang,
            Err(_) => ctx.lang.clone(),
        };
        let db = ctx.db.get()?;
        let db = db.deref();
        let enc = ctx.aes.deref();
        Ok(Self {
            languages: LocaleDao::languages(db)?,
            title: I18n::t(db, &lang, Self::TITLE, &None::<String>),
            subhead: I18n::t(db, &lang, Self::SUBHEAD, &None::<String>),
            keywords: SettingDao::get::<String, Vec<String>, Aes>(
                db,
                enc,
                &Self::KEYWORDS.to_string(),
            )
            .unwrap_or_default(),
            author: SettingDao::get::<String, Author, Aes>(db, enc, &Self::AUTHOR.to_string())
                .unwrap_or_default(),
            description: I18n::t(db, &lang, Self::DESCRIPTION, &None::<String>),
            copyright: SettingDao::get::<String, String, Aes>(
                db,
                enc,
                &Self::COPYRIGHT.to_string(),
            )
            .unwrap_or_default(),
            locale: lang,
        })
    }
}
