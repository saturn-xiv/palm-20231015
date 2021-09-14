pub mod schema;

use std::default::Default;
use std::fmt;

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

/// use DB-NAME
/// show tables;
/// desc TABLE-NAME;
/// SELECT table_name FROM information_schema.tables WHERE table_schema = 'databasename' AND table_name = 'testtable';
/// SHOW TABLES LIKE 'tablename';
pub type Connection = diesel::mysql::MysqlConnection;

pub const UP: &str = include_str!("up.sql");

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
        let it: Version = sql_query("SELECT VERSION() AS value").get_result(self)?;
        Ok(it.value)
    }
}

pub fn schema_migrations_exists(name: &str) -> String {
    format!(
        "SELECT table_name AS name FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name = '{}'",
    name
    )
}
