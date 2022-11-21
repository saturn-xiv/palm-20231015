use std::sync::{Arc, Mutex};

use diesel::sqlite::SqliteConnection as Db;
use palm::{jwt::Jwt, ops::router::v1, GrpcResult};
use tonic::{Request, Response};

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
