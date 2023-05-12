pub mod loquat;
pub mod musa;

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
}

impl Default for Thrift {
    fn default() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 8080,
        }
    }
}

type Input = TBinaryInputProtocol<TFramedReadTransport<ReadHalf<TTcpChannel>>>;
type Output = TMultiplexedOutputProtocol<
    TBinaryOutputProtocol<TFramedWriteTransport<WriteHalf<TTcpChannel>>>,
>;

impl Thrift {
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
