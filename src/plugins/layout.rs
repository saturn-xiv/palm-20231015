use std::any::type_name;
use std::fmt;
use std::ops::{Deref, DerefMut};

use chrono::Duration;
use juniper::GraphQLObject;
use redis::Connection as Cache;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::super::{
    cache::Provider as CacheProvider,
    crypto::Secret,
    i18n::{locale::Dao as LocaleDao, I18n},
    orm::Connection as Db,
    settings::Dao as SettingDao,
    Result,
};
use super::nut::{
    graphql::Context,
    models::{
        role::{Dao as RoleDao, Item as Role},
        user::Item as User,
    },
};

#[derive(GraphQLObject, Serialize, Deserialize)]
pub struct Layout {
    pub menus: Vec<Menu>,
    pub site: Site,
    pub user: Option<UserProfile>,
}

#[derive(GraphQLObject, Serialize, Deserialize)]
pub struct UserProfile {
    pub name: String,
    pub lang: String,
    pub tz: String,
    pub logo: String,
}
impl From<User> for UserProfile {
    fn from(it: User) -> UserProfile {
        Self {
            name: it.real_name.clone(),
            lang: it.lang.clone(),
            logo: it.logo.clone(),
            tz: it.time_zone,
        }
    }
}

impl Layout {
    const KEY: &'static str = "layout://";

    pub fn build(ctx: &Context) -> Result<Layout> {
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();

        let user = ctx.token.current_user(db, jwt);

        let lang = match user {
            Ok(ref it) => it.lang.clone(),
            Err(_) => ctx.lang.clone(),
        };

        let enc = ctx.aes.deref();
        let mut ch = ctx.cache.get()?;
        let ch = ch.deref_mut();
        let it = Layout::new(
            &match user {
                Ok(user) => Some(user),
                Err(_) => None,
            },
            db,
            ch,
            enc,
            &lang,
        )?;
        Ok(it)
    }

    pub fn new<S: Secret>(
        user: &Option<User>,
        db: &Db,
        ch: &mut Cache,
        enc: &S,
        lang: &str,
    ) -> Result<Self> {
        let ttl = Duration::weeks(1).to_std()?;
        let it = ch.get(
            &match user {
                Some(ref user) => format!("{}{}/{}", Self::KEY, lang, user.id),
                None => format!("{}{}", Self::KEY, lang),
            },
            move || {
                let it = Self {
                    site: Site::new(db, enc, lang)?,
                    menus: match user {
                        Some(ref user) => Menu::load(user.id, db)?,
                        None => Vec::new(),
                    },
                    user: user.as_ref().map(|user| user.clone().into()),
                };
                Ok(it)
            },
            &ttl,
        )?;

        Ok(it)
    }

    pub fn expire(ch: &mut Cache) -> Result<()> {
        CacheProvider::destroy(ch, &Self::KEY)?;
        Ok(())
    }
}

#[derive(GraphQLObject, Serialize, Default, Deserialize)]
pub struct Menu {
    to: String,
    label: Option<String>,
    items: Vec<Self>,
}

impl Menu {
    pub fn load(user: Uuid, db: &Db) -> Result<Vec<Self>> {
        let mut items = vec![Menu {
            to: "personal".to_string(),
            items: vec![
                Menu {
                    to: "/users/logs".to_string(),
                    ..Default::default()
                },
                Menu {
                    to: "/users/profile".to_string(),
                    ..Default::default()
                },
                Menu {
                    to: "/users/change-password".to_string(),
                    ..Default::default()
                },
            ],
            ..Default::default()
        }];

        let is_admin = {
            let role = RoleDao::by_code(db, Role::ADMINISTRATOR)?;
            RoleDao::has(db, role.id, type_name::<User>(), user)
        };
        if is_admin {
            items.push(Menu {
                to: "admin".to_string(),
                items: vec![
                    Menu {
                        to: "/admin/site-info".to_string(),
                        ..Default::default()
                    },
                    Menu {
                        to: "/admin/locales".to_string(),
                        ..Default::default()
                    },
                    Menu {
                        to: "/admin/smtp".to_string(),
                        ..Default::default()
                    },
                    Menu {
                        to: "/admin/seo".to_string(),
                        ..Default::default()
                    },
                    Menu {
                        to: "/admin/users".to_string(),
                        ..Default::default()
                    },
                    Menu {
                        to: "/admin/tags".to_string(),
                        ..Default::default()
                    },
                    Menu {
                        to: "/admin/categories".to_string(),
                        ..Default::default()
                    },
                ],
                ..Default::default()
            });
        }
        Ok(items)
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

#[derive(GraphQLObject, Deserialize, Serialize)]
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
            .unwrap_or_default(),
            locale: lang.to_string(),
        };
        Ok(it)
    }
}
