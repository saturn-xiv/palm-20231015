use std::ops::Deref;

use juniper::GraphQLInputObject;
use uuid::Uuid;
use validator::Validate;

use super::super::super::super::{
    i18n::locale::{Dao as LocaleDao, Item as Locale},
    Result,
};
use super::Context;

#[derive(Validate, GraphQLInputObject)]
pub struct SetLocaleRequest {
    #[validate(length(min = 1))]
    pub lang: String,
    #[validate(length(min = 1))]
    pub code: String,
    #[validate(length(min = 1))]
    pub message: String,
}

impl SetLocaleRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        ctx.token.administrator(db, jwt)?;

        match LocaleDao::by_lang_and_code(db, &ctx.lang, &self.code) {
            Ok(it) => LocaleDao::update(db, it.id, &self.code, &self.message)?,
            Err(_) => LocaleDao::create(db, &ctx.lang, &self.code, &self.message)?,
        };

        Ok(())
    }
}

pub fn destroy(ctx: &Context, id: Uuid) -> Result<()> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let jwt = ctx.jwt.deref();
    ctx.token.administrator(db, jwt)?;
    LocaleDao::delete(db, id)?;
    Ok(())
}
pub fn by_lang(ctx: &Context, lang: &str) -> Result<Vec<Locale>> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let items = LocaleDao::by_lang(db, lang)?;
    Ok(items)
}
