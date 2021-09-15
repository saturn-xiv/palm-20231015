use std::fs::{create_dir_all, File};
use std::io::prelude::*;
use std::path::Path;

use askama::Template;
use chrono::Utc;
use clap::Clap;

use super::super::Result;
use super::{
    migration::{Dao, Migration},
    Connection,
};

// https://en.wikibooks.org/wiki/Ruby_on_Rails/ActiveRecord/Migrations
#[derive(Clap)]
pub enum Database {
    // #[clap(about = "Create empty database")]
    // Create,
    #[clap(about = "Generate a migration")]
    Generate(Generate),
    #[clap(about = "Migrate the database to the latest version")]
    Migrate,
    #[clap(about = "Revert migration to previous version")]
    Rollback,
    // #[clap(about = "Re-applying all the migrations")]
    // Redo,
    #[clap(about = "Show current database versions")]
    Status,
}

impl Database {
    pub fn launch(&self, db: &Connection, migrations: &[&Migration]) -> Result<()> {
        match self {
            Self::Generate(Generate { name }) => {
                let now = Utc::now();
                let version = now.format("%Y%m%d%H%M%S").to_string();
                let root = Path::new("tmp").join(format!("{}-{}", version, name));

                create_dir_all(&root)?;
                for it in &["up", "down"] {
                    let file = root.join(format!("{}.sql", it));
                    info!("generate {}", file.display());
                    File::create(&file)?;
                }
                {
                    let tpl = MigrationMod {
                        version: &version,
                        name,
                    }
                    .render()?;
                    let file = root.join("mod.rs");
                    info!("generate {}", file.display());
                    let mut file = File::create(&file)?;
                    file.write_all(tpl.as_bytes())?;
                }
            }
            Self::Migrate => {
                db.load(migrations)?;
                db.migrate()?;
            }
            Self::Rollback => {
                db.rollback()?;
            }
            Self::Status => {
                println!("{:<14} {:<32} RUN AT", "VERSION", "NAME");
                for it in db.all()? {
                    println!("{}", it);
                }
                return Ok(());
            }
        }
        Ok(())
    }
}

#[derive(Clap)]
pub struct Generate {
    #[clap(short, long)]
    pub name: String,
}

#[derive(Template)]
#[template(path = "migration.rs", escape = "none")]
struct MigrationMod<'a> {
    name: &'a str,
    version: &'a str,
}
