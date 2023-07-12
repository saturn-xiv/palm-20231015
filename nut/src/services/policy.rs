use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::{Enforcer, MgmtApi, RbacApi};
use palm::rbac::v1::{OperationsResponse, RolesResponse};
use palm::{
    cache::redis::{ClusterConnection as Cache, Pool as CachePool},
    jwt::Jwt,
    rbac::{v1, Subject},
    session::Session,
    thrift::loquat::Config as Loquat,
    try_grpc, GrpcResult, Result,
};
use tokio::sync::Mutex;
use tonic::{Request, Response};
use validator::Validate;

use super::super::{
    models::{
        casbin_rule::{Dao as CasbinRuleDao, Item as CasbinRule},
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
    async fn get_all_users(&self, req: Request<()>) -> GrpcResult<v1::UsersResponse> {
        todo!()
    }
    async fn get_all_resources(&self, req: Request<()>) -> GrpcResult<v1::ResourcesResponse> {
        todo!()
    }
    async fn get_all_operations(&self, req: Request<()>) -> GrpcResult<OperationsResponse> {
        todo!()
    }
    async fn get_all_roles(&self, req: Request<()>) -> GrpcResult<RolesResponse> {
        todo!()
    }

    async fn get_roles_for_user(
        &self,
        req: Request<v1::UserRequest>,
    ) -> GrpcResult<v1::RolesResponse> {
        todo!()
    }
    async fn get_implicit_roles_for_user(
        &self,
        req: Request<v1::UserRequest>,
    ) -> GrpcResult<v1::RolesResponse> {
        todo!()
    }
    async fn get_users_for_role(
        &self,
        req: Request<v1::RoleRequest>,
    ) -> GrpcResult<v1::UsersResponse> {
        todo!()
    }
    async fn delete_roles_for_user(&self, req: Request<v1::UserRolesRequest>) -> GrpcResult<()> {
        todo!()
    }
    async fn add_roles_for_user(&self, req: Request<v1::UserRolesRequest>) -> GrpcResult<()> {
        todo!()
    }
    async fn delete_user(&self, req: Request<v1::UserRequest>) -> GrpcResult<()> {
        todo!()
    }
    async fn delete_role(&self, req: Request<v1::RoleRequest>) -> GrpcResult<()> {
        todo!()
    }

    async fn add_permissions_for_role(
        &self,
        req: Request<v1::RolePermissionsRequest>,
    ) -> GrpcResult<()> {
        todo!()
    }
    async fn delete_permissions_for_role(
        &self,
        req: Request<v1::RolePermissionsRequest>,
    ) -> GrpcResult<()> {
        todo!()
    }
    async fn add_permissions_for_user(
        &self,
        req: Request<v1::UserPermissionsRequest>,
    ) -> GrpcResult<()> {
        todo!()
    }
    async fn delete_permissions_for_user(
        &self,
        req: Request<v1::UserPermissionsRequest>,
    ) -> GrpcResult<()> {
        todo!()
    }
    async fn get_permissions_for_user(
        &self,
        req: Request<v1::UserRequest>,
    ) -> GrpcResult<v1::PermissionsResponse> {
        todo!()
    }
    async fn get_permissions_for_role(
        &self,
        req: Request<v1::RoleRequest>,
    ) -> GrpcResult<v1::PermissionsResponse> {
        todo!()
    }
    async fn get_implicit_permissions_for_user(
        &self,
        req: Request<v1::UserRequest>,
    ) -> GrpcResult<v1::PermissionsResponse> {
        todo!()
    }

    async fn has_role_for_user(&self, req: Request<v1::HasRoleForUserRequest>) -> GrpcResult<()> {
        todo!()
    }
    async fn has_permission_for_user(
        &self,
        req: Request<v1::HasPermissionForUserRequest>,
    ) -> GrpcResult<()> {
        todo!()
    }

    async fn update_permissions_for_role(
        &self,
        req: Request<v1::UpdatePermissionsForRoleRequest>,
    ) -> GrpcResult<()> {
        todo!()
    }
    async fn update_permissions_for_user(
        &self,
        req: Request<v1::UpdatePermissionsForUserRequest>,
    ) -> GrpcResult<()> {
        todo!()
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
