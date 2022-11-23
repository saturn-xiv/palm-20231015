use std::sync::Arc;

use palm::{cache::redis::Pool as RedisPool, jwt::Jwt, nut::v1, GrpcResult};
use tonic::{Request, Response};

use super::super::orm::postgresql::Pool as PostgreSqlPool;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub redis: RedisPool,
}

#[tonic::async_trait]
impl v1::notification_server::Notification for Service {
    async fn index(&self, _req: Request<v1::Pager>) -> GrpcResult<v1::IndexNotificationResponse> {
        // TODO
        Ok(Response::new(v1::IndexNotificationResponse::default()))
    }
}