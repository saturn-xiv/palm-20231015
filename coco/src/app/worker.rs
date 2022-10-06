use std::any::type_name;
use std::ops::DerefMut;

use hyper::StatusCode;
use palm::{
    crypto::Aes,
    nut::v1::{EmailTask, SmtpProfile},
    queue::amqp::RabbitMq,
    HttpError, Result,
};

use super::super::env::Config;

pub async fn launch(cfg: &Config, name: &str) -> Result<()> {
    let id = format!(
        "{}-{}",
        nix::unistd::gethostname()?.to_str().unwrap_or_default(),
        nix::unistd::getpid()
    );
    let queue = cfg.rabbitmq.open();

    let db = cfg.postgresql.open()?;
    let mut db = db.get()?;
    let db = db.deref_mut();
    let aes = Aes::new(&cfg.secrets.0)?;
    let ch = queue.open().await?;
    if name == type_name::<EmailTask>() {
        let cfg = nut::services::site::get::<SmtpProfile>(db, &aes)?;
        RabbitMq::consume(&ch, &id, EmailTask::QUEUE, &cfg).await
    } else {
        Err(Box::new(HttpError(
            StatusCode::BAD_REQUEST,
            Some(format!("unknown queue {}", name)),
        )))
    }
}
