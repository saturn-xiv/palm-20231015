use std::sync::Arc;

use casbin::Enforcer;
use palm::{cache::redis::Pool as RedisPool, nut::v1, thrift::Thrift, GrpcResult};
use tokio::sync::Mutex;
use tonic::{Request, Response};

use super::super::orm::postgresql::Pool as PostgreSqlPool;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Thrift>,
    pub redis: RedisPool,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

#[tonic::async_trait]
impl v1::notification_server::Notification for Service {
    async fn index(&self, _req: Request<v1::Pager>) -> GrpcResult<v1::IndexNotificationResponse> {
        // TODO
        Ok(Response::new(v1::IndexNotificationResponse::default()))
    }
}
