use std::convert::From;
use std::ops::Deref;

use juniper::{GraphQLInputObject, GraphQLObject};
use validator::Validate;

use super::super::super::super::Result;
use super::super::models::{
    category::{Dao as CategoryDao, Item as CategoryItem},
    Color, Font, Icon,
};
use super::Context;

#[derive(Validate, GraphQLInputObject)]
pub struct CategoryRequest {
    pub parent: Option<i32>,
    #[validate(length(min = 1))]
    pub name: String,
    #[validate(length(min = 1))]
    pub code: String,
    pub order: i32,
}

impl CategoryRequest {
    pub fn create(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        ctx.administrator()?;
        let db = ctx.db.get()?;
        let db = db.deref();

        CategoryDao::create(
            db,
            self.parent,
            &self.code,
            &self.name,
            &Font::default(),
            &Icon::default(),
            &Color::default(),
            self.order,
        )?;
        Ok(())
    }
    pub fn update(&self, ctx: &Context, id: i32) -> Result<()> {
        self.validate()?;
        ctx.administrator()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        CategoryDao::update(
            db,
            id,
            self.parent,
            &self.code,
            &self.name,
            &Font::default(),
            &Icon::default(),
            &Color::default(),
            self.order,
        )?;
        Ok(())
    }
}

#[derive(GraphQLObject)]
pub struct Category {
    pub parent_id: Option<i32>,
    pub id: i32,
    pub code: String,
    pub name: String,
    pub order: i32,
}

impl From<CategoryItem> for Category {
    fn from(it: CategoryItem) -> Self {
        Self {
            parent_id: it.parent_id,
            code: it.code.clone(),
            name: it.name.clone(),
            id: it.id,
            order: it.order,
        }
    }
}

pub fn index(ctx: &Context) -> Result<Vec<Category>> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let items = CategoryDao::all(db)?
        .iter()
        .map(|it| it.clone().into())
        .collect();
    Ok(items)
}

pub fn destroy(ctx: &Context, id: i32) -> Result<()> {
    ctx.administrator()?;
    let db = ctx.db.get()?;
    let db = db.deref();
    let items = CategoryDao::destroy(db, id)?;
    Ok(items)
}

pub fn show(ctx: &Context, id: i32) -> Result<Category> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let it = CategoryDao::by_id(db, id)?;
    Ok(it.into())
}
