use std::default::Default;
use std::fmt;
use std::fmt::Display;
use std::time::Duration;

use ::redis::{cmd, Client, Commands};
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
            port: 6379,
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
impl super::Provider for redis::Connection {
    fn version(&mut self) -> Result<String> {
        let it: String = cmd("info").query::<String>(self)?;
        Ok(it)
    }
    fn keys(&mut self) -> Result<Vec<(String, i64)>> {
        let mut items = Vec::new();
        let keys: Vec<String> = Commands::keys(self, "*")?;
        for it in keys {
            let ttl = self.ttl(&it)?;
            items.push((it, ttl));
        }
        Ok(items)
    }
    #[cfg(debug_assertions)]
    fn get<K, V, F>(&mut self, _key: &K, fun: F, _ttl: &Duration) -> Result<V>
    where
        F: FnOnce() -> Result<V>,
        K: Display,
        V: DeserializeOwned + Serialize,
    {
        fun()
    }
    #[cfg(not(debug_assertions))]
    fn get<K, V, F>(&mut self, key: &K, fun: F, ttl: &Duration) -> Result<V>
    where
        F: FnOnce() -> Result<V>,
        K: Display,
        V: DeserializeOwned + Serialize,
    {
        use ::redis::RedisResult;

        let key = key.to_string();
        let buf: RedisResult<Vec<u8>> = Commands::get(self, &key);
        if let Ok(buf) = buf {
            if let Ok(val) = flexbuffers::from_slice(buf.as_slice()) {
                return Ok(val);
            }
        }
        debug!("cache expire, set {:?} {:?}", key, ttl);
        let val = fun()?;
        let _: () = self.set_ex(
            &key,
            flexbuffers::to_vec(&val)?.as_slice(),
            ttl.as_secs() as usize,
        )?;
        Ok(val)
    }

    fn clear(&mut self) -> Result<()> {
        let rst = cmd("flushall").query::<String>(self)?;
        info!("{}", rst);
        Ok(())
    }

    fn heartbeat(&mut self) -> Result<()> {
        let rst = cmd("ping").query::<String>(self)?;
        info!("{}", rst);
        Ok(())
    }

    fn destroy<K: Display>(&mut self, key: &K) -> Result<()> {
        warn!("clear cache with prefix {}", key);
        let keys: Vec<String> = Commands::keys(self, &format!("{}*", key))?;
        let _: () = self.del(&keys)?;
        Ok(())
    }
}
