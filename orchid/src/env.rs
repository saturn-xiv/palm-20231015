use std::path::Path;

use palm::{
    cache::redis::Config as Redis, parser::from_toml, wechat::Config as WechatConfig, Result,
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub threads: usize,
    pub redis: Redis,
    pub clients: Vec<String>,
}

impl Config {
    pub const AUDIENCE: &str = env!("CARGO_PKG_NAME");

    pub fn wechat(&self, app_id: &str) -> Result<WechatConfig> {
        let file = Path::new("wechat").join(app_id).with_extension("toml");
        let it = from_toml(&file)?;
        Ok(it)
    }
}
