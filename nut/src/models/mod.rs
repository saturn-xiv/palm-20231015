pub mod attachment;
pub mod category;
pub mod leave_word;
pub mod locale;
pub mod log;
pub mod permission;
pub mod role;
pub mod setting;
pub mod shorter_link;
pub mod tag;
pub mod twilio;
pub mod user;
pub mod vote;

use std::fmt;
use std::str::FromStr;

use hyper::StatusCode;
use palm::{Error, HttpError, Result};

pub enum Operation {
    Read,
    Write,
    Create,
    Update,
    Remove,
}

impl Operation {
    pub const READ: &'static str = "read";
    pub const WRITE: &'static str = "write";
    pub const CREATE: &'static str = "create";
    pub const UPDATE: &'static str = "update";
    pub const REMOVE: &'static str = "remove";
}

impl fmt::Display for Operation {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Self::Read => fmt.write_str(Self::READ),
            Self::Write => fmt.write_str(Self::WRITE),
            Self::Create => fmt.write_str(Self::CREATE),
            Self::Update => fmt.write_str(Self::UPDATE),
            Self::Remove => fmt.write_str(Self::REMOVE),
        }
    }
}

impl FromStr for Operation {
    type Err = Error;

    fn from_str(s: &str) -> Result<Self> {
        match s {
            Self::READ => Ok(Self::Read),
            Self::WRITE => Ok(Self::Write),
            Self::CREATE => Ok(Self::Create),
            Self::UPDATE => Ok(Self::Update),
            Self::REMOVE => Ok(Self::Remove),
            _ => Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!("unknown operation {}", s)),
            ))),
        }
    }
}
