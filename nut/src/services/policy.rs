use std::ops::{Deref, DerefMut};
use std::result::Result as StdResult;
use std::sync::Arc;

use casbin::{Enforcer, MgmtApi, RbacApi};
use hyper::StatusCode;
use palm::{
    cache::redis::{ClusterConnection as Cache, Pool as CachePool},
    has_permission, has_role,
    jwt::Jwt,
    rbac::{v1, Permission, Resource, Role, Subject},
    session::Session,
    thrift::loquat::Config as Loquat,
    to_code, try_grpc, GrpcResult, HttpError, Result,
};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};
use validator::Validate;

use super::super::{
    models::{
        casbin_rule::Dao as CasbinRuleDao,
        user::{Dao as UserDao, Item as User},
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
impl v1::policy_server::Policy for Service {
    async fn get_all_rules(&self, req: Request<()>) -> GrpcResult<v1::RulesResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let items = try_grpc!(all_rules(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(v1::RulesResponse { items }))
    }
    async fn get_all_users(&self, req: Request<()>) -> GrpcResult<v1::UsersResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let items = try_grpc!(all_users(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(v1::UsersResponse { items }))
    }
    async fn get_all_resources(&self, req: Request<()>) -> GrpcResult<v1::ResourcesResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let items = try_grpc!(all_resources(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(v1::ResourcesResponse { items }))
    }
    async fn get_all_operations(&self, req: Request<()>) -> GrpcResult<v1::OperationsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let items = try_grpc!(all_operations(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(v1::OperationsResponse { items }))
    }
    async fn get_all_roles(&self, req: Request<()>) -> GrpcResult<v1::RolesResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let items = try_grpc!(all_roles(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(v1::RolesResponse { items }))
    }

    async fn get_roles_for_user(
        &self,
        req: Request<v1::UserRequest>,
    ) -> GrpcResult<v1::RolesResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        let items = try_grpc!(roles_for_user(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(v1::RolesResponse { items }))
    }
    async fn get_implicit_roles_for_user(
        &self,
        req: Request<v1::UserRequest>,
    ) -> GrpcResult<v1::RolesResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        let items = try_grpc!(implicit_roles_for_user(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(v1::RolesResponse { items }))
    }
    async fn get_users_for_role(
        &self,
        req: Request<v1::RoleRequest>,
    ) -> GrpcResult<v1::UsersResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        let items = try_grpc!(users_by_role(&ss, db, ch, enf, jwt, &req.code).await)?;
        Ok(Response::new(v1::UsersResponse { items }))
    }
    async fn delete_roles_for_user(&self, req: Request<v1::UserRolesRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        try_grpc!(delete_roles_for_user(&ss, db, ch, enf, jwt, req.user, &req.roles).await)?;
        Ok(Response::new(()))
    }
    async fn add_roles_for_user(&self, req: Request<v1::UserRolesRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        try_grpc!(add_roles_for_user(&ss, db, ch, enf, jwt, req.user, &req.roles).await)?;
        Ok(Response::new(()))
    }
    async fn delete_user(&self, req: Request<v1::UserRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        try_grpc!(delete_user(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(()))
    }
    async fn delete_role(&self, req: Request<v1::RoleRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        try_grpc!(delete_role(&ss, db, ch, enf, jwt, &req.code).await)?;
        Ok(Response::new(()))
    }

    async fn add_permissions_for_role(
        &self,
        req: Request<v1::RolePermissionsRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        let mut permissions = Vec::new();
        for it in req.permissions.iter() {
            permissions.push(PermissionRequest::new(it)?);
        }
        try_grpc!(add_permissions_for_role(&ss, db, ch, enf, jwt, &req.role, &permissions).await)?;
        Ok(Response::new(()))
    }
    async fn delete_permissions_for_role(
        &self,
        req: Request<v1::RolePermissionsRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        let mut permissions = Vec::new();
        for it in req.permissions.iter() {
            permissions.push(PermissionRequest::new(it)?);
        }
        try_grpc!(
            delete_permissions_for_role(&ss, db, ch, enf, jwt, &req.role, &permissions).await
        )?;
        Ok(Response::new(()))
    }
    async fn add_permissions_for_user(
        &self,
        req: Request<v1::UserPermissionsRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        let mut permissions = Vec::new();
        for it in req.permissions.iter() {
            permissions.push(PermissionRequest::new(it)?);
        }
        try_grpc!(add_permissions_for_user(&ss, db, ch, enf, jwt, req.user, &permissions).await)?;
        Ok(Response::new(()))
    }
    async fn delete_permissions_for_user(
        &self,
        req: Request<v1::UserPermissionsRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        let mut permissions = Vec::new();
        for it in req.permissions.iter() {
            permissions.push(PermissionRequest::new(it)?);
        }
        try_grpc!(
            delete_permissions_for_user(&ss, db, ch, enf, jwt, req.user, &permissions).await
        )?;
        Ok(Response::new(()))
    }
    async fn get_permissions_for_user(
        &self,
        req: Request<v1::UserRequest>,
    ) -> GrpcResult<v1::PermissionsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        let items = try_grpc!(get_permissions_for_user(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(v1::PermissionsResponse { items }))
    }
    async fn get_permissions_for_role(
        &self,
        req: Request<v1::RoleRequest>,
    ) -> GrpcResult<v1::PermissionsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        let items = try_grpc!(get_permissions_for_role(&ss, db, ch, enf, jwt, &req.code).await)?;
        Ok(Response::new(v1::PermissionsResponse { items }))
    }
    async fn get_implicit_permissions_for_user(
        &self,
        req: Request<v1::UserRequest>,
    ) -> GrpcResult<v1::PermissionsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        let items =
            try_grpc!(get_implicit_permissions_for_user(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(v1::PermissionsResponse { items }))
    }

    async fn has_role_for_user(&self, req: Request<v1::HasRoleForUserRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        try_grpc!(has_role(&ss, db, ch, enf, jwt, req.user, &req.role).await)?;
        Ok(Response::new(()))
    }
    async fn has_permission_for_user(
        &self,
        req: Request<v1::HasPermissionForUserRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        let resource = req
            .resource
            .as_ref()
            .ok_or(Status::invalid_argument("empty resource"))?;
        try_grpc!(
            has_permission(
                &ss,
                db,
                ch,
                enf,
                jwt,
                req.user,
                &PermissionRequest {
                    operation: req.operation.clone(),
                    resource_type: resource.r#type.clone(),
                    resource_id: resource.id
                }
            )
            .await
        )?;
        Ok(Response::new(()))
    }

    async fn update_permissions_for_role(
        &self,
        req: Request<v1::UpdatePermissionsForRoleRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        let removed = {
            let mut items = Vec::new();
            for it in req.removed.iter() {
                items.push(PermissionRequest::new(it)?);
            }
            items
        };
        let saved = {
            let mut items = Vec::new();
            for it in req.saved.iter() {
                items.push(PermissionRequest::new(it)?);
            }
            items
        };
        try_grpc!(
            update_permissions_for_role(&ss, db, ch, enf, jwt, &req.role, &removed, &saved).await
        )?;
        Ok(Response::new(()))
    }
    async fn update_permissions_for_user(
        &self,
        req: Request<v1::UpdatePermissionsForUserRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();

        let removed = {
            let mut items = Vec::new();
            for it in req.removed.iter() {
                items.push(PermissionRequest::new(it)?);
            }
            items
        };
        let saved = {
            let mut items = Vec::new();
            for it in req.saved.iter() {
                items.push(PermissionRequest::new(it)?);
            }
            items
        };
        try_grpc!(
            update_permissions_for_user(&ss, db, ch, enf, jwt, req.user, &removed, &saved).await
        )?;
        Ok(Response::new(()))
    }
}

pub async fn all_users<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
) -> Result<Vec<v1::users_response::Item>> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;
    user.is_administrator(enf).await?;

    let mut items = Vec::new();
    {
        let enf = enf.lock().await;
        for it in enf.get_all_subjects().iter() {
            if let Ok(ref it) = <User as Subject>::from(it) {
                let it = UserDao::by_nickname(db, it)?;
                items.push(it.into());
            }
        }
    }
    Ok(items)
}

