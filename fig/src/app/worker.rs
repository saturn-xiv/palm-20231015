use std::any::type_name;
use std::ops::DerefMut;

use hyper::StatusCode;
use nut::models::setting::get;
use palm::{
    nut::v1::{EmailTask, SmtpProfile},
    queue::amqp::RabbitMq,
    tink::Loquat,
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
    let ch = queue.open().await?;

    {
        let queue = type_name::<EmailTask>();
        if name == queue {
            let cfg = get::<SmtpProfile, Loquat>(db, &cfg.loquat, None)?;
            return RabbitMq::consume(&ch, &id, queue, &cfg).await;
        }
    }

    Err(Box::new(HttpError(
        StatusCode::BAD_REQUEST,
        Some(format!("unknown queue {}", name)),
    )))
}
