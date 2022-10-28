use std::any::type_name;
use std::ops::Deref;
use std::sync::Arc;

use auth::{
    models::user::{Action, Token},
    orm::postgresql::Pool as PostgreSqlPool,
};
use palm::{
    cache::redis::Pool as RedisPool, jwt::Jwt, ops::metrics::v1, search::OpenSearch, GrpcResult,
};
use tonic::{Request, Response, Status};

use auth::services::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub redis: RedisPool,
    pub opensearch: Arc<OpenSearch>,
}

#[tonic::async_trait]
impl v1::report_server::Report for Service {
    async fn heartbeat(&self, req: Request<v1::ReportHeartbeatRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let _node = Agent::detect(&ss, jwt)
            .ok_or_else(|| Status::permission_denied(type_name::<dyn Agent>()))?;
        // TODO

        Ok(Response::new(()))
    }
    async fn journal(&self, req: Request<v1::ReportJournalRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let _node = Agent::detect(&ss, jwt)
            .ok_or_else(|| Status::permission_denied(type_name::<dyn Agent>()))?;
        // TODO
        Ok(Response::new(()))
    }
    async fn nginx(&self, req: Request<v1::ReportNginxRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let _node = Agent::detect(&ss, jwt)
            .ok_or_else(|| Status::permission_denied(type_name::<dyn Agent>()))?;
        // TODO
        Ok(Response::new(()))
    }
}

pub trait Agent {
    fn detect(&self, jwt: &Jwt) -> Option<String>;
}

impl Agent for Session {
    fn detect(&self, jwt: &Jwt) -> Option<String> {
        if let Some(ref token) = self.token {
            if let Ok(token) = jwt.parse::<Token>(token) {
                let token = token.claims;
                if let Action::Other(ref typ) = token.act {
                    if typ == type_name::<dyn Agent>() {
                        return Some(token.aud);
                    }
                }
            }
        }
        None
    }
}
