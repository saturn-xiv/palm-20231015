use std::ops::Deref;

use juniper::GraphQLObject;
use uuid::Uuid;
use validator::Validate;

use super::super::super::super::{
    i18n::locale::{Dao as LocaleDao, Item as LocaleItem},
    Result,
};
use super::Context;

#[derive(Validate)]
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

        match LocaleDao::by_lang_and_code(db, &self.lang, &self.code) {
            Ok(it) => LocaleDao::update(db, it.id, &self.code, &self.message)?,
            Err(_) => LocaleDao::create(db, &self.lang, &self.code, &self.message)?,
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
pub fn by_lang(ctx: &Context, lang: &str) -> Result<Vec<LocaleItem>> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let items = LocaleDao::by_lang(db, lang)?;
    Ok(items)
}

pub fn by_lang_and_code(ctx: &Context, lang: &str, code: &str) -> Result<LocaleItem> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let it = LocaleDao::by_lang_and_code(db, lang, code)?;
    Ok(it)
}

#[derive(GraphQLObject)]
pub struct LocaleList {
    pub data: Vec<LocaleItem>,
    pub total: i32,
}

impl LocaleList {
    pub fn new(ctx: &Context, page_size: i32, current: i32) -> Result<LocaleList> {
        let db = ctx.db.get()?;
        let db = db.deref();

        let total = LocaleDao::count(db)?;

        let items = LocaleDao::all(db, ((current - 1) * page_size) as i64, page_size as i64)?;
        Ok(Self {
            data: items,
            total: total as i32,
        })
    }
}
