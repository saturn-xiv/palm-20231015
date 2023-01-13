use std::any::type_name;
use std::sync::Arc;

use casbin::{CoreApi, Enforcer, EventData, Watcher as CasbinWatcher};
use lapin::ExchangeKind;
use palm::{nut::v1::CasbinSyncTask, queue::amqp::RabbitMq, Result};
use tokio::sync::Mutex;

pub struct Watcher {
    rabbitmq: Arc<RabbitMq>,
    callback: Box<dyn FnMut() + Send + Sync>,
}

impl Watcher {
    pub async fn new(enforcer: Arc<Mutex<Enforcer>>, rabbitmq: Arc<RabbitMq>) -> Result<Self> {
        let ch = rabbitmq.open().await?;
        RabbitMq::exchange_declare(
            &ch,
            type_name::<CasbinSyncTask>(),
            ExchangeKind::Fanout,
            false,
        )
        .await?;
        Ok(Self {
            rabbitmq,
            callback: Box::new(move || {
                let enforcer = enforcer.clone();
                tokio::spawn(async move {
                    debug!("reload policies");
                    let mut enforcer = enforcer.lock().await;
                    if let Err(e) = enforcer.load_policy().await {
                        error!("{:?}", e);
                    }
                });
            }),
        })
    }
}

impl CasbinWatcher for Watcher {
    fn set_update_callback(&mut self, callback: Box<dyn FnMut() + Send + Sync>) {
        self.callback = callback;
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
