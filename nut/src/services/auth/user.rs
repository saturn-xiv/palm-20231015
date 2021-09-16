use std::sync::Arc;

use tonic::{Request, Response};

use super::super::super::{
    crypto::{Aes, Hmac},
    jwt::Jwt,
    orm::{Connection as Db, Pool as DbPool},
    queue::amqp::RabbitMq,
    GrpcResult, Result,
};
use super::super::Session;
use super::v1;

pub struct Service {
    pub db: DbPool,
    pub jwt: Arc<Jwt>,
    pub aes: Arc<Aes>,
    pub hmac: Arc<Hmac>,
    pub queue: Arc<RabbitMq>,
}

#[tonic::async_trait]
impl v1::user_server::User for Service {
    async fn sign_in(&self, req: Request<v1::SignInRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let req = req.into_inner();
        let db = try_grpc!(self.db.get())?;
        try_grpc!(req.execute(&ss, &db, &self.hmac))?;
        Ok(Response::new(()))
    }
    async fn sign_up(&self, req: Request<v1::SignUpRequest>) -> GrpcResult<()> {
        let _req = req.into_inner();
        Ok(Response::new(()))
    }
    async fn sign_out(&self, _req: Request<()>) -> GrpcResult<()> {
        Ok(Response::new(()))
    }
}

impl v1::SignInRequest {
    pub fn execute(&self, _ss: &Session, _db: &Db, _hmax: &Hmac) -> Result<()> {
        Ok(())
    }
}
