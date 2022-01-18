use hyper::StatusCode;

use super::super::{env::Config, plugins::nut::tasks::email::Task as EmailTask, HttpError, Result};

pub async fn launch(cfg: &Config, name: &str) -> Result<()> {
    let mut buf = [0u8; (1 << 8)];
    let id = format!(
        "{}-{}",
        nix::unistd::gethostname(&mut buf)?.to_str()?,
        nix::unistd::getpid()
    );
    let queue = cfg.rabbitmq.open();
    match name {
        EmailTask::QUEUE => queue.consume(&id, name, &cfg.smtp).await,
        _ => Err(Box::new(HttpError(
            StatusCode::BAD_REQUEST,
            Some(format!("unknown queue {}", name)),
        ))),
    }
}
