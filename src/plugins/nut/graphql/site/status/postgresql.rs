use chrono::NaiveDateTime;
use diesel::{sql_query, sql_types::Text, RunQueryDsl};
use juniper::GraphQLObject;
use serde::{Deserialize, Serialize};

use super::super::super::super::super::super::{orm::postgresql::Connection, Result};

#[derive(GraphQLObject, Serialize, Deserialize, Debug)]
pub struct PostgreSqlStatus {
    pub version: String,
    pub now: NaiveDateTime,
    pub databases: Vec<Database>,
}

#[derive(QueryableByName, PartialEq, Debug)]
struct Version {
    #[sql_type = "Text"]
    value: String,
}

#[derive(QueryableByName, PartialEq, Debug)]
struct Now {
    #[sql_type = "diesel::sql_types::Timestamptz"]
    value: NaiveDateTime,
}

#[derive(QueryableByName, PartialEq, Debug, GraphQLObject, Serialize, Deserialize)]
pub struct Database {
    #[sql_type = "Text"]
    pub name: String,
    #[sql_type = "Text"]
    pub size: String,
}
impl PostgreSqlStatus {
    pub fn new(db: &Connection) -> Result<Self> {
        let ver: Version = sql_query("SELECT VERSION() AS value").get_result(db)?;
        let now: Now = sql_query("SELECT CURRENT_TIMESTAMP AS value").get_result(db)?;
        let databases: Vec<Database> = sql_query(r###"SELECT pg_database.datname as "name", pg_size_pretty(pg_database_size(pg_database.datname)) AS "size" FROM pg_database ORDER by "size" DESC;"###).load(db)?;

        Ok(Self {
            version: ver.value,
            now: now.value,
            databases,
        })
    }
}
