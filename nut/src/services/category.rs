use std::sync::Arc;

use casbin::Enforcer;
use palm::{cache::redis::Pool as RedisPool, nut::v1, tink::Loquat, GrpcResult};
use tokio::sync::Mutex;
use tonic::{Request, Response};

use super::super::orm::postgresql::Pool as PostgreSqlPool;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Loquat>,
    pub redis: RedisPool,
    pub enforcer: Arc<Mutex<Enforcer>>,
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
    async fn index(&self, _req: Request<()>) -> GrpcResult<v1::CategoryIndexResponse> {
        // TODO
        Ok(Response::new(v1::CategoryIndexResponse::default()))
    }
}
