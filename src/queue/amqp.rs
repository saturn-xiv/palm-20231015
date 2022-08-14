use std::any::type_name;
use std::time::{SystemTime, UNIX_EPOCH};

use amq_protocol_uri::{AMQPAuthority, AMQPUri, AMQPUserInfo};
use futures::StreamExt;
use hyper::StatusCode;
use lapin::options::{ExchangeDeclareOptions, QueueBindOptions};
use lapin::ExchangeKind;
use lapin::{
    message::Delivery,
    options::{BasicAckOptions, BasicConsumeOptions, BasicPublishOptions, QueueDeclareOptions},
    types::FieldTable,
    BasicProperties, Channel, Connection, ConnectionProperties,
};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::super::{HttpError, Result, NAME};

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
    async fn open<T>(&self) -> Result<(Channel, String)> {
        let queue = type_name::<T>();
        let con = Connection::connect_uri(self.uri.clone(), self.conn.clone()).await?;
        let ch = con.create_channel().await?;

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

        Ok((ch, queue.to_string()))
    }
}

impl RabbitMq {
    pub async fn publish<T: prost::Message>(&self, payload: &T) -> Result<()> {
        self.send(ExchangeKind::Fanout, payload).await
    }
    pub async fn produce<T: prost::Message>(&self, payload: &T) -> Result<()> {
        self.send(ExchangeKind::Direct, payload).await
    }
    async fn send<T: prost::Message>(
        &self,
        exchange_type: ExchangeKind,
        payload: &T,
    ) -> Result<()> {
        let mut buf = Vec::new();
        payload.encode(&mut buf)?;
        let (ch, queue) = self.open::<T>().await?;
        let exchange = format!("{}.{:?}", NAME, exchange_type);
        ch.exchange_declare(
            &exchange,
            exchange_type,
            ExchangeDeclareOptions {
                durable: true,
                ..Default::default()
            },
            FieldTable::default(),
        )
        .await?;
        ch.queue_bind(
            &queue,
            &exchange,
            "",
            QueueBindOptions::default(),
            FieldTable::default(),
        )
        .await?;
        let id = Uuid::new_v4().to_string();
        info!("publish task {}://{}", queue, id);

        ch.basic_publish(
            &exchange,
            &queue,
            BasicPublishOptions::default(),
            &buf,
            BasicProperties::default()
                .with_message_id(id.into())
                .with_content_type("protobuf".into())
                .with_timestamp(SystemTime::now().duration_since(UNIX_EPOCH)?.as_secs()),
        )
        .await?
        .await?;

        Ok(())
    }

    pub async fn consume<T, H: Handler>(&self, consumer: &str, handler: &H) -> Result<()> {
        let (ch, queue) = self.open::<T>().await?;
        let mut cm = ch
            .basic_consume(
                &queue,
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
