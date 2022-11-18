use diesel::{sql_query, RunQueryDsl};
use palm::Result;

use super::super::Version;
use super::Connection;

pub trait Dao {
    fn version(&mut self) -> Result<String>;
}

impl Dao for Connection {
    fn version(&mut self) -> Result<String> {
        let it: Version = sql_query("SELECT VERSION() AS value").get_result(self)?;
        Ok(it.value)
    }
}
