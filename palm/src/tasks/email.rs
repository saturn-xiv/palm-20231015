use async_trait::async_trait;
use lettre::{
    message::{header::ContentType as MessageContentType, Mailbox, MultiPart, SinglePart},
    transport::smtp::authentication::Credentials,
    Message, SmtpTransport, Transport,
};
use log::info;
use serde::{Deserialize, Serialize};
use validator::Validate;

use super::super::{queue::amqp::Handler as QueueHandler, Result};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Task {
    pub subject: String,
    pub body: String,
    pub content_type: String,
    pub attachments: Vec<Attachment>,
    pub to: Address,
    pub cc: Vec<Address>,
    pub bcc: Vec<Address>,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Attachment {
    pub payload: Vec<u8>,
    pub title: String,
    pub content_type: String,
}

#[derive(Serialize, Deserialize, Validate, Debug, Clone)]
pub struct Profile {
    #[validate(length(min = 1, max = 63))]
    pub host: String,
    #[validate(range(min = 1))]
    pub port: u16,
    #[validate(length(min = 1, max = 63))]
    pub password: String,
    #[validate(range(min = 1))]
    pub auth_method: u8,
    pub from: Address,
    pub cc: Vec<Address>,
    pub bcc: Vec<Address>,
}

// https://support.google.com/mail/answer/7126229#zippy=%2Cstep-change-smtp-other-settings-in-your-email-client
#[async_trait]
impl QueueHandler for Profile {
    async fn handle(&self, id: &str, content_type: &str, payload: &[u8]) -> Result<()> {
        info!("receive message {} {}", id, content_type);
        let task: Task = flexbuffers::from_slice(payload)?;
        info!("send {} to {:?}", task.subject, task.to);
        self.send(&task)
    }
}

#[derive(Serialize, Deserialize, Validate, Debug, Clone)]
pub struct Address {
    #[validate(length(min = 1, max = 31))]
    pub name: String,
    #[validate(length(min = 1, max = 63))]
    pub email: String,
}

impl Address {
    pub fn mailbox(&self) -> Result<Mailbox> {
        let it = Mailbox {
            name: Some(self.name.clone()),
            email: self.email.parse()?,
        };
        Ok(it)
    }
}

impl Profile {
    pub fn send(&self, task: &Task) -> Result<()> {
        let account = self.from.mailbox()?;
        let to = task.to.mailbox()?;

        let msg = {
            let mut builder = Message::builder()
                .from(account.clone())
                .reply_to(account)
                .to(to)
                .subject(&task.subject);
            // cc
            {
                for it in task.cc.iter() {
                    builder = builder.cc(it.mailbox()?);
                }
                for it in self.cc.iter() {
                    builder = builder.cc(it.mailbox()?);
                }
            }
            // bcc
            {
                for it in task.bcc.iter() {
                    builder = builder.bcc(it.mailbox()?);
                }
                for it in self.bcc.iter() {
                    builder = builder.bcc(it.mailbox()?);
                }
            }
            // attachments
            let mut part = MultiPart::alternative().build();
            {
                part = part.singlepart(
                    SinglePart::builder()
                        .header(task.content_type.parse::<MessageContentType>()?)
                        .body(task.body.clone()),
                );
                for it in task.attachments.iter() {
                    part = part.singlepart(
                        SinglePart::builder()
                            .header(MessageContentType::parse(&it.content_type)?)
                            .body(it.payload.clone()),
                    );
                }
            }

            builder.multipart(part)?
        };

        let mailer = SmtpTransport::relay(&self.host)?
            .credentials(Credentials::new(
                self.from.email.clone(),
                self.password.clone(),
            ))
            .build();
        mailer.send(&msg)?;
        Ok(())
    }
}
