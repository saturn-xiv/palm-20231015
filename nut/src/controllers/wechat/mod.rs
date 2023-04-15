pub mod mini_program;
pub mod oauth2;

use std::path::Path;

use palm::{parser::from_toml, wechat::Config as WechatConfig, Result};

pub fn get_config_by_project(project: &str) -> Result<WechatConfig> {
    let file = {
        let it = Path::new("wechat").join(project);
        it.with_extension("toml")
    };
    let it = from_toml(&file)?;
    Ok(it)
}
