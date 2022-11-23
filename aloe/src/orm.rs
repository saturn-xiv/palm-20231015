use std::path::Path;

use diesel::{
    connection::SimpleConnection, prelude::*, sql_query, Connection as OpenConnection, RunQueryDsl,
};
use palm::{crypto::Hmac, Error, Result};
use std::time::Duration;

pub type Connection = diesel::sqlite::SqliteConnection;

use diesel::sql_types::Text;

#[derive(QueryableByName)]
pub struct Version {
    #[diesel(sql_type = Text)]
    pub value: String,
}

pub fn open<P: AsRef<Path>>(file: P, hmac: &Hmac) -> Result<Connection> {
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
    db.batch_execute(ops_router::UP)?;

    if ops_router::models::user::Dao::all(&mut db)?.is_empty() {
        db.transaction::<_, Error, _>(move |db| {
            ops_router::env::setup(db, hmac)?;
            Ok(())
        })?;
    }

    Ok(db)
}