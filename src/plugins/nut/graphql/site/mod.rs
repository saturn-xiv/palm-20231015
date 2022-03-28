pub mod baidu;
pub mod google;
pub mod info;
pub mod smtp;
pub mod status;

use std::ops::DerefMut;

use super::super::super::super::{cache::Provider as CacheProvider, Result};
use super::Context;

pub fn purge_cache(ctx: &Context) -> Result<()> {
    let mut ch = ctx.cache.get()?;
    let ch = ch.deref_mut();
    CacheProvider::clear(ch)?;
    Ok(())
}
