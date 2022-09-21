extern crate palm;

use std::path::Path;

pub fn load_config() -> palm::env::Config {
    palm::parser::from_toml(Path::new(env!("CARGO_MANIFEST_DIR")).join("config.toml")).unwrap()
}
