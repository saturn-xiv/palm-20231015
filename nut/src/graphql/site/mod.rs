pub mod baidu;
pub mod google;
pub mod index_now;
pub mod info;
pub mod smtp;
pub mod status;
pub mod twilio;

use casbin::RbacApi;
use chrono::{Datelike, Utc};
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{
    cache::Provider as CacheProvider,
    crypto::random::string as random_string,
    rbac::{Role, Subject},
    to_code, try_grpc, Error, HttpError, Result,
};
use serde::{Deserialize, Serialize};
use std::ops::{Deref, DerefMut};
use validator::Validate;

use super::super::{
    controllers::Layout,
    i18n::I18n,
    models::{
        locale::Dao as LocaleDao,
        log::{Dao as LogDao, Level as LogLevel},
        setting::FlatBuffer as FlatbufferSetting,
        user::{Dao as UserDao, Item as User},
    },
};
use super::{Context, CurrentUserAdapter};

pub async fn heartbeat(context: &Context) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();

    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    Ok(())
}

pub async fn clear_cache(context: &Context) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();

    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    ch.clear()?;
    Ok(())
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "SiteSetMaintenanceModeRequest")]
pub struct SetMaintenanceModeRequest {
    #[validate(length(max = 255))]
    pub reason: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct MaintenanceMode {
    pub reason: String,
}

impl SetMaintenanceModeRequest {
    pub async fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();

        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let aes = context.loquat.deref();
        FlatbufferSetting::set(
            db,
            aes,
            None,
            &MaintenanceMode {
                reason: self.reason.clone(),
            },
            false,
        )?;
        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "SiteInstallRequest")]
pub struct InstallRequest {
    #[validate(length(min = 1, max = 31))]
    pub nickname: String,
    #[validate(length(min = 1, max = 63))]
    pub real_name: String,
    #[validate(email, length(min = 1, max = 127))]
    pub email: String,
    #[validate(length(min = 6, max = 32))]
    pub password: String,
    #[validate(length(min = 1, max = 31))]
    pub time_zone: String,
}

impl InstallRequest {
    pub async fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();

        if UserDao::count(db)? > 0 {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some("db isn't empty".to_string()),
            )));
        }

        let hmac = context.loquat.deref();
        let user = db.transaction::<_, Error, _>(move |db| {
            {
                UserDao::sign_up(
                    db,
                    hmac,
                    "Null",
                    User::NIL,
                    "nobody@local",
                    &random_string(32),
                    &User::GUEST_LANG.parse()?,
                    &User::GUEST_TIMEZONE.parse()?,
                )?;
                let user = UserDao::by_nickname(db, User::NIL)?;
                UserDao::lock(db, user.id, true)?;
                UserDao::enable(db, user.id, false)?;
            }

            let nickname = to_code!(self.nickname);
            let email = to_code!(self.email);
            let real_name = self.real_name.trim();
            UserDao::sign_up(
                db,
                hmac,
                real_name,
                &nickname,
                &email,
                &self.password,
                &context.session.lang.parse()?,
                &self.time_zone.parse()?,
            )?;
            let user = UserDao::by_email(db, &email)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                "sign up.",
            )?;
            UserDao::confirm(db, user.id)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                "confirmed.",
            )?;

            Ok(user)
        })?;

        {
            let enf = context.enforcer.deref();
            let mut enf = enf.lock().await;
            let name = Subject::to(&user);
            try_grpc!(
                enf.add_roles_for_user(
                    &name,
                    vec![Role::Root.to_string(), Role::Administrator.to_string()],
                    None,
                )
                .await
            )?;
        }

        Ok(())
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "LayoutResponse")]
pub struct LayoutResponse {
    pub title: String,
    pub subhead: String,
    pub description: String,
    pub keywords: Vec<String>,
    pub copyright: String,
    pub lang: String,
    pub languages: Vec<String>,
    pub logo: String,
    pub author: info::GetAuthorResponse,
}

impl LayoutResponse {
    pub fn new(context: &Context) -> Result<Self> {
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let aes = context.loquat.deref();

        let keywords: info::Keywords = FlatbufferSetting::get(db, aes, None).unwrap_or_default();
        let copyright: info::Copyright =
            FlatbufferSetting::get(db, aes, None).unwrap_or_else(|_| {
                info::Copyright({
                    let (_, year) = Utc::now().year_ce();
                    format!("2013~{}", year)
                })
            });
        let languages = LocaleDao::languages(db).unwrap_or_default();
        let author: info::Author = FlatbufferSetting::get(db, aes, None).unwrap_or_default();
        let logo: info::Logo = FlatbufferSetting::get(db, aes, None)
            .unwrap_or_else(|_| info::Logo("/my/favicon.ico".to_string()));

        Ok(Self {
            title: I18n::t(
                db,
                &context.session.lang,
                Layout::SITE_TITLE,
                &None::<String>,
            ),
            subhead: I18n::t(
                db,
                &context.session.lang,
                Layout::SITE_SUBHEAD,
                &None::<String>,
            ),
            description: I18n::t(
                db,
                &context.session.lang,
                Layout::SITE_DESCRIPTION,
                &None::<String>,
            ),
            keywords: keywords.0,
            logo: logo.0,
            copyright: copyright.0,
            lang: context.session.lang.clone(),
            languages,
            author: info::GetAuthorResponse {
                email: author.email.clone(),
                name: author.name,
            },
        })
    }
}
