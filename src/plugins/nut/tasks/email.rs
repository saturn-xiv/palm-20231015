use lettre::{transport::smtp::authentication::Credentials, Message, SmtpTransport, Transport};
use prost::Message as ProstMessage;

use super::super::super::super::{queue::amqp::Handler as QueueHandler, Result};
use super::super::v1;

impl v1::EmailTask {
    pub const QUEUE: &'static str = "mails";

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

impl QueueHandler for v1::SmtpProfile {
    fn handle(&self, id: &str, content_type: &str, payload: &[u8]) -> Result<()> {
        info!("receive message {} {}", id, content_type);
        let task = v1::EmailTask::decode(payload)?;
        info!("send {} to {}", task.subject, task.to);
        task.send(&self.host, &self.user, &self.password)
    }
}
