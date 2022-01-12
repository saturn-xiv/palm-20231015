use std::ops::DerefMut;

use super::super::{cache::Provider, env::Config, Result};

pub fn list(cfg: &Config) -> Result<()> {
    let ch = cfg.redis.open()?;
    let mut ch = ch.get()?;
    let ch = ch.deref_mut();
    let items = ch.keys()?;
    println!("{:<14} KEY", "TTL");
    for (key, ttl) in items {
        println!("{:<14} {}", ttl, key);
    }
    Ok(())
}

pub fn clear(cfg: &Config) -> Result<()> {
    let ch = cfg.redis.open()?;
    let mut ch = ch.get()?;
    let ch = ch.deref_mut();
    ch.clear()?;
    Ok(())
}
