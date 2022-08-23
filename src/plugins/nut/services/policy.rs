use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use hyper::StatusCode;
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};

use super::super::super::super::{
    i18n::I18n,
    jwt::Jwt,
    orm::postgresql::{Connection as PostgreSqlConnection, Pool as PostgreSqlPool},
    GrpcResult, HttpError, Result,
};
use super::super::{
    models::user::{Dao as UserDao, Item as User},
    v1,
};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
}

#[tonic::async_trait]
impl v1::policy_server::Policy for Service {
    async fn get_all_roles(
        &self,
        request: tonic::Request<()>,
    ) -> GrpcResult<v1::PolicyRoleListResponse> {
        // TODO
        todo!()
    }

    async fn get_all_users(
        &self,
        request: tonic::Request<()>,
    ) -> GrpcResult<v1::PolicyUserListResponse> {
        // TODO
        todo!()
    }

    async fn delete_user(&self, request: tonic::Request<v1::PolicyUserRequest>) -> GrpcResult<()> {
        // TODO
        todo!()
    }
    async fn delete_role(&self, request: tonic::Request<v1::PolicyRoleRequest>) -> GrpcResult<()> {
        // TODO
        todo!()
    }
    async fn get_roles_for_user(
        &self,
        request: tonic::Request<v1::PolicyUserRequest>,
    ) -> GrpcResult<v1::PolicyRoleListResponse> {
        // TODO
        todo!()
    }
    async fn get_users_for_role(
        &self,
        request: tonic::Request<v1::PolicyRoleRequest>,
    ) -> GrpcResult<v1::PolicyUserListResponse> {
        // TODO
        todo!()
    }
    async fn add_roles_for_user(
        &self,
        request: tonic::Request<v1::PolicyAddRolesForUserRequest>,
    ) -> GrpcResult<()> {
        // TODO
        todo!()
    }
    async fn delete_roles_for_user(
        &self,
        request: tonic::Request<v1::PolicyDeleteRolesForUserRequest>,
    ) -> GrpcResult<()> {
        // TODO
        todo!()
    }

    async fn get_implicit_roles_for_user(
        &self,
        request: tonic::Request<v1::PolicyUserRequest>,
    ) -> GrpcResult<v1::PolicyRoleListResponse> {
        // TODO
        todo!()
    }

    async fn get_implicit_users_for_role(
        &self,
        request: tonic::Request<v1::PolicyRoleRequest>,
    ) -> GrpcResult<v1::PolicyRoleListResponse> {
        // TODO
        todo!()
    }
    async fn get_permissions_for_user(
        &self,
        request: tonic::Request<v1::PolicyUserRequest>,
    ) -> GrpcResult<v1::PolicyPermissionListResponse> {
        // TODO
        todo!()
    }
    async fn get_permissions_for_role(
        &self,
        request: tonic::Request<v1::PolicyRoleRequest>,
    ) -> GrpcResult<v1::PolicyPermissionListResponse> {
        // TODO
        todo!()
    }
    async fn get_implicit_permissions_for_user(
        &self,
        request: tonic::Request<v1::PolicyUserRequest>,
    ) -> GrpcResult<v1::PolicyPermissionListResponse> {
        // TODO
        todo!()
    }

    async fn get_implicit_permissions_for_role(
        &self,
        request: tonic::Request<v1::PolicyRoleRequest>,
    ) -> GrpcResult<v1::PolicyPermissionListResponse> {
        // TODO
        todo!()
    }
    async fn get_implicit_resources_for_user(
        &self,
        request: tonic::Request<v1::PolicyUserRequest>,
    ) -> GrpcResult<v1::PolicyResourceListResponse> {
        // TODO
        todo!()
    }
    async fn get_implicit_resources_for_role(
        &self,
        request: tonic::Request<v1::PolicyRoleRequest>,
    ) -> GrpcResult<v1::PolicyResourceListResponse> {
        // TODO
        todo!()
    }

    async fn add_permissions(
        &self,
        request: tonic::Request<v1::PolicyPermissionsRequest>,
    ) -> GrpcResult<()> {
        // TODO
        todo!()
    }

    async fn delete_permissions(
        &self,
        request: tonic::Request<v1::PolicyPermissionsRequest>,
    ) -> GrpcResult<()> {
        // TODO
        todo!()
    }
}
