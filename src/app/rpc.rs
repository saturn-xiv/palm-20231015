use std::sync::Arc;

use tokio::sync::Mutex;
use tonic::transport::Server;
use uuid::Uuid;

use super::super::{
    crypto::{Aes, Hmac},
    env::Config,
    jwt::Jwt,
    plugins::{nut, ops},
    Result,
};

pub async fn web(cfg: &Config) -> Result<()> {
    let uid = Uuid::new_v4().to_string();
    let addr = cfg.rpc.web_addr();
    info!("run on http://{addr}");
    let pgsql = cfg.postgresql.open()?;
    let redis = cfg.redis.open()?;
    let aes = Arc::new(Aes::new(&cfg.secrets.0)?);
    let hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = Arc::new(Jwt::new(cfg.secrets.0.clone()));
    let rabbitmq = Arc::new(cfg.rabbitmq.open());
    let enforcer = Arc::new(Mutex::new(cfg.enforcer(uid.clone(), 1 << 3).await?));
    {
        info!("start casbin watcher");
        let enforcer = enforcer.clone();
        let watcher =
            nut::tasks::casbin::Watcher::new(uid, redis::Client::open(cfg.redis.to_string())?);
        tokio::spawn(async move {
            loop {
                if let Err(e) = watcher.listen(&enforcer).await {
                    error!("{:?}", e);
                }
            }
        });
    }
    let search = Arc::new(cfg.opensearch.open()?);

    {
        info!("check opensearch indexes");
        search
            .check::<ops::metrics::models::journal::Item>()
            .await?;
    }
    let nut_attachment = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::attachment_server::AttachmentServer::new(
            nut::services::attachment::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                aes: aes.clone(),
                enforcer: enforcer.clone(),
            },
        ));
    let nut_locale = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::locale_server::LocaleServer::new(
            nut::services::locale::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                enforcer: enforcer.clone(),
            },
        ));
    let nut_setting = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::setting_server::SettingServer::new(
            nut::services::setting::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                aes: aes.clone(),
                enforcer: enforcer.clone(),
            },
        ));

    let nut_user = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::user_server::UserServer::new(
            nut::services::user::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                hmac: hmac.clone(),
                rabbitmq: rabbitmq.clone(),
                enforcer: enforcer.clone(),
            },
        ));
    let nut_rbac = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::rbac_server::RbacServer::new(
            nut::services::rbac::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                enforcer: enforcer.clone(),
            },
        ));

    let nut_site = tonic_web::config()
        .allow_all_origins()
        .allow_credentials(true)
        .enable(nut::v1::site_server::SiteServer::new(
            nut::services::site::Service {
                pgsql,
                jwt,
                aes,
                hmac,
                redis,
                rabbitmq,
                enforcer,
                search,
            },
        ));

    info!("start rpc-web at {}", addr);
    Server::builder()
        .accept_http1(true)
        .add_service(nut_locale)
        .add_service(nut_setting)
        .add_service(nut_user)
        .add_service(nut_rbac)
        .add_service(nut_attachment)
        .add_service(nut_site)
        .serve(addr)
        .await?;
    Ok(())
}

pub async fn tcp(cfg: &Config) -> Result<()> {
    let uid = Uuid::new_v4().to_string();
    let addr = cfg.rpc.tcp_addr();

    let pgsql = cfg.postgresql.open()?;
    let redis = cfg.redis.open()?;
    let aes = Arc::new(Aes::new(&cfg.secrets.0)?);
    let hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = Arc::new(Jwt::new(cfg.secrets.0.clone()));
    let rabbitmq = Arc::new(cfg.rabbitmq.open());
    let enforcer = Arc::new(Mutex::new(cfg.enforcer(uid.clone(), 1 << 3).await?));
    {
        info!("start casbin watcher");
        let enforcer = enforcer.clone();
        let watcher =
            nut::tasks::casbin::Watcher::new(uid, redis::Client::open(cfg.redis.to_string())?);
        tokio::spawn(async move {
            loop {
                if let Err(e) = watcher.listen(&enforcer).await {
                    error!("{:?}", e);
                }
            }
        });
    }
    let search = Arc::new(cfg.opensearch.open()?);

    info!("start rpc-tcp at {}", addr);
    Server::builder()
        .add_service(nut::v1::user_server::UserServer::new(
            nut::services::user::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                hmac: hmac.clone(),
                rabbitmq: rabbitmq.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(nut::v1::rbac_server::RbacServer::new(
            nut::services::rbac::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(nut::v1::locale_server::LocaleServer::new(
            nut::services::locale::Service {
                pgsql: pgsql.clone(),
                jwt: jwt.clone(),
                enforcer: enforcer.clone(),
            },
        ))
        .add_service(nut::v1::site_server::SiteServer::new(
            nut::services::site::Service {
                pgsql,
                jwt,
                aes,
                hmac,
                redis,
                rabbitmq,
                enforcer,
                search,
            },
        ))
        .serve(addr)
        .await?;
    Ok(())
}
