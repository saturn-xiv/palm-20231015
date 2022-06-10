use std::fmt;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use diesel::Connection as DieselConntection;
use tonic::{Request, Response, Status};

use super::super::super::super::{
    i18n::I18n,
    jwt::Jwt,
    orm::postgresql::{Connection as PostgreSqlConnection, Pool as PostgreSqlPool},
    Error, GrpcResult, Result,
};
use super::super::{
    models::{
        log::{Dao as LogDao, Level},
        policy::{Dao as PolicyDao, Item as Policy},
        user::Dao as UserDao,
    },
    v1,
};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
}

impl v1::policy_options_response::Item {
    pub fn role(db: &mut PostgreSqlConnection, lang: &str, code: &str) -> Self {
        Self::new(db, lang, "roles", code)
    }
    pub fn resource(db: &mut PostgreSqlConnection, lang: &str, code: &str) -> Self {
        Self::new(db, lang, "resources", code)
    }
    pub fn operation(db: &mut PostgreSqlConnection, lang: &str, code: &str) -> Self {
        Self::new(db, lang, "operations", code)
    }
    pub fn user(db: &mut PostgreSqlConnection, user: i32) -> Result<Self> {
        let user = UserDao::by_id(db, user)?;
        Ok(Self {
            code: user.nick_name.clone(),
            label: user.real_name,
        })
    }
    pub fn new(db: &mut PostgreSqlConnection, lang: &str, ns: &str, code: &str) -> Self {
        Self {
            code: code.to_string(),
            label: I18n::t(db, lang, &format!("{}.{}", ns, code), &None::<String>),
        }
    }
}

impl v1::policy_index_response::Item {
    pub fn new(db: &mut PostgreSqlConnection, lng: &str, it: &Policy) -> Self {
        Self {
            id: it.id,
            role: Some(v1::policy_options_response::Item::role(db, lng, &it.role)),
            operation: Some(v1::policy_options_response::Item::operation(
                db,
                lng,
                &it.operation,
            )),
            resource_type: Some(v1::policy_options_response::Item::resource(
                db,
                lng,
                &it.resource_type,
            )),
            resource_id: it.resource_id,
            created_at: Some(to_timestamp!(it.created_at)),
        }
    }
}

impl fmt::Display for v1::PolicyPermission {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{}@{}://{}/{}",
            self.role,
            self.operation,
            self.resource_type,
            match self.resource_id {
                Some(id) => id.to_string(),
                None => "".to_string(),
            }
        )
    }
}

#[tonic::async_trait]
impl v1::policy_server::Policy for Service {
    async fn apply(&self, req: Request<v1::PolicyPermission>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();

        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            if PolicyDao::get(
                db,
                &req.role,
                &req.operation,
                &req.resource_type,
                req.resource_id,
            )
            .is_err()
            {
                PolicyDao::create(
                    db,
                    &req.role,
                    &req.operation,
                    &req.resource_type,
                    req.resource_id,
                )?;
                let it = PolicyDao::get(
                    db,
                    &req.role,
                    &req.operation,
                    &req.resource_type,
                    req.resource_id,
                )?;
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

    async fn deny(&self, req: Request<v1::PolicyPermission>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();

        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            if let Ok(it) = PolicyDao::get(
                db,
                &req.role,
                &req.operation,
                &req.resource_type,
                req.resource_id,
            ) {
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
            let it = v1::policy_index_response::Item::new(db, &ss.lang, x);
            items.push(it);
        }
        Ok(Response::new(v1::PolicyIndexResponse {
            items,
            pagination: Some(v1::Pagination::new(&req, total)),
        }))
    }

    async fn options(&self, req: Request<()>) -> GrpcResult<v1::PolicyOptionsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let roles = try_grpc!(PolicyDao::roles(db))?;
        let operations = try_grpc!(PolicyDao::operations(db))?;
        let resources = try_grpc!(PolicyDao::resources(db))?;

        let it = v1::PolicyOptionsResponse {
            roles: roles
                .iter()
                .map(|x| v1::policy_options_response::Item::role(db, &ss.lang, x))
                .collect(),
            operations: operations
                .iter()
                .map(|x| v1::policy_options_response::Item::operation(db, &ss.lang, x))
                .collect(),
            resources: resources
                .iter()
                .map(|x| v1::policy_options_response::Item::resource(db, &ss.lang, x))
                .collect(),
        };

        Ok(Response::new(it))
    }
}
