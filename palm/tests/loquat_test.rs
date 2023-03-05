extern crate chrono;
extern crate palm;
extern crate serde;

use std::path::Path;

use chrono::Duration;
use palm::{jwt::Jwt, parser::from_toml, tink::Loquat};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct Config {
    loquat: Loquat,
}

#[test]
fn tink() {
    let subject = "hi, palm!";
    let audience = "testing";
    let cfg: Config = from_toml(
        Path::new(env!("CARGO_MANIFEST_DIR"))
            .parent()
            .unwrap()
            .join("config.toml"),
    )
    .unwrap();

    let token = cfg
        .loquat
        .sign(subject, audience, Duration::days(1))
        .unwrap();
    println!("{token}");

    {
        let it = cfg.loquat.verify(&token, audience).unwrap();
        assert_eq!(it, subject);
    }
}
