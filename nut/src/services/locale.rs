use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::Enforcer;
use palm::{
    cache::redis::{ClusterConnection as Cache, Pool as CachePool},
    jwt::Jwt,
    nut::v1,
    session::Session,
    thrift::loquat::Config as Loquat,
    try_grpc, GrpcResult, Result,
};
use tokio::sync::Mutex;
use tonic::{Request, Response};
use validator::Validate;

use super::super::{
    models::{
        locale::{Dao as LocaleDao, Item as Locale},
        Operation,
    },
    orm::postgresql::{Connection as Db, Pool as DbPool},
};
use super::CurrentUserAdapter;

pub struct Service {
    pub jwt: Arc<Loquat>,
    pub db: DbPool,
    pub cache: CachePool,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

#[tonic::async_trait]
impl v1::locale_server::Locale for Service {
    async fn create(&self, req: Request<v1::LocaleCreateRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            Create {
                code: req.code.clone(),
                lang: req.lang.clone(),
                message: req.message,
            }
        };
        try_grpc!(form.handle(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(()))
    }
    async fn update(&self, req: Request<v1::LocaleUpdateRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            Update {
                id: req.id,
                message: req.message,
            }
        };
        try_grpc!(form.handle(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(()))
    }
    async fn by_lang_and_code(
        &self,
        req: Request<v1::LocaleByLangAndCodeRequest>,
    ) -> GrpcResult<v1::locale_index_response::Item> {
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();
        let it = try_grpc!(LocaleDao::by_lang_and_code(db, &req.lang, &req.code))?;
        Ok(Response::new(it.into()))
    }
    async fn by_id(
        &self,
        req: Request<v1::IdRequest>,
    ) -> GrpcResult<v1::locale_index_response::Item> {
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();
        let it = try_grpc!(LocaleDao::by_id(db, req.id))?;
        Ok(Response::new(it.into()))
    }
    async fn by_lang(
        &self,
        req: Request<v1::LocaleByLangRequest>,
    ) -> GrpcResult<v1::LocaleListResponse> {
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();
        let mut items = Vec::new();
        for it in try_grpc!(LocaleDao::by_lang(db, &req.lang))? {
            items.push(it.into());
        }
        Ok(Response::new(v1::LocaleListResponse { items }))
    }
    async fn by_code(
        &self,
        req: Request<v1::LocaleByCodeRequest>,
    ) -> GrpcResult<v1::LocaleListResponse> {
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();
        let mut items = Vec::new();
        for it in try_grpc!(LocaleDao::by_code(db, &req.code))? {
            items.push(it.into());
        }
        Ok(Response::new(v1::LocaleListResponse { items }))
    }
    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::LocaleIndexResponse> {
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();

        let mut items = Vec::new();
        let total = try_grpc!(LocaleDao::count(db))?;
        for it in try_grpc!(LocaleDao::all(db, req.offset(total), req.size()))? {
            items.push(it.into());
        }
        Ok(Response::new(v1::LocaleIndexResponse {
            items,
            pagination: Some(v1::Pagination::new(&req, total)),
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
        let req = req.into_inner();
        try_grpc!(destroy(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(()))
    }
}

#[derive(Validate)]
pub struct Create {
    #[validate(length(min = 1, max = 255))]
    pub code: String,
    #[validate(length(min = 1, max = 15))]
    pub lang: String,
    #[validate(length(min = 1))]
    pub message: String,
}
impl Create {
    pub async fn handle<J: Jwt>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
    ) -> Result<()> {
        self.validate()?;

        let (user, _, _) = ss.current_user(db, ch, jwt)?;
        user.can::<Locale, _>(enf, &Operation::Create, None).await?;
        LocaleDao::create(db, &self.lang, &self.code, &self.message)?;
        Ok(())
    }
}

#[derive(Validate)]
pub struct Update {
    pub id: i32,
    #[validate(length(min = 1))]
    pub message: String,
}

impl Update {
    pub async fn handle<J: Jwt>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
    ) -> Result<()> {
        let (user, _, _) = ss.current_user(db, ch, jwt)?;

        user.can::<Locale, _>(enf, &Operation::Update, None).await?;
        LocaleDao::update(db, self.id, &self.message)?;
        Ok(())
    }
}
pub async fn destroy<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    id: i32,
) -> Result<()> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;
    let enf = enf.deref();
    user.can::<Locale, _>(enf, &Operation::Remove, None).await?;
    LocaleDao::delete(db, id)?;
    Ok(())
}
