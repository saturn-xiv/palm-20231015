use std::ops::Deref;

use juniper::GraphQLInputObject;
use language_tags::LanguageTag;
use validator::Validate;

use super::super::super::super::{
    i18n::locale::{Dao as LocaleDao, Item as Locale},
    Result,
};
use super::Context;

#[derive(Validate, GraphQLInputObject)]
pub struct CreateLocaleRequest {
    #[validate(length(min = 1))]
    pub lang: String,
    #[validate(length(min = 1))]
    pub code: String,
    #[validate(length(min = 1))]
    pub message: String,
}

impl CreateLocaleRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let lang: LanguageTag = self.lang.parse()?;
        let lang = lang.to_string();
        ctx.administrator()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        LocaleDao::create(db, &lang, &self.code, &self.message)?;
        Ok(())
    }
}

#[derive(Validate, GraphQLInputObject)]
pub struct UpdateLocaleRequest {
    pub id: i32,
    #[validate(length(min = 1))]
    pub code: String,
    #[validate(length(min = 1))]
    pub message: String,
}

impl UpdateLocaleRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        ctx.administrator()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        LocaleDao::update(db, self.id, &self.code, &self.message)?;
        Ok(())
    }
}

pub fn destroy(ctx: &Context, id: i32) -> Result<()> {
    ctx.administrator()?;
    let db = ctx.db.get()?;
    let db = db.deref();
    LocaleDao::delete(db, id)?;
    Ok(())
}
pub fn by_lang(ctx: &Context, lang: &str) -> Result<Vec<Locale>> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let items = LocaleDao::by_lang(db, lang)?;
    Ok(items)
}
