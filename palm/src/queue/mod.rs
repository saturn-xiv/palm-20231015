pub mod amqp;
pub mod mqtt;
pub mod zero;

// use std::fmt::{self, Debug};
// use std::io::{Error as IoError, ErrorKind as IoErrorKind};
// use std::result::Result as StdResult;
// use std::str::FromStr;

// use mime::Mime;
// use serde::{de::DeserializeOwned, Serialize};

// #[async_trait]
// pub trait Publisher: Sync + Send {
//     async fn send(&self, topic: &str, content_tyoe: &ContentType, payload: &[u8]) -> Result<()>;
// }

// #[async_trait]
// pub trait Subscriber: Sync + Send {
//     async fn consume<H>(&self, topic: &str, hnd: &H) -> Result<()>
//     where
//         H: Fn(&str, &[u8]) -> Result<()> + Sync;
// }

// pub async fn publish<Q: Publisher, T: Serialize + Debug>(
//     queue: &Q,
//     topic: &str,
//     payload: &T,
// ) -> Result<()> {
//     info!("publish message into {}", topic);
//     debug!("{:?}", payload);
//     let payload = flexbuffers::to_vec(payload)?;
//     queue.send(topic, &ContentType::Flatbuffer, &payload).await
// }

// pub async fn consume<Q, T, H>(queue: &Q, topic: &str, handler: &H) -> Result<()>
// where
//     Q: Subscriber,
//     T: DeserializeOwned + Debug,
//     H: Handler<Task = T>,
// {
//     queue
//         .consume(topic, &move |topic, payload| {
//             info!("receive message from {}", topic);
//             let payload = flexbuffers::from_slice(payload)?;
//             debug!("{:?}", payload);
//             handler.handle(topic, &payload).await?;
//             info!("done {}", topic);
//             Ok(())
//         })
//         .await
// }
