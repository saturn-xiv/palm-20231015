use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::{Enforcer, RbacApi};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};

use super::super::super::super::{jwt::Jwt, orm::postgresql::Pool as PostgreSqlPool, GrpcResult};
use super::super::{
    models::user::{Dao as UserDao, Item as User},
    v1,
};
use super::Session;

impl v1::rbac_permissions_response::Item {
    pub fn new(object: &str, action: &str) -> Self {
        let (resource_type, resource_id) = object_to_resource!(object);
        Self {
            operation: action.to_string(),
            resource_type,
            resource_id,
        }
    }
    pub fn object(&self) -> String {
        match self.resource_id {
            Some(v) => resource_to_object!(self.resource_type, v),
            None => resource_to_object!(self.resource_type),
        }
    }
}

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

#[tonic::async_trait]
impl v1::rbac_server::Rbac for Service {
    async fn get_roles_for_user(
        &self,
        req: Request<v1::RbacUserRequest>,
    ) -> GrpcResult<v1::RbacGetRolesForUserResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<
                v1::RbacGetRolesForUserResponse,
            >()));
        }

        let req = req.into_inner();
        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();

        let mut items = Vec::new();
        for it in enf.get_roles_for_user(&it.subject(), None).iter() {
            if let Some(it) = it.strip_prefix("role://") {
                items.push(it.to_string());
            }
        }
        Ok(Response::new(v1::RbacGetRolesForUserResponse { items }))
    }
    async fn get_users_for_role(
        &self,
        req: Request<v1::RbacRoleRequest>,
    ) -> GrpcResult<v1::RbacGetUsersForRoleResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<
                v1::RbacGetUsersForRoleResponse,
            >()));
        }
        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();
        let req = req.into_inner();
        let mut items = Vec::new();
        for it in enf.get_users_for_role(&to_role!(req.code), None).iter() {
            if let Some(it) = it.strip_prefix(&format!("{}://", type_name::<User>())) {
                items.push(it.to_string());
            }
        }
        Ok(Response::new(v1::RbacGetUsersForRoleResponse { items }))
    }
    async fn get_permissions_for_user(
        &self,
        req: Request<v1::RbacUserRequest>,
    ) -> GrpcResult<v1::RbacPermissionsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<
                v1::RbacPermissionsResponse,
            >()));
        }

        let req = req.into_inner();
        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();

        let items = enf
            .get_permissions_for_user(&it.subject(), None)
            .iter()
            .filter(|x| x.len() == 3)
            .map(|x| v1::rbac_permissions_response::Item::new(&x[1], &x[2]))
            .collect();
        Ok(Response::new(v1::RbacPermissionsResponse { items }))
    }
    async fn get_permissions_for_role(
        &self,
        req: Request<v1::RbacRoleRequest>,
    ) -> GrpcResult<v1::RbacPermissionsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<
                v1::RbacPermissionsResponse,
            >()));
        }

        let req = req.into_inner();
        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();

        let items = enf
            .get_permissions_for_user(&to_role!(req.code), None)
            .iter()
            .filter(|x| x.len() == 3)
            .map(|x| v1::rbac_permissions_response::Item::new(&x[1], &x[2]))
            .collect();
        Ok(Response::new(v1::RbacPermissionsResponse { items }))
    }

    async fn add_roles_for_user(
        &self,
        req: Request<v1::RbacAddRolesForUserRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<
                v1::RbacAddRolesForUserRequest,
            >()));
        }

        let req = req.into_inner();
        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();
        let it = try_grpc!(UserDao::by_id(db, req.user))?;
        try_grpc!(enf.add_roles_for_user(&it.subject(), req.roles, None).await)?;
        Ok(Response::new(()))
    }
    async fn add_permissions_for_user(
        &self,
        req: Request<v1::RbacAddPermissionsForUserRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<()>()));
        }

        let req = req.into_inner();
        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();
        let it = try_grpc!(UserDao::by_id(db, req.user))?;
        try_grpc!(
            enf.add_permissions_for_user(
                &it.subject(),
                req.permissions
                    .iter()
                    .map(|x| vec![x.object(), x.operation.clone()])
                    .collect()
            )
            .await
        )?;
        Ok(Response::new(()))
    }
    async fn add_permissions_for_role(
        &self,
        req: Request<v1::RbacAddPermissionsForRoleRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<()>()));
        }

        let req = req.into_inner();
        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();

        try_grpc!(
            enf.add_permissions_for_user(
                &to_role!(req.role),
                req.permissions
                    .iter()
                    .map(|x| vec![x.object(), x.operation.clone()])
                    .collect()
            )
            .await
        )?;
        Ok(Response::new(()))
    }
    async fn delete_role_for_user(
        &self,
        req: Request<v1::RbacRoleForUserRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<
                v1::RbacRoleForUserRequest,
            >()));
        }

        let req = req.into_inner();
        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();
        let it = try_grpc!(UserDao::by_id(db, req.user))?;
        try_grpc!(
            enf.delete_role_for_user(&it.subject(), &to_role!(req.role), None)
                .await
        )?;
        Ok(Response::new(()))
    }
    async fn delete_user(&self, req: Request<v1::RbacUserRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<()>()));
        }

        let req = req.into_inner();
        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();
        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        try_grpc!(enf.delete_user(&it.subject()).await)?;
        Ok(Response::new(()))
    }
    async fn delete_role(&self, req: Request<v1::RbacRoleRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<()>()));
        }

        let req = req.into_inner();
        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();
        try_grpc!(enf.delete_user(&to_code!(req.code)).await)?;
        Ok(Response::new(()))
    }
    async fn delete_permission_for_user(
        &self,
        req: Request<v1::RbacPermissionForUserRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<
                v1::RbacPermissionForUserRequest,
            >()));
        }

        let req = req.into_inner();
        let it = try_grpc!(UserDao::by_id(db, req.user))?;
        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();

        if let Some(ref permission) = req.permission {
            try_grpc!(
                enf.delete_permission_for_user(
                    &it.subject(),
                    vec![permission.object(), permission.operation.clone()]
                )
                .await
            )?;
        }
        Ok(Response::new(()))
    }

    async fn delete_permission_for_role(
        &self,
        req: Request<v1::RbacPermissionForRoleRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        if !has_role!(self.enforcer, &user.subject(), User::ADMINISTRATOR) {
            return Err(Status::permission_denied(type_name::<
                v1::RbacPermissionForRoleRequest,
            >()));
        }

        let req = req.into_inner();

        let mut enf = self.enforcer.lock().await;
        let enf = enf.deref_mut();

        if let Some(ref permission) = req.permission {
            try_grpc!(
                enf.delete_permission_for_user(
                    &to_role!(req.role),
                    vec![permission.object(), permission.operation.clone()]
                )
                .await
            )?;
        }
        Ok(Response::new(()))
    }

    async fn has_role_for_user(&self, req: Request<v1::RbacRoleForUserRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        let req = req.into_inner();

        if has_role!(self.enforcer, &user.subject(), &req.role) {
            Ok(Response::new(()))
        } else {
            Err(Status::permission_denied(type_name::<
                v1::RbacRoleForUserRequest,
            >()))
        }
    }
    async fn has_permission_for_user(
        &self,
        req: Request<v1::RbacPermissionForUserRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        let req = req.into_inner();

        if let Some(ref permission) = req.permission {
            if has_permission!(
                self.enforcer,
                &user.subject(),
                permission.operation.clone(),
                permission.object()
            ) {
                return Ok(Response::new(()));
            }
        }

        Err(Status::permission_denied(type_name::<
            v1::RbacPermissionForUserRequest,
        >()))
    }
}
