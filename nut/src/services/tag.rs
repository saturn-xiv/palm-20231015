use std::sync::Arc;

use palm::{
    cache::redis::Pool as RedisPool, jwt::Jwt, nut::v1, orm::postgresql::Pool as PostgreSqlPool,
    GrpcResult,
};
use tonic::{Request, Response};

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub redis: RedisPool,
}

#[tonic::async_trait]
impl v1::tag_server::Tag for Service {
    async fn create(&self, _req: Request<v1::TagCreateRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn update(&self, _req: Request<v1::TagUpdateRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn destroy(&self, _req: Request<v1::IdRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn index(&self, _req: Request<()>) -> GrpcResult<v1::TagIndexResponse> {
        // TODO
        Ok(Response::new(v1::TagIndexResponse::default()))
    }
}
