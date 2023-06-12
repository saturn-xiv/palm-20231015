pub mod host;
pub mod rule;
pub mod setting;
pub mod user;

use palm::{crypto::Password, Result};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Administrator {
    pub nickname: String,
    pub password: Vec<u8>,
}

impl Administrator {
    pub fn password<P: Password>(hmac: &P, plain: &str) -> Result<Vec<u8>> {
        let buf = hmac.sign(plain.as_bytes())?;
        Ok(buf)
    }
    pub fn verify<P: Password>(&self, hmac: &P, plain: &str) -> bool {
        hmac.verify(&self.password, plain.as_bytes())
    }

    pub const ACTION_SIGN_IN: &str = "sign-in";
}
