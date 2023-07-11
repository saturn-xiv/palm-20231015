use std::ops::{Deref, DerefMut};

use chrono::NaiveDateTime;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{HttpError, Pager, Pagination, Result};
use validator::Validate;

use super::super::models::{
    leave_word::{Dao as LeaveWordDao, Item as LeaveWord},
    Operation,
};
use super::{Context, CurrentUserAdapter};

#[derive(GraphQLObject)]
#[graphql(name = "IndexLeaveWordResponse")]
pub struct IndexResponse {
    pub items: Vec<Item>,
    pub pagination: Pagination,
}

impl IndexResponse {
    pub async fn new(context: &Context, pager: &Pager) -> Result<Self> {
        pager.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();

        let enf = context.enforcer.deref();
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "LeaveWordItem")]
pub struct Item {
    pub id: i32,
    pub lang: String,
    pub ip: String,
    pub body: String,
    pub body_editor: String,
    pub status: String,
    pub published_at: Option<NaiveDateTime>,
    pub deleted_at: Option<NaiveDateTime>,
    pub updated_at: NaiveDateTime,
}

impl Item {
    pub fn new(x: &LeaveWord) -> Self {
        Self {
            id: x.id,
            ip: x.ip.clone(),
            lang: x.lang.clone(),
            body: x.body.clone(),
            body_editor: x.body_editor.clone(),
            status: x.status.clone(),
            published_at: x.published_at,
            deleted_at: x.deleted_at,
            updated_at: x.updated_at,
        }
    }
}

pub async fn show(context: &Context, id: i32) -> Result<Item> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();

    if !user.can::<LeaveWord, _>(enf, &Operation::Read, None).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    let it = LeaveWordDao::by_id(db, id)?;
    Ok(Item::new(&it))
}
pub async fn delete(context: &Context, id: i32) -> Result<()> {
    Ok(())
}
