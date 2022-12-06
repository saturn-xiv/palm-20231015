use std::fmt;
use std::fs::{create_dir_all, remove_dir_all, File};
use std::io::prelude::*;
use std::path::{Path, PathBuf};

use askama::Template;
use chrono::Utc;
use clap::{Parser, ValueEnum};
use palm::{
    copy_dir_all,
    seo::{
        sitemap::{
            urlset as sitemap_urlset, ChangeFreq, Link as SitemapLink, FILE as SITEMAP_FILE,
        },
        RobotsTxt,
    },
    Result,
};

use super::{
    i18n::I18n,
    models::{Config as Layout, Home},
    themes::hinode,
};

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
pub struct Args {
    #[arg(short, long, default_value = "src")]
    src: PathBuf,
    #[arg(short, long, default_value = "universal")]
    theme: Theme,
    #[arg(short = 'T', long, default_value = "tmp/public")]
    target: PathBuf,
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

        info!("generate web-site into folder {}", self.target.display());
        let cfg = Layout::new(&config)?;

        {
            if self.target.exists() {
                remove_dir_all(&self.target)?;
            }
            copy_dir_all(&assets, &self.target)?;
            cfg.copy_assets(&self.src, &self.target)?;
        }

        {
            let i18n = I18n::new()?;
            let files = match self.theme {
                Theme::Hinode => hinode::render(&cfg, &assets, &i18n)?,
                _ => {
                    error!("unsupported theme {}", self.theme);
                    Vec::new()
                }
            };

            {
                let index = "index.html";
                let mut links = Vec::new();
                let now = Utc::now().naive_utc();
                for it in files.iter() {
                    let file = self.target.join(&it.language).join(&it.name);
                    if !file.exists() {
                        create_dir_all(&file)?;
                    }
                    {
                        let file = file.join(index);
                        debug!("generate {}", file.display());
                        let mut file = File::create(&file)?;
                        writeln!(file, "{}", it.body)?;
                    }
                    links.push(SitemapLink {
                        path: format!("/{}/{}/", it.language, it.name),
                        updated_at: now,
                        priority: 0.8,
                        change_freq: ChangeFreq::Monthly,
                    });
                }

                {
                    let file = self.target.join(index);
                    debug!("generate {}", file.display());
                    let mut file = File::create(&file)?;
                    writeln!(
                        file,
                        "{}",
                        Home {
                            locale: cfg.default_language.clone()
                        }
                        .render()?
                    )?;
                    links.push(SitemapLink {
                        path: "/".to_string(),
                        updated_at: now,
                        priority: 0.9,
                        change_freq: ChangeFreq::Weekly,
                    });
                }

                {
                    let file = self.target.join(SITEMAP_FILE);
                    debug!("generate {}", file.display());
                    let mut file = File::create(&file)?;
                    let buf = sitemap_urlset(&cfg.home, &links)?;
                    file.write_all(&buf)?;
                }
                {
                    let file = self.target.join(RobotsTxt::FILE);
                    debug!("generate {}", file.display());
                    let mut file = File::create(&file)?;
                    let body = RobotsTxt { home: cfg.home }.render()?;
                    writeln!(file, "{}", body)?;
                }
            }
        }

        Ok(())
    }
}
