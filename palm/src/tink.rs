use chrono::Duration;
use thrift::{
    protocol::{TBinaryInputProtocol, TBinaryOutputProtocol, TMultiplexedOutputProtocol},
    transport::{
        ReadHalf, TBufferedReadTransport, TBufferedWriteTransport, TIoChannel, TTcpChannel,
        WriteHalf,
    },
};

use super::{
    loquat::{
        AesSyncClient, HmacSyncClient, JwtSyncClient, TAesSyncClient, THmacSyncClient,
        TJwtSyncClient,
    },
    Result,
};

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

type Input = TBinaryInputProtocol<TBufferedReadTransport<ReadHalf<TTcpChannel>>>;
type Output = TMultiplexedOutputProtocol<
    TBinaryOutputProtocol<TBufferedWriteTransport<WriteHalf<TTcpChannel>>>,
>;

impl Loquat {
    const JWT: &str = "N6loquat10JwtHandlerE";
    const AES: &str = "N6loquat10AesHandlerE";
    const HMAC: &str = "N6loquat11HmacHandlerE";

    pub fn jwt_sign(&self, zone: &str, subject: &str, ttl: Duration) -> Result<String> {
        let (i_prot, o_prot) = self.open(Self::JWT)?;
        let mut client = JwtSyncClient::new(i_prot, o_prot);
        let token = client.sign(zone.to_string(), subject.to_string(), ttl.num_seconds())?;
        Ok(token)
    }

    pub fn jwt_verify(&self, zone: &str, token: &str) -> Result<String> {
        let (i_prot, o_prot) = self.open(Self::JWT)?;
        let mut client = JwtSyncClient::new(i_prot, o_prot);
        let subject = client.verify(zone.to_string(), token.to_string())?;
        Ok(subject)
    }

    pub fn hmac_sign(&self, zone: &str, plain: &str) -> Result<String> {
        let (i_prot, o_prot) = self.open(Self::HMAC)?;
        let mut client = HmacSyncClient::new(i_prot, o_prot);
        let token = client.sign(zone.to_string(), plain.to_string())?;
        Ok(token)
    }

    pub fn hmac_verify(&self, zone: &str, code: &str, plain: &str) -> Result<()> {
        let (i_prot, o_prot) = self.open(Self::HMAC)?;
        let mut client = HmacSyncClient::new(i_prot, o_prot);
        client.verify(zone.to_string(), code.to_string(), plain.to_string())?;
        Ok(())
    }

    pub fn aes_encrypt(&self, zone: &str, plain: &str) -> Result<String> {
        let (i_prot, o_prot) = self.open(Self::AES)?;
        let mut client = AesSyncClient::new(i_prot, o_prot);
        let token = client.encrypt(zone.to_string(), plain.to_string())?;
        Ok(token)
    }

    pub fn aes_decrypt(&self, zone: &str, code: &str) -> Result<String> {
        let (i_prot, o_prot) = self.open(Self::AES)?;
        let mut client = AesSyncClient::new(i_prot, o_prot);
        let subject = client.decrypt(zone.to_string(), code.to_string())?;
        Ok(subject)
    }

    fn open(&self, service: &str) -> Result<(Input, Output)> {
        let mut ch = TTcpChannel::new();
        ch.open(format!("{}:{}", self.host, self.port))?;

        let (i_chan, o_chan) = ch.split()?;

        let i_prot = TBinaryInputProtocol::new(TBufferedReadTransport::new(i_chan), true);
        let o_prot = TMultiplexedOutputProtocol::new(
            service,
            TBinaryOutputProtocol::new(TBufferedWriteTransport::new(o_chan), true),
        );
        Ok((i_prot, o_prot))
    }
}
