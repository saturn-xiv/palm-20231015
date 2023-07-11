use std::ops::{Deref, DerefMut};
use std::sync::Arc;
use std::time::Duration as StdDuration;

use casbin::Enforcer;
use hyper::StatusCode;
use palm::{
    aws::s3::{Adapter as S3Adapter, Config as S3},
    cache::redis::{ClusterConnection as Cache, Pool as CachePool},
    jwt::Jwt,
    nut::v1,
    session::Session,
    thrift::loquat::Config as Loquat,
    try_grpc, GrpcResult, HttpError, Result,
};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};
use validator::Validate;

use super::super::{
    models::{
        attachment::{Dao as AttachmentDao, Item as Attachment},
        Operation,
    },
    orm::postgresql::{Connection as Db, Pool as DbPool},
};
use super::CurrentUserAdapter;

pub struct Service {
    pub jwt: Arc<Loquat>,
    pub db: DbPool,
    pub cache: CachePool,
    pub s3: Arc<S3>,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

#[tonic::async_trait]
impl v1::attachment_server::Attachment for Service {
    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::AttachmentIndexResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();

        let (user, _, _) = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();

        let total = try_grpc!(AttachmentDao::count_by_user(db, user.id))?;
        let mut items = Vec::new();
        for it in try_grpc!(AttachmentDao::by_user(
            db,
            user.id,
            req.offset(total),
            req.size()
        ))? {
            items.push(it.into());
        }
        Ok(Response::new(v1::AttachmentIndexResponse {
            items,
            pagination: Some(v1::Pagination::new(&req, total)),
        }))
    }
    async fn show(
        &self,
        req: Request<v1::AttachmentShowRequest>,
    ) -> GrpcResult<v1::AttachmentShowResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let s3 = self.s3.deref();
        let form = {
            let req = req.into_inner();
            let ttl = req.ttl.ok_or(Status::invalid_argument("empty ttl"))?;
            ShowRequest {
                id: req.id,
                ttl: ttl.seconds,
            }
        };
        let (item, url) = try_grpc!(form.handle(&ss, db, ch, enf, jwt, s3).await)?;
        Ok(Response::new(v1::AttachmentShowResponse {
            item: Some(item.into()),
            url,
        }))
    }
    async fn destroy(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let s3 = self.s3.deref();
        let req = req.into_inner();
        try_grpc!(destroy(&ss, db, ch, enf, jwt, s3, req.id).await)?;
        Ok(Response::new(()))
    }
}

#[derive(Validate)]
pub struct ShowRequest {
    #[validate(range(min = 1))]
    pub id: i32,
    #[validate(range(min = 60, max = 604800))]
    pub ttl: i64,
}

impl ShowRequest {
    pub async fn handle<J: Jwt>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
        s3: &S3,
    ) -> Result<(Attachment, String)> {
        self.validate()?;

        let (user, _, _) = ss.current_user(db, ch, jwt)?;

        user.can::<Attachment, _>(enf, &Operation::Read, Some(self.id))
            .await?;

        let it = AttachmentDao::by_id(db, self.id)?;
        if it.deleted_at.is_some() {
            return Err(Box::new(HttpError(StatusCode::NOT_FOUND, None)));
        }
        let cli = s3.open().await?;
        let url = S3Adapter::get_object(
            &cli,
            &it.bucket,
            &it.name,
            StdDuration::from_secs(self.ttl as u64),
        )
        .await?;

        Ok((it, url))
    }
}

pub async fn destroy<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    s3: &S3,
    id: i32,
) -> Result<()> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;

    user.can::<Attachment, _>(enf, &Operation::Remove, Some(id))
        .await?;
    let it = AttachmentDao::by_id(db, id)?;
    let cli = s3.open().await?;
    S3Adapter::delete_object(&cli, &it.bucket, &it.name).await?;
    AttachmentDao::delete(db, it.id)?;
    Ok(())
}
