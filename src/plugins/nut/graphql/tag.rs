use std::convert::From;
use std::ops::Deref;

use juniper::{GraphQLInputObject, GraphQLObject};
use uuid::Uuid;
use validator::Validate;

use super::super::super::super::Result;
use super::super::models::tag::{Dao as TagDao, Item as TagItem};
use super::Context;

#[derive(Validate, GraphQLInputObject)]
pub struct TagRequest {
    #[validate(length(min = 1))]
    pub code: String,
}

impl TagRequest {
    pub fn create(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        ctx.token.administrator(db, jwt)?;

        TagDao::create(db, &self.code)?;
        Ok(())
    }
    pub fn update(&self, ctx: &Context, id: Uuid) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        ctx.token.administrator(db, jwt)?;
        TagDao::update(db, id, &self.code)?;
        Ok(())
    }
}

#[derive(GraphQLObject)]
pub struct Tag {
    pub id: Uuid,
    pub code: String,
}

impl From<TagItem> for Tag {
    fn from(it: TagItem) -> Self {
        Self {
            code: it.code.clone(),
            id: it.id,
        }
    }
}

pub fn index(ctx: &Context) -> Result<Vec<Tag>> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let items = TagDao::all(db)?
        .iter()
        .map(|it| it.clone().into())
        .collect();
    Ok(items)
}

pub fn destroy(ctx: &Context, id: Uuid) -> Result<()> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let jwt = ctx.jwt.deref();
    ctx.token.administrator(db, jwt)?;
    let items = TagDao::destroy(db, id)?;
    Ok(items)
}

pub fn show(ctx: &Context, id: Uuid) -> Result<Tag> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let it = TagDao::by_id(db, id)?;
    Ok(it.into())
}
