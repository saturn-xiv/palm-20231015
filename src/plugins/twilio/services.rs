use std::ops::Deref;
use std::sync::Arc;

use tonic::{Request, Response};

use super::super::super::{jwt::Jwt, orm::Pool as DbPool, GrpcResult};
use super::{
    models::log::{Dao as LogDao, Item as Log},
    protocols::Config,
    v1::{logs_response, twilio_server::Twilio, LogsResponse, TextMessage},
};

impl From<Log> for logs_response::Item {
    fn from(it: Log) -> Self {
        Self {
            id: it.id,
            from: it.from.clone(),
            to: it.to.clone(),
            body: it.body.clone(),
            created_at: Some(to_timestamp!(it.created_at)),
        }
    }
}

pub struct Service {
    pub jwt: Arc<Jwt>,
    pub twilio: Arc<Config>,
    pub db: DbPool,
}

#[tonic::async_trait]
impl Twilio for Service {
    async fn send(&self, _req: Request<TextMessage>) -> GrpcResult<()> {
        // FIXME
        // let user = current_user!(self, &req);
        // let db = try_grpc!(self.db.get())?;
        // let db = db.deref();
        // try_grpc!(user.is_administrator(db))?;
        Ok(Response::new(()))
    }
    async fn logs(&self, req: Request<prost_types::Duration>) -> GrpcResult<LogsResponse> {
        // FIXME
        // let user = current_user!(self, &req);
        let db = try_grpc!(self.db.get())?;
        let db = db.deref();
        // try_grpc!(user.is_administrator(db))?;
        let _req = req.into_inner();
        let _total = try_grpc!(LogDao::count(db))?;
        Ok(Response::new(LogsResponse::default()))
    }
}
