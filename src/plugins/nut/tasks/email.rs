use std::collections::HashMap;

use juniper::GraphQLObject;
use lettre::{transport::smtp::authentication::Credentials, Message, SmtpTransport, Transport};
use serde::{Deserialize, Serialize};
use validator::Validate;

use super::super::super::super::{queue::amqp::Handler as QueueHandler, Result};

#[derive(Serialize, Deserialize, Default)]
pub struct Task {
    pub subject: String,
    pub body: String,
    pub to: String,
    pub cc: Vec<String>,
    pub bcc: Vec<String>,
    pub files: HashMap<String, Vec<u8>>,
}

impl Task {
    pub const QUEUE: &'static str = "emails";

    pub fn send(&self, host: &str, account: &str, password: &str) -> Result<()> {
        let msg = Message::builder()
            .from(account.parse()?)
            .reply_to(account.parse()?)
            .to(self.to.parse()?)
            .subject(&self.subject)
            .body(self.body.clone())?;
        // TODO attachments bcc cc

        let mailer = SmtpTransport::relay(host)?
            .credentials(Credentials::new(account.to_string(), password.to_string()))
            .build();
        mailer.send(&msg)?;
        Ok(())
    }
}

// https://support.google.com/mail/answer/7126229#zippy=%2Cstep-change-smtp-other-settings-in-your-email-client
#[derive(GraphQLObject, Validate, Serialize, Deserialize, Debug, Clone)]
#[graphql(name = "SmtpSetting")]
pub struct Handler {
    #[validate(length(min = 1))]
    pub host: String,
    #[validate(length(min = 1), email)]
    pub account: String,
    #[validate(length(min = 1))]
    pub password: String,
}

impl Handler {
    pub const KEY: &'static str = "smtp";
}

impl Default for Handler {
    fn default() -> Self {
        Self {
            host: "smtp.gmail.com".to_string(),
            account: "who-am-i".to_string(),
            password: "change-me".to_string(),
        }
    }
}

#[cfg(not(debug_assertions))]
impl QueueHandler for Handler {
    fn handle(&self, _id: &str, _content_type: &str, payload: &[u8]) -> Result<()> {
        let task: Task = flexbuffers::from_slice(payload)?;
        task.send(&self.host, &self.account, &self.password)
    }
}

#[cfg(debug_assertions)]
impl QueueHandler for Handler {
    fn handle(&self, _id: &str, _content_type: &str, payload: &[u8]) -> Result<()> {
        let task: Task = flexbuffers::from_slice(payload)?;
        info!("send to {}:{}\n{}", task.to, task.subject, task.body);
        Ok(())
    }
}
