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
    pub thrift: Thrift,
    pub token: String,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            thrift: Thrift::default(),
            token: "change-me".to_string(),
        }
    }
}

impl Config {
    const JWT: &'static str = "N6loquat2v15JwtIfE";
    const AES: &'static str = "N6loquat2v15AesIfE";
    const HMAC: &'static str = "N6loquat2v16HmacIfE";
    const HEALTH: &'static str = "N6loquat2v18HealthIfE";
    pub fn open(&self, service: &str) -> Result<(Input, Output)> {
        self.thrift.open(service)
    }
}

impl Jwt for Config {
    fn sign(&self, subject: &str, audience: &str, ttl: Duration) -> Result<String> {
        let (i_prot, o_prot) = self.open(Self::JWT)?;
        let mut client = JwtSyncClient::new(i_prot, o_prot);
        let token = client.sign(
            self.token.clone(),
            subject.to_string(),
            audience.to_string(),
            ttl.num_seconds(),
        )?;
        Ok(token)
    }

    fn verify(&self, token: &str, audience: &str) -> Result<String> {
        let (i_prot, o_prot) = self.open(Self::JWT)?;
        let mut client = JwtSyncClient::new(i_prot, o_prot);
        let subject = client.verify(self.token.clone(), token.to_string(), audience.to_string())?;
        Ok(subject)
    }
}

impl Password for Config {
    fn sign(&self, plain: &[u8]) -> Result<Vec<u8>> {
        let (i_prot, o_prot) = self.open(Self::HMAC)?;
        let mut client = HmacSyncClient::new(i_prot, o_prot);
        let token = client.sign(self.token.clone(), plain.to_vec())?;
        Ok(token)
    }
    fn verify(&self, code: &[u8], plain: &[u8]) -> bool {
        if let Ok((i_prot, o_prot)) = self.open(Self::HMAC) {
            let mut client = HmacSyncClient::new(i_prot, o_prot);
            return client
                .verify(self.token.clone(), code.to_vec(), plain.to_vec())
                .is_ok();
        }
        false
    }
}

impl Secret for Config {
    fn encrypt(&self, plain: &[u8]) -> Result<(Vec<u8>, Vec<u8>)> {
        let (i_prot, o_prot) = self.open(Self::AES)?;
        let mut client = AesSyncClient::new(i_prot, o_prot);
        let token = client.encrypt(self.token.clone(), plain.to_vec())?;
        Ok((token, Vec::new()))
    }
    fn decrypt(&self, code: &[u8], _iv: &[u8]) -> Result<Vec<u8>> {
        let (i_prot, o_prot) = self.open(Self::AES)?;
        let mut client = AesSyncClient::new(i_prot, o_prot);
        let subject = client.decrypt(self.token.clone(), code.to_vec())?;
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
        client.check(self.token.clone())?;
        Ok(())
    }
}
