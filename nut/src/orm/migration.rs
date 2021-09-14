use std::fmt;

use chrono::NaiveDateTime;
use diesel::sql_types::Text;

use super::super::Result;

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
    fn version(&self) -> Result<String>;
}

#[derive(Queryable)]
pub struct Item {
    pub id: i32,
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
            "{:<14} {:<32} {}",
            self.version,
            self.name,
            match self.run_at {
                Some(v) => v.to_string(),
                None => "N/A".to_string(),
            },
        )
    }
}
