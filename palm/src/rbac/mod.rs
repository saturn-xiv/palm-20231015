use std::any::type_name;
use std::sync::Arc;

use casbin::{CoreApi, Enforcer, EventData, Watcher as CasbinWatcher};
use lapin::{Channel, ExchangeKind};
use tokio::sync::Mutex;

use super::{
    queue::amqp::{Handler as QueueHandler, RabbitMq},
    rbac::v1::CasbinSyncTask,
    Result,
};

pub const MODEL: &str = include_str!("rbac_model.conf");

pub struct Watcher {
    rabbitmq: Arc<RabbitMq>,
}

impl Watcher {
    pub async fn new(rabbitmq: Arc<RabbitMq>) -> Result<Self> {
        let ch = rabbitmq.open().await?;

        let exchange = type_name::<CasbinSyncTask>();
        info!("declare rabbitmq exchange {}", exchange);
        RabbitMq::exchange_declare(&ch, exchange, ExchangeKind::Fanout, false).await?;
        Ok(Self { rabbitmq })
    }

    pub async fn consume(&self) -> Result<(Channel, String)> {
        let ch = self.rabbitmq.open().await?;
        let exchange = type_name::<CasbinSyncTask>();
        let queue = {
            let name = RabbitMq::queue_declare(&ch, "", true, true).await?;
            RabbitMq::queue_bind(&ch, &name, exchange, "").await?;
            name
        };
        info!("declare rabbitmq queue {} and bind to {}", queue, exchange);
        Ok((ch, queue))
    }
}

impl CasbinWatcher for Watcher {
    fn set_update_callback(&mut self, _callback: Box<dyn FnMut() + Send + Sync>) {
        error!("unsupport casbin watcher callback");
    }
    fn update(&mut self, event: EventData) {
        debug!("casbin watcher receive event: {}", event);
        let queue = self.rabbitmq.clone();
        tokio::spawn(async move {
            if let Err(e) = queue.publish(&CasbinSyncTask {}).await {
                error!("{:?}", e);
            }
        });
    }
}

pub struct Handler {
    pub enforcer: Arc<Mutex<Enforcer>>,
}

impl QueueHandler for Handler {
    fn handle(&self, id: &str, _content_type: &str, _payload: &[u8]) -> Result<()> {
        debug!("reload casbin policies {}", id);
        let enforcer = self.enforcer.clone();
        tokio::spawn(async move {
            debug!("reload policies");
            let mut enforcer = enforcer.lock().await;
            if let Err(e) = enforcer.load_policy().await {
                error!("{:?}", e);
            }
        });
        Ok(())
    }
}

#[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
pub mod v1 {
    tonic::include_proto!("palm.rbac.v1");
}
