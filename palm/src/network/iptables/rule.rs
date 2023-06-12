use std::fmt::{Error as FmtError, Write};
use std::result::Result as StdResult;

use serde::{Deserialize, Serialize};

use super::Iptables;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum Rule {
    In {
        device: String,
        tcp: bool,
        port: u16,
        source: Option<String>,
    },
    Nat {
        source_device: String,
        source_port: u16,
        tcp: bool,
        destination_port: u16,
        destination_ip: String,
    },
}

impl Iptables for Rule {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        match *self {
            Self::In {
                ref device,
                tcp,
                port,
                ref source,
            } => {
                let protocol = to_protocol!(tcp);
                match source {
                    Some(ref source) => {
                        writeln!(buf, "iptables -A INPUT -i {device} -p {protocol} -s {source} --dport {port} -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT")?;
                        writeln!(buf, "iptables -A OUTPUT -o {device} -p {protocol} --sport {port} -m conntrack --ctstate ESTABLISHED -j ACCEPT")?;
                    }
                    None => {
                        writeln!(buf, "iptables -A INPUT -i {device} -p {protocol} --dport {port} -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT")?;
                        writeln!(buf, "iptables -A OUTPUT -o {device} -p {protocol} --sport {port} -m conntrack --ctstate ESTABLISHED -j ACCEPT")?;
                    }
                };
            }
            Self::Nat {
                ref source_device,
                source_port,
                tcp,
                destination_port,
                ref destination_ip,
            } => {
                let protocol = to_protocol!(tcp);

                writeln!(buf, "iptables -t nat -A PREROUTING -i {source_device} -p {protocol} --dport {source_port} -j DNAT --to-destination {destination_ip}:{destination_port}")?;
            }
        };

        Ok(())
    }
}
