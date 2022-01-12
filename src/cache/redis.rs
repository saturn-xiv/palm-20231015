use std::default::Default;
use std::fmt;
use std::fmt::Display;
use std::time::Duration;

use ::redis::{cmd, Client, Commands, RedisResult, Value};
use serde::{de::DeserializeOwned, Deserialize, Serialize};

use super::super::Result;

pub type Connection = Client;
pub type Pool = r2d2::Pool<Connection>;
pub type PooledConnection = r2d2::PooledConnection<Connection>;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Config {
    pub host: String,
    pub port: u16,
    pub db: u8,
    pub pool: Option<u32>,
}

impl Config {
    pub fn open(&self) -> Result<Pool> {
        let client = Client::open(self.to_string())?;

        let pool = r2d2::Pool::builder()
            .max_size(self.pool.unwrap_or(32))
            .build(client)?;
        Ok(pool)
    }
}

impl Default for Config {
    fn default() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 6371,
            db: 0,
            pool: Some(32),
        }
    }
}

impl fmt::Display for Config {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "redis://{}:{}/{}", self.host, self.port, self.db)
    }
}

// https://redis.io/commands
impl super::Provider for Connection {
    fn version(&self) -> Result<String> {
        let mut con = self.get_connection()?;
        let it = cmd("info").query::<Value>(&mut con)?;
        Ok(format!("{:#?}", it))
    }
    fn keys(&self) -> Result<Vec<(String, i64)>> {
        let mut con = self.get_connection()?;
        let mut items = Vec::new();
        let keys: Vec<String> = Commands::keys(&mut con, "*")?;
        for it in keys {
            let ttl = con.ttl(&it)?;
            items.push((it, ttl));
        }
        Ok(items)
    }

    fn get<K, V, F>(&self, key: &K, fun: F, ttl: Duration) -> Result<V>
    where
        F: FnOnce() -> Result<V>,
        K: Display,
        V: DeserializeOwned + Serialize,
    {
        let mut con = self.get_connection()?;
        let key = key.to_string();
        let buf: RedisResult<Vec<u8>> = Commands::get(&mut con, &key);
        if let Ok(buf) = buf {
            if let Ok(val) = flexbuffers::from_slice(buf.as_slice()) {
                return Ok(val);
            }
        }
        debug!("cache expire, set {:?} {:?}", key, ttl);
        let val = fun()?;
        let _: () = con.set_ex(
            &key,
            flexbuffers::to_vec(&val)?.as_slice(),
            ttl.as_secs() as usize,
        )?;
        Ok(val)
    }

    fn clear(&self) -> Result<()> {
        let mut con = self.get_connection()?;
        let rst = cmd("flushall").query::<String>(&mut con)?;
        info!("{}", rst);
        Ok(())
    }

    fn heartbeat(&self) -> Result<()> {
        let mut con = self.get_connection()?;
        let rst = cmd("ping").query::<String>(&mut con)?;
        info!("{}", rst);
        Ok(())
    }
}
