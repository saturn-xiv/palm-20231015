use std::fmt::{Error as FmtError, Write};
use std::result::Result as StdResult;

use serde::{Deserialize, Serialize};

use super::Iptables;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct InBound {
    pub device: String,
    pub tcp: bool,
    pub port: u16,
    pub source: Option<String>,
}

impl Iptables for InBound {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        let protocol = to_protocol!(self.tcp);
        let port = self.port;
        let device = &self.device;
        match self.source {
            Some(ref source) => {
                writeln!(buf, "iptables -A INPUT -i {device} -p {protocol} -s {source} --dport {port} -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT")?;
                writeln!(buf, "iptables -A OUTPUT -o {device} -p {protocol} --sport {port} -m conntrack --ctstate ESTABLISHED -j ACCEPT")?;
            }
            None => {
                writeln!(buf, "iptables -A INPUT -i {device} -p {protocol} --dport {port} -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT")?;
                writeln!(buf, "iptables -A OUTPUT -o {device} -p {protocol} --sport {port} -m conntrack --ctstate ESTABLISHED -j ACCEPT")?;
            }
        };
        Ok(())
    }
}
