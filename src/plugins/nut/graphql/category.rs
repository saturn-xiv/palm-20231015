use std::convert::From;
use std::ops::Deref;

use juniper::GraphQLObject;
use uuid::Uuid;
use validator::Validate;

use super::super::super::super::Result;
use super::super::models::category::{Dao as CategoryDao, Item as CategoryItem};
use super::Context;

#[derive(Validate)]
pub struct CategoryRequest {
    pub parent: Option<Uuid>,
    #[validate(length(min = 1))]
    pub code: String,
    pub order: i32,
}

impl CategoryRequest {
    pub fn create(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        ctx.token.administrator(db, jwt)?;

        CategoryDao::create(db, self.parent, &self.code, self.order)?;
        Ok(())
    }
    pub fn update(&self, ctx: &Context, id: Uuid) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        ctx.token.administrator(db, jwt)?;
        CategoryDao::update(db, id, self.parent, &self.code, self.order)?;
        Ok(())
    }
}

#[derive(GraphQLObject)]
pub struct Category {
    pub parent_id: Option<Uuid>,
    pub id: Uuid,
    pub code: String,
    pub order: i32,
}

impl From<CategoryItem> for Category {
    fn from(it: CategoryItem) -> Self {
        Self {
            parent_id: it.parent_id,
            code: it.code.clone(),
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

pub fn destroy(ctx: &Context, id: Uuid) -> Result<()> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let jwt = ctx.jwt.deref();
    ctx.token.administrator(db, jwt)?;
    let items = CategoryDao::destroy(db, id)?;
    Ok(items)
}

pub fn show(ctx: &Context, id: Uuid) -> Result<Category> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let it = CategoryDao::by_id(db, id)?;
    Ok(it.into())
}
