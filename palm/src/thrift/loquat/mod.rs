#[allow(clippy::uninlined_format_args, clippy::match_single_binding)]
pub mod protocols;

use chrono::Duration;
use serde::{Deserialize, Serialize};

use super::super::{
    crypto::{Password, Secret},
    jwt::Jwt,
    Result,
};
use super::{Input, Output, Thrift};

use self::protocols::{
    AesSyncClient, HealthSyncClient, HmacSyncClient, JwtSyncClient, TAesSyncClient,
    THealthSyncClient, THmacSyncClient, TJwtSyncClient,
};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Config {
    pub host: String,
    pub port: u16,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 8080,
        }
    }
}

impl Config {
    const JWT: &str = "N6loquat2v15JwtIfE";
    const AES: &str = "N6loquat2v15AesIfE";
    const HMAC: &str = "N6loquat2v16HmacIfE";
    const HEALTH: &str = "N6loquat2v18HealthIfE";
    pub fn open(&self, service: &str) -> Result<(Input, Output)> {
        Thrift {
            host: self.host.clone(),
            port: self.port,
        }
        .open(service)
    }
}

impl Jwt for Config {
    fn sign(&self, subject: &str, audience: &str, ttl: Duration) -> Result<String> {
        let (i_prot, o_prot) = self.open(Self::JWT)?;
        let mut client = JwtSyncClient::new(i_prot, o_prot);
        let token = client.sign(subject.to_string(), audience.to_string(), ttl.num_seconds())?;
        Ok(token)
    }

    fn verify(&self, token: &str, audience: &str) -> Result<String> {
        let (i_prot, o_prot) = self.open(Self::JWT)?;
        let mut client = JwtSyncClient::new(i_prot, o_prot);
        let subject = client.verify(token.to_string(), audience.to_string())?;
        Ok(subject)
    }
}

impl Password for Config {
    fn sign(&self, plain: &[u8]) -> Result<Vec<u8>> {
        let (i_prot, o_prot) = self.open(Self::HMAC)?;
        let mut client = HmacSyncClient::new(i_prot, o_prot);
        let token = client.sign(plain.to_vec())?;
        Ok(token)
    }
    fn verify(&self, code: &[u8], plain: &[u8]) -> bool {
        if let Ok((i_prot, o_prot)) = self.open(Self::HMAC) {
            let mut client = HmacSyncClient::new(i_prot, o_prot);
            return client.verify(code.to_vec(), plain.to_vec()).is_ok();
        }
        false
    }
}

impl Secret for Config {
    fn encrypt(&self, plain: &[u8]) -> Result<(Vec<u8>, Vec<u8>)> {
        let (i_prot, o_prot) = self.open(Self::AES)?;
        let mut client = AesSyncClient::new(i_prot, o_prot);
        let token = client.encrypt(plain.to_vec())?;
        Ok((token, Vec::new()))
    }
    fn decrypt(&self, code: &[u8], _iv: &[u8]) -> Result<Vec<u8>> {
        let (i_prot, o_prot) = self.open(Self::AES)?;
        let mut client = AesSyncClient::new(i_prot, o_prot);
        let subject = client.decrypt(code.to_vec())?;
        Ok(subject)
    }
}

pub trait Health {
    fn check(&self) -> Result<()>;
}

impl Health for Config {
    fn check(&self) -> Result<()> {
        let (i_prot, o_prot) = self.open(Self::HEALTH)?;
        let mut client = HealthSyncClient::new(i_prot, o_prot);
        client.check()?;
        Ok(())
    }
}
