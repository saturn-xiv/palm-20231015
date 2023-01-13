use std::io::{Error as IoError, ErrorKind as IoErrorKind};

use lettre::{
    message::{header::ContentType as MessageContentType, Mailbox, MultiPart, SinglePart},
    transport::smtp::authentication::Credentials,
    Message, SmtpTransport, Transport,
};
use prost::Message as ProstMessage;

use super::super::{
    nut::v1::{
        email_task::{Address, ContentType},
        EmailTask, SmtpProfile,
    },
    queue::amqp::Handler as QueueHandler,
    Result,
};

// https://support.google.com/mail/answer/7126229#zippy=%2Cstep-change-smtp-other-settings-in-your-email-client

impl QueueHandler for SmtpProfile {
    fn handle(&self, id: &str, content_type: &str, payload: &[u8]) -> Result<()> {
        info!("receive message {} {}", id, content_type);
        let task = EmailTask::decode(payload)?;
        info!("send {} to {:?}", task.subject, task.to);
        self.send(&task)
    }
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

impl SmtpProfile {
    pub fn send(&self, task: &EmailTask) -> Result<()> {
        let from = self.user.as_ref().ok_or_else(|| {
            Box::new(IoError::new(IoErrorKind::Other, "bad smtp account setting"))
        })?;
        let account = from.mailbox()?;
        let to = task
            .to
            .as_ref()
            .ok_or_else(|| Box::new(IoError::new(IoErrorKind::Other, "bad smtp to setting")))?
            .mailbox()?;

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
                part = part.singlepart(match task.content_type() {
                    ContentType::Html => SinglePart::builder()
                        .header(MessageContentType::TEXT_HTML)
                        .body(task.content.clone()),
                    ContentType::Plain => SinglePart::builder()
                        .header(MessageContentType::TEXT_PLAIN)
                        .body(task.content.clone()),
                });
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
            .credentials(Credentials::new(from.email.clone(), self.password.clone()))
            .build();
        mailer.send(&msg)?;
        Ok(())
    }
}
