use chrono::Duration;

use super::super::{
    crypto::{Password, Secret},
    jwt::Jwt,
    loquat::{
        AesSyncClient, HealthSyncClient, HmacSyncClient, JwtSyncClient, TAesSyncClient,
        THealthSyncClient, THmacSyncClient, TJwtSyncClient,
    },
    Result,
};
use super::Thrift;

const JWT: &str = "N6loquat10JwtHandlerE";
const AES: &str = "N6loquat10AesHandlerE";
const HMAC: &str = "N6loquat11HmacHandlerE";
const HEALTH: &str = "N6loquat13HealthHandlerE";

impl Jwt for Thrift {
    fn sign(&self, subject: &str, audience: &str, ttl: Duration) -> Result<String> {
        let (i_prot, o_prot) = self.open(JWT)?;
        let mut client = JwtSyncClient::new(i_prot, o_prot);
        let token = client.sign(subject.to_string(), audience.to_string(), ttl.num_seconds())?;
        Ok(token)
    }

    fn verify(&self, token: &str, audience: &str) -> Result<String> {
        let (i_prot, o_prot) = self.open(JWT)?;
        let mut client = JwtSyncClient::new(i_prot, o_prot);
        let subject = client.verify(token.to_string(), audience.to_string())?;
        Ok(subject)
    }
}

impl Password for Thrift {
    fn sign(&self, plain: &[u8]) -> Result<Vec<u8>> {
        let (i_prot, o_prot) = self.open(HMAC)?;
        let mut client = HmacSyncClient::new(i_prot, o_prot);
        let token = client.sign(plain.to_vec())?;
        Ok(token)
    }
    fn verify(&self, code: &[u8], plain: &[u8]) -> bool {
        if let Ok((i_prot, o_prot)) = self.open(HMAC) {
            let mut client = HmacSyncClient::new(i_prot, o_prot);
            return client.verify(code.to_vec(), plain.to_vec()).is_ok();
        }
        false
    }
}

impl Secret for Thrift {
    fn encrypt(&self, plain: &[u8]) -> Result<(Vec<u8>, Vec<u8>)> {
        let (i_prot, o_prot) = self.open(AES)?;
        let mut client = AesSyncClient::new(i_prot, o_prot);
        let token = client.encrypt(plain.to_vec())?;
        Ok((token, Vec::new()))
    }
    fn decrypt(&self, code: &[u8], _iv: &[u8]) -> Result<Vec<u8>> {
        let (i_prot, o_prot) = self.open(AES)?;
        let mut client = AesSyncClient::new(i_prot, o_prot);
        let subject = client.decrypt(code.to_vec())?;
        Ok(subject)
    }
}

pub trait Health {
    fn check(&self) -> Result<()>;
}

impl Health for Thrift {
    fn check(&self) -> Result<()> {
        let (i_prot, o_prot) = self.open(HEALTH)?;
        let mut client = HealthSyncClient::new(i_prot, o_prot);
        client.check()?;
        Ok(())
    }
}
