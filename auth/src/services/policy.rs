use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use chrono::Utc;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use palm::{
    auth::v1, cache::redis::Pool as RedisPool, jwt::Jwt, to_code, to_datetime, try_grpc, Error,
    GrpcResult, HttpError,
};
use tonic::{Response, Status};

use super::super::{
    i18n::I18n,
    models::{
        permission::{Adapter as PermissionAdapter, Dao as PermissionDao, Item as Permission},
        role::{Adapter as RoleAdapter, Dao as RoleDao, Item as Role},
        user::{Dao as UserDao, Item as User},
    },
    orm::postgresql::{Connection as Db, Pool as PostgreSqlPool},
};
use super::Session;

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
}

#[tonic::async_trait]
impl v1::policy_server::Policy for Service {
    async fn add_role(&self, req: tonic::Request<v1::PolicyAddRoleRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        let code = to_code!(req.code);
        let nested = to_code!(req.nested);
        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            RoleDao::create(db, &code, &nested)?;
            Ok(())
        }))?;
        Ok(Response::new(()))
    }
    async fn get_all_roles(
        &self,
        req: tonic::Request<()>,
    ) -> GrpcResult<v1::PolicyRoleListResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        let items = try_grpc!(RoleDao::all(db))?;

        Ok(Response::new(v1::PolicyRoleListResponse {
            items: items
                .iter()
                .map(|x| new_role_list_response_item(db, &ss.lang, &x.code))
                .collect::<Vec<_>>(),
        }))
    }

    async fn delete_role(&self, req: tonic::Request<v1::PolicyRoleRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        let req = req.into_inner();
        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            RoleDao::destroy(db, &req.code)?;
            Ok(())
        }))?;
        Ok(Response::new(()))
    }
    async fn get_roles_for_user(
        &self,
        req: tonic::Request<v1::PolicyUserRequest>,
    ) -> GrpcResult<v1::PolicyRoleListResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        let req = req.into_inner();
        let items = try_grpc!(RoleDao::by_user(db, req.id))?;

        Ok(Response::new(v1::PolicyRoleListResponse {
            items: items
                .iter()
                .map(|x| new_role_list_response_item(db, &ss.lang, &x.code))
                .collect::<Vec<_>>(),
        }))
    }
    async fn get_users_for_role(
        &self,
        req: tonic::Request<v1::PolicyRoleRequest>,
    ) -> GrpcResult<v1::PolicyUserListResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let role = try_grpc!(RoleDao::by_code(db, &req.code))?;
        let items = try_grpc!(RoleDao::users_for_role(db, role.id))?;

        Ok(Response::new(v1::PolicyUserListResponse {
            items: items
                .iter()
                .map(|x| v1::policy_user_list_response::Item::from(x.clone()))
                .collect::<Vec<_>>(),
        }))
    }
    async fn add_roles_for_user(
        &self,
        req: tonic::Request<v1::PolicyAddRolesForUserRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        {
            let user = try_grpc!(UserDao::by_id(db, req.user))?;
            if user.has(db, Role::ROOT) {
                return Err(Status::permission_denied(type_name::<User>()));
            }
        }

        let nbf = req
            .not_before
            .map(|x| to_datetime!(x))
            .unwrap_or_else(|| Utc::now().naive_utc());
        let exp = req
            .expired_at
            .map(|x| to_datetime!(x))
            .unwrap_or_else(|| Utc::now().naive_utc());

        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            for role in req.roles.iter() {
                if role == Role::ROOT {
                    return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
                }
                let role = try_grpc!(RoleDao::by_code(db, role))?;
                try_grpc!(RoleDao::associate(db, role.id, req.user, &nbf, &exp))?;
            }
            Ok(())
        }))?;
        Ok(Response::new(()))
    }
    async fn delete_roles_for_user(
        &self,
        req: tonic::Request<v1::PolicyDeleteRolesForUserRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        let req = req.into_inner();
        {
            let user = try_grpc!(UserDao::by_id(db, req.user))?;
            if user.has(db, Role::ROOT) {
                return Err(Status::permission_denied(type_name::<User>()));
            }
        }
        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            for role in req.roles.iter() {
                let role = try_grpc!(RoleDao::by_code(db, role))?;
                try_grpc!(RoleDao::dissociate(db, role.id, req.user))?;
            }
            Ok(())
        }))?;
        Ok(Response::new(()))
    }

    async fn get_implicit_roles_for_user(
        &self,
        req: tonic::Request<v1::PolicyUserRequest>,
    ) -> GrpcResult<v1::PolicyRoleListResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        let items = try_grpc!(RoleAdapter::get_implicit_roles_for_user(db, req.id))?;

        Ok(Response::new(v1::PolicyRoleListResponse {
            items: items
                .iter()
                .map(|x| new_role_list_response_item(db, &ss.lang, &x.code))
                .collect::<Vec<_>>(),
        }))
    }

    async fn get_implicit_users_for_role(
        &self,
        req: tonic::Request<v1::PolicyRoleRequest>,
    ) -> GrpcResult<v1::PolicyUserListResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let role = try_grpc!(RoleDao::by_code(db, &req.code))?;
        let items = try_grpc!(RoleAdapter::get_implicit_users_for_role(db, role.id))?;
        Ok(Response::new(v1::PolicyUserListResponse {
            items: items
                .iter()
                .map(|x| v1::policy_user_list_response::Item::from(x.clone()))
                .collect::<Vec<_>>(),
        }))
    }
    async fn get_permissions_for_user(
        &self,
        req: tonic::Request<v1::PolicyUserRequest>,
    ) -> GrpcResult<v1::PolicyPermissionListResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        let items = try_grpc!(PermissionDao::by_subject(db, type_name::<User>(), req.id))?;
        Ok(Response::new(v1::PolicyPermissionListResponse {
            items: items
                .iter()
                .map(|x| v1::Permission::from(x.clone()))
                .collect::<Vec<_>>(),
        }))
    }
    async fn get_permissions_for_role(
        &self,
        req: tonic::Request<v1::PolicyRoleRequest>,
    ) -> GrpcResult<v1::PolicyPermissionListResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        let role = try_grpc!(RoleDao::by_code(db, &req.code))?;
        let items = try_grpc!(PermissionDao::by_subject(db, type_name::<Role>(), role.id))?;
        Ok(Response::new(v1::PolicyPermissionListResponse {
            items: items
                .iter()
                .map(|x| v1::Permission::from(x.clone()))
                .collect::<Vec<_>>(),
        }))
    }
    async fn get_implicit_permissions_for_user(
        &self,
        req: tonic::Request<v1::PolicyUserRequest>,
    ) -> GrpcResult<v1::PolicyPermissionListResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        let items = try_grpc!(PermissionAdapter::get_implicit_permissions_for_user(
            db, req.id
        ))?;
        Ok(Response::new(v1::PolicyPermissionListResponse {
            items: items
                .iter()
                .map(|x| v1::Permission::from(x.clone()))
                .collect::<Vec<_>>(),
        }))
    }

    async fn get_implicit_permissions_for_role(
        &self,
        req: tonic::Request<v1::PolicyRoleRequest>,
    ) -> GrpcResult<v1::PolicyPermissionListResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        let role = try_grpc!(RoleDao::by_code(db, &req.code))?;
        let items = try_grpc!(PermissionAdapter::get_implicit_permissions_for_role(
            db, role.id
        ))?;
        Ok(Response::new(v1::PolicyPermissionListResponse {
            items: items
                .iter()
                .map(|x| v1::Permission::from(x.clone()))
                .collect::<Vec<_>>(),
        }))
    }

    async fn add_permissions(
        &self,
        req: tonic::Request<v1::PolicyPermissionsRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            for it in req.items.iter() {
                if let Some(ref subject) = it.subject {
                    if let Some(ref resource) = it.resource {
                        try_grpc!(PermissionDao::create(
                            db,
                            &subject.r#type,
                            subject.id,
                            &it.operation,
                            &resource.r#type,
                            resource.id
                        ))?;
                    }
                }
            }
            Ok(())
        }))?;
        Ok(Response::new(()))
    }

    async fn delete_permissions(
        &self,
        req: tonic::Request<v1::PolicyPermissionsRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            for it in req.items.iter() {
                if let Some(ref subject) = it.subject {
                    if let Some(ref resource) = it.resource {
                        let it = try_grpc!(PermissionDao::get(
                            db,
                            &subject.r#type,
                            subject.id,
                            &it.operation,
                            &resource.r#type,
                            resource.id
                        ))?;
                        try_grpc!(PermissionDao::destroy(db, it.id))?;
                    }
                }
            }
            Ok(())
        }))?;
        Ok(Response::new(()))
    }
}

fn new_role_list_response_item(
    db: &mut Db,
    lang: &str,
    role: &str,
) -> v1::policy_role_list_response::Item {
    v1::policy_role_list_response::Item {
        code: role.to_string(),
        name: I18n::t(db, lang, &format!("roles.{role}"), &None::<String>),
    }
}

impl From<User> for v1::policy_user_list_response::Item {
    fn from(it: User) -> Self {
        Self {
            uid: it.uid.clone(),
            nick_name: it.nick_name.clone(),
            real_name: it.real_name.clone(),
            email: it.email,
        }
    }
}

impl From<Permission> for v1::Permission {
    fn from(it: Permission) -> Self {
        Self {
            subject: Some(v1::permission::Subject {
                r#type: it.subject_type.clone(),
                id: it.subject_id,
            }),
            operation: it.operation.clone(),
            resource: Some(v1::Resource {
                r#type: it.resource_type.clone(),
                id: it.resource_id,
            }),
        }
    }
}
