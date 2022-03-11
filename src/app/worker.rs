use std::ops::Deref;

use hyper::StatusCode;

use super::super::{
    crypto::Aes,
    env::Config,
    plugins::nut::tasks::email::{Handler as EmailHandler, Task as EmailTask},
    settings::Dao as SettingDao,
    HttpError, Result,
};

pub async fn launch(cfg: &Config, name: &str) -> Result<()> {
    let mut buf = [0u8; (1 << 8)];
    let id = format!(
        "{}-{}",
        nix::unistd::gethostname(&mut buf)?.to_str()?,
        nix::unistd::getpid()
    );
    let queue = cfg.rabbitmq.open();

    let db = cfg.postgresql.open()?;
    let db = db.get()?;
    let db = db.deref();
    let aes = Aes::new(&cfg.secrets.0)?;
    match name {
        EmailTask::QUEUE => {
            // TODO
            let cfg: EmailHandler =
                SettingDao::get(db, &aes, &EmailHandler::KEY.to_string(), None)?;
            queue.consume(&id, name, &cfg).await
        }
        _ => Err(Box::new(HttpError(
            StatusCode::BAD_REQUEST,
            Some(format!("unknown queue {}", name)),
        ))),
    }
}