pub async fn all_resources<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
) -> Result<Vec<v1::resources_response::Item>> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;
    user.is_administrator(enf).await?;

    let mut items = Vec::new();
    {
        let enf = enf.lock().await;
        for it in enf.get_all_objects().iter() {
            let it = it.parse::<Resource>()?;
            items.push(it.into());
        }
    }
    Ok(items)
}

pub async fn all_operations<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
) -> Result<Vec<String>> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;
    user.is_administrator(enf).await?;

    let items = {
        let enf = enf.lock().await;
        enf.get_all_actions()
    };
    Ok(items)
}

pub async fn all_roles<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
) -> Result<Vec<String>> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;

    user.is_administrator(enf).await?;

    let mut items = Vec::new();
    {
        let enf = enf.lock().await;
        for it in enf.get_all_subjects().iter() {
            if let Ok(ref it) = <Role as Subject>::from(it) {
                items.push(it.clone());
            }
        }
    }
    Ok(items)
}

pub async fn roles_for_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
) -> Result<Vec<String>> {
    {
        let (user, _, _) = ss.current_user(db, ch, jwt)?;
        user.is_administrator(enf).await?;
    }

    let mut items = Vec::new();
    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);
        let mut enf = enf.lock().await;

        for it in enf.get_roles_for_user(&user, None).iter() {
            if let Ok(ref it) = <Role as Subject>::from(it) {
                items.push(it.clone());
            }
        }
    }
    Ok(items)
}

