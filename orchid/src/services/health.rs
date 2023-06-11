use std::sync::Arc;

use palm::{try_grpc, GrpcResult};
use tonic::{Request, Response};

use super::super::{env::Config, v1};

pub struct Service {
    pub config: Arc<Config>,
}

#[tonic::async_trait]
impl v1::health_server::Health for Service {
    async fn check(&self, req: Request<()>) -> GrpcResult<()> {
        let subject = try_grpc!(self.config.verify(&req))?;
        info!("health check from {subject}");
        Ok(Response::new(()))
    }
}
