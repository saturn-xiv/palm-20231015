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
            virtual_host: "demo".to_string(),
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
    pub async fn queue_declare(
        ch: &Channel,
        name: &str,
        exclusive: bool,
        temporary: bool,
    ) -> Result<()> {
        ch.queue_declare(
            name,
            QueueDeclareOptions {
                exclusive,
                auto_delete: temporary,
                durable: !temporary,
                ..Default::default()
            },
            FieldTable::default(),
        )
        .await?;
        Ok(())
    }
    pub async fn exchange_declare(
        ch: &Channel,
        name: &str,
        kind: ExchangeKind,
        temporary: bool,
    ) -> Result<()> {
        ch.exchange_declare(
            name,
            kind,
            ExchangeDeclareOptions {
                auto_delete: temporary,
                durable: !temporary,
                ..Default::default()
            },
            FieldTable::default(),
        )
        .await?;
        Ok(())
    }
    pub async fn queue_bind(
        ch: &Channel,
        name: &str,
        exchange: &str,
        routing_key: &str,
    ) -> Result<()> {
        ch.queue_bind(
            name,
            exchange,
            routing_key,
            QueueBindOptions::default(),
            FieldTable::default(),
        )
        .await?;
        Ok(())
    }
}

impl RabbitMq {
    pub async fn send<T: prost::Message>(
        &self,
        exchange: &str,
        routing_key: &str,
        payload: &T,
    ) -> Result<()> {
        let mut buf = Vec::new();
        payload.encode(&mut buf)?;
        let ch = self.open().await?;

        let id = Uuid::new_v4().to_string();
        info!("publish task to {}://{}/{}", exchange, routing_key, id);

        ch.basic_publish(
            exchange,
            routing_key,
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

    pub async fn open(&self) -> Result<Channel> {
        let con = Connection::connect_uri(self.uri.clone(), self.conn.clone()).await?;
        let ch = con.create_channel().await?;
        Ok(ch)
    }

    pub async fn consume<H: Handler>(
        ch: &Channel,
        consumer: &str,
        queue: &str,
        handler: &H,
    ) -> Result<()> {
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
