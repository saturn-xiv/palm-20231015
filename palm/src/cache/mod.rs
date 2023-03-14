pub mod redis;

use std::fmt::Display;
use std::time::Duration;

use serde::{de::DeserializeOwned, ser::Serialize};

use super::Result;

pub trait Provider {
    fn get<K, V, F>(&mut self, key: &K, fun: F, ttl: Duration) -> Result<V>
    where
        F: FnOnce() -> Result<V>,
        K: Display,
        V: DeserializeOwned + Serialize;
    fn clear(&mut self) -> Result<()>;
    fn keys(&mut self) -> Result<Vec<(String, String, i64)>>;
    fn version(&mut self) -> Result<String>;
    fn heartbeat(&mut self) -> Result<()>;
    fn destroy<K: Display>(&mut self, key: &K) -> Result<()>;
}