pub async fn implicit_roles_for_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
) -> Result<Vec<String>> {
    {
        let (user, _, _) = ss.current_user(db, ch, jwt)?;
        user.is_administrator(enf).await?;
    }

    let mut items = Vec::new();
    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);
        let mut enf = enf.lock().await;

        for it in enf.get_implicit_roles_for_user(&user, None).iter() {
            if let Ok(ref it) = <Role as Subject>::from(it) {
                items.push(it.clone());
            }
        }
    }
    Ok(items)
}

pub async fn users_by_role<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    role: &str,
) -> Result<Vec<v1::users_response::Item>> {
    {
        let (user, _, _) = ss.current_user(db, ch, jwt)?;
        user.is_administrator(enf).await?;
    }

    let mut items = Vec::new();
    {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);
        let enf = enf.lock().await;
        for it in enf.get_users_for_role(&role, None).iter() {
            if let Ok(ref it) = <User as Subject>::from(it) {
                let it = UserDao::by_nickname(db, it)?;
                items.push(it.into());
            }
        }
    }
    Ok(items)
}

pub async fn delete_roles_for_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
    roles: &[String],
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut items = Vec::new();
        for role in roles.iter() {
            let role: Role = role.parse()?;
            items.push(Subject::to(&role));
        }

        let mut enf = enf.lock().await;
        for role in items.iter() {
            enf.delete_role_for_user(&user, role, None).await?;
        }
    }
    Ok(())
}

pub async fn add_roles_for_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
    roles: &[String],
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut items = Vec::new();
        for role in roles.iter() {
            let role: Role = role.parse()?;
            items.push(Subject::to(&role));
        }

        let mut enf = enf.lock().await;
        enf.add_roles_for_user(&user, items, None).await?;
    }
    Ok(())
}

pub async fn delete_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut enf = enf.lock().await;
        enf.delete_user(&user).await?;
    }
    Ok(())
}

pub async fn delete_role<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    role: &str,
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);

        let mut enf = enf.lock().await;
        enf.delete_role(&role).await?;
    }
    Ok(())
}

#[derive(Validate)]
pub struct PermissionRequest {
    #[validate(length(min = 1, max = 63))]
    pub operation: String,
    #[validate(length(min = 1, max = 127))]
    pub resource_type: String,
    pub resource_id: Option<i32>,
}

impl PermissionRequest {
    pub fn new(x: &v1::permissions_response::Item) -> StdResult<Self, Status> {
        let resource = x
            .resource
            .as_ref()
            .ok_or(Status::invalid_argument("empty resource"))?;
        Ok(Self {
            operation: x.operation.clone(),
            resource_id: resource.id,
            resource_type: resource.r#type.clone(),
        })
    }
}

impl From<PermissionRequest> for Permission {
    fn from(x: PermissionRequest) -> Self {
        Self {
            operation: x.operation.clone(),
            resource: Resource {
                r#type: x.resource_type.clone(),
                id: x.resource_id,
            },
        }
    }
}

pub async fn add_permissions_for_role<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    role: &str,
    permissions: &[PermissionRequest],
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);

        let mut enf = enf.lock().await;
        for x in permissions.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.add_permission_for_user(&role, permission).await?;
        }
    }
    Ok(())
}

