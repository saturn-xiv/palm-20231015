use std::any::type_name;
use std::ops::Deref;

use chrono::NaiveDateTime;
use juniper::{GraphQLInputObject, GraphQLObject};
use uuid::Uuid;
use validator::Validate;

use super::super::super::super::Result;
use super::super::super::nut::models::{page_content::Dao as PageContentDao, Resource, WYSIWYG};
use super::super::models::leave_word::{Dao as LeaveWordDao, Item as LeaveWordItem};
use super::Context;

#[derive(Validate, GraphQLInputObject)]
pub struct CreateLeaveWordRequest {
    #[validate(length(min = 1))]
    pub body: String,
    #[validate(length(min = 1))]
    pub editor: String,
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
                editor: self.editor.parse()?,
                content: self.body.clone(),
            },
        )?;
        Ok(())
    }
}

#[derive(GraphQLObject)]
pub struct LeaveWord {
    pub id: Uuid,
    pub ip: String,
    pub editor: String,
    pub body: String,
    pub read_at: Option<NaiveDateTime>,
    pub updated_at: NaiveDateTime,
}

#[derive(GraphQLObject)]
pub struct LeaveWordList {
    pub data: Vec<LeaveWord>,
    pub total: i32,
}

impl LeaveWordList {
    pub fn new(ctx: &Context, page_size: i32, current: i32) -> Result<Self> {
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        ctx.token.administrator(db, jwt)?;

        let total = LeaveWordDao::count(db)?;

        let mut items = Vec::new();
        for it in LeaveWordDao::all(db, ((current - 1) * page_size) as i64, page_size as i64)? {
            let page = PageContentDao::by_resource(
                db,
                &Resource {
                    type_: type_name::<LeaveWordItem>().to_string(),
                    id: it.id,
                },
            )?;
            items.push(LeaveWord {
                id: it.id,
                ip: it.ip,
                editor: page.editor,
                body: page.body,
                read_at: it.read_at,
                updated_at: it.updated_at,
            });
        }
        Ok(Self {
            data: items,
            total: total as i32,
        })
    }
}

pub fn destroy(ctx: &Context, id: Uuid) -> Result<()> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let jwt = ctx.jwt.deref();
    ctx.token.administrator(db, jwt)?;
    let items = LeaveWordDao::delete(db, id)?;
    Ok(items)
}

pub fn read(ctx: &Context, id: Uuid) -> Result<()> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let jwt = ctx.jwt.deref();
    ctx.token.administrator(db, jwt)?;
    let items = LeaveWordDao::read(db, id)?;
    Ok(items)
}
