use std::path::Path;

use diesel::{
    connection::SimpleConnection, prelude::*, sql_query, Connection as OpenConnection, RunQueryDsl,
};
use palm::Result;
use std::time::Duration;

pub type Connection = diesel::sqlite::SqliteConnection;

use diesel::sql_types::Text;

#[derive(QueryableByName)]
pub struct Version {
    #[diesel(sql_type = Text)]
    pub value: String,
}

pub fn open<P: AsRef<Path>>(file: P) -> Result<Connection> {
    let file = file.as_ref();
    info!("open sqlite db {}", file.display());
    let mut db = Connection::establish(&file.display().to_string())?;
    {
        let busy_timeout = Duration::from_secs(5);
        db.batch_execute(&format!(
            "PRAGMA synchronous = OFF; PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = {};",
            busy_timeout.as_micros()
        ))?;
    }
    {
        let it: Version = sql_query("SELECT SQLITE_VERSION() AS value").get_result(&mut db)?;
        info!("sqlite version {}", it.value);
    }
    db.batch_execute(include_str!("up.sql"))?;
    Ok(db)
}

// ------------------

// use std::default::Default;
// use std::fmt;
// use std::path::{Path, PathBuf};
// use std::time::Duration;

// use diesel::connection::SimpleConnection;
// use palm::Result;
// use serde::{Deserialize, Serialize};

// pub const VERSION: &str = ;

// pub type Pool = diesel::r2d2::Pool<diesel::r2d2::ConnectionManager<Connection>>;
// pub type PooledConnection =
//     diesel::r2d2::PooledConnection<diesel::r2d2::ConnectionManager<Connection>>;

// /// .show Displays current settings for various parameters
// /// .databases Provides database names and files
// /// .quit Quit sqlite3 program
// /// .tables Show current tables
// /// .schema Display schema of table
// /// .header Display or hide the output table header
// /// .mode Select mode for the output table
// /// .dump Dump database in SQL text format
// /// pragma compile_options;
// /// SELECT name FROM sqlite_master WHERE type='table' AND name='TABLE_NAME'
// pub type Connection = diesel::sqlite::SqliteConnection;

// pub const UP: &str = include_str!("up.sql");

// #[derive(Serialize, Deserialize, Debug, Clone)]
// #[serde(rename_all = "camelCase")]
// pub struct Config {
//     pub file: PathBuf,
// }

// impl Default for Config {
//     fn default() -> Self {
//         Self {
//             file: Path::new("tmp").join("db"),
//         }
//     }
// }

// impl fmt::Display for Config {
//     fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
//         write!(f, "{}", self.file.display())
//     }
// }

// pub fn schema_migrations_exists(name: &str) -> String {
//     format!(
//         "SELECT name FROM sqlite_master WHERE type='table' AND name='{}'",
//         name
//     )
// }

// // https://stackoverflow.com/questions/57123453/how-to-use-diesel-with-sqlite-connections-and-avoid-database-is-locked-type-of
// pub trait Pragma {
//     fn busy_timeout(&mut self, d: Duration) -> Result<()>;
//     fn wal_mode(&mut self, busy_timeout: Duration) -> Result<()>;
// }

// impl Pragma for Connection {
//     fn busy_timeout(&mut self, d: Duration) -> Result<()> {

//         Ok(())
//     }
//     fn wal_mode(&mut self, busy_timeout: Duration) -> Result<()> {
//         // NORMAL

//         Ok(())
//     }
// }
