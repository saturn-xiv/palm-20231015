use std::sync::Arc;

use auth::orm::postgresql::Pool as PostgreSqlPool;
use palm::{
    cache::redis::Pool as RedisPool,
    cms::v1,
    jwt::Jwt,
    v1::{IdRequest, Pager},
    GrpcResult,
};
use tonic::{Request, Response};

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub redis: RedisPool,
}

#[tonic::async_trait]
impl v1::shorter_link_server::ShorterLink for Service {
    async fn create(&self, _req: Request<v1::ShorterLinkCreateRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn update(&self, _req: Request<v1::ShorterLinkUpdateRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn destroy(&self, _req: Request<IdRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn index(&self, _req: Request<Pager>) -> GrpcResult<v1::ShorterLinkIndexResponse> {
        // TODO
        Ok(Response::new(v1::ShorterLinkIndexResponse::default()))
    }
}
