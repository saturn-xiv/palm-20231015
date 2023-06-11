use std::fmt::{Error as FmtError, Write};
use std::result::Result as StdResult;

use serde::{Deserialize, Serialize};

use super::Iptables;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct NatBound {
    pub source_device: String,
    pub source_port: u16,
    pub tcp: bool,
    pub destination_port: u16,
    pub destination_ip: String,
}

impl Iptables for NatBound {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        let source_port = self.source_port;
        let source_device = &self.source_device;
        let protocol = to_protocol!(self.tcp);
        let destination_port = self.destination_port;
        let destination_ip = &self.destination_ip;

        writeln!(buf, "iptables -t nat -A PREROUTING -i {source_device} -p {protocol} --dport {source_port} -j DNAT --to-destination {destination_ip}:{destination_port}")?;

        Ok(())
    }
}
