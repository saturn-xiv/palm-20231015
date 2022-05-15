use tonic::{Request, Response};

use super::super::super::super::{
    orm::{mysql::Pool as MySqlPool, postgresql::Pool as PostgreSqlPool},
    GrpcResult,
};
use super::super::v1;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub mysql: MySqlPool,
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
