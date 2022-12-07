pub mod models;

use std::fs::read_dir;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::path::{Path, PathBuf};

use askama::Template;
use palm::Result;

use super::super::{
    i18n::I18n,
    models::{Config, Html},
};

pub fn render(config: &Config, assets: impl AsRef<Path>, i18n: &I18n) -> Result<Vec<Html>> {
    let config = {
        let mut it = config.clone();
        let assets = assets.as_ref();

        {
            let main_css = css(assets)?;
            debug!("find main css {}", main_css.display());
            it.css.push(main_css);
        }
        {
            let main_js = js(assets)?;
            debug!("find main js {}", main_js.display());
            it.js.push(main_js);
            it.js.push(Path::new(Config::MARKED_JS).to_path_buf());
            it.js.push(Path::new(Config::APPLICATION_JS).to_path_buf());
        }
        it
    };
    let mut items = Vec::new();
    for site in config.sites.iter() {
        for page in site.pages.iter() {
            let item = Html {
                language: site.language.clone(),
                path: Some(Path::new(&page.name).to_path_buf()),
                body: models::Page::new(i18n, &config, site, page).render()?,
            };
            items.push(item);
        }
        for tag in site.tags.iter() {
            let item = Html {
                language: site.language.clone(),
                path: Some(Path::new("by-tag").join(&tag.code)),
                body: models::ByTag::new(i18n, &config, site, tag).render()?,
            };
            items.push(item);
        }

        let item = Html {
            language: site.language.clone(),
            path: None,
            body: models::Home::new(i18n, &config, site).render()?,
        };
        items.push(item);
    }

    for author in config.authors.iter() {
        for site in config.sites.iter() {
            let item = Html {
                language: site.language.clone(),
                path: Some(Path::new("by-author").join(&author.code)),
                body: models::ByAuthor::new(i18n, &config, site, author).render()?,
            };
            items.push(item);
        }
    }

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
                return Ok(it.to_path_buf());
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
                return Ok(it.to_path_buf());
            }
        }
    }
    Err(Box::new(IoError::from(IoErrorKind::NotFound)))
}
