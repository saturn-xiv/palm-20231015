use std::any::type_name;
use std::convert::From;
use std::ops::Deref;

use chrono::NaiveDateTime;
use diesel::prelude::*;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use validator::Validate;

use super::super::super::super::{orm::Connection as Db, HttpError, Result};
use super::super::super::nut::{
    graphql::{user::Author, Context, Pager, Pagination},
    models::{policy::Dao as PolicyDao, role::Item as RoleItem, user::Item as UserItem, WYSIWYG},
};
use super::super::{
    models::post::{Dao as PostDao, Item as PostItem},
    schema::forum_posts,
};

#[derive(Validate, GraphQLInputObject)]
pub struct ForumPostRequest {
    #[validate(length(min = 1))]
    pub body: String,
    #[validate(length(min = 1))]
    pub body_editor: String,
}

impl ForumPostRequest {
    pub fn create(&self, ctx: &Context, topic: i32) -> Result<()> {
        self.validate()?;
        let user = ctx.current_user()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        PostDao::create(
            db,
            user.id,
            topic,
            &WYSIWYG {
                content: self.body.clone(),
                editor: self.body_editor.parse()?,
            },
        )?;
        Ok(())
    }
    pub fn update(&self, ctx: &Context, id: i32) -> Result<()> {
        self.validate()?;
        let user = ctx.current_user()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let it = PostDao::by_id(db, id)?;
        can_edit(db, &user, &it)?;
        PostDao::update(
            db,
            id,
            &WYSIWYG {
                content: self.body.clone(),
                editor: self.body_editor.parse()?,
            },
        )?;

        Ok(())
    }
}

#[derive(GraphQLObject)]
pub struct ForumPost {
    pub id: i32,
    pub body: String,
    pub body_editor: String,
    pub author: Author,
    pub updated_at: NaiveDateTime,
}

impl ForumPost {
    pub fn new(db: &Db, id: i32) -> Result<Self> {
        let it = PostDao::by_id(db, id)?;
        Ok(Self {
            id: it.id,
            body: it.body.clone(),
            body_editor: it.body_editor.clone(),
            author: Author::new(db, it.user_id)?,
            updated_at: it.updated_at,
        })
    }
}

#[derive(GraphQLObject)]
pub struct ForumPostList {
    pub items: Vec<ForumPost>,
    pub pagination: Pagination,
}

impl ForumPostList {
    pub fn latest(ctx: &Context, pager: &Pager) -> Result<ForumPostList> {
        let db = ctx.db.get()?;
        let db = db.deref();

        let pagination = pager.build(PostDao::count(db)?);
        let (offset, limit) = pagination.build();

        let mut items = Vec::new();
        for id in forum_posts::dsl::forum_posts
            .select(forum_posts::dsl::id)
            .order(forum_posts::dsl::updated_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<i32>(db)?
        {
            let it = ForumPost::new(db, id)?;
            items.push(it);
        }
        Ok(Self { items, pagination })
    }
}

pub fn destroy(ctx: &Context, id: i32) -> Result<()> {
    let user = ctx.current_user()?;
    let db = ctx.db.get()?;
    let db = db.deref();
    let it = PostDao::by_id(db, id)?;
    can_edit(db, &user, &it)?;
    PostDao::delete(db, id)?;
    Ok(())
}

pub fn show(ctx: &Context, id: i32) -> Result<ForumPost> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let it = ForumPost::new(db, id)?;
    Ok(it)
}

fn can_edit(db: &Db, user: &UserItem, it: &PostItem) -> Result<()> {
    // TODO
    if user.id == it.user_id
        || PolicyDao::is(
            db,
            type_name::<UserItem>(),
            user.id,
            RoleItem::ADMINISTRATOR,
        )
    {
        return Ok(());
    }
    Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
}
