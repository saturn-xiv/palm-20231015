use std::fmt;
use std::path::{Path, PathBuf};

use clap::{Parser, ValueEnum};
use palm::Result;

use super::{
    models::Config,
    themes::{clean_white, docsy, gantry, hinode, universal, x_corporation},
};

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
pub struct Args {
    #[arg(short = 'c', long, default_value = "content")]
    content_dir: PathBuf,
    #[arg(short = 'T', long, default_value = "universal")]
    theme: Theme,
    #[arg(short = 't', long, default_value = "public")]
    target: PathBuf,
}

#[derive(Copy, Clone, PartialEq, Eq, PartialOrd, Ord, ValueEnum)]
pub enum Theme {
    Universal,
    Hinode,
    CleanWhite,
    Docsy,
    XCorporation,
    Gantry,
}

impl fmt::Display for Theme {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match *self {
            Self::Universal => write!(f, "universal"),
            Self::Hinode => write!(f, "hinode"),
            Self::CleanWhite => write!(f, "clean-white"),
            Self::Docsy => write!(f, "docsy"),
            Self::XCorporation => write!(f, "x-corporation"),
            Self::Gantry => write!(f, "gantry"),
        }
    }
}

impl Args {
    pub fn launch(&self) -> Result<()> {
        info!(
            "build web-site from {} to {} with theme {}",
            self.content_dir.display(),
            self.target.display(),
            self.theme,
        );

        let config = Config::new(&self.content_dir)?;

        match self.theme {
            Theme::Universal => {
                let theme = universal::models::Theme::new(&self.content_dir)?;
                super::build(&self.target, &config, &theme)?;
            }
            Theme::Hinode => {
                let theme = hinode::models::Theme::new(&self.content_dir)?;
                super::build(&self.target, &config, &theme)?;
            }
            Theme::CleanWhite => {
                let theme = clean_white::models::Theme::new(&self.content_dir)?;
                super::build(&self.target, &config, &theme)?;
            }
            Theme::Docsy => {
                let theme = docsy::models::Theme::new(&self.content_dir)?;
                super::build(&self.target, &config, &theme)?;
            }
            Theme::XCorporation => {
                let theme = x_corporation::models::Theme::new(&self.content_dir)?;
                super::build(&self.target, &config, &theme)?;
            }
            Theme::Gantry => {
                let theme = gantry::models::Theme::new(&self.content_dir)?;
                super::build(&self.target, &config, &theme)?;
            }
        };

        // let assets = Path::new(Layout::ASSETS).join("themes").join(&theme);

        // let cfg = {
        //     let mut it = Layout::new(&self.src)?;
        //     it.js.push(Path::new(Layout::MARKED_JS).to_path_buf());
        //     it
        // };
        // debug!("{:?}", cfg);
        // {
        //     if self.target.exists() {
        //         remove_dir_all(&self.target)?;
        //     }
        //     copy_dir_all(&assets, &self.target)?;
        //     {
        //         let third = Path::new("node_modules");
        //         copy_file(
        //             third.join("marked").join(Layout::MARKED_JS),
        //             self.target.join(Layout::MARKED_JS),
        //         )?;
        //     }
        //     copy_file(
        //         Path::new(Layout::ASSETS).join(Layout::APPLICATION_JS),
        //         self.target.join(Layout::APPLICATION_JS),
        //     )?;
        //     cfg.copy_assets(&self.src, &self.target)?;
        // }

        // {
        //     let i18n = {
        //         let mut it = I18n::new()?;
        //         it.load(&self.src.join("locales.yml"))?;
        //         it
        //     };

        //     let files = match self.theme {
        //         Theme::Hinode => hinode::render(&cfg, &assets, &i18n)?,
        //         _ => {
        //             error!("unsupported theme {}", self.theme);
        //             Vec::new()
        //         }
        //     };

        //     {
        //         let index = "index.html";
        //         let mut links = Vec::new();
        //         let now = Utc::now().naive_utc();
        //         for it in files.iter() {
        //             let file = self.target.join(it.folder());
        //             if !file.exists() {
        //                 create_dir_all(&file)?;
        //             }
        //             {
        //                 let file = file.join(index);
        //                 debug!("generate {}", file.display());
        //                 let mut file = File::create(&file)?;
        //                 writeln!(file, "{}", it.body)?;
        //             }
        //             links.push(SitemapLink {
        //                 path: match it.path {
        //                     Some(ref v) => Path::new(&it.language).join(v),
        //                     None => Path::new(&it.language).to_path_buf(),
        //                 },
        //                 updated_at: now,
        //                 priority: 0.8,
        //                 change_freq: ChangeFreq::Monthly,
        //             });
        //         }

        //         {
        //             let file = self.target.join(index);
        //             debug!("generate {}", file.display());
        //             let mut file = File::create(&file)?;
        //             writeln!(
        //                 file,
        //                 "{}",
        //                 Home {
        //                     locale: cfg.default_language.clone()
        //                 }
        //                 .render()?
        //             )?;
        //         }

        //         {
        //             let file = self.target.join(SITEMAP_FILE);
        //             debug!("generate {}", file.display());
        //             let mut file = File::create(&file)?;
        //             let buf = sitemap_urlset(&cfg.home, &links)?;
        //             file.write_all(&buf)?;
        //         }

        //     }
        // }

        info!("done.");
        Ok(())
    }
}

impl Config {
    pub fn new<P: AsRef<Path>>(_root: P) -> Result<Self> {
        // TODO
        todo!()
    }
}
