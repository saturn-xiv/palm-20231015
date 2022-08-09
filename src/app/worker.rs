use std::any::type_name;
use std::ops::DerefMut;

use hyper::StatusCode;

use super::super::{
    crypto::Aes,
    env::Config,
    plugins::nut::v1::{EmailTask, SmtpProfile},
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
    let mut db = db.get()?;
    let db = db.deref_mut();
    let aes = Aes::new(&cfg.secrets.0)?;
    if name == type_name::<EmailTask>() {
        let cfg = SmtpProfile::new(db, &aes)?;
        queue.consume(&id, name, &cfg).await
    } else {
        Err(Box::new(HttpError(
            StatusCode::BAD_REQUEST,
            Some(format!("unknown queue {}", name)),
        )))
    }
}
