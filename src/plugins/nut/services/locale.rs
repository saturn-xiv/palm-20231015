use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::Enforcer;
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};

use super::super::super::super::{
    i18n::locale::{Dao as LocaleDao, Item as Locale},
    jwt::Jwt,
    orm::postgresql::Pool as PostgreSqlPool,
    GrpcResult,
};
use super::super::{models::Operation, v1};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub enforcer: Arc<Mutex<Enforcer>>,
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
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;

        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();

        if !user.can::<Locale, _>(enf, &Operation::Write, None) {
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
    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::LocaleIndexResponse> {
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
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
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;

        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();
        if !user.can::<Locale, _>(enf, &Operation::Remove, None) {
            return Err(Status::permission_denied(type_name::<Locale>()));
        }
        let req = req.into_inner();
        try_grpc!(LocaleDao::delete(db, req.id))?;
        Ok(Response::new(()))
    }
}
