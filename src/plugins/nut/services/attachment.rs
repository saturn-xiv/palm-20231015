use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use tonic::{Request, Response, Status};

use super::super::super::super::{
    crypto::Aes, jwt::Jwt, orm::postgresql::Pool as PostgreSqlPool, GrpcResult,
};
use super::super::{
    models::{
        attachment::{Dao as AttachmentDao, Item as Attachment},
        Operation,
    },
    v1,
};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub aes: Arc<Aes>,
}

#[tonic::async_trait]
impl v1::attachment_server::Attachment for Service {
    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::AttachmetIndexResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();

        let user = try_grpc!(ss.current_user(db, jwt))?;
        let req = req.into_inner();

        let (total, items) = if user.is_administrator(db).is_ok() {
            let total = try_grpc!(AttachmentDao::count(db))?;
            let items = try_grpc!(AttachmentDao::all(db, req.offset(total), req.size()))?;
            (total, items)
        } else {
            let total = try_grpc!(AttachmentDao::count_by_user(db, user.id))?;
            let items = try_grpc!(AttachmentDao::by_user(
                db,
                user.id,
                req.offset(total),
                req.size()
            ))?;
            (total, items)
        };
        Ok(Response::new(v1::AttachmetIndexResponse {
            items: items.iter().map(|x| x.clone().into()).collect(),
            pagination: Some(v1::Pagination::new(&req, total)),
        }))
    }
    async fn destroy(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        let req = req.into_inner();
        let it = try_grpc!(AttachmentDao::by_id(db, req.id))?;
        if it.user_id == user.id
            || user
                .can::<Attachment>(db, &Operation::Remove, Some(it.id))
                .is_ok()
        {
            let aws = try_grpc!(v1::AwsProfile::new(db, aes))?;
            let s3 = try_grpc!(aws.s3())?;
            try_grpc!(s3.delete_object(it.bucket.clone(), it.name.clone()).await)?;
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
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        let req = req.into_inner();
        let ttl = req.ttl.unwrap_or_default();
        let it = try_grpc!(AttachmentDao::by_id(db, req.id))?;
        if it.user_id == user.id
            || user
                .can::<Attachment>(db, &Operation::Read, Some(it.id))
                .is_ok()
        {
            let aws = try_grpc!(v1::AwsProfile::new(db, aes))?;
            let s3 = try_grpc!(aws.s3())?;
            let url = s3.get_object(it.bucket.clone(), it.name.clone(), to_std_duration!(ttl));

            return Ok(Response::new(v1::AttachemtShowResponse {
                item: Some(it.into()),
                url,
            }));
        }
        Err(Status::permission_denied(format!(
            "forbidden to shwo {}",
            it.title
        )))
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
            region: it.region,
            status: it.status,
            updated_at: Some(to_timestamp!(it.updated_at)),
        }
    }
}