pub async fn delete_permissions_for_role<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    role: &str,
    permissions: &[PermissionRequest],
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);

        let mut enf = enf.lock().await;
        for x in permissions.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.delete_permission_for_user(&role, permission).await?;
        }
    }
    Ok(())
}

pub async fn add_permissions_for_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
    permissions: &[PermissionRequest],
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut enf = enf.lock().await;
        for x in permissions.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.add_permission_for_user(&user, permission).await?;
        }
    }
    Ok(())
}

pub async fn delete_permissions_for_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
    permissions: &[PermissionRequest],
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut enf = enf.lock().await;
        for x in permissions.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.delete_permission_for_user(&user, permission).await?;
        }
    }
    Ok(())
}

pub async fn get_permissions_for_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
) -> Result<Vec<v1::permissions_response::Item>> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    let permissions = {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let enf = enf.lock().await;
        enf.get_permissions_for_user(&user, None)
    };

    let mut items = Vec::new();
    for it in permissions.iter() {
        let it = Permission::new(it)?;
        items.push(it.into());
    }

    Ok(items)
}

pub async fn get_implicit_permissions_for_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
) -> Result<Vec<v1::permissions_response::Item>> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    let permissions = {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut enf = enf.lock().await;
        enf.get_implicit_permissions_for_user(&user, None)
    };

    let mut items = Vec::new();
    for it in permissions.iter() {
        let it = Permission::new(it)?;
        items.push(it.into());
    }

    Ok(items)
}

pub async fn get_permissions_for_role<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    role: &str,
) -> Result<Vec<v1::permissions_response::Item>> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    let permissions = {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);

        let enf = enf.lock().await;
        enf.get_permissions_for_user(&role, None)
    };

    let mut items = Vec::new();
    for it in permissions.iter() {
        let it = Permission::new(it)?;
        items.push(it.into());
    }

    Ok(items)
}

pub async fn has_role<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
    role: &str,
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    let user = UserDao::by_id(db, user)?;

    {
        let role = {
            let it: Role = role.parse()?;
            Subject::to(&it)
        };
        let user = Subject::to(&user);
        if has_role!(enf, &user, &role) {
            return Ok(());
        }
    }
    Err(Box::new(HttpError(
        StatusCode::FORBIDDEN,
        Some(format!("{} doesn't have role {}", user, role)),
    )))
}
pub async fn has_permission<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
    permission: &PermissionRequest,
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }
    permission.validate()?;

    let user = UserDao::by_id(db, user)?;
    let subject = Subject::to(&user);
    let action = to_code!(permission.operation);

    let object = Resource {
        r#type: permission.resource_type.clone(),
        id: permission.resource_id,
    }
    .to_string();
    if has_permission!(enf, &subject, &object, &action) {
        return Ok(());
    }
    Err(Box::new(HttpError(
        StatusCode::FORBIDDEN,
        Some(format!("{} can't {} with {}", user, action, object)),
    )))
}

pub async fn update_permissions_for_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
    removed: &[PermissionRequest],
    saved: &[PermissionRequest],
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    {
        let user = UserDao::by_id(db, user)?;
        let user = Subject::to(&user);

        let mut enf = enf.lock().await;
        for x in removed.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.delete_permission_for_user(&user, permission).await?;
        }
        for x in saved.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.add_permission_for_user(&user, permission).await?;
        }
    }
    Ok(())
}
pub async fn update_permissions_for_role<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    role: &str,
    removed: &[PermissionRequest],
    saved: &[PermissionRequest],
) -> Result<()> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?;
    }

    {
        let role: Role = role.parse()?;
        let role = Subject::to(&role);

        let mut enf = enf.lock().await;
        for x in removed.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.delete_permission_for_user(&role, permission).await?;
        }
        for x in saved.iter() {
            let permission = Permission {
                operation: x.operation.clone(),
                resource: Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                },
            };
            let permission = permission.to_rule();
            enf.add_permission_for_user(&role, permission).await?;
        }
    }
    Ok(())
}

pub async fn all_rules<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
) -> Result<Vec<v1::rules_response::Item>> {
    {
        let (cur, _, _) = ss.current_user(db, ch, jwt)?;
        cur.is_administrator(enf).await?
    }

    let mut items = Vec::new();
    for it in CasbinRuleDao::all(db)? {
        items.push(it.into());
    }
    Ok(items)
}
