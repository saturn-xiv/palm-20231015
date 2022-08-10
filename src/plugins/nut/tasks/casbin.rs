use std::any::type_name;
use std::ops::DerefMut;

use casbin::{CoreApi, Enforcer, EventData};
use prost::Message as ProstMessage;
use redis::{Client, Commands, ControlFlow, Msg as Message, PubSubCommands};
use tokio::sync::Mutex;

use super::super::super::super::Result;
use super::super::v1;

pub struct Watcher {
    id: String,
    client: Client,
    callback: Box<dyn FnMut() + Send + Sync>,
}

impl Watcher {
    pub fn new(id: String, client: Client) -> Self {
        Self {
            id,
            client,
            callback: Box::new(|| {
                warn!("empty casbin wather callback");
            }),
        }
    }

    pub async fn listen(&self, enforcer: &Mutex<Enforcer>) -> Result<()> {
        let mut con = self.client.get_connection()?;
        let mut con = con.as_pubsub();
        con.subscribe(type_name::<v1::RbacWatcherMessage>())?;

        loop {
            let msg = con.get_message()?;
            let buf: Vec<u8> = msg.get_payload()?;
            let msg = v1::RbacWatcherMessage::decode(&buf[..])?;

            if let Some(v1::rbac_watcher_message::Payload::Sync(v1::rbac_watcher_message::Sync {
                id,
            })) = msg.payload
            {
                if id != self.id {
                    info!("receive reload policy message");

                    let mut enf = enforcer.lock().await;
                    let enf = enf.deref_mut();
                    enf.load_policy().await?;
                }
            } else {
                error!("unknown casbin wather message {:?}", msg);
            }
        }
    }

    pub fn subscribe(&mut self) -> Result<()> {
        let mut con = self.client.get_connection()?;
        con.subscribe(
            type_name::<v1::RbacWatcherMessage>(),
            Box::new(|msg| {
                if let Err(e) = self.consume(&msg) {
                    error!("{:?}", e);
                }
                ControlFlow::Continue
            }),
        )?;
        Ok(())
    }

    fn consume(&mut self, msg: &Message) -> Result<()> {
        let buf: Vec<u8> = msg.get_payload()?;
        let msg = v1::RbacWatcherMessage::decode(&buf[..])?;
        debug!("receive casbin wather message {:?}", msg);
        (self.callback)();
        Ok(())
    }

    fn publish(&self, message: &v1::RbacWatcherMessage) -> Result<()> {
        debug!("public casbin watcher message {:?}", message);
        let mut payload = Vec::new();
        message.encode(&mut payload)?;
        let mut con = self.client.get_connection()?;
        con.publish(type_name::<v1::RbacWatcherMessage>(), payload)?;
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
