use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use palm::{
    cache::redis::Pool as RedisPool, crypto::Aes, jwt::Jwt, nut::v1,
    orm::postgresql::Pool as PostgreSqlPool, to_code, try_grpc, GrpcResult,
};
use tonic::{Request, Response, Status};

use super::super::setting::{Dao as SettingDao, Item as Setting};
use super::Session;

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub aes: Arc<Aes>,
}

#[tonic::async_trait]
impl v1::setting_server::Setting for Service {
    async fn set(&self, req: Request<v1::SettingSetRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();

        let key = to_code!(req.key);

        let can = match req.user {
            None => user.is_administrator(),
            Some(id) => user.payload.id == id || user.is_administrator(),
        };
        if !can {
            return Err(Status::permission_denied(type_name::<Setting>()));
        }
        let aes = self.aes.deref();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &key,
            req.user,
            &req.value,
            req.encrypt
        ))?;
        Ok(Response::new(()))
    }
    async fn get(&self, req: Request<v1::SettingGetRequest>) -> GrpcResult<v1::SettingGetResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();

        let can = match req.user {
            None => user.is_administrator(),
            Some(id) => user.payload.id == id || user.is_administrator(),
        };
        if !can {
            return Err(Status::permission_denied(type_name::<Setting>()));
        }
        let aes = self.aes.deref();
        let key = to_code!(req.key);
        let value: Vec<u8> = try_grpc!(SettingDao::get(db, aes, &key, req.user))?;
        Ok(Response::new(v1::SettingGetResponse { value }))
    }
}
