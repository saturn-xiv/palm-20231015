// https://en.wikibooks.org/wiki/Ruby_on_Rails/ActiveRecord/Migrations

use super::super::{env::Config, Result};

pub fn migrate(_cfg: &Config) -> Result<()> {
    // TODO
    Ok(())
}
pub fn rollback(_cfg: &Config) -> Result<()> {
    // TODO
    Ok(())
}

pub fn redo(_cfg: &Config) -> Result<()> {
    // TODO
    Ok(())
}

pub fn status(_cfg: &Config) -> Result<()> {
    // TODO
    Ok(())
}
// impl Database {
//     pub fn launch(&self, db: &Connection, migrations: &[&Migration]) -> Result<()> {
//         match self {
//             Self::Generate(Generate { name }) => {
//                 let now = Utc::now();
//                 let version = now.format("%Y%m%d%H%M%S").to_string();
//                 let root = Path::new("tmp").join(format!("{}-{}", version, name));

//                 create_dir_all(&root)?;
//                 for it in &["up", "down"] {
//                     let file = root.join(format!("{}.sql", it));
//                     info!("generate {}", file.display());
//                     File::create(&file)?;
//                 }
//                 {
//                     let tpl = MigrationMod {
//                         version: &version,
//                         name,
//                     }
//                     .render()?;
//                     let file = root.join("mod.rs");
//                     info!("generate {}", file.display());
//                     let mut file = File::create(&file)?;
//                     file.write_all(tpl.as_bytes())?;
//                 }
//             }
//             Self::Migrate => {
//                 db.load(migrations)?;
//                 db.migrate()?;
//             }
//             Self::Rollback => {
//                 db.rollback()?;
//             }
//             Self::Status => {
//                 println!("{:<14} {:<32} RUN AT", "VERSION", "NAME");
//                 for it in db.all()? {
//                     println!("{}", it);
//                 }
//                 return Ok(());
//             }
//         }
//         Ok(())
//     }
// }

// #[derive(Clap)]
// pub struct Generate {
//     #[clap(short, long)]
//     pub name: String,
// }
