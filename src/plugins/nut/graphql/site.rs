use std::ops::Deref;

use diesel::connection::Connection as DieselConnection;
use validator::Validate;

use super::super::super::super::{i18n::I18n, settings::Dao as SettingDao, Error, Result};
use super::super::super::layout::{Author, Site};
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
