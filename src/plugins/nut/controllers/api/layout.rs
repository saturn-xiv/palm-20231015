use std::fmt;
use std::ops::{Deref, DerefMut};
use std::sync::RwLock;

use actix_web::{error::ErrorInternalServerError, get, web, Responder, Result as WebResult};
use casbin::{prelude::*, Enforcer};
use chrono::{Datelike, Duration, Utc};
use redis::Connection as Cache;
use serde::{Deserialize, Serialize};

use super::super::super::super::super::{
    cache::{redis::Pool as CachePool, Provider as CacheProvider},
    crypto::{Aes, Secret},
    i18n::{locale::Dao as LocaleDao, I18n},
    jwt::Jwt,
    orm::postgresql::{Connection as Db, Pool as DbPool},
    settings::Dao as SettingDao,
    Result,
};
use super::super::super::{
    handlers::{locale::Locale, token::Token},
    models::user::Item as User,
    policy,
};

#[allow(clippy::type_complexity)]
#[get("/layout")]
pub async fn get(
    (db, cache, aes, enf, jwt): (
        web::Data<DbPool>,
        web::Data<CachePool>,
        web::Data<Aes>,
        web::Data<RwLock<Enforcer>>,
        web::Data<Jwt>,
    ),
    token: Token,
    lang: Locale,
) -> WebResult<impl Responder> {
    let db = try_web!(db.get())?;
    let db = db.deref();
    let jwt = jwt.deref();
    let user = token.current_user(db, jwt).ok();
    let mut ch = try_web!(cache.get())?;
    let ch = ch.deref_mut();
    let enf = enf.deref();
    let aes = aes.deref();
    let aes = aes.deref();
    let it = try_web!(Layout::new(&user, db, ch, enf, aes, &lang.to_string()).await)?;
    Ok(web::Json(it))
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Layout {
    pub side_bar: Vec<Menu>,
    pub site_info: Site,
    pub user_profile: Option<UserProfile>,
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct UserProfile {
    pub nick_name: String,
    pub real_name: String,
    pub email: String,
    pub lang: String,
    pub time_zone: String,
    pub logo: String,
}
impl From<User> for UserProfile {
    fn from(it: User) -> UserProfile {
        Self {
            real_name: it.real_name.clone(),
            nick_name: it.nick_name.clone(),
            email: it.email.clone(),
            lang: it.lang.clone(),
            logo: it.logo.clone(),
            time_zone: it.time_zone,
        }
    }
}

impl Layout {
    const KEY: &'static str = "layout://";

    pub async fn new<S: Secret>(
        user: &Option<User>,
        db: &Db,
        _ch: &mut Cache,
        enf: &RwLock<Enforcer>,
        enc: &S,
        lang: &str,
    ) -> Result<Self> {
        // TODO async trait
        let _ttl = Duration::weeks(1).to_std()?;
        let _key = &match user {
            Some(ref user) => format!("{}{}/{}", Self::KEY, lang, user.id),
            None => format!("{}{}", Self::KEY, lang),
        };
        let it = Self {
            site_info: Site::new(db, enc, lang)?,
            side_bar: match user {
                Some(ref user) => Menu::side_bar(&user.subject(), enf).await?,
                None => Vec::new(),
            },
            user_profile: user.as_ref().map(|user| user.clone().into()),
        };

        Ok(it)
    }

    pub fn expire(ch: &mut Cache) -> Result<()> {
        CacheProvider::destroy(ch, &Self::KEY)?;
        Ok(())
    }
}

#[derive(Serialize, Default, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Menu {
    to: String,
    label: Option<String>,
    items: Vec<Self>,
}

impl Menu {
    pub async fn side_bar(user: &str, enf: &RwLock<Enforcer>) -> Result<Vec<Self>> {
        let mut items = Vec::new();

        let can_write_site = match enf.read() {
            Ok(it) => it.enforce((
                user,
                policy::Object::Site.to_string(),
                policy::Action::Write.to_string(),
            ))?,
            Err(_) => false,
        };

        let mut settings = Menu {
            to: "settings".to_string(),
            items: vec![
                Menu {
                    to: "/users/logs".to_string(),
                    ..Default::default()
                },
                Menu {
                    to: "/users/profile".to_string(),
                    ..Default::default()
                },
            ],
            ..Default::default()
        };
        if can_write_site {
            settings.items.push(Menu {
                to: "/admin/site".to_string(),
                ..Default::default()
            });
            settings.items.push(Menu {
                to: "/admin/leave-words".to_string(),
                ..Default::default()
            });
            settings.items.push(Menu {
                to: "/admin/locales".to_string(),
                ..Default::default()
            });
            settings.items.push(Menu {
                to: "/admin/users".to_string(),
                ..Default::default()
            });
            settings.items.push(Menu {
                to: "/admin/tags".to_string(),
                ..Default::default()
            });
            settings.items.push(Menu {
                to: "/admin/categories".to_string(),
                ..Default::default()
            });
        }

        items.push(settings);
        Ok(items)
    }
}

#[derive(Deserialize, Serialize, Debug, Clone, Default)]
pub struct Author {
    pub email: String,
    pub name: String,
}

impl fmt::Display for Author {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}<{}>", self.name, self.email)
    }
}

#[derive(Deserialize, Serialize, Clone)]
#[serde(rename_all = "camelCase")]
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

    pub fn new<S: Secret>(db: &Db, enc: &S, lang: &str) -> Result<Self> {
        let it = Self {
            languages: LocaleDao::languages(db)?,
            title: I18n::t(db, lang, Self::TITLE, &None::<String>),
            subhead: I18n::t(db, lang, Self::SUBHEAD, &None::<String>),
            keywords: SettingDao::get::<String, Vec<String>, S>(
                db,
                enc,
                &Self::KEYWORDS.to_string(),
                None,
            )
            .unwrap_or_default(),
            author: SettingDao::get::<String, Author, S>(db, enc, &Self::AUTHOR.to_string(), None)
                .unwrap_or_default(),
            description: I18n::t(db, lang, Self::DESCRIPTION, &None::<String>),
            copyright: SettingDao::get::<String, String, S>(
                db,
                enc,
                &Self::COPYRIGHT.to_string(),
                None,
            )
            .unwrap_or_else(|_| format!("{}", Utc::now().year())),
            locale: lang.to_string(),
        };
        Ok(it)
    }
}
