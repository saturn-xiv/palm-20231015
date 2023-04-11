use std::sync::Arc;

use palm::{orchid::v1, try_grpc, GrpcResult};
use tonic::{Request, Response};

use super::super::env::Config;

pub struct Service {
    pub config: Arc<Config>,
}

#[tonic::async_trait]
impl v1::health_server::Health for Service {
    async fn check(&self, req: Request<()>) -> GrpcResult<()> {
        try_grpc!(self.config.verify(&req))?;
        Ok(Response::new(()))
    }
}
