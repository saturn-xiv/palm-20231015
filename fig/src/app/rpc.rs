use std::sync::Arc;
use std::time::Duration as StdDuration;

use casbin::CoreApi;
use nix::unistd::getpid;
use palm::{
    aws::s3::Config as S3,
    nut::v1 as nut_v1,
    queue::amqp::RabbitMq,
    rbac::{v1 as rbac_v1, Handler as RbacHandler, Watcher as RbacWatcher},
    Result,
};
use tokio::sync::Mutex;
use tonic::transport::Server;

use super::super::env::Config;

pub async fn launch(cfg: &Config) -> Result<()> {
    let addr = cfg.rpc.addr();

    let rabbitmq = Arc::new(cfg.rabbitmq.open());
    let loquat = Arc::new(cfg.loquat.clone());
    let db = cfg.postgresql.open()?;
    let cache = cfg.redis.open()?;
    let orchid = Arc::new(cfg.orchid.clone());
    let s3 = Arc::new(S3::from(cfg.minio.clone()));
    let opensearch = Arc::new(cfg.opensearch.open()?);

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
        .add_service(nut_v1::user_server::UserServer::new(
            nut::services::user::Service {
                jwt: loquat.clone(),
                aes: loquat.clone(),
                hmac: loquat.clone(),
                queue: rabbitmq.clone(),
                db: db.clone(),
                cache: cache.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(nut_v1::wechat_server::WechatServer::new(
            nut::services::wechat::Service {
                jwt: loquat.clone(),
                hmac: loquat.clone(),
                db: db.clone(),
                cache: cache.clone(),
                enforcer: enforcer.clone(),
                orchid: orchid.clone(),
            },
        ))
        .add_service(nut_v1::google_server::GoogleServer::new(
            nut::services::google::Service {
                jwt: loquat.clone(),
                aes: loquat.clone(),
                db: db.clone(),
                cache: cache.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(nut_v1::attachment_server::AttachmentServer::new(
            nut::services::attachment::Service {
                jwt: loquat.clone(),
                db: db.clone(),
                cache: cache.clone(),
                enforcer: enforcer.clone(),
                s3: s3.clone(),
            },
        ))
        .add_service(nut_v1::leave_word_server::LeaveWordServer::new(
            nut::services::leave_word::Service {
                jwt: loquat.clone(),
                db: db.clone(),
                cache: cache.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(nut_v1::locale_server::LocaleServer::new(
            nut::services::locale::Service {
                jwt: loquat.clone(),
                db: db.clone(),
                cache: cache.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(nut_v1::site_server::SiteServer::new(
            nut::services::site::Service {
                jwt: loquat.clone(),
                aes: loquat.clone(),
                hmac: loquat.clone(),
                db: db.clone(),
                cache: cache.clone(),
                enforcer: enforcer.clone(),
                queue: rabbitmq.clone(),
                search: opensearch.clone(),
            },
        ))
        .add_service(rbac_v1::policy_server::PolicyServer::new(
            nut::services::policy::Service {
                jwt: loquat.clone(),
                db: db.clone(),
                cache: cache.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(nut_v1::health_server::HealthServer::new(
            nut::services::health::Service {},
        ))
        .serve(addr)
        .await?;
    Ok(())
}
