use std::any::type_name;
use std::sync::Arc;

use casbin::{CoreApi, Enforcer, EventData, Watcher as CasbinWatcher};
use lapin::ExchangeKind;
use tokio::sync::Mutex;

use super::{
    nut::v1::CasbinSyncTask,
    queue::amqp::{Handler as QueueHandler, RabbitMq},
    Result,
};

pub const MODEL: &str = include_str!("rbac_model.conf");

pub struct Watcher {
    rabbitmq: Arc<RabbitMq>,
    pub queue: String,
}

impl Watcher {
    pub async fn new(rabbitmq: Arc<RabbitMq>) -> Result<Self> {
        let ch = rabbitmq.open().await?;

        let exchange = type_name::<CasbinSyncTask>();
        info!("declare rabbitmq exchange {}", exchange);
        RabbitMq::exchange_declare(&ch, exchange, ExchangeKind::Fanout, false).await?;
        let queue = {
            let name = RabbitMq::queue_declare(&ch, "", true, true).await?;
            RabbitMq::queue_bind(&ch, &name, exchange, "").await?;
            name
        };
        info!("declare rabbitmq queue {} and bind to {}", queue, exchange);
        Ok(Self { rabbitmq, queue })
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
