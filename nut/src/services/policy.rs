use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use chrono::Utc;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use palm::{
    cache::redis::Pool as RedisPool, jwt::Jwt, nut::v1, session::Session, to_code, to_datetime,
    to_timestamp, try_grpc, Error, GrpcResult, HttpError, Result,
};
use tonic::{Response, Status};

use super::super::{
    models::{
        permission::{Adapter as PermissionAdapter, Dao as PermissionDao, Item as Permission},
        role::{Adapter as RoleAdapter, Dao as RoleDao, Item as Role},
        user::{Dao as UserDao, Item as User},
    },
    orm::postgresql::Pool as PostgreSqlPool,
};
use super::CurrentUserAdapter;

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

        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            if let Some(ref nested) = req.nested {
                match nested {
                    v1::policy_add_role_request::Nested::Left(id) => {
                        RoleDao::create_by_left(db, &code, *id)?;
                    }
                    v1::policy_add_role_request::Nested::Parent(id) => {
                        RoleDao::create_by_parent(db, &code, *id)?;
                    }
                }
            }

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
                .map(|x| v1::policy_role_list_response::Item {
                    id: x.id,
                    code: x.code.clone(),
                    left: x.left,
                    right: x.right,
                    updated_at: Some(to_timestamp!(x.updated_at)),
                })
                .collect::<Vec<_>>(),
        }))
    }

    async fn delete_role(&self, req: tonic::Request<v1::IdRequest>) -> GrpcResult<()> {
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
        let role = try_grpc!(RoleDao::by_id(db, req.id))?;

        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            RoleDao::destroy(db, role.id)?;
            Ok(())
        }))?;
        Ok(Response::new(()))
    }
    async fn get_roles_for_user(
        &self,
        req: tonic::Request<v1::IdRequest>,
    ) -> GrpcResult<v1::PolicyRolesForUserResponse> {
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
        let user = try_grpc!(UserDao::by_id(db, req.id))?;
        let mut items = Vec::new();
        for it in try_grpc!(RoleDao::by_user(db, user.id))?.iter() {
            let (nbf, exp) = try_grpc!(RoleDao::range(db, it.id, user.id))?;
            items.push(v1::policy_roles_for_user_response::Item {
                id: it.id,
                code: it.code.clone(),
                not_before: Some(to_timestamp!(nbf)),
                expired_at: Some(to_timestamp!(exp)),
            })
        }

        Ok(Response::new(v1::PolicyRolesForUserResponse { items }))
    }
    async fn get_users_for_role(
        &self,
        req: tonic::Request<v1::IdRequest>,
    ) -> GrpcResult<v1::PolicyUsersForRoleResponse> {
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

        let role = try_grpc!(RoleDao::by_id(db, req.id))?;
        let mut items = Vec::new();

        for it in try_grpc!(RoleDao::users_for_role(db, role.id))?.iter() {
            let (nbf, exp) = try_grpc!(RoleDao::range(db, role.id, it.id))?;
            items.push(v1::policy_users_for_role_response::Item {
                user: Some(v1::UserDetail::from(it.clone())),
                not_before: Some(to_timestamp!(nbf)),
                expired_at: Some(to_timestamp!(exp)),
            });
        }

        Ok(Response::new(v1::PolicyUsersForRoleResponse { items }))
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
            for role in req.roles {
                let role = RoleDao::by_id(db, role)?;
                if role.code == Role::ROOT {
                    return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
                }
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
            for role in req.roles {
                let role = try_grpc!(RoleDao::by_id(db, role))?;
                try_grpc!(RoleDao::dissociate(db, role.id, req.user))?;
            }
            Ok(())
        }))?;
        Ok(Response::new(()))
    }

    async fn get_implicit_roles_for_user(
        &self,
        req: tonic::Request<v1::IdRequest>,
    ) -> GrpcResult<v1::PolicyImplicitRolesForUserResponse> {
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

        Ok(Response::new(v1::PolicyImplicitRolesForUserResponse {
            items: items.iter().map(|x| x.code.clone()).collect::<Vec<_>>(),
        }))
    }

    async fn get_implicit_users_for_role(
        &self,
        req: tonic::Request<v1::IdRequest>,
    ) -> GrpcResult<v1::PolicyImplicitUsersForRoleResponse> {
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

        let role = try_grpc!(RoleDao::by_id(db, req.id))?;
        let items = try_grpc!(RoleAdapter::get_implicit_users_for_role(db, role.id))?;
        Ok(Response::new(v1::PolicyImplicitUsersForRoleResponse {
            items: items
                .iter()
                .map(|x| v1::UserDetail::from(x.clone()))
                .collect::<Vec<_>>(),
        }))
    }
    async fn get_permissions_for_user(
        &self,
        req: tonic::Request<v1::IdRequest>,
    ) -> GrpcResult<v1::PolicyPermissionList> {
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
        let user = try_grpc!(UserDao::by_id(db, req.id))?;

        let mut items = Vec::new();
        for it in try_grpc!(PermissionDao::by_subject(db, type_name::<User>(), user.id))?.iter() {
            items.push(try_grpc!(new_permission(it))?);
        }
        Ok(Response::new(v1::PolicyPermissionList { items }))
    }
    async fn get_permissions_for_role(
        &self,
        req: tonic::Request<v1::IdRequest>,
    ) -> GrpcResult<v1::PolicyPermissionList> {
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
        let role = try_grpc!(RoleDao::by_id(db, req.id))?;
        let mut items = Vec::new();
        for it in try_grpc!(PermissionDao::by_subject(db, type_name::<Role>(), role.id))?.iter() {
            items.push(try_grpc!(new_permission(it))?);
        }
        Ok(Response::new(v1::PolicyPermissionList { items }))
    }
    async fn get_implicit_permissions_for_user(
        &self,
        req: tonic::Request<v1::IdRequest>,
    ) -> GrpcResult<v1::PolicyPermissionList> {
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
        let user = try_grpc!(UserDao::by_id(db, req.id))?;

        let mut items = Vec::new();
        for it in try_grpc!(PermissionAdapter::get_implicit_permissions_for_user(
            db, user.id
        ))?
        .iter()
        {
            items.push(try_grpc!(new_permission(it))?);
        }
        Ok(Response::new(v1::PolicyPermissionList { items }))
    }

    async fn get_implicit_permissions_for_role(
        &self,
        req: tonic::Request<v1::IdRequest>,
    ) -> GrpcResult<v1::PolicyPermissionList> {
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
        let role = try_grpc!(RoleDao::by_id(db, req.id))?;

        let mut items = Vec::new();
        for it in try_grpc!(PermissionAdapter::get_implicit_permissions_for_role(
            db, role.id
        ))?
        .iter()
        {
            items.push(try_grpc!(new_permission(it))?);
        }
        Ok(Response::new(v1::PolicyPermissionList { items }))
    }

    async fn add_permissions(
        &self,
        req: tonic::Request<v1::PolicyPermissionList>,
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
                    let (subject_type, subject_id) = to_subject(subject);
                    if let Some(ref resource) = it.resource {
                        try_grpc!(PermissionDao::create(
                            db,
                            subject_type,
                            subject_id,
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
        req: tonic::Request<v1::PolicyPermissionList>,
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
                    let (subject_type, subject_id) = to_subject(subject);
                    if let Some(ref resource) = it.resource {
                        let it = try_grpc!(PermissionDao::get(
                            db,
                            subject_type,
                            subject_id,
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

fn to_subject(s: &v1::permission::Subject) -> (&'static str, i32) {
    match *s {
        v1::permission::Subject::User(id) => (type_name::<User>(), id),
        v1::permission::Subject::Role(id) => (type_name::<Role>(), id),
    }
}

impl From<User> for v1::UserDetail {
    fn from(it: User) -> Self {
        Self {
            id: it.id,
            uid: it.uid.clone(),
            nickname: it.nickname.clone(),
            real_name: it.real_name.clone(),
            email: it.email,
        }
    }
}

fn new_permission(p: &Permission) -> Result<v1::Permission> {
    let mut it = v1::Permission {
        operation: p.operation.clone(),
        resource: Some(v1::Resource {
            r#type: p.resource_type.clone(),
            id: p.resource_id,
        }),
        ..Default::default()
    };
    if p.subject_type == type_name::<User>() {
        it.subject = Some(v1::permission::Subject::User(p.subject_id));
        return Ok(it);
    }
    if p.subject_type == type_name::<Role>() {
        it.subject = Some(v1::permission::Subject::Role(p.subject_id));
        return Ok(it);
    }
    Err(Box::new(HttpError(
        StatusCode::BAD_REQUEST,
        Some(p.subject_type.clone()),
    )))
}
