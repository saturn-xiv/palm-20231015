pub mod models;

use std::fs::read_dir;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::path::{Component, Path, PathBuf};

use askama::Template;
use palm::Result;

use super::super::models::{Config, Html};

pub fn render(config: &Config, assets: impl AsRef<Path>) -> Result<Vec<Html>> {
    let assets = assets.as_ref();

    let main_css = css(assets)?;
    debug!("find main css {}", main_css.display());
    let main_js = js(assets)?;
    debug!("find main js {}", main_js.display());
    let items = Vec::new();
    // TODO
    Ok(items)
}

fn css<P: AsRef<Path>>(assets: P) -> Result<PathBuf> {
    let assets = assets.as_ref();
    for it in read_dir(assets)? {
        let it = it?;
        let it = it.path();
        if let Some(ext) = it.extension() {
            if ext == "css" {
                // TODO change file_prefix as main
                let it = it.strip_prefix(assets)?;
                return Ok(Path::new(&Component::RootDir).join(it));
            }
        }
    }
    Err(Box::new(IoError::from(IoErrorKind::NotFound)))
}
fn js<P: AsRef<Path>>(assets: P) -> Result<PathBuf> {
    let assets = assets.as_ref();
    for it in read_dir(assets.join("js"))? {
        let it = it?;
        let it = it.path();
        if let Some(ext) = it.extension() {
            if ext == "js" {
                // TODO change file_prefix as main
                let it = it.strip_prefix(assets)?;
                return Ok(Path::new(&Component::RootDir).join(it));
            }
        }
    }
    Err(Box::new(IoError::from(IoErrorKind::NotFound)))
}
