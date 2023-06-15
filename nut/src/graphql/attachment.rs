use std::ops::{Deref, DerefMut};
use std::time::Duration as StdDuration;

use chrono::NaiveDateTime;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{HttpError, Pager, Pagination, Result};
use validator::Validate;

use super::super::models::{
    attachment::{Dao as AttachmentDao, Item as Attachment},
    Operation,
};
use super::{Context, CurrentUserAdapter};

#[derive(GraphQLObject)]
#[graphql(name = "IndexAttachmentResponse")]
pub struct IndexResponse {
    pub items: Vec<Item>,
    pub pagination: Pagination,
}

impl IndexResponse {
    pub fn new(context: &Context, pager: &Pager) -> Result<Self> {
        pager.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };

        let total = AttachmentDao::count_by_user(db, user.id)?;
        let items = AttachmentDao::by_user(db, user.id, pager.offset(total), pager.size() as i64)?;
        Ok(Self {
            items: items.iter().map(Item::new).collect(),
            pagination: Pagination::new(pager, total),
        })
    }
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "ShowAttachmentRequest")]
pub struct ShowRequest {
    #[validate(range(min = 1))]
    pub id: i32,
    #[validate(range(min = 60, max = 604800))]
    pub ttl: i32,
}

#[derive(GraphQLObject)]
#[graphql(name = "ShowAttachmentResponse")]
pub struct ShowResponse {
    pub item: Item,
    pub url: String,
}

impl ShowRequest {
    pub async fn handle(&self, context: &Context) -> Result<ShowResponse> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();

        if !user
            .can::<Attachment, _>(enf, &Operation::Read, Some(self.id))
            .await
        {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let it = AttachmentDao::by_id(db, self.id)?;
        if it.deleted_at.is_some() {
            return Err(Box::new(HttpError(StatusCode::NOT_FOUND, None)));
        }
        let cli = context.s3.open().await?;
        let url = cli
            .get_object(
                &it.bucket,
                &it.name,
                StdDuration::from_secs(self.ttl as u64),
            )
            .await?;

        Ok(ShowResponse {
            item: Item::new(&it),
            url,
        })
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "AttachmentItem")]
pub struct Item {
    pub id: i32,
    pub bucket: String,
    pub name: String,
    pub title: String,
    pub size: i32,
    pub content_type: String,
    pub status: String,
    pub deleted_at: Option<NaiveDateTime>,
    pub updated_at: NaiveDateTime,
}

impl Item {
    fn new(x: &Attachment) -> Self {
        Self {
            id: x.id,
            bucket: x.bucket.clone(),
            name: x.name.clone(),
            title: x.title.clone(),
            size: (x.size / 1_024) as i32,
            content_type: x.content_type.clone(),
            status: x.status.clone(),
            deleted_at: x.deleted_at,
            updated_at: x.updated_at,
        }
    }
}

pub async fn delete(context: &Context, id: i32) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();

    if !user
        .can::<Attachment, _>(enf, &Operation::Remove, Some(id))
        .await
    {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    let it = AttachmentDao::by_id(db, id)?;
    let cli = context.s3.open().await?;
    cli.remove_object(&it.bucket, &it.name).await?;
    AttachmentDao::delete(db, it.id)?;
    Ok(())
}
