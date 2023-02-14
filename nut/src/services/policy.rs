use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::{Enforcer, MgmtApi, RbacApi};
use palm::{
    cache::redis::Pool as RedisPool, has_permission, has_role, rbac::v1, rbac::v1::UserRequest,
    session::Session, tink::Loquat, try_grpc, GrpcResult,
};
use tokio::sync::Mutex;
use tonic::{Response, Status};

use super::super::{models::user::Dao as UserDao, orm::postgresql::Pool as PostgreSqlPool};
use super::CurrentUserAdapter;

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Loquat>,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

#[tonic::async_trait]
impl v1::policy_server::Policy for Service {
    async fn get_all_users(&self, req: tonic::Request<()>) -> GrpcResult<v1::UsersResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let mut items = Vec::new();
        {
            let enf = enf.lock().await;

            for it in enf.get_all_subjects().iter() {
                if let Ok(ref it) = it.parse::<v1::UserRequest>() {
                    let it = try_grpc!(UserDao::by_id(db, it.id))?;
                    items.push(it.into());
                }
            }
        }

        Ok(Response::new(v1::UsersResponse { items }))
    }
    async fn get_all_resources(
        &self,
        req: tonic::Request<()>,
    ) -> GrpcResult<v1::ResourcesResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let mut items = Vec::new();
        {
            let enf = enf.lock().await;
            for it in enf.get_all_objects().iter() {
                let it = try_grpc!(it.parse::<v1::resources_response::Item>())?;
                items.push(it);
            }
        }

        Ok(Response::new(v1::ResourcesResponse { items }))
    }
    async fn get_all_operations(
        &self,
        req: tonic::Request<()>,
    ) -> GrpcResult<v1::OperationsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let items = {
            let enf = enf.lock().await;
            enf.get_all_actions()
        };

        Ok(Response::new(v1::OperationsResponse { items }))
    }
    async fn get_all_roles(&self, req: tonic::Request<()>) -> GrpcResult<v1::RolesResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let mut items = Vec::new();
        {
            let enf = enf.lock().await;
            for it in enf.get_all_subjects().iter() {
                if let Ok(it) = try_grpc!(it.parse::<v1::RoleRequest>()) {
                    items.push(it.code);
                }
            }
        }

        Ok(Response::new(v1::RolesResponse { items }))
    }

    async fn get_roles_for_user(
        &self,
        req: tonic::Request<v1::UserRequest>,
    ) -> GrpcResult<v1::RolesResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();

        let mut items = Vec::new();
        {
            let mut enf = enf.lock().await;
            let name = req.to_string();
            for it in enf.get_roles_for_user(&name, None).iter() {
                if let Ok(it) = try_grpc!(it.parse::<v1::RoleRequest>()) {
                    items.push(it.code);
                }
            }
        }
        Ok(Response::new(v1::RolesResponse { items }))
    }
    async fn get_implicit_roles_for_user(
        &self,
        req: tonic::Request<v1::UserRequest>,
    ) -> GrpcResult<v1::RolesResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        let mut items = Vec::new();
        {
            let mut enf = enf.lock().await;
            let name = req.to_string();
            for it in enf.get_implicit_roles_for_user(&name, None).iter() {
                if let Ok(it) = try_grpc!(it.parse::<v1::RoleRequest>()) {
                    items.push(it.code);
                }
            }
        }
        Ok(Response::new(v1::RolesResponse { items }))
    }
    async fn get_users_for_role(
        &self,
        req: tonic::Request<v1::RoleRequest>,
    ) -> GrpcResult<v1::UsersResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        let mut items = Vec::new();
        {
            let enf = enf.lock().await;
            let name = req.to_string();
            for it in enf.get_users_for_role(&name, None).iter() {
                if let Ok(ref it) = try_grpc!(it.parse::<v1::UserRequest>()) {
                    let it = try_grpc!(UserDao::by_id(db, it.id))?;
                    items.push(it.into());
                }
            }
        }
        Ok(Response::new(v1::UsersResponse { items }))
    }

    async fn delete_roles_for_user(
        &self,
        req: tonic::Request<v1::UserRolesRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        {
            let mut enf = enf.lock().await;
            let user = {
                let it = try_grpc!(UserDao::by_id(db, req.user))?;
                UserRequest { id: it.id }.to_string()
            };
            let roles: Vec<String> = req
                .roles
                .iter()
                .map(|x| v1::RoleRequest { code: x.clone() }.to_string())
                .collect::<_>();

            for role in roles.iter() {
                try_grpc!(enf.delete_role_for_user(&user, role, None).await)?;
            }
        }
        Ok(Response::new(()))
    }
    async fn add_roles_for_user(
        &self,
        req: tonic::Request<v1::UserRolesRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        {
            let mut enf = enf.lock().await;
            let user = {
                let it = try_grpc!(UserDao::by_id(db, req.user))?;
                UserRequest { id: it.id }.to_string()
            };
            let roles: Vec<String> = req
                .roles
                .iter()
                .filter(|x| !x.is_empty())
                .map(|x| v1::RoleRequest { code: x.clone() }.to_string())
                .collect::<_>();

            try_grpc!(enf.add_roles_for_user(&user, roles, None).await)?;
        }
        Ok(Response::new(()))
    }
    async fn delete_user(&self, req: tonic::Request<v1::UserRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        {
            let mut enf = enf.lock().await;
            let user = {
                let it = try_grpc!(UserDao::by_id(db, req.id))?;
                UserRequest { id: it.id }.to_string()
            };
            try_grpc!(enf.delete_user(&user).await)?;
        }
        Ok(Response::new(()))
    }
    async fn delete_role(&self, req: tonic::Request<v1::RoleRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();

        {
            let mut enf = enf.lock().await;
            let role = req.to_string();
            try_grpc!(enf.delete_role(&role).await)?;
        }
        Ok(Response::new(()))
    }

    async fn add_permissions_for_role(
        &self,
        req: tonic::Request<v1::RolePermissionsRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        {
            let mut enf = enf.lock().await;
            let role = v1::RoleRequest {
                code: req.role.clone(),
            }
            .to_string();
            let permissions = v1::permissions_response::Item::to_rules(&req.permissions);
            try_grpc!(enf.add_permissions_for_user(&role, permissions).await)?;
        }
        Ok(Response::new(()))
    }
    async fn delete_permissions_for_role(
        &self,
        req: tonic::Request<v1::RolePermissionsRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        {
            let mut enf = enf.lock().await;
            let role = v1::RoleRequest {
                code: req.role.clone(),
            }
            .to_string();
            for permission in v1::permissions_response::Item::to_rules(&req.permissions) {
                try_grpc!(enf.delete_permission_for_user(&role, permission).await)?;
            }
        }
        Ok(Response::new(()))
    }
    async fn add_permissions_for_user(
        &self,
        req: tonic::Request<v1::UserPermissionsRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        {
            let mut enf = enf.lock().await;
            let user = {
                let it = try_grpc!(UserDao::by_id(db, req.user))?;
                v1::UserRequest { id: it.id }.to_string()
            };
            let permissions = v1::permissions_response::Item::to_rules(&req.permissions);
            try_grpc!(enf.add_permissions_for_user(&user, permissions).await)?;
        }
        Ok(Response::new(()))
    }
    async fn delete_permissions_for_user(
        &self,
        req: tonic::Request<v1::UserPermissionsRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        {
            let mut enf = enf.lock().await;
            let user = {
                let it = try_grpc!(UserDao::by_id(db, req.user))?;
                v1::UserRequest { id: it.id }.to_string()
            };
            for permission in v1::permissions_response::Item::to_rules(&req.permissions) {
                try_grpc!(enf.delete_permission_for_user(&user, permission).await)?;
            }
        }
        Ok(Response::new(()))
    }
    async fn get_permissions_for_user(
        &self,
        req: tonic::Request<v1::UserRequest>,
    ) -> GrpcResult<v1::PermissionsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        let mut items = Vec::new();
        {
            let enf = enf.lock().await;
            let user = {
                let it = try_grpc!(UserDao::by_id(db, req.id))?;
                v1::UserRequest { id: it.id }.to_string()
            };

            for it in enf.get_permissions_for_user(&user, None).iter() {
                let it = try_grpc!(v1::permissions_response::Item::new(it))?;
                items.push(it);
            }
        }
        Ok(Response::new(v1::PermissionsResponse { items }))
    }
    async fn get_permissions_for_role(
        &self,
        req: tonic::Request<v1::UserRequest>,
    ) -> GrpcResult<v1::PermissionsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        let mut items = Vec::new();
        {
            let enf = enf.lock().await;
            let role = req.to_string();

            for it in enf.get_permissions_for_user(&role, None).iter() {
                let it = try_grpc!(v1::permissions_response::Item::new(it))?;
                items.push(it);
            }
        }
        Ok(Response::new(v1::PermissionsResponse::default()))
    }
    async fn get_implicit_permissions_for_user(
        &self,
        req: tonic::Request<v1::UserRequest>,
    ) -> GrpcResult<v1::PermissionsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        let mut items = Vec::new();
        {
            let mut enf = enf.lock().await;
            let user = {
                let it = try_grpc!(UserDao::by_id(db, req.id))?;
                v1::UserRequest { id: it.id }.to_string()
            };

            for it in enf.get_implicit_permissions_for_user(&user, None).iter() {
                let it = try_grpc!(v1::permissions_response::Item::new(it))?;
                items.push(it);
            }
        }
        Ok(Response::new(v1::PermissionsResponse::default()))
    }

    async fn has_role_for_user(
        &self,
        req: tonic::Request<v1::HasRoleForUserRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();
        let user = {
            let it = try_grpc!(UserDao::by_id(db, req.user))?;
            v1::UserRequest { id: it.id }.to_string()
        };

        let role = v1::RoleRequest {
            code: req.role.clone(),
        }
        .to_string();
        if has_role!(enf, &user, &role) {
            return Ok(Response::new(()));
        }
        Err(Status::permission_denied(type_name::<Self>()))
    }
    async fn has_permission_for_user(
        &self,
        req: tonic::Request<v1::HasPermissionForUserRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<Self>()));
        }

        let req = req.into_inner();

        let user = {
            let it = try_grpc!(UserDao::by_id(db, req.user))?;
            v1::UserRequest { id: it.id }.to_string()
        };

        let ok = match req.resource {
            Some(ref resource) => {
                has_permission!(enf, &user, &req.operation, &resource.to_string())
            }
            None => {
                has_permission!(enf, &user, &req.operation)
            }
        };
        if ok {
            return Ok(Response::new(()));
        }
        Err(Status::permission_denied(type_name::<Self>()))
    }

    // async fn has_permission(
    //     &self,
    //     req: tonic::Request<v1::permission_list::Item>,
    // ) -> GrpcResult<()> {
    //     let ss = Session::new(&req);
    //     let mut db = try_grpc!(self.pgsql.get())?;
    //     let db = db.deref_mut();
    //     let mut ch = try_grpc!(self.redis.get())?;
    //     let ch = ch.deref_mut();
    //     let jwt = self.jwt.deref();
    //     let enf = self.enforcer.deref();
    //     let user = try_grpc!(ss.current_user(db, ch, jwt))?;
    //     let req = req.into_inner();

    //     // let object = ;
    //     // if has_permission!(enf, &user.subject(), &req.value) {
    //     //     return Ok(Response::new(()));
    //     // }
    //     Err(Status::permission_denied(type_name::<Self>()))
    // }
    // async fn has_role(&self, req: tonic::Request<v1::CodeRequest>) -> GrpcResult<()> {
    //     let ss = Session::new(&req);
    //     let mut db = try_grpc!(self.pgsql.get())?;
    //     let db = db.deref_mut();
    //     let mut ch = try_grpc!(self.redis.get())?;
    //     let ch = ch.deref_mut();
    //     let jwt = self.jwt.deref();
    //     let enf = self.enforcer.deref();
    //     let user = try_grpc!(ss.current_user(db, ch, jwt))?;

    //     // if !user.is_administrator(enf).await {
    //     //     return Err(Status::permission_denied(type_name::<Self>()));
    //     // }
    //     let req = req.into_inner();
    //     if has_role!(enf, &user.subject(), &req.value) {
    //         return Ok(Response::new(()));
    //     }
    //     Err(Status::permission_denied(type_name::<Self>()))
    // }
}
