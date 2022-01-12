use std::time::{SystemTime, UNIX_EPOCH};

use amq_protocol_uri::{AMQPAuthority, AMQPUri, AMQPUserInfo};
use futures::StreamExt;
use hyper::StatusCode;
use lapin::{
    message::Delivery,
    options::{BasicAckOptions, BasicConsumeOptions, BasicPublishOptions, QueueDeclareOptions},
    types::FieldTable,
    BasicProperties, Channel, Connection, ConnectionProperties,
};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::super::{HttpError, Result};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Config {
    pub host: String,
    pub port: u16,
    pub user: String,
    pub password: String,
    #[serde(rename = "virtual-host")]
    pub virtual_host: String,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 5672,
            user: "guest".to_string(),
            password: "guest".to_string(),
            virtual_host: "/demo".to_string(),
        }
    }
}

impl Config {
    pub fn open(&self) -> RabbitMq {
        RabbitMq {
            uri: AMQPUri {
                vhost: self.virtual_host.clone(),
                authority: AMQPAuthority {
                    port: self.port,
                    host: self.host.clone(),
                    userinfo: AMQPUserInfo {
                        username: self.user.clone(),
                        password: self.password.clone(),
                    },
                },
                ..Default::default()
            },
            conn: ConnectionProperties::default(),
        }
    }
}

#[derive(Clone)]
pub struct RabbitMq {
    uri: AMQPUri,
    conn: ConnectionProperties,
}

impl RabbitMq {
    async fn open(&self, queue: &str) -> Result<Channel> {
        let con = Connection::connect_uri(self.uri.clone(), self.conn.clone()).await?;
        let ch = con.create_channel().await?;
        {
            ch.queue_declare(
                queue,
                QueueDeclareOptions {
                    exclusive: false,
                    auto_delete: false,
                    durable: true,
                    ..Default::default()
                },
                FieldTable::default(),
            )
            .await?;
        }
        Ok(ch)
    }
}

impl RabbitMq {
    pub async fn publish<P: Serialize>(
        &self,
        queue: &str,
        content_type: &str,
        payload: &P,
    ) -> Result<()> {
        let payload = flexbuffers::to_vec(payload)?;
        let ch = self.open(queue).await?;
        let id = Uuid::new_v4().to_string();
        info!("publish task {}://{}", queue, id);
        ch.basic_publish(
            "",
            queue,
            BasicPublishOptions::default(),
            &payload,
            BasicProperties::default()
                .with_message_id(id.into())
                .with_content_type(content_type.into())
                .with_timestamp(SystemTime::now().duration_since(UNIX_EPOCH)?.as_secs()),
        )
        .await?
        .await?;

        Ok(())
    }

    pub async fn consume<H: Handler>(
        &self,
        consumer: &str,
        queue: &str,
        handler: &H,
    ) -> Result<()> {
        let ch = self.open(queue).await?;
        let mut cm = ch
            .basic_consume(
                queue,
                consumer,
                BasicConsumeOptions::default(),
                FieldTable::default(),
            )
            .await?;
        info!(
            "consuming from channel {}@{}/{}...",
            consumer,
            queue,
            ch.id()
        );
        while let Some(delivery) = cm.next().await {
            handle_message(delivery?, handler).await?;
        }
        Ok(())
    }
}

pub trait Handler {
    fn handle(&self, id: &str, content_type: &str, payload: &[u8]) -> Result<()>;
}

async fn handle_message<H: Handler>(delivery: Delivery, hnd: &H) -> Result<()> {
    debug!("received message: {:?}", delivery);
    let props = &delivery.properties;
    if let Some(content_type) = props.content_type() {
        if let Some(id) = props.message_id() {
            let id = id.to_string();
            let content_type = content_type.to_string();
            info!("got message: {}[{}]", id, content_type);
            hnd.handle(&id, &content_type, &delivery.data)?;
            delivery.ack(BasicAckOptions::default()).await?;
            return Ok(());
        }
    }

    Err(Box::new(HttpError(
        StatusCode::BAD_REQUEST,
        Some("bad message format".to_string()),
    )))
}
