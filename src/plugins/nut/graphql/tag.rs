use std::convert::From;
use std::ops::Deref;

use juniper::{GraphQLInputObject, GraphQLObject};
use validator::Validate;

use super::super::super::super::Result;
use super::super::models::{
    tag::{Dao as TagDao, Item as TagItem},
    Color, Font, Icon,
};
use super::Context;

#[derive(Validate, GraphQLInputObject)]
pub struct TagRequest {
    #[validate(length(min = 1))]
    pub name: String,
    #[validate(length(min = 1))]
    pub code: String,
}

impl TagRequest {
    pub fn create(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        ctx.administrator()?;
        let db = ctx.db.get()?;
        let db = db.deref();

        TagDao::create(
            db,
            &self.code,
            &self.name,
            &Font::default(),
            &Icon::default(),
            &Color::default(),
        )?;
        Ok(())
    }
    pub fn update(&self, ctx: &Context, id: i32) -> Result<()> {
        self.validate()?;
        ctx.administrator()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        TagDao::update(
            db,
            id,
            &self.code,
            &self.name,
            &Font::default(),
            &Icon::default(),
            &Color::default(),
        )?;
        Ok(())
    }
}

#[derive(GraphQLObject)]
pub struct Tag {
    pub id: i32,
    pub code: String,
    pub name: String,
}

impl From<TagItem> for Tag {
    fn from(it: TagItem) -> Self {
        Self {
            code: it.code.clone(),
            name: it.name.clone(),
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

pub fn destroy(ctx: &Context, id: i32) -> Result<()> {
    ctx.administrator()?;
    let db = ctx.db.get()?;
    let db = db.deref();
    let items = TagDao::destroy(db, id)?;
    Ok(items)
}

pub fn show(ctx: &Context, id: i32) -> Result<Tag> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let it = TagDao::by_id(db, id)?;
    Ok(it.into())
}
