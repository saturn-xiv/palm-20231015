pub mod amqp;
pub mod mqtt;
pub mod zero;

use std::fmt::Debug;

use serde::{de::DeserializeOwned, Serialize};

use super::Result;

pub const CONTENT_TYPE: &str = "flat";

pub trait Handler: Sync + Send {
    type Task: DeserializeOwned + Debug;
    fn handle(&self, topic: &str, payload: &Self::Task) -> Result<()>;
}

pub trait Publisher: Sync + Send {
    fn send(&self, topic: &str, payload: &[u8]) -> Result<()>;
}
pub trait Subscriber: Sync + Send {
    fn consume<H>(&self, topic: &str, hnd: &H) -> Result<()>
    where
        H: Fn(&str, &[u8]) -> Result<()>;
}

pub fn publish<Q: Publisher, T: Serialize + Debug>(
    queue: &Q,
    topic: &str,
    payload: &T,
) -> Result<()> {
    info!("publish message into {}", topic);
    debug!("{:?}", payload);
    let payload = flexbuffers::to_vec(payload)?;
    queue.send(topic, &payload)
}

pub fn consume<Q, T, H>(queue: &Q, topic: &str, handler: &H) -> Result<()>
where
    Q: Subscriber,
    T: DeserializeOwned + Debug,
    H: Handler<Task = T>,
{
    queue.consume(topic, &move |topic, payload| {
        // let (topic, id, payload) = queue.receive()?;
        info!("receive message from {}", topic);
        let payload = flexbuffers::from_slice(payload)?;
        debug!("{:?}", payload);
        handler.handle(topic, &payload)?;
        info!("done {}", topic);
        Ok(())
    })
}
