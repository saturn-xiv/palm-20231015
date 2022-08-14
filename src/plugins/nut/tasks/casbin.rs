use std::ops::DerefMut;
use std::sync::Arc;

use casbin::{CoreApi, Enforcer, EventData};
use prost::Message as ProstMessage;
use tokio::sync::Mutex;

use super::super::super::super::{
    queue::amqp::{Handler as QueueHandler, RabbitMq},
    Error, Result,
};
use super::super::v1;

pub struct Handler {
    pub id: String,
    pub enforcer: Arc<Mutex<Enforcer>>,
}

impl QueueHandler for Handler {
    fn handle(&self, id: &str, content_type: &str, payload: &[u8]) -> Result<()> {
        info!("receive message {} {}", id, content_type);
        let task = v1::RbacWatcherMessage::decode(payload)?;
        if let Some(v1::rbac_watcher_message::Payload::Sync(v1::rbac_watcher_message::Sync {
            id,
        })) = task.payload
        {
            if id != self.id {
                info!("receive reload policy message");
                tokio::task::block_in_place(move || {
                    tokio::runtime::Handle::current().block_on(async move {
                        let mut enf = self.enforcer.lock().await;
                        let enf = enf.deref_mut();
                        enf.load_policy().await?;
                        Ok::<(), Error>(())
                    })
                })?;
            }
        } else {
            error!("unknown casbin wather message {:?}", task);
        }
        Ok(())
    }
}

pub struct Watcher {
    pub id: String,
    pub queue: RabbitMq,
    pub callback: Box<dyn FnMut() + Send + Sync>,
}

impl Watcher {
    pub fn new(id: String, queue: RabbitMq) -> Self {
        Self {
            id,
            queue,
            callback: Box::new(|| {
                warn!("empty casbin wather callback");
            }),
        }
    }
    fn publish(&self, message: &v1::RbacWatcherMessage) -> Result<()> {
        debug!("publish casbin watcher message {:?}", message);
        tokio::task::block_in_place(move || {
            tokio::runtime::Handle::current().block_on(async move {
                self.queue.publish(message).await?;
                Ok::<(), Error>(())
            })
        })?;

        Ok(())
    }
}

impl casbin::Watcher for Watcher {
    fn set_update_callback(&mut self, callback: Box<dyn FnMut() + Send + Sync>) {
        self.callback = callback;
    }
    fn update(&mut self, data: EventData) {
        info!("receive casbin event {}", data);
        if let Err(e) = self.publish(&v1::RbacWatcherMessage {
            payload: Some(v1::rbac_watcher_message::Payload::Sync(
                v1::rbac_watcher_message::Sync {
                    id: self.id.clone(),
                },
            )),
        }) {
            error!("{:?}", e);
        }
    }
}
