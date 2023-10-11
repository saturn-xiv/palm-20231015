pub mod loquat;

use ::thrift::{
    protocol::{TBinaryInputProtocol, TBinaryOutputProtocol, TMultiplexedOutputProtocol},
    transport::{
        ReadHalf, TFramedReadTransport, TFramedWriteTransport, TIoChannel, TTcpChannel, WriteHalf,
    },
};
use serde::{Deserialize, Serialize};

use super::Result;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Thrift {
    pub host: String,
    pub port: u16,
    #[serde(rename = "ca-file")]
    pub ca_file: String,
    #[serde(rename = "cert-file")]
    pub cert_file: String,
    #[serde(rename = "key-file")]
    pub key_file: String,
}

impl Default for Thrift {
    fn default() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 8080,
            ca_file: "ca.crt".to_string(),
            cert_file: "client.crt".to_string(),
            key_file: "client.key".to_string(),
        }
    }
}

pub type Input = TBinaryInputProtocol<TFramedReadTransport<ReadHalf<TTcpChannel>>>;
pub type Output = TMultiplexedOutputProtocol<
    TBinaryOutputProtocol<TFramedWriteTransport<WriteHalf<TTcpChannel>>>,
>;

impl Thrift {
    pub fn open(&self, service: &str) -> Result<(Input, Output)> {
        // TODO thrift-rs doesn't support tls yet

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
