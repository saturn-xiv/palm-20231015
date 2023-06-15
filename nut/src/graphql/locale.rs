use std::ops::{Deref, DerefMut};

use chrono::NaiveDateTime;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{HttpError, Pager, Pagination, Result};
use validator::Validate;

use super::super::models::{
    locale::{Dao as LocaleDao, Item as Locale},
    Operation,
};
use super::{Context, CurrentUserAdapter};

#[derive(GraphQLObject)]
#[graphql(name = "IndexLocaleResponse")]
pub struct IndexResponse {
    pub items: Vec<Item>,
    pub pagination: Pagination,
}

impl IndexResponse {
    pub fn new(context: &Context, pager: &Pager) -> Result<Self> {
        pager.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();

        let total = LocaleDao::count(db)?;
        let items = LocaleDao::all(db, pager.offset(total), pager.size() as i64)?;
        Ok(Self {
            items: items.iter().map(Item::new).collect(),
            pagination: Pagination::new(pager, total),
        })
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "LocaleItem")]
pub struct Item {
    pub id: i32,
    pub code: String,
    pub lang: String,
    pub message: String,
    pub updated_at: NaiveDateTime,
}

impl Item {
    pub fn new(x: &Locale) -> Self {
        Self {
            id: x.id,
            code: x.code.clone(),
            lang: x.lang.clone(),
            message: x.message.clone(),
            updated_at: x.updated_at,
        }
    }
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "LocaleCreateRequest")]
pub struct Create {
    #[validate(length(min = 1, max = 255))]
    pub code: String,
    #[validate(length(min = 1, max = 15))]
    pub lang: String,
    #[validate(length(min = 1))]
    pub message: String,
}
impl Create {
    pub async fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();

        if !user.can::<Locale, _>(enf, &Operation::Create, None).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }
        LocaleDao::create(db, &self.lang, &self.code, &self.message)?;
        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "LocaleUpdateRequest")]
pub struct Update {
    #[validate(length(min = 1))]
    pub message: String,
}

impl Update {
    pub async fn handle(&self, context: &Context, id: i32) -> Result<()> {
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();

        if !user.can::<Locale, _>(enf, &Operation::Update, None).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }
        LocaleDao::update(db, id, &self.message)?;
        Ok(())
    }
}

pub fn show(context: &Context, id: i32) -> Result<Item> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let it = LocaleDao::by_id(db, id)?;
    Ok(Item::new(&it))
}
pub fn by_lang(context: &Context, lang: &str) -> Result<Vec<Item>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let items = LocaleDao::by_lang(db, lang)?;
    Ok(items.iter().map(Item::new).collect())
}

pub async fn delete(context: &Context, id: i32) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();

    if !user.can::<Locale, _>(enf, &Operation::Remove, None).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    LocaleDao::delete(db, id)?;
    Ok(())
}
