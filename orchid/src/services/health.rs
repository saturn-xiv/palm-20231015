use palm::{orchid::v1, GrpcResult};
use tonic::{Request, Response};

pub struct Service {}

#[tonic::async_trait]
impl v1::health_server::Health for Service {
    async fn check(&self, _req: Request<()>) -> GrpcResult<()> {
        Ok(Response::new(()))
    }
}
