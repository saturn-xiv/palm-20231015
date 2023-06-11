use std::fmt;
use std::thread;
use std::time::Duration;

use async_trait::async_trait;
use nix::unistd::Pid;
use paho_mqtt::{
    properties, Client, ConnectOptionsBuilder, CreateOptionsBuilder, MessageBuilder, PropertyCode,
    MQTT_VERSION_5,
};
use serde::{Deserialize, Serialize};

use super::super::Result;

#[async_trait]
pub trait Handler: Sync + Send {
    async fn handle(&self, content_type: &str, payload: &[u8]) -> Result<()>;
}

// mosquitto_passwd -c <password file> <username>
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Config {
    pub host: String,
    pub port: u16,
    pub username: String,
    pub password: String,
}

impl fmt::Display for Config {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        write!(
            fmt,
            "{}@{}:{}/{}",
            self.username,
            self.host,
            self.port,
            Pid::this()
        )
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct WillMessage {
    pub id: String,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 1883,
            username: "guest".to_string(),
            password: "guest".to_string(),
        }
    }
}

impl Config {
    pub fn send(&self, topic: &str, content_type: &str, payload: &[u8]) -> Result<()> {
        let mut cli = self.open()?;
        let msg = MessageBuilder::new()
            .topic(topic)
            .payload(payload)
            .properties(properties![
                PropertyCode::ContentType => content_type.to_string(),
            ])
            .qos(Self::QOS)
            .finalize();

        cli.set_timeout(Duration::from_secs(5));
        {
            let rsp = cli.connect(
                ConnectOptionsBuilder::new_ws_v5()
                    .user_name(&self.username)
                    .password(&self.password)
                    .finalize(),
            )?;
            if let Some(it) = rsp.connect_response() {
                info!(
                    "publisher connected to: '{}' with MQTT version {}",
                    it.server_uri, it.mqtt_version
                );
            }
        }
        cli.publish(msg)?;
        Ok(())
    }

    pub async fn consume<H>(&self, topic: &str, handler: &H) -> Result<()>
    where
        H: Handler,
    {
        let cli = self.open()?;
        let rx = cli.start_consuming();
        {
            let rsp = cli.connect(
                ConnectOptionsBuilder::new_ws_v5()
                    .user_name(&self.username)
                    .password(&self.password)
                    .clean_session(false)
                    .will_message(
                        MessageBuilder::new()
                            .topic(Self::LAST_WORD_TOPIC)
                            .payload(flexbuffers::to_vec(&WillMessage {
                                id: self.to_string(),
                            })?)
                            .finalize(),
                    )
                    .finalize(),
            )?;
            if let Some(rsp) = rsp.connect_response() {
                info!(
                    "consumer connected to: '{}' with MQTT version {}",
                    rsp.server_uri, rsp.mqtt_version
                );
                if !rsp.session_present {
                    cli.subscribe_with_options(topic, Self::QOS, None, None)?;
                }
            }
        }
        for msg in rx.iter() {
            if let Some(msg) = msg {
                let topic = msg.topic();
                let payload = msg.payload();
                if let Some(ref content_type) =
                    msg.properties().get_string(PropertyCode::ContentType)
                {
                    info!(
                        "receive message topic: {}, content-type: {}",
                        topic, content_type
                    );
                    handler.handle(content_type, payload).await?;
                }
            }
            if !cli.is_connected() {
                thread::sleep(Duration::from_secs(5));
                cli.reconnect()?;
            }
        }

        Ok(())
    }
}

impl Config {
    pub const LAST_WORD_TOPIC: &'static str = "lwt";
    pub const QOS: i32 = 2;
    fn open(&self) -> Result<Client> {
        let name = self.to_string();
        let cli = Client::new(
            CreateOptionsBuilder::new()
                .mqtt_version(MQTT_VERSION_5)
                .server_uri(format!("{}:{}", self.host, self.port))
                .client_id(name)
                .finalize(),
        )?;

        Ok(cli)
    }
}
