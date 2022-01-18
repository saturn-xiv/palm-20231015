use std::collections::HashMap;

use lettre::{transport::smtp::authentication::Credentials, Message, SmtpTransport, Transport};
use serde::{Deserialize, Serialize};

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
}

// https://support.google.com/mail/answer/7126229#zippy=%2Cstep-change-smtp-other-settings-in-your-email-client
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Handler {
    pub host: String,
    pub account: String,
    pub password: String,
    pub pretend: bool,
}

impl Default for Handler {
    fn default() -> Self {
        Self {
            host: "smtp.gmail.com".to_string(),
            account: "who-am-i".to_string(),
            password: "change-me".to_string(),
            pretend: false,
        }
    }
}

impl QueueHandler for Handler {
    fn handle(&self, _id: &str, _content_type: &str, payload: &[u8]) -> Result<()> {
        let task: Task = flexbuffers::from_slice(payload)?;
        if self.pretend {
            info!("send to {}:{}\n{}", task.to, task.subject, task.body);
            return Ok(());
        }
        let msg = Message::builder()
            .from(self.account.parse()?)
            .reply_to(self.account.parse()?)
            .to(task.to.parse()?)
            .subject(&task.subject)
            .body(task.body.clone())?;
        // TODO attachments bcc cc

        let mailer = SmtpTransport::relay(&self.host)?
            .credentials(Credentials::new(
                self.account.clone(),
                self.password.clone(),
            ))
            .build();
        mailer.send(&msg)?;
        Ok(())
    }
}
