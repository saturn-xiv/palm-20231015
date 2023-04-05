use std::sync::Arc;
use std::time::Duration as StdDuration;

use casbin::CoreApi;
use nix::unistd::getpid;
use palm::{
    aws::s3::Config as S3,
    queue::amqp::RabbitMq,
    rbac::{Handler as RbacHandler, Watcher as RbacWatcher},
    Result,
};
use tokio::sync::Mutex;
use tonic::transport::Server;

use super::super::env::Config;

pub async fn launch(cfg: &Config) -> Result<()> {
    let addr = cfg.rpc.addr();

    let pgsql = cfg.postgresql.open()?;
    let redis = cfg.redis.open()?;
    let aes = Arc::new(cfg.loquat.clone());
    let hmac = Arc::new(cfg.loquat.clone());
    let orchid = Arc::new(cfg.orchid.clone());
    let s3 = Arc::new(S3::from(cfg.minio.clone()));
    let jwt = Arc::new(cfg.loquat.clone());
    let rabbitmq = Arc::new(cfg.rabbitmq.open());
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
        .add_service(palm::rbac::v1::policy_server::PolicyServer::new(
            nut::services::policy::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(palm::nut::v1::attachment_server::AttachmentServer::new(
            nut::services::attachment::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
                enforcer: enforcer.clone(),
                s3,
            },
        ))
        .add_service(palm::nut::v1::locale_server::LocaleServer::new(
            nut::services::locale::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(palm::nut::v1::user_server::UserServer::new(
            nut::services::user::Service {
                aes: aes.clone(),
                pgsql: pgsql.clone(),
                redis: redis.clone(),
                orchid: orchid.clone(),
                jwt: jwt.clone(),
                hmac: hmac.clone(),
                rabbitmq: rabbitmq.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(palm::nut::v1::wechat_server::WechatServer::new(
            nut::services::wechat::Service {
                aes: aes.clone(),
                pgsql: pgsql.clone(),
                redis: redis.clone(),
                orchid: orchid.clone(),
                jwt: jwt.clone(),
                hmac: hmac.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(palm::nut::v1::google_server::GoogleServer::new(
            nut::services::google::Service {
                aes: aes.clone(),
                pgsql: pgsql.clone(),
                redis: redis.clone(),
                jwt: jwt.clone(),
                hmac: hmac.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(palm::nut::v1::tag_server::TagServer::new(
            nut::services::tag::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(palm::nut::v1::category_server::CategoryServer::new(
            nut::services::category::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(palm::nut::v1::shorter_link_server::ShorterLinkServer::new(
            nut::services::shorter_link::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(palm::nut::v1::leave_word_server::LeaveWordServer::new(
            nut::services::leave_word::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(palm::nut::v1::notification_server::NotificationServer::new(
            nut::services::notification::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                redis: redis.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(palm::nut::v1::site_server::SiteServer::new(
            nut::services::site::Service {
                enforcer,
                pgsql,
                jwt,
                aes,
                hmac,
                redis,
                rabbitmq,
                opensearch,
                orchid,
            },
        ))
        .add_service(palm::nut::v1::health_server::HealthServer::new(
            nut::services::health::Service {},
        ))
        .serve(addr)
        .await?;
    Ok(())
}
