use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use palm::{
    cache::redis::Pool as RedisPool, jwt::Jwt, nut::v1, session::Session, to_timestamp, try_grpc,
    GrpcResult,
};
use tonic::{Request, Response, Status};

use super::super::{
    models::{
        leave_word::{Dao as LeaveWordDao, Item as LeaveWord},
        Operation,
    },
    orm::postgresql::Pool as PostgreSqlPool,
};
use super::CurrentUserAdapter;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub redis: RedisPool,
}

#[tonic::async_trait]
impl v1::leave_word_server::LeaveWord for Service {
    async fn create(&self, req: Request<v1::MediaContent>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();

        try_grpc!(LeaveWordDao::create(
            db,
            &ss.lang,
            &ss.client_ip,
            &req.body,
            req.editor()
        ))?;
        Ok(Response::new(()))
    }
    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::LeaveWordIndexResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.can::<LeaveWord, _>(&Operation::Read, None) {
            return Err(Status::permission_denied(type_name::<LeaveWord>()));
        }
        let req = req.into_inner();
        let total = try_grpc!(LeaveWordDao::count(db))?;

        let items = try_grpc!(LeaveWordDao::all(db, req.offset(total), req.size()))?;
        Ok(Response::new(v1::LeaveWordIndexResponse {
            items: items
                .iter()
                .map(|x| v1::leave_word_index_response::Item {
                    id: x.id,
                    lang: x.lang.clone(),
                    ip: x.ip.clone(),
                    content: Some(v1::MediaContent {
                        body: x.body.clone(),
                        editor: x.editor,
                        status: x.status,
                        published_at: x.published_at.map(|x| to_timestamp!(x)),
                    }),
                    updated_at: Some(to_timestamp!(x.updated_at)),
                    created_at: Some(to_timestamp!(x.created_at)),
                })
                .collect(),
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

        if !user.can::<LeaveWord, _>(&Operation::Read, None) {
            return Err(Status::permission_denied(type_name::<LeaveWord>()));
        }
        let req = req.into_inner();
        try_grpc!(LeaveWordDao::destroy(db, req.id))?;
        Ok(Response::new(()))
    }
}
