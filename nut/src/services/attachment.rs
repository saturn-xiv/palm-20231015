use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use palm::{
    auth::v1,
    cache::redis::Pool as RedisPool,
    crypto::Aes,
    jwt::Jwt,
    to_std_duration, to_timestamp, try_grpc,
    v1::{IdRequest, MinioProfile, Pager, Pagination},
    GrpcResult,
};
use tonic::{Request, Response, Status};

use super::super::{
    models::{
        attachment::{Dao as AttachmentDao, Item as Attachment},
        setting::get,
        Operation,
    },
    orm::postgresql::Pool as PostgreSqlPool,
};
use super::Session;

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub aes: Arc<Aes>,
}

#[tonic::async_trait]
impl v1::attachment_server::Attachment for Service {
    async fn index(&self, req: Request<Pager>) -> GrpcResult<v1::AttachmetIndexResponse> {
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
        Ok(Response::new(v1::AttachmetIndexResponse {
            items: items.iter().map(|x| x.clone().into()).collect(),
            pagination: Some(Pagination::new(&req, total)),
        }))
    }
    async fn destroy(&self, req: Request<IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();
        let it = try_grpc!(AttachmentDao::by_id(db, req.id))?;

        let can = user.can::<Attachment, _>(&Operation::Remove, Some(it.id));

        if can {
            let aws = try_grpc!(get::<MinioProfile, Aes>(db, aes, None))?;
            try_grpc!(aws.remove_object(&it.bucket, &it.name).await)?;
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
        req: Request<v1::AttachemtShowRequest>,
    ) -> GrpcResult<v1::AttachemtShowResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();
        let ttl = req.ttl.unwrap_or_default();
        let it = try_grpc!(AttachmentDao::by_id(db, req.id))?;

        if user.can::<Attachment, _>(&Operation::Read, Some(it.id)) {
            let aws = try_grpc!(get::<MinioProfile, Aes>(db, aes, None))?;
            let url = try_grpc!(
                aws.get_object(&it.bucket, &it.name, to_std_duration!(ttl))
                    .await
            )?;

            return Ok(Response::new(v1::AttachemtShowResponse {
                item: Some(it.into()),
                url,
            }));
        }
        Err(Status::permission_denied(it.title))
    }
}

impl From<Attachment> for v1::attachmet_index_response::Item {
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
