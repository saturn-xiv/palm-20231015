use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::{Arc, Mutex};

use casbin::Enforcer;
use tonic::{Request, Response, Status};

use super::super::super::super::{
    crypto::Aes,
    jwt::Jwt,
    orm::postgresql::Pool as PostgreSqlPool,
    setting::{Dao as SettingDao, Item as Setting},
    GrpcResult,
};
use super::super::{models::user::Item as User, v1};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub aes: Arc<Aes>,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

#[tonic::async_trait]
impl v1::setting_server::Setting for Service {
    async fn set(&self, req: Request<v1::SettingSetRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        let req = req.into_inner();

        let key = to_code!(req.key);

        let can = match req.user {
            None => {
                has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR)
            }
            Some(id) => {
                user.id == id || has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR)
            }
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
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        let req = req.into_inner();
        let can = match req.user {
            None => {
                has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR)
            }
            Some(id) => {
                user.id == id || has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR)
            }
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
