pub mod schema;

use std::default::Default;
use std::fmt;

use serde::{Deserialize, Serialize};

pub type Pool = diesel::r2d2::Pool<diesel::r2d2::ConnectionManager<Connection>>;
pub type PooledConnection =
    diesel::r2d2::PooledConnection<diesel::r2d2::ConnectionManager<Connection>>;

/// use DB-NAME
/// show tables;
/// desc TABLE-NAME;
/// SELECT table_name FROM information_schema.tables WHERE table_schema = 'databasename' AND table_name = 'testtable';
/// SHOW TABLES LIKE 'tablename';
pub type Connection = diesel::mysql::MysqlConnection;

pub const UP: &str = include_str!("up.sql");
pub const VERSION: &str = "SELECT VERSION() AS value";

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub host: String,
    pub port: u16,
    pub name: String,
    pub user: String,
    pub password: Option<String>,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 3306,
            user: "root".to_string(),
            name: "dev".to_string(),
            password: None,
        }
    }
}

impl fmt::Display for Config {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "mysql://{}:{}@{}:{}/{}",
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
        "SELECT table_name AS name FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name = '{}'",
    name
    )
}
