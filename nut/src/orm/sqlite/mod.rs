pub mod schema;

use std::default::Default;
use std::fmt;
use std::path::{Path, PathBuf};
use std::time::Duration;

use chrono::Utc;
use diesel::{
    connection::{Connection as DieselConnection, SimpleConnection},
    delete, insert_into,
    prelude::*,
    result::Error as DieselError,
    sql_query, update, RunQueryDsl,
};
use serde::{Deserialize, Serialize};

use super::super::Result;
use super::migration::{Dao, Item, Migration, Version};

use self::schema::schema_migrations;

pub type Pool = diesel::r2d2::Pool<diesel::r2d2::ConnectionManager<Connection>>;
pub type PooledConnection =
    diesel::r2d2::PooledConnection<diesel::r2d2::ConnectionManager<Connection>>;

/// .show Displays current settings for various parameters
/// .databases Provides database names and files
/// .quit Quit sqlite3 program
/// .tables Show current tables
/// .schema Display schema of table
/// .header Display or hide the output table header
/// .mode Select mode for the output table
/// .dump Dump database in SQL text format
/// pragma compile_options;
/// SELECT name FROM sqlite_master WHERE type='table' AND name='TABLE_NAME'
pub type Connection = diesel::sqlite::SqliteConnection;

pub const UP: &str = include_str!("up.sql");

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub file: PathBuf,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            file: Path::new("tmp").join("db"),
        }
    }
}

impl fmt::Display for Config {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.file.display())
    }
}

impl Dao for Connection {
    fn load(&self, items: &[&Migration]) -> Result<()> {
        {
            debug!("{}", UP);
            self.batch_execute(UP)?;
        }
        for it in items {
            info!("find migration: {}", it);
            let c: i64 = schema_migrations::dsl::schema_migrations
                .filter(schema_migrations::dsl::version.eq(it.version))
                .filter(schema_migrations::dsl::name.eq(it.name))
                .count()
                .get_result(self)?;
            if c == 0 {
                info!("did not exist, insert it");
                insert_into(schema_migrations::dsl::schema_migrations)
                    .values((
                        schema_migrations::dsl::version.eq(it.version),
                        schema_migrations::dsl::name.eq(it.name),
                        schema_migrations::dsl::up.eq(it.up),
                        schema_migrations::dsl::down.eq(it.down),
                    ))
                    .execute(self)?;
            }
        }
        Ok(())
    }

    fn migrate(&self) -> Result<()> {
        let items: Vec<Item> = schema_migrations::dsl::schema_migrations
            .order(schema_migrations::dsl::version.asc())
            .load(self)?;
        for it in items {
            match it.run_at {
                Some(_) => {
                    info!("ignore {}", it);
                }
                None => {
                    let now = Utc::now().naive_local();
                    info!("run {}-{}", it.version, it.name);
                    debug!("{}", it.up);

                    self.transaction::<_, DieselError, _>(|| {
                        self.batch_execute(&it.up)?;
                        update(
                            schema_migrations::dsl::schema_migrations
                                .filter(schema_migrations::dsl::id.eq(&it.id)),
                        )
                        .set(schema_migrations::dsl::run_at.eq(&now))
                        .execute(self)?;
                        Ok(())
                    })?;
                }
            }
        }
        Ok(())
    }
    fn rollback(&self) -> Result<()> {
        match schema_migrations::dsl::schema_migrations
            .filter(schema_migrations::dsl::run_at.is_not_null())
            .order(schema_migrations::dsl::version.desc())
            .first::<Item>(self)
        {
            Ok(it) => {
                info!("rollback {}-{}", it.version, it.name);
                debug!("{}", it.down);
                self.transaction::<_, DieselError, _>(|| {
                    self.batch_execute(&it.up)?;
                    self.batch_execute(&it.down)?;
                    delete(
                        schema_migrations::dsl::schema_migrations
                            .filter(schema_migrations::dsl::id.eq(it.id)),
                    )
                    .execute(self)?;
                    Ok(())
                })?;
            }
            Err(_) => {
                warn!("empty database!");
            }
        };
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = schema_migrations::dsl::schema_migrations
            .order(schema_migrations::dsl::version.asc())
            .load(self)?;
        Ok(items)
    }
    fn version(&self) -> Result<String> {
        let it: Version = sql_query("SELECT SQLITE_VERSION() AS value").get_result(self)?;
        Ok(it.value)
    }
}

pub fn schema_migrations_exists(name: &str) -> String {
    format!(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='{}'",
        name
    )
}

// https://stackoverflow.com/questions/57123453/how-to-use-diesel-with-sqlite-connections-and-avoid-database-is-locked-type-of
pub trait Pragma {
    fn busy_timeout(&self, d: Duration) -> Result<()>;
    fn wal_mode(&self, busy_timeout: Duration) -> Result<()>;
}

impl Pragma for Connection {
    fn busy_timeout(&self, d: Duration) -> Result<()> {
        self.batch_execute(&format!(
            "PRAGMA foreign_keys = ON; PRAGMA busy_timeout = {};",
            d.as_micros()
        ))?;
        Ok(())
    }
    fn wal_mode(&self, busy_timeout: Duration) -> Result<()> {
        // NORMAL
        self.batch_execute(&format!(
            "PRAGMA synchronous = OFF; PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = {};",
            busy_timeout.as_micros()
        ))?;
        Ok(())
    }
}
