use palm::GrpcResult;
use tonic::{Request, Response};

use super::super::v1;

pub struct Service {}

#[tonic::async_trait]
impl v1::health_server::Health for Service {
    async fn check(&self, _req: Request<()>) -> GrpcResult<()> {
        Ok(Response::new(()))
    }
}
