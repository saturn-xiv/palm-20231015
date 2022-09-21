pub mod migration;

use std::default::Default;
use std::fmt;

use serde::{Deserialize, Serialize};

use super::super::Result;

pub type Pool = diesel::r2d2::Pool<diesel::r2d2::ConnectionManager<Connection>>;
pub type PooledConnection =
    diesel::r2d2::PooledConnection<diesel::r2d2::ConnectionManager<Connection>>;

// https://www.postgresql.org/docs/current/runtime-config-logging.html
// /var/lib/postgres/data/postgresql.conf: log_statement = 'all'
pub type Connection = diesel::mysql::MysqlConnection;

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub host: String,
    pub port: u16,
    pub name: String,
    pub user: String,
    pub password: Option<String>,
}

impl Config {
    pub fn open(&self) -> Result<Pool> {
        let manager = diesel::r2d2::ConnectionManager::<Connection>::new(&self.to_string()[..]);
        Ok(Pool::new(manager)?)
    }
}

impl Default for Config {
    fn default() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 3306,
            user: "root".to_string(),
            name: "demo".to_string(),
            password: None,
        }
    }
}

impl fmt::Display for Config {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "mysql://{}:{}@{}:{}/{}?useUnicode=true&characterEncoding=UTF-8",
            self.user,
            self.password.as_deref().unwrap_or(""),
            self.host,
            self.port,
            self.name
        )
    }
}

pub fn schema_migrations_exists(name: &str) -> String {
    format!(
        "SELECT table_name AS name FROM information_schema.tables WHERE table_name = '{}'",
        name
    )
}
