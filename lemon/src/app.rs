use std::fmt;
use std::fs::{copy as copy_file, create_dir_all, remove_dir_all, File};
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
        let theme = self.theme.to_string();
        info!(
            "build web-site from {} to {} with theme {}",
            self.src.display(),
            self.target.display(),
            theme
        );

        let assets = Path::new(Layout::ASSETS).join("themes").join(&theme);

        let cfg = {
            let mut it = Layout::new(&self.src)?;
            it.js.push(Path::new(Layout::MARKED_JS).to_path_buf());
            it
        };
        debug!("{:?}", cfg);
        {
            if self.target.exists() {
                remove_dir_all(&self.target)?;
            }
            copy_dir_all(&assets, &self.target)?;
            {
                let third = Path::new("node_modules");
                copy_file(
                    third.join("marked").join(Layout::MARKED_JS),
                    &self.target.join(Layout::MARKED_JS),
                )?;
            }
            copy_file(
                &Path::new(Layout::ASSETS).join(Layout::APPLICATION_JS),
                &self.target.join(Layout::APPLICATION_JS),
            )?;
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
                    let file = self.target.join(it.folder());
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
                        path: match it.path {
                            Some(ref v) => Path::new(&it.language).join(v),
                            None => Path::new(&it.language).to_path_buf(),
                        },
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

        info!("done.");
        Ok(())
    }
}
