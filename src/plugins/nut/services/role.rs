use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use diesel::Connection as DieselConntection;
use tonic::{Request, Response, Status};

use super::super::super::super::{
    jwt::Jwt, orm::postgresql::Pool as PostgreSqlPool, Error, GrpcResult,
};
use super::super::{
    models::{
        log::{Dao as LogDao, Level},
        policy::Item as Policy,
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

#[tonic::async_trait]
impl v1::role_server::Role for Service {
    async fn by_user(&self, req: Request<v1::IdRequest>) -> GrpcResult<v1::RoleByUserResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();

        let items = try_grpc!(RoleDao::roles_by_user(db, req.id))?
            .iter()
            .map(|x| v1::policy_options_response::Item::role(db, &ss.lang, x))
            .collect();
        Ok(Response::new(v1::RoleByUserResponse { items }))
    }
    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::RoleIndexResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();

        let total = try_grpc!(RoleDao::count(db))?;
        let mut items = Vec::new();

        for it in try_grpc!(RoleDao::index(db, req.offset(total), req.size()))?.iter() {
            let role = v1::policy_options_response::Item::role(db, &ss.lang, &it.role);
            let user = try_grpc!(v1::policy_options_response::Item::user(db, it.user_id))?;
            let it = v1::role_index_response::Item {
                id: it.id,
                user: Some(user),
                role: Some(role),
                created_at: Some(to_timestamp!(it.created_at)),
            };
            items.push(it);
        }

        Ok(Response::new(v1::RoleIndexResponse {
            items,
            pagination: Some(v1::Pagination::new(&req, total)),
        }))
    }

    async fn associate(&self, req: Request<v1::RoleUserAssociateRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        let manager = user.nick_name;

        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            let user = UserDao::by_id(db, req.user)?;
            user.available()?;
            let nbf = to_datetime!(req.not_before.clone().unwrap_or_default());
            let exp = to_datetime!(req.expired_at.clone().unwrap_or_default());

            for role in req.roles.iter() {
                RoleDao::associate(db, user.id, role, &nbf.date(), &exp.date())?;
                LogDao::add::<_, Policy>(
                    db,
                    user.id,
                    &Level::Info,
                    &ss.client_ip,
                    None,
                    &format!(
                        "associate {} to {} by {} from {} to {}",
                        user, role, manager, nbf, exp
                    ),
                )?;
            }

            Ok(())
        }))?;

        Ok(Response::new(()))
    }

    async fn unassociate(&self, req: Request<v1::RoleUserUnassociateRequest>) -> GrpcResult<()> {
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
