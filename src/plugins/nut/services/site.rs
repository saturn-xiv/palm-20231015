use std::sync::Arc;

use super::super::super::super::{
    crypto::Aes,
    jwt::Jwt,
    orm::{mysql::Pool as MySqlPool, postgresql::Pool as PostgreSqlPool},
};

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub mysql: MySqlPool,
    pub jwt: Arc<Jwt>,
    pub aes: Arc<Aes>,
}

// #[tonic::async_trait]
// impl Site for Service {
//     async fn install(&self, req: Request<SiteInstallRequest>) -> GrpcResult<()> {
//         let ip = req.remote_addr();
//         let req = req.into_inner();
//         debug!("receive {:?} {:?}", ip, req);
//         Ok(Response::new(()))
//     }
// }
