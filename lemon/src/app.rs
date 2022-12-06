use std::fmt;
use std::fs::remove_dir_all;
use std::path::{Path, PathBuf};

use clap::{Parser, ValueEnum};
use palm::{copy_dir_all, Result};

use super::{models::Config as Layout, themes::hinode};

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
pub struct Args {
    #[arg(short, long, default_value = "src")]
    src: PathBuf,
    #[arg(short, long, default_value = "universal")]
    theme: Theme,
}

#[derive(Copy, Clone, PartialEq, Eq, PartialOrd, Ord, ValueEnum)]
pub enum Theme {
    Universal,
    Hinode,
    CleanWhite,
    Docsy,
}

impl fmt::Display for Theme {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match *self {
            Self::Universal => write!(f, "universal"),
            Self::Hinode => write!(f, "hinode"),
            Self::CleanWhite => write!(f, "clean-white"),
            Self::Docsy => write!(f, "docsy"),
        }
    }
}

impl Args {
    pub fn launch(&self) -> Result<()> {
        let config = self.src.join("config.toml");
        palm::check_config_permission(&config)?;
        let theme = self.theme.to_string();
        info!("load config from {} with theme {}", config.display(), theme);

        let assets = Path::new("assets").join("themes").join(&theme);
        let root = Path::new("tmp").join("public");
        if root.exists() {
            remove_dir_all(&root)?;
        }
        copy_dir_all(&assets, &root)?;
        info!("generate web-site into folder {}", root.display());
        match self.theme {
            Theme::Hinode => {
                let cfg = Layout::new(&config)?;
                hinode::render(&cfg, &assets, &self.src, &root)?;
            }
            _ => {
                error!("unsupported theme {}", self.theme);
            }
        };

        Ok(())
    }
}
