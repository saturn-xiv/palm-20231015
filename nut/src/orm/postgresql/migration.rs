use std::fmt;

use chrono::{NaiveDateTime, Utc};
use diesel::{
    connection::SimpleConnection, delete, insert_into, prelude::*, sql_query, update, RunQueryDsl,
};
use hyper::StatusCode;
use palm::{HttpError, Result};

use super::super::Version;
use super::{schema::schema_migrations, Connection};

pub struct Migration<'a> {
    pub version: i64,
    pub name: &'a str,
    pub up: &'a str,
    pub down: &'a str,
}

impl<'a> fmt::Display for Migration<'a> {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}-{}", self.version, self.name)
    }
}

pub trait Dao {
    fn load(&mut self, items: &[&Migration]) -> Result<()>;
    fn migrate(&mut self) -> Result<()>;
    fn rollback(&mut self) -> Result<()>;
    fn all(&mut self) -> Result<Vec<Item>>;
    fn count(&mut self) -> Result<i64>;
    fn version(&mut self) -> Result<String>;
}

#[derive(Queryable)]
pub struct Item {
    // LANG=C date +%Y%m%d%H%M%S
    pub version: i64,
    pub name: String,
    pub up: String,
    pub down: String,
    pub run_at: Option<NaiveDateTime>,
    pub created_at: NaiveDateTime,
}

impl fmt::Display for Item {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{:<14} {:<23} {}",
            self.version,
            match self.run_at {
                Some(v) => v.format("%v %r").to_string(),
                None => "N/A".to_string(),
            },
            self.name,
        )
    }
}

impl Dao for Connection {
    fn load(&mut self, items: &[&Migration]) -> Result<()> {
        self.batch_execute(include_str!("up.sql"))?;

        for it in items {
            debug!("find migration: {}", it);
            match schema_migrations::dsl::schema_migrations
                .filter(schema_migrations::dsl::version.eq(it.version))
                .first::<Item>(self)
            {
                Ok(v) => {
                    if it.name != v.name || it.up != v.up || it.down != v.down {
                        return Err(Box::new(HttpError(
                            StatusCode::BAD_REQUEST,
                            Some(format!("{} not same as in db", it.version)),
                        )));
                    }
                }
                Err(_) => {
                    warn!("migration {} did not exist, insert it", it);
                    insert_into(schema_migrations::dsl::schema_migrations)
                        .values((
                            schema_migrations::dsl::version.eq(it.version),
                            schema_migrations::dsl::name.eq(it.name),
                            schema_migrations::dsl::up.eq(it.up),
                            schema_migrations::dsl::down.eq(it.down),
                        ))
                        .execute(self)?;
                }
            };
        }
        Ok(())
    }

    fn migrate(&mut self) -> Result<()> {
        let items: Vec<Item> = schema_migrations::dsl::schema_migrations
            .order(schema_migrations::dsl::version.asc())
            .load(self)?;
        for it in items {
            match it.run_at {
                Some(_) => {
                    info!("ignore {}", it);
                }
                None => {
                    let now = Utc::now().naive_utc();
                    info!("run {}-{}", it.version, it.name);
                    debug!("{}", it.up);

                    self.batch_execute(&it.up)?;
                    update(
                        schema_migrations::dsl::schema_migrations
                            .filter(schema_migrations::dsl::version.eq(&it.version)),
                    )
                    .set(schema_migrations::dsl::run_at.eq(&now))
                    .execute(self)?;
                }
            }
        }
        Ok(())
    }
    fn count(&mut self) -> Result<i64> {
        let cnt: i64 = schema_migrations::dsl::schema_migrations
            .filter(schema_migrations::dsl::run_at.is_not_null())
            .count()
            .get_result(self)?;
        Ok(cnt)
    }
    fn rollback(&mut self) -> Result<()> {
        match schema_migrations::dsl::schema_migrations
            .filter(schema_migrations::dsl::run_at.is_not_null())
            .order(schema_migrations::dsl::version.desc())
            .first::<Item>(self)
        {
            Ok(it) => {
                info!("rollback {}-{}", it.version, it.name);
                debug!("{}", it.down);
                self.batch_execute(&it.down)?;
                delete(
                    schema_migrations::dsl::schema_migrations
                        .filter(schema_migrations::dsl::version.eq(it.version)),
                )
                .execute(self)?;
            }
            Err(_) => {
                warn!("empty database!");
            }
        };
        Ok(())
    }

    fn all(&mut self) -> Result<Vec<Item>> {
        let items = schema_migrations::dsl::schema_migrations
            .order(schema_migrations::dsl::version.asc())
            .load(self)?;
        Ok(items)
    }
    fn version(&mut self) -> Result<String> {
        let it: Version = sql_query("SELECT VERSION() AS value").get_result(self)?;
        Ok(it.value)
    }
}
