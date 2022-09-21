use std::env;

use chrono::Utc;
use palm::{plugins::nut::v1::EmailTask, GIT_VERSION, NAME};

#[test]
fn smtp() {
    let task = EmailTask {
        subject: format!("{} {}", NAME, GIT_VERSION),
        body: format!("cargo test, {}", Utc::now().naive_local()),
        to: env::var("SMTP_TO").unwrap(),
        ..Default::default()
    };
    task.send(
        &env::var("SMTP_HOST").unwrap(),
        &env::var("SMTP_ACCOUNT").unwrap(),
        &env::var("SMTP_PASSWORD").unwrap(),
    )
    .unwrap();
}
