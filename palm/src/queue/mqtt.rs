use std::fmt;
use std::thread;
use std::time::Duration;

use nix::unistd::Pid;
use paho_mqtt::{
    properties, Client, ConnectOptionsBuilder, CreateOptionsBuilder, MessageBuilder, PropertyCode,
    MQTT_VERSION_5,
};
use serde::{Deserialize, Serialize};

use super::super::Result;
use super::CONTENT_TYPE;

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

impl super::Publisher for Config {
    fn send(&self, topic: &str, payload: &[u8]) -> Result<()> {
        self.open(&|cli| -> Result<()> {
            let msg = MessageBuilder::new()
                .topic(topic)
                .payload(payload)
                .properties(properties![
                    PropertyCode::ContentType => CONTENT_TYPE.to_string(),
                ])
                .qos(Self::QOS)
                .finalize();

            cli.set_timeout(Duration::from_secs(5));
            {
                let rsp = cli.connect(
                    ConnectOptionsBuilder::new()
                        .mqtt_version(MQTT_VERSION_5)
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
        })?;
        Ok(())
    }
}

impl super::Subscriber for Config {
    fn consume<H>(&self, topic: &str, hnd: &H) -> Result<()>
    where
        H: Fn(&str, &[u8]) -> Result<()>,
    {
        self.open(&|cli| -> Result<()> {
            let rx = cli.start_consuming();
            {
                let rsp = cli.connect(
                    ConnectOptionsBuilder::new()
                        .mqtt_version(MQTT_VERSION_5)
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
                    if let Some(content_type) =
                        msg.properties().get_string(PropertyCode::ContentType)
                    {
                        info!(
                            "receive message topic: {}, content-type: {}",
                            topic, content_type
                        );
                        hnd(topic, payload)?;
                    }
                }
                if !cli.is_connected() {
                    thread::sleep(Duration::from_secs(5));
                    cli.reconnect()?;
                }
            }

            Ok(())
        })?;
        Ok(())
    }
}

impl Config {
    pub const LAST_WORD_TOPIC: &'static str = "lwt";
    pub const QOS: i32 = 2;
    fn open<F>(&self, f: &F) -> Result<()>
    where
        F: Fn(&mut Client) -> Result<()>,
    {
        let name = self.to_string();
        let mut cli = Client::new(
            CreateOptionsBuilder::new()
                .mqtt_version(MQTT_VERSION_5)
                .server_uri(format!("{}:{}", self.host, self.port))
                .client_id(&name)
                .finalize(),
        )?;

        f(&mut cli)?;
        cli.disconnect(None)?;
        Ok(())
    }
}
