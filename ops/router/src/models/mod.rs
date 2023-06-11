pub mod host;
pub mod rule;
pub mod setting;
pub mod user;

use std::net::{IpAddr, Ipv4Addr};

use palm::{crypto::Password, Result};
use serde::{Deserialize, Serialize};
use validator::{validate_length, Validate, ValidationErrors};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Administrator {}

impl ops_router::v1::UserProfile {
    pub fn password<P: Password>(hmac: &P, plain: &str) -> Result<String> {
        let buf = hmac.sign(plain.as_bytes())?;
        let it = String::from_utf8_lossy(&buf[..]);
        Ok(it.to_string())
    }
    pub fn verify<P: Password>(&self, hmac: &P, code: &str) -> bool {
        hmac.verify(code.as_bytes(), self.password.as_bytes())
    }
}

impl Validate for ops_router::v1::UserProfile {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        if validate_length(&self.nickname, Some(2), Some(32), None)
            && validate_length(&self.password, Some(6), Some(32), None)
        {
            return Ok(());
        }
        Err(ValidationErrors::new())
    }
}
