use std::sync::Arc;
use std::time::Duration as StdDuration;

use casbin::CoreApi;
use nix::unistd::getpid;
use palm::{
    queue::amqp::RabbitMq,
    rbac::{Handler as RbacHandler, Watcher as RbacWatcher},
    Result,
};
use tokio::sync::Mutex;
use tonic::transport::Server;

use super::super::env::Config;

pub async fn launch(cfg: &Config) -> Result<()> {
    let addr = cfg.rpc.addr();

    let rabbitmq = Arc::new(cfg.rabbitmq.open());

    let enforcer = Arc::new(Mutex::new(cfg.postgresql.casbin().await?));

    {
        let watcher = RbacWatcher::new(rabbitmq.clone()).await?;
        {
            let name = format!("{}-casbin-rpc-{}", palm::NAME, getpid());
            let (ch, queue) = watcher.consume().await?;
            let handler = RbacHandler {
                enforcer: enforcer.clone(),
            };
            tokio::task::spawn(async move {
                loop {
                    if let Err(e) = RabbitMq::consume(&ch, &name, &queue, &handler).await {
                        error!("{:?}", e);
                    }
                    tokio::time::sleep(StdDuration::from_secs(5)).await;
                }
            });
        }
        {
            let mut enf = enforcer.lock().await;
            enf.set_watcher(Box::new(watcher));
        }
    }

    info!("start gRPC at {}", addr);
    Server::builder()
        .add_service(nut::v1::health_server::HealthServer::new(
            nut::services::health::Service {},
        ))
        .serve(addr)
        .await?;
    Ok(())
}
