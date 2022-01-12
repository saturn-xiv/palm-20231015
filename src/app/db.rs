// https://en.wikibooks.org/wiki/Ruby_on_Rails/ActiveRecord/Migrations

use std::ops::Deref;

use super::super::{
    env::Config, i18n::locale::MIGRATION as Locales, orm::migration::Dao, plugins,
    settings::MIGRATION as Settings, Result,
};

pub fn migrate(cfg: &Config) -> Result<()> {
    let items = vec![
        Locales.deref(),
        Settings.deref(),
        plugins::nut::MIGRATION.deref(),
        plugins::forum::MIGRATION.deref(),
        plugins::mall::MIGRATION.deref(),
    ];
    let db = cfg.postgresql.open()?;
    let db = db.get()?;
    db.load(&items)?;
    db.migrate()?;
    Ok(())
}
pub fn rollback(cfg: &Config) -> Result<()> {
    let db = cfg.postgresql.open()?;
    let db = db.get()?;
    db.rollback()?;
    Ok(())
}

pub fn status(cfg: &Config) -> Result<()> {
    let db = cfg.postgresql.open()?;
    let db = db.get()?;
    println!("{:<14} {:<32} RUN AT", "VERSION", "NAME");
    for it in db.all()? {
        println!("{}", it);
    }
    Ok(())
}
