use std::sync::{Arc, Mutex};

use casbin::Enforcer;
use tonic::{Request, Response};

use super::super::super::super::{jwt::Jwt, orm::postgresql::Pool as PostgreSqlPool, GrpcResult};
use super::super::v1;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub enforcer: Arc<Mutex<Enforcer>>,
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
