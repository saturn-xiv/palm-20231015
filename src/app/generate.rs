use std::path::Path;

use super::super::Result;

pub fn nginx_conf(_name: &str, _ssl: bool) -> Result<()> {
    // TODO
    Ok(())
}

pub fn systemd_conf(_name: &str) -> Result<()> {
    // TODO
    Ok(())
}

pub fn config_toml<P: AsRef<Path>>(_file: P) -> Result<()> {
    // TODO
    Ok(())
}
