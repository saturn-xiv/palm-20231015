use chrono::Duration;
use serde::{Deserialize, Serialize};
use thrift::{
    protocol::{TBinaryInputProtocol, TBinaryOutputProtocol, TMultiplexedOutputProtocol},
    transport::{
        ReadHalf, TFramedReadTransport, TFramedWriteTransport, TIoChannel, TTcpChannel, WriteHalf,
    },
};

use crate::loquat::{HealthSyncClient, THealthSyncClient};

use super::{
    crypto::{Password, Secret},
    jwt::Jwt,
    loquat::{
        AesSyncClient, HmacSyncClient, JwtSyncClient, TAesSyncClient, THmacSyncClient,
        TJwtSyncClient,
    },
    Result,
};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Loquat {
    pub host: String,
    pub port: u16,
}

impl Default for Loquat {
    fn default() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 8080,
        }
    }
}

impl Jwt for Loquat {
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

impl Password for Loquat {
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

impl Secret for Loquat {
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

type Input = TBinaryInputProtocol<TFramedReadTransport<ReadHalf<TTcpChannel>>>;
type Output = TMultiplexedOutputProtocol<
    TBinaryOutputProtocol<TFramedWriteTransport<WriteHalf<TTcpChannel>>>,
>;

impl Loquat {
    const JWT: &str = "N6loquat10JwtHandlerE";
    const AES: &str = "N6loquat10AesHandlerE";
    const HMAC: &str = "N6loquat11HmacHandlerE";
    const HEALTH: &str = "N6loquat13HealthHandlerE";

    fn open(&self, service: &str) -> Result<(Input, Output)> {
        let mut ch = TTcpChannel::new();
        ch.open(format!("{}:{}", self.host, self.port))?;

        let (i_chan, o_chan) = ch.split()?;

        let i_prot = TBinaryInputProtocol::new(TFramedReadTransport::new(i_chan), true);
        let o_prot = TMultiplexedOutputProtocol::new(
            service,
            TBinaryOutputProtocol::new(TFramedWriteTransport::new(o_chan), true),
        );
        Ok((i_prot, o_prot))
    }
}

pub trait Health {
    fn check(&self) -> Result<()>;
}
impl Health for Loquat {
    fn check(&self) -> Result<()> {
        let (i_prot, o_prot) = self.open(Self::HEALTH)?;
        let mut client = HealthSyncClient::new(i_prot, o_prot);
        client.check()?;
        Ok(())
    }
}
