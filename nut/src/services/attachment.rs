use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::Enforcer;
use palm::{
    aws::s3::Config as S3, cache::redis::Pool as RedisPool, jwt::Jwt, nut::v1, session::Session,
    to_std_duration, to_timestamp, try_grpc, GrpcResult,
};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};

use super::super::{
    models::{
        attachment::{Dao as AttachmentDao, Item as Attachment},
        Operation,
    },
    orm::postgresql::Pool as PostgreSqlPool,
};
use super::CurrentUserAdapter;

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub s3: Arc<S3>,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

#[tonic::async_trait]
impl v1::attachment_server::Attachment for Service {
    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::AttachmentIndexResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();

        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();

        let (total, items) = if user.is_administrator() {
            let total = try_grpc!(AttachmentDao::count(db))?;
            let items = try_grpc!(AttachmentDao::all(db, req.offset(total), req.size()))?;
            (total, items)
        } else {
            let total = try_grpc!(AttachmentDao::count_by_user(db, user.payload.id))?;
            let items = try_grpc!(AttachmentDao::by_user(
                db,
                user.payload.id,
                req.offset(total),
                req.size()
            ))?;
            (total, items)
        };
        Ok(Response::new(v1::AttachmentIndexResponse {
            items: items.iter().map(|x| x.clone().into()).collect(),
            pagination: Some(v1::Pagination::new(&req, total)),
        }))
    }
    async fn destroy(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();
        let it = try_grpc!(AttachmentDao::by_id(db, req.id))?;

        let can = user.can::<Attachment, _>(&Operation::Remove, Some(it.id));

        if can {
            let cli = try_grpc!(self.s3.open().await)?;
            try_grpc!(cli.remove_object(&it.bucket, &it.name).await)?;
            try_grpc!(AttachmentDao::delete(db, it.id))?;
            return Ok(Response::new(()));
        }

        Err(Status::permission_denied(format!(
            "forbidden to remove {}",
            it.title
        )))
    }
    async fn show(
        &self,
        req: Request<v1::AttachmentShowRequest>,
    ) -> GrpcResult<v1::AttachmentShowResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();
        let ttl = req.ttl.unwrap_or_default();
        let it = try_grpc!(AttachmentDao::by_id(db, req.id))?;

        if user.can::<Attachment, _>(&Operation::Read, Some(it.id)) {
            let cli = try_grpc!(self.s3.open().await)?;
            let url = try_grpc!(
                cli.get_object(&it.bucket, &it.name, to_std_duration!(ttl))
                    .await
            )?;

            return Ok(Response::new(v1::AttachmentShowResponse {
                item: Some(it.into()),
                url,
            }));
        }
        Err(Status::permission_denied(it.title))
    }
}

impl From<Attachment> for v1::attachment_index_response::Item {
    fn from(it: Attachment) -> Self {
        Self {
            id: it.id,
            bucket: it.bucket,
            name: it.name,
            title: it.title,
            size: it.size,
            content_type: it.content_type,
            status: it.status,
            updated_at: Some(to_timestamp!(it.updated_at)),
        }
    }
}
