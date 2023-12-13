use std::default::Default;
use std::fmt;
use std::fmt::Display;

use ::redis::{cluster::ClusterClient, cmd, Commands, RedisResult, Value};
use chrono::Duration;
use log::{debug, info, warn};
use serde::{de::DeserializeOwned, Deserialize, Serialize};

use super::super::Result;

pub type ClusterConnection = ::redis::cluster::ClusterConnection;
pub type Connection = ClusterClient;
pub type Pool = r2d2::Pool<Connection>;
pub type PooledConnection = r2d2::PooledConnection<Connection>;

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Host {
    host: String,
    port: u16,
}

impl fmt::Display for Host {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "redis://{}:{}", self.host, self.port)
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Config {
    pub pool: Option<u32>,
    pub namespace: String,
    pub nodes: Vec<Host>,
}

impl Config {
    pub fn open(&self) -> Result<Pool> {
        let client = {
            let nodes: Vec<String> = self.nodes.iter().map(|x| x.to_string()).collect();
            ClusterClient::new(nodes)?
        };

        let pool = r2d2::Pool::builder()
            .max_size(self.pool.unwrap_or(32))
            .build(client)?;
        Ok(pool)
    }
}

impl Default for Config {
    fn default() -> Self {
        Self {
            nodes: vec![
                Host {
                    host: "127.0.0.1".to_string(),
                    port: 6371,
                },
                Host {
                    host: "127.0.0.1".to_string(),
                    port: 6372,
                },
                Host {
                    host: "127.0.0.1".to_string(),
                    port: 6373,
                },
                Host {
                    host: "127.0.0.1".to_string(),
                    port: 6374,
                },
                Host {
                    host: "127.0.0.1".to_string(),
                    port: 6375,
                },
                Host {
                    host: "127.0.0.1".to_string(),
                    port: 6376,
                },
            ],
            namespace: "demo://".to_string(),
            pool: Some(32),
        }
    }
}

// https://redis.io/commands
impl super::Provider for ClusterConnection {
    fn version(&mut self) -> Result<String> {
        let val: Value = cmd("info").query(self)?;
        let mut items = Vec::new();

        if let Value::Bulk(it) = val {
            for it in it {
                if let Value::Bulk(it) = it {
                    for it in it {
                        if let Value::Data(it) = it {
                            items.push(String::from_utf8(it)?);
                        }
                    }
                }
            }
        }

        Ok(items.join("\n"))
    }
    fn keys(&mut self) -> Result<Vec<(String, String, i64)>> {
        let mut items = Vec::new();

        let keys: Vec<Value> = Commands::keys(self, "*")?;

        for it in keys.iter() {
            if let Value::Bulk(ref it) = it {
                if it.len() == 2 {
                    if let Value::Data(ref node) = it[0] {
                        let node = std::str::from_utf8(node)?;

                        if let Value::Bulk(ref keys) = it[1] {
                            for key in keys {
                                if let Value::Data(ref key) = key {
                                    let key = std::str::from_utf8(key)?;
                                    let ttl: i64 = self.ttl(key)?;
                                    items.push((node.to_string(), key.to_string(), ttl));
                                }
                            }
                        }
                    }
                }
            }
        }
        Ok(items)
    }

    fn fetch<K, V>(&mut self, key: &K) -> Result<V>
    where
        K: Display,
        V: DeserializeOwned,
    {
        let key = key.to_string();
        let buf: RedisResult<Vec<u8>> = Commands::get(self, &key);
        let it = flexbuffers::from_slice(buf?.as_slice())?;
        Ok(it)
    }
    fn set<K, V>(&mut self, key: &K, val: &V, ttl: Duration) -> Result<()>
    where
        K: Display,
        V: Serialize,
    {
        let key = key.to_string();
        self.set_ex(
            &key,
            flexbuffers::to_vec(val)?.as_slice(),
            ttl.num_seconds() as u64,
        )?;
        Ok(())
    }
    // #[cfg(debug_assertions)]
    // fn get<K, V, F>(&mut self, _key: &K, fun: F, _ttl: Duration) -> Result<V>
    // where
    //     F: FnOnce() -> Result<V>,
    //     K: Display,
    //     V: DeserializeOwned + Serialize,
    // {
    //     fun()
    // }
    // #[cfg(not(debug_assertions))]
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
        self.set_ex(
            &key,
            flexbuffers::to_vec(&val)?.as_slice(),
            ttl.num_seconds() as u64,
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
        let keys: Vec<String> = Commands::keys(self, &format!("{key}*"))?;
        self.del::<_, ()>(&keys)?;
        Ok(())
    }
}
