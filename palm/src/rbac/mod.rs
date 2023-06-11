use std::any::type_name;
use std::fmt;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::num::ParseIntError;
use std::ops::Deref;
use std::result::Result as StdResult;
use std::str::FromStr;
use std::sync::Arc;

use async_trait::async_trait;
use casbin::{CoreApi, Enforcer, EventData, Watcher as CasbinWatcher};
use lapin::{Channel, ExchangeKind};
use serde::{Deserialize, Serialize};
use tokio::sync::Mutex;

use super::{
    queue::amqp::{Flatbuffer, Handler as QueueHandler, RabbitMq},
    Result,
};

pub const MODEL: &str = include_str!("rbac_with_resource_roles_model.conf");

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct SyncTask;

pub struct Watcher {
    rabbitmq: Arc<RabbitMq>,
}

impl Watcher {
    pub async fn new(rabbitmq: Arc<RabbitMq>) -> Result<Self> {
        let ch = rabbitmq.open().await?;

        let exchange = type_name::<SyncTask>();
        info!("declare rabbitmq exchange {}", exchange);
        RabbitMq::exchange_declare(&ch, exchange, ExchangeKind::Fanout, false).await?;
        Ok(Self { rabbitmq })
    }

    pub async fn consume(&self) -> Result<(Channel, String)> {
        let ch = self.rabbitmq.open().await?;
        let exchange = type_name::<SyncTask>();
        let queue = {
            let name = RabbitMq::queue_declare(&ch, "", true, true).await?;
            RabbitMq::queue_bind(&ch, &name, exchange, "").await?;
            name
        };
        info!("declare rabbitmq queue {} and bind to {}", queue, exchange);
        Ok((ch, queue))
    }
}

impl CasbinWatcher for Watcher {
    fn set_update_callback(&mut self, _callback: Box<dyn FnMut() + Send + Sync>) {
        error!("unsupport casbin watcher callback");
    }
    fn update(&mut self, event: EventData) {
        debug!("casbin watcher receive event: {}", event);
        let queue = self.rabbitmq.clone();
        tokio::spawn(async move {
            let queue = queue.deref();
            if let Err(e) = Flatbuffer::publish(queue, &SyncTask).await {
                error!("{:?}", e);
            }
        });
    }
}

pub struct Handler {
    pub enforcer: Arc<Mutex<Enforcer>>,
}

#[async_trait]
impl QueueHandler for Handler {
    async fn handle(&self, id: &str, _content_type: &str, _payload: &[u8]) -> Result<()> {
        debug!("reload casbin policies message {}", id);
        let mut enforcer = self.enforcer.lock().await;
        enforcer.load_policy().await?;
        Ok(())
    }
}

pub trait ToSubject {
    fn to_subject(&self) -> String;
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum Role {
    Administrator,
    Root,
    By(String),
}

impl Role {
    pub const ADMINISTRATOR: &str = "administrator";
    pub const ROOT: &str = "root";
}

impl ToSubject for Role {
    fn to_subject(&self) -> String {
        format!("{}://{}", type_name::<Self>(), self)
    }
}

impl fmt::Display for Role {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{}",
            match *self {
                Self::Administrator => Self::ADMINISTRATOR.to_string(),
                Self::Root => Self::ROOT.to_string(),
                Self::By(ref name) => to_code!(name),
            }
        )
    }
}

impl FromStr for Role {
    type Err = IoError;

    fn from_str(s: &str) -> StdResult<Self, Self::Err> {
        let it = match to_code!(s).as_str() {
            Self::ADMINISTRATOR => Self::Administrator,
            Self::ROOT => Self::Root,
            name => Self::By(name.to_string()),
        };
        Ok(it)
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Resource {
    #[serde(rename = "t")]
    pub r#type: String,
    #[serde(rename = "i")]
    pub id: Option<i32>,
}

impl Resource {
    pub fn new<T>(id: Option<i32>) -> Self {
        Self {
            r#type: type_name::<T>().to_string(),
            id,
        }
    }
    const SEP: &str = "://";
}

impl fmt::Display for Resource {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self.id {
            Some(id) => {
                write!(f, "{}{}{}", self.r#type, Self::SEP, id)
            }
            None => {
                write!(f, "{}", self.r#type)
            }
        }
    }
}
impl FromStr for Resource {
    type Err = ParseIntError;
    fn from_str(s: &str) -> StdResult<Self, Self::Err> {
        let it = match s.find(Self::SEP) {
            Some(i) => Self {
                r#type: s[..i].to_string(),
                id: Some(s[i + Self::SEP.len()..].parse()?),
            },
            None => Self {
                r#type: s.to_string(),
                id: None,
            },
        };
        Ok(it)
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Permission {
    pub operation: String,
    pub resource: Option<Resource>,
}

impl Permission {
    pub fn to_rule(&self) -> Vec<String> {
        let mut it = Vec::new();
        if let Some(ref resource) = self.resource {
            let object = resource.to_string();
            it.push(object);
        }
        {
            let action = to_code!(self.operation);
            it.push(action);
        }
        it
    }

    pub fn new(arg: &Vec<String>) -> Result<Self> {
        match arg.len() {
            2 => Ok(Self {
                operation: arg[1].clone(),
                resource: None,
            }),
            3 => Ok(Self {
                resource: Some(arg[1].parse()?),
                operation: arg[2].clone(),
            }),
            _ => Err(Box::new(IoError::new(
                IoErrorKind::UnexpectedEof,
                format!("unexpected permission: {:?}", arg),
            ))),
        }
    }
}
