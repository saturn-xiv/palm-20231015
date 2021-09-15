use lettre::{transport::smtp::authentication::Credentials, Message, SmtpTransport, Transport};
use serde::{Deserialize, Serialize};

use super::{MediaType, Result};

#[derive(Serialize, Deserialize, Clone)]
pub struct Email {
    pub subject: String,
    pub body: String,
    pub body_type: MediaType,
    pub to: String,
    pub cc: Vec<String>,
    pub bcc: Vec<String>,
    pub attachments: Vec<(String, Vec<u8>)>,
}

impl Email {
    pub const QUEUE: &'static str = "emails";
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Config {
    pub smtp: String,
    pub imap: String,
    pub user: String,
    pub password: String,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            smtp: "smtp.gmail.com".to_string(),
            imap: "imap.gmail.com".to_string(),
            user: "who-am-i@gmail.com".to_string(),
            password: "change-me".to_string(),
        }
    }
}

impl Config {
    pub const OUT: &'static str = "mailer.smtp";
    pub fn send(&self, task: &Email) -> Result<()> {
        debug!("send email {} to {}", task.subject, task.to);
        let mut email = Message::builder()
            .from(self.user.parse()?)
            .reply_to(self.user.parse()?)
            .to(task.to.parse()?)
            .subject(task.subject.clone());
        for it in task.cc.iter() {
            email = email.cc(it.parse()?);
        }
        for it in task.bcc.iter() {
            email = email.bcc(it.parse()?);
        }
        let email = email.body(task.body.clone())?;

        // TODO media type

        let mailer = SmtpTransport::relay(&self.smtp)?
            .credentials(Credentials::new(self.user.clone(), self.password.clone()))
            .build();

        mailer.send(&email)?;
        Ok(())
    }
}
