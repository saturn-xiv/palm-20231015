use std::default::Default;
use std::fmt;
use std::fmt::Display;
use std::time::Duration;

use ::redis::{
    cluster::{ClusterClient, ClusterClientBuilder, ClusterConnection},
    cmd, Commands, RedisResult, Value,
};
use serde::{de::DeserializeOwned, Deserialize, Serialize};

use super::super::Result;

pub type Connection = ClusterClient;
pub type Pool = r2d2::Pool<Connection>;
pub type PooledConnection = r2d2::PooledConnection<Connection>;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Config {
    pub hosts: Vec<String>,
    pub password: Option<String>,
    pub pool: Option<u32>,
}

impl Config {
    pub fn open(&self) -> Result<Pool> {
        let mut manager = ClusterClientBuilder::new(self.hosts.clone());
        if let Some(ref password) = self.password {
            manager = manager.password(password.clone());
        }
        let manager = manager.open()?;
        let pool = r2d2::Pool::builder()
            .max_size(self.pool.unwrap_or(32))
            .build(manager)?;
        Ok(pool)
    }
}

impl Default for Config {
    fn default() -> Self {
        Self {
            hosts: vec![
                "127.0.0.1:6371".to_string(),
                "127.0.0.1:6372".to_string(),
                "127.0.0.1:6373".to_string(),
                "127.0.0.1:6374".to_string(),
                "127.0.0.1:6375".to_string(),
                "127.0.0.1:6376".to_string(),
            ],
            password: None,
            pool: Some(32),
        }
    }
}

impl fmt::Display for Config {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:?}", self.hosts)
    }
}

// https://redis.io/commands
impl super::Provider for ClusterConnection {
    fn version(&mut self) -> Result<String> {
        let it = cmd("info").query::<Value>(self)?;
        Ok(format!("{:#?}", it))
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

    fn get<K, V, F>(&mut self, key: &K, fun: F, ttl: Duration) -> Result<V>
    where
        F: FnOnce() -> Result<V>,
        K: Display,
        V: DeserializeOwned + Serialize,
    {
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
}

impl super::Kv for ClusterConnection {
    fn set<K: Display, V: Serialize>(&mut self, key: &K, val: &V) -> Result<()> {
        let key = key.to_string();
        let val = flexbuffers::to_vec(val)?;
        let _: () = Commands::set(self, &key, val.as_slice())?;
        Ok(())
    }
    fn get<K: Display, V: DeserializeOwned>(&mut self, key: &K) -> Result<V> {
        let key = key.to_string();
        let val: Vec<u8> = Commands::get(self, &key)?;
        let val = flexbuffers::from_slice(val.as_slice())?;
        Ok(val)
    }
}
