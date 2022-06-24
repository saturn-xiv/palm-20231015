use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use tonic::{Request, Response, Status};

use super::super::super::super::{jwt::Jwt, orm::postgresql::Pool as PostgreSqlPool, GrpcResult};
use super::super::{
    models::{tag::Dao as TagDao, Operation},
    v1,
};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
}

#[tonic::async_trait]
impl v1::tag_server::Tag for Service {
    async fn create(&self, req: Request<v1::TagCreateRequest>) -> GrpcResult<()> {
        Ok(Response::new(()))
    }
    async fn update(&self, req: Request<v1::TagUpdateRequest>) -> GrpcResult<()> {
        Ok(Response::new(()))
    }
    async fn destroy(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        Ok(Response::new(()))
    }
    async fn index(&self, req: Request<()>) -> GrpcResult<v1::TagIndexResponse> {
        Ok(Response::new(v1::TagIndexResponse::default()))
    }
}
