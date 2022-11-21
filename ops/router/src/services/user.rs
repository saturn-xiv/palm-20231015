use std::sync::{Arc, Mutex};

use diesel::sqlite::SqliteConnection as Db;
use palm::{crypto::Hmac, jwt::Jwt, ops::router::v1, GrpcResult};
use tonic::{Request, Response};

pub struct Service {
    pub db: Arc<Mutex<Db>>,
    pub jwt: Arc<Jwt>,
    pub hmac: Arc<Hmac>,
}

#[tonic::async_trait]
impl v1::user_server::User for Service {
    async fn sign_in(
        &self,
        _req: Request<v1::UserSignInRequest>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        // TODO
        Ok(Response::new(v1::UserSignInResponse::default()))
    }
    async fn refresh(
        &self,
        _req: Request<prost_types::Duration>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        // TODO
        Ok(Response::new(v1::UserSignInResponse::default()))
    }
    async fn update(&self, _req: Request<v1::UserUpdateRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn sign_out(&self, _req: Request<()>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn logs(&self, _req: Request<prost_types::Duration>) -> GrpcResult<v1::UserLogsResponse> {
        // TODO
        Ok(Response::new(v1::UserLogsResponse::default()))
    }
}
