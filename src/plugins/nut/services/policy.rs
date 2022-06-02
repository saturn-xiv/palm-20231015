use std::fmt;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use diesel::Connection as DieselConntection;
use tonic::{Request, Response, Status};

use super::super::super::super::{
    jwt::Jwt, orm::postgresql::Pool as PostgreSqlPool, Error, GrpcResult, Result,
};
use super::super::{
    models::{
        log::{Dao as LogDao, Level},
        policy::{Dao as PolicyDao, Item as Policy},
        role::Dao as RoleDao,
        user::Dao as UserDao,
    },
    v1,
};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
}

impl fmt::Display for v1::policy_index_response::Item {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{}@{}://{}",
            self.role,
            Policy::resource(&self.resource_type, self.resource_id),
            self.operation
        )
    }
}

impl v1::policy_index_response::Item {
    pub fn new(x: &Policy) -> Result<Self> {
        let (rty, rid) = x.get_resource()?;
        let it = Self {
            role: x.role.clone(),
            operation: x.operation.clone(),
            resource_type: rty,
            resource_id: rid,
        };
        Ok(it)
    }
}

#[tonic::async_trait]
impl v1::policy_server::Policy for Service {
    async fn apply(&self, req: Request<v1::policy_index_response::Item>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();

        let resource = Policy::resource(&req.resource_type, req.resource_id);
        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            if PolicyDao::get(db, &req.role, &req.operation, &resource).is_err() {
                PolicyDao::create(db, &req.role, &req.operation, &resource)?;
                let it = PolicyDao::get(db, &req.role, &req.operation, &resource)?;
                LogDao::add::<_, Policy>(
                    db,
                    user.id,
                    &Level::Info,
                    &ss.client_ip,
                    Some(it.id),
                    &format!("apply {}", req),
                )?;
            }
            Ok(())
        }))?;

        Ok(Response::new(()))
    }

    async fn deny(&self, req: Request<v1::policy_index_response::Item>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();

        let resource = Policy::resource(&req.resource_type, req.resource_id);
        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            if let Ok(it) = PolicyDao::get(db, &req.role, &req.operation, &resource) {
                PolicyDao::destroy(db, it.id)?;
                LogDao::add::<_, Policy>(
                    db,
                    user.id,
                    &Level::Info,
                    &ss.client_ip,
                    Some(it.id),
                    &format!("deny {}", req),
                )?;
            }
            Ok(())
        }))?;

        Ok(Response::new(()))
    }

    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::PolicyIndexResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();

        let total = try_grpc!(PolicyDao::count(db))?;
        let mut items = Vec::new();

        for x in try_grpc!(PolicyDao::index(db, req.offset(total), req.size()))?.iter() {
            let rs = try_grpc!(x.get_resource())?;
            items.push(v1::policy_index_response::Item {
                role: x.role.clone(),
                operation: x.operation.clone(),
                resource_type: rs.0,
                resource_id: rs.1,
            });
        }
        Ok(Response::new(v1::PolicyIndexResponse {
            items,
            pagination: Some(v1::Pagination::new(&req, total)),
        }))
    }

    async fn associate(&self, req: Request<v1::PolicyUserRoleAssociateRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();

        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            let user = UserDao::by_id(db, req.user)?;
            user.available()?;
            let nbf = to_datetime!(req.not_before.clone().unwrap_or_default());
            let exp = to_datetime!(req.expired_at.clone().unwrap_or_default());
            RoleDao::associate(db, user.id, &req.role, &nbf.date(), &exp.date())?;
            LogDao::add::<_, Policy>(
                db,
                user.id,
                &Level::Info,
                &ss.client_ip,
                None,
                &format!("associate {} to {}", user, req.role),
            )?;

            Ok(())
        }))?;

        Ok(Response::new(()))
    }

    async fn unassociate(
        &self,
        req: Request<v1::PolicyUserRoleUnassociateRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();

        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            let user = UserDao::by_id(db, req.user)?;
            user.available()?;
            RoleDao::unassociate(db, user.id, &req.role)?;
            LogDao::add::<_, Policy>(
                db,
                user.id,
                &Level::Info,
                &ss.client_ip,
                None,
                &format!("unassociate {} from {}", user, req.role),
            )?;

            Ok(())
        }))?;

        Ok(Response::new(()))
    }
}
