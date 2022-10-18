#[macro_use]
extern crate log;

pub mod app;
pub mod mysql;
pub mod oracle;
pub mod postgresql;
pub mod rsync;

use std::error::Error as StdError;
use std::result::Result as StdResult;

pub type Error = Box<dyn StdError + Send + Sync>;
pub type Result<T> = StdResult<T, Error>;
