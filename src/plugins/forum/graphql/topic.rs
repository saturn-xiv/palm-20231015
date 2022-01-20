use std::convert::From;
use std::ops::Deref;

use chrono::NaiveDateTime;
use diesel::prelude::*;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use validator::Validate;

use super::super::super::super::{orm::Connection as Db, HttpError, Result};
use super::super::super::nut::{
    graphql::{tag::Tag, user::Author, Context, Pager, Pagination},
    models::{policy::Dao as PolicyDao, role::Item as RoleItem, user::Item as UserItem, WYSIWYG},
};
use super::super::{
    models::topic::{Dao as TopicDao, Item as TopicItem},
    schema::forum_topics,
};

#[derive(Validate, GraphQLInputObject)]
pub struct ForumTopicRequest {
    #[validate(length(min = 1, max = 255))]
    pub title: String,
    #[validate(length(min = 1, max = 500))]
    pub summary: String,
    #[validate(length(min = 1))]
    pub body: String,
    #[validate(length(min = 1))]
    pub body_editor: String,
    // TODO
    pub tags: Vec<i32>,
}

impl ForumTopicRequest {
    pub fn create(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let user = ctx.current_user()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        TopicDao::create(
            db,
            user.id,
            &self.title,
            &self.summary,
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
        let it = TopicDao::by_id(db, id)?;
        can_edit(db, &user, &it)?;
        TopicDao::update(
            db,
            id,
            &self.title,
            &self.summary,
            &WYSIWYG {
                content: self.body.clone(),
                editor: self.body_editor.parse()?,
            },
        )?;

        Ok(())
    }
}

#[derive(GraphQLObject)]
pub struct ForumTopic {
    pub id: i32,
    pub title: String,
    pub summary: String,
    pub body: String,
    pub body_editor: String,
    pub author: Author,
    pub tags: Vec<Tag>,
    pub updated_at: NaiveDateTime,
}

impl ForumTopic {
    pub fn new(db: &Db, id: i32) -> Result<Self> {
        let it = TopicDao::by_id(db, id)?;
        Ok(Self {
            id: it.id,
            title: it.title.clone(),
            summary: it.summary.clone(),
            body: it.body.clone(),
            body_editor: it.body_editor.clone(),
            author: Author::new(db, it.user_id)?,
            tags: Vec::new(), //TODO
            updated_at: it.updated_at,
        })
    }
}

#[derive(GraphQLObject)]
pub struct ForumTopicList {
    pub items: Vec<ForumTopic>,
    pub pagination: Pagination,
}

impl ForumTopicList {
    pub fn latest(ctx: &Context, pager: &Pager) -> Result<Self> {
        let db = ctx.db.get()?;
        let db = db.deref();

        let pagination = pager.build(TopicDao::count(db)?);
        let (offset, limit) = pagination.build();

        let mut items = Vec::new();
        for id in forum_topics::dsl::forum_topics
            .select(forum_topics::dsl::id)
            .order(forum_topics::dsl::updated_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<i32>(db)?
        {
            let it = ForumTopic::new(db, id)?;
            items.push(it);
        }
        Ok(Self { items, pagination })
    }
}

pub fn destroy(ctx: &Context, id: i32) -> Result<()> {
    let user = ctx.current_user()?;
    let db = ctx.db.get()?;
    let db = db.deref();
    let it = TopicDao::by_id(db, id)?;
    can_edit(db, &user, &it)?;
    TopicDao::delete(db, id)?;
    Ok(())
}

pub fn show(ctx: &Context, id: i32) -> Result<ForumTopic> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let it = ForumTopic::new(db, id)?;
    Ok(it)
}

fn can_edit(db: &Db, user: &UserItem, it: &TopicItem) -> Result<()> {
    // TODO
    if user.id == it.user_id
        || PolicyDao::is(db, UserItem::ROLE_TYPE, user.id, RoleItem::ADMINISTRATOR)
    {
        return Ok(());
    }
    Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
}