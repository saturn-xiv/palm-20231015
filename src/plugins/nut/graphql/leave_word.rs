use std::ops::Deref;

use juniper::GraphQLInputObject;
use validator::Validate;

use super::super::super::super::Result;
use super::super::models::{
    leave_word::{Dao as LeaveWordDao, Item as LeaveWord},
    WYSIWYG,
};
use super::Context;

#[derive(Validate, GraphQLInputObject)]
pub struct CreateLeaveWordRequest {
    #[validate(length(min = 1))]
    pub body: String,
    #[validate(length(min = 1))]
    pub body_editor: String,
}

impl CreateLeaveWordRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        LeaveWordDao::add(
            db,
            &ctx.peer,
            &WYSIWYG {
                editor: self.body_editor.parse()?,
                content: self.body.clone(),
            },
        )?;
        Ok(())
    }
}

pub fn index(ctx: &Context, limit: i32) -> Result<Vec<LeaveWord>> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let jwt = ctx.jwt.deref();
    ctx.token.administrator(db, jwt)?;
    let items = LeaveWordDao::all(db, limit as i64)?;
    Ok(items)
}

pub fn destroy(ctx: &Context, id: i32) -> Result<()> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let jwt = ctx.jwt.deref();
    ctx.token.administrator(db, jwt)?;
    let items = LeaveWordDao::delete(db, id)?;
    Ok(items)
}
