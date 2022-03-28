use juniper::GraphQLObject;
use lapin::protocol::metadata;
use serde::{Deserialize, Serialize};

use super::super::super::super::super::super::{queue::amqp::RabbitMq, Result};

#[derive(GraphQLObject, Serialize, Deserialize, Debug)]
pub struct RabbitMqStatus {
    pub protocol: String,
}

impl RabbitMqStatus {
    pub fn new(_queue: &RabbitMq) -> Result<Self> {
        let it = Self {
            protocol: format!(
                "{} {}.{}.{}",
                metadata::NAME,
                metadata::MAJOR_VERSION,
                metadata::MINOR_VERSION,
                metadata::REVISION
            ),
        };
        Ok(it)
    }
}
