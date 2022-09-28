use std::sync::Arc;

use tonic::{Request, Response};

use super::super::super::super::{jwt::Jwt, orm::postgresql::Pool as PostgreSqlPool, GrpcResult};
use super::super::v1;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
}

#[tonic::async_trait]
impl v1::category_server::Category for Service {
    async fn create(&self, _req: Request<v1::CategoryCreateRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn update(&self, _req: Request<v1::CategoryUpdateRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn destroy(&self, _req: Request<v1::IdRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn index(&self, _req: Request<v1::Pager>) -> GrpcResult<v1::CategoryIndexResponse> {
        // TODO
        Ok(Response::new(v1::CategoryIndexResponse::default()))
    }
}
