use std::sync::{Arc, Mutex};

use palm::{jwt::Jwt, ops::router::v1, GrpcResult};
use tonic::{Request, Response};

use super::super::orm::Connection as Db;

pub struct Service {
    pub db: Arc<Mutex<Db>>,
    pub jwt: Arc<Jwt>,
}

#[tonic::async_trait]
impl v1::router_server::Router for Service {
    async fn scan(&self, _req: Request<()>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
}
