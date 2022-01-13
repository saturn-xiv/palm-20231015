use std::fmt;

use chrono::{NaiveDateTime, Utc};
use diesel::{
    connection::{Connection as DieselConnection, SimpleConnection},
    delete, insert_into,
    prelude::*,
    result::Error as DieselError,
    sql_query,
    sql_types::Text,
    update, RunQueryDsl,
};

use super::super::Result;
use super::{schema::schema_migrations, Connection};

#[derive(QueryableByName)]
pub struct Version {
    #[sql_type = "Text"]
    pub value: String,
}

pub struct Migration<'a> {
    pub name: &'a str,
    pub version: &'a str,
    pub up: &'a str,
    pub down: &'a str,
}

impl<'a> fmt::Display for Migration<'a> {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}-{}", self.version, self.name)
    }
}

pub trait Dao {
    fn load(&self, items: &[&Migration]) -> Result<()>;
    fn migrate(&self) -> Result<()>;
    fn rollback(&self) -> Result<()>;
    fn all(&self) -> Result<Vec<Item>>;
    fn count(&self) -> Result<i64>;
    fn version(&self) -> Result<String>;
}

#[derive(Queryable)]
pub struct Item {
    pub id: i32,
    // LANG=C date +%Y%m%d%H%M%S
    pub version: String,
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
    fn load(&self, items: &[&Migration]) -> Result<()> {
        self.batch_execute(include_str!("up.sql"))?;

        for it in items {
            debug!("find migration: {}", it);
            let c: i64 = schema_migrations::dsl::schema_migrations
                .filter(schema_migrations::dsl::version.eq(it.version))
                .filter(schema_migrations::dsl::name.eq(it.name))
                .count()
                .get_result(self)?;
            if c == 0 {
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
    fn count(&self) -> Result<i64> {
        let cnt: i64 = schema_migrations::dsl::schema_migrations
            .filter(schema_migrations::dsl::run_at.is_not_null())
            .count()
            .get_result(self)?;
        Ok(cnt)
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
