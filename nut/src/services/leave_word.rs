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
        leave_word::{Dao as LeaveWordDao, Item as LeaveWord},
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
impl v1::leave_word_server::LeaveWord for Service {
    async fn create(&self, req: Request<v1::MediaContent>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let form = {
            let req = req.into_inner();
            Create {
                body: req.body.clone(),
                editor: req.editor,
            }
        };

        try_grpc!(form.handle(&ss, db))?;
        Ok(Response::new(()))
    }
    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::LeaveWordIndexResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let (user, _, _) = try_grpc!(ss.current_user(db, ch, jwt))?;
        try_grpc!(user.can::<LeaveWord, _>(enf, &Operation::Read, None).await)?;

        let req = req.into_inner();
        let total = try_grpc!(LeaveWordDao::count(db))?;
        let mut items = Vec::new();
        for it in try_grpc!(LeaveWordDao::all(db, req.offset(total), req.size()))? {
            items.push(it.into());
        }

        Ok(Response::new(v1::LeaveWordIndexResponse {
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
    #[validate(length(min = 1, max = 1000))]
    pub body: String,
    pub editor: i32,
}
impl Create {
    pub fn handle(&self, ss: &Session, db: &mut Db) -> Result<()> {
        self.validate()?;
        LeaveWordDao::create(db, &ss.lang, &ss.client_ip, &self.body, self.editor)?;
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
    user.can::<LeaveWord, _>(enf, &Operation::Remove, None)
        .await?;
    LeaveWordDao::destroy(db, id)?;
    Ok(())
}
