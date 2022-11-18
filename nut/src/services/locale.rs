use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use palm::{
    auth::v1,
    cache::redis::Pool as RedisPool,
    jwt::Jwt,
    to_code, to_timestamp, try_grpc,
    v1::{IdRequest, Pager, Pagination},
    GrpcResult,
};
use tonic::{Request, Response, Status};

use super::super::{
    models::{
        locale::{Dao as LocaleDao, Item as Locale},
        Operation,
    },
    orm::postgresql::Pool as PostgreSqlPool,
};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub redis: RedisPool,
}

impl From<Locale> for v1::locale_index_response::Item {
    fn from(it: Locale) -> Self {
        Self {
            id: it.id,
            lang: it.lang,
            code: it.code,
            message: it.message,
            updated_at: Some(to_timestamp!(it.updated_at)),
        }
    }
}

#[tonic::async_trait]
impl v1::locale_server::Locale for Service {
    async fn set(&self, req: Request<v1::LocaleSetRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.can::<Locale, _>(&Operation::Write, None) {
            return Err(Status::permission_denied(type_name::<Locale>()));
        }

        let req = req.into_inner();
        let code = to_code!(req.code);

        match LocaleDao::by_lang_and_code(db, &req.lang, &code) {
            Ok(it) => try_grpc!(LocaleDao::update(db, it.id, &req.message))?,
            Err(_) => try_grpc!(LocaleDao::create(db, &req.lang, &code, &req.message))?,
        };
        Ok(Response::new(()))
    }
    async fn get(
        &self,
        req: Request<v1::LocaleGetRequest>,
    ) -> GrpcResult<v1::locale_index_response::Item> {
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();
        let code = to_code!(req.code);
        let it = try_grpc!(LocaleDao::by_lang_and_code(db, &req.lang, &code))?;

        Ok(Response::new(it.into()))
    }
    async fn index(&self, req: Request<Pager>) -> GrpcResult<v1::LocaleIndexResponse> {
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();
        let total = try_grpc!(LocaleDao::count(db))?;
        let items = try_grpc!(LocaleDao::all(db, req.offset(total), req.size()))?;

        Ok(Response::new(v1::LocaleIndexResponse {
            pagination: Some(Pagination::new(&req, total)),
            items: items.iter().map(|x| x.clone().into()).collect(),
        }))
    }
    async fn destroy(&self, req: Request<IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.can::<Locale, _>(&Operation::Remove, None) {
            return Err(Status::permission_denied(type_name::<Locale>()));
        }
        let req = req.into_inner();
        try_grpc!(LocaleDao::delete(db, req.id))?;
        Ok(Response::new(()))
    }
}
