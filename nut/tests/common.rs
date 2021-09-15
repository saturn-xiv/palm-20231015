extern crate nut;

use std::path::Path;

pub fn load_config() -> nut::env::Config {
    nut::parser::from_toml(Path::new(env!("CARGO_MANIFEST_DIR")).join("../config.toml")).unwrap()
}
