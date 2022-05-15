use std::ops::Deref;
use std::sync::Arc;

use tonic::{Request, Response, Status};

use super::super::super::super::{
    i18n::locale::{Dao as LocaleDao, Item as Locale},
    jwt::Jwt,
    orm::postgresql::Pool as PostgreSqlPool,
    GrpcResult,
};
use super::super::v1;
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
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
        let db = try_grpc!(self.pgsql.get())?;
        let db = db.deref();
        let jwt = self.jwt.deref();
        try_grpc!(ss.administrator(db, jwt))?;

        let req = req.into_inner();
        let code = req.code.to_lowercase();
        let code = code.trim();

        match LocaleDao::by_lang_and_code(db, &req.lang, code) {
            Ok(it) => try_grpc!(LocaleDao::update(db, it.id, &req.message))?,
            Err(_) => try_grpc!(LocaleDao::create(db, &req.lang, code, &req.message))?,
        };
        Ok(Response::new(()))
    }
    async fn get(
        &self,
        req: Request<v1::LocaleGetRequest>,
    ) -> GrpcResult<v1::locale_index_response::Item> {
        let db = try_grpc!(self.pgsql.get())?;
        let db = db.deref();
        let req = req.into_inner();
        let it = try_grpc!(LocaleDao::by_lang_and_code(db, &req.lang, &req.code))?;

        Ok(Response::new(it.into()))
    }
    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::LocaleIndexResponse> {
        let db = try_grpc!(self.pgsql.get())?;
        let db = db.deref();
        let req = req.into_inner();
        let total = try_grpc!(LocaleDao::count(db))?;
        let items = try_grpc!(LocaleDao::all(db, req.offset(total), req.size()))?;

        Ok(Response::new(v1::LocaleIndexResponse {
            pagination: Some(v1::Pagination::new(&req, total)),
            items: items.iter().map(|x| x.clone().into()).collect(),
        }))
    }
    async fn destroy(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = try_grpc!(self.pgsql.get())?;
        let db = db.deref();
        let jwt = self.jwt.deref();
        try_grpc!(ss.administrator(db, jwt))?;
        let req = req.into_inner();
        try_grpc!(LocaleDao::delete(db, req.id))?;
        Ok(Response::new(()))
    }
}
