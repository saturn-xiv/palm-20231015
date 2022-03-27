use std::ops::Deref;

use askama::Template;
use diesel::connection::Connection as DieselConnection;
use juniper::GraphQLObject;
use serde::{Deserialize, Serialize};
use validator::Validate;

use super::super::super::super::{i18n::I18n, settings::Dao as SettingDao, Error, Result};
use super::super::super::layout::{Author, Site};
use super::super::tasks::email::Handler as Smtp;
use super::Context;

#[derive(Validate)]
pub struct InfoRequest {
    #[validate(length(min = 1))]
    pub lang: String,
    #[validate(length(min = 1))]
    pub title: String,
    #[validate(length(min = 1))]
    pub subhead: String,
    #[validate(length(min = 1))]
    pub description: String,
}

impl InfoRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        ctx.token.administrator(db, jwt)?;
        db.transaction::<_, Error, _>(move || {
            I18n::set(db, &self.lang, Site::TITLE, &self.title)?;
            I18n::set(db, &self.lang, Site::SUBHEAD, &self.subhead)?;
            I18n::set(db, &self.lang, Site::DESCRIPTION, &self.description)?;
            Ok(())
        })?;
        Ok(())
    }
}

#[derive(Validate)]
pub struct AuthorRequest {
    #[validate(length(min = 1), email)]
    pub email: String,
    #[validate(length(min = 1))]
    pub name: String,
}

impl AuthorRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;
        SettingDao::set(
            db,
            enc,
            &Site::AUTHOR.to_string(),
            None,
            &Author {
                name: self.name.clone(),
                email: self.email.clone(),
            },
            false,
        )?;
        Ok(())
    }
}

#[derive(Validate)]
pub struct CopyrightRequest {
    #[validate(length(min = 1))]
    pub value: String,
}

impl CopyrightRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;
        SettingDao::set(
            db,
            enc,
            &Site::COPYRIGHT.to_string(),
            None,
            &self.value,
            false,
        )?;
        Ok(())
    }
}

#[derive(Validate)]
pub struct KeywordsRequest {
    #[validate(length(min = 1))]
    pub items: Vec<String>,
}

impl KeywordsRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;

        SettingDao::set(
            db,
            enc,
            &Site::KEYWORDS.to_string(),
            None,
            &self.items,
            false,
        )?;
        Ok(())
    }
}

#[derive(Template, Validate, GraphQLObject, Serialize, Deserialize)]
#[template(path = "google/verify.html")]
#[graphql(name = "GoogleSetting")]
pub struct GoogleRequest {
    #[validate(length(min = 1))]
    pub site_verify_code: String,
}

impl GoogleRequest {
    const KEY: &'static str = "site.google";
    pub fn new(ctx: &Context) -> Result<Self> {
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;
        let it = SettingDao::get(db, enc, &Self::KEY.to_string(), None)?;
        Ok(it)
    }
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;

        let form = self.deref();
        SettingDao::set(db, enc, &Self::KEY.to_string(), None, form, false)?;
        Ok(())
    }
}

#[derive(Template, Validate, GraphQLObject, Serialize, Deserialize)]
#[template(path = "baidu/verify.html")]
#[graphql(name = "BaiduSetting")]
pub struct BaiduRequest {
    #[validate(length(min = 1))]
    pub site_verify_code: String,
}

impl BaiduRequest {
    const KEY: &'static str = "site.baidu";
    pub fn new(ctx: &Context) -> Result<Self> {
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;
        let it = SettingDao::get(db, enc, &Self::KEY.to_string(), None)?;
        Ok(it)
    }
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;

        let form = self.deref();
        SettingDao::set(db, enc, &Self::KEY.to_string(), None, form, false)?;
        Ok(())
    }
}

impl Smtp {
    pub fn new(ctx: &Context) -> Result<Self> {
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;
        let mut it: Self = SettingDao::get(db, enc, &Self::KEY.to_string(), None)?;
        it.password = "".to_string();
        Ok(it)
    }
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;

        let form = self.deref();
        SettingDao::set(db, enc, &Self::KEY.to_string(), None, form, true)?;
        Ok(())
    }
}
