use std::fmt::{Error as FmtError, Write};
use std::process::Command;
use std::result::Result as StdResult;

use super::super::{ops::router as ops_router, Result};

#[cfg(not(debug_assertions))]
pub fn apply() -> Result<()> {
    warn!("apply iptables settings");
    let out = Command::new("netfilter-persistent").arg("save").output()?;
    let out = String::from_utf8(out.stdout)?;
    info!("{}", out);
    Ok(())
}

#[cfg(debug_assertions)]
pub fn apply() -> Result<()> {
    info!("");
    Ok(())
}

pub fn status() -> Result<Vec<String>> {
    let out = Command::new("iptables").arg("--list").output()?;
    let out = String::from_utf8(out.stdout)?;

    let mut items = Vec::new();
    for it in out.lines() {
        items.push(it.to_string());
    }
    Ok(items)
}

pub trait Iptables {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError>;
}

pub struct Persistent {}

impl Iptables for Persistent {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        writeln!(
            buf,
            r###"
netfilter-persistent save
echo $(pwgen 32 1) | chpasswd
"###
        )?;
        Ok(())
    }
}
pub struct Input(pub String);

impl Iptables for Input {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        let device = &self.0;
        writeln!(buf, "iptables -A -i {device} INPUT DROP")?;
        Ok(())
    }
}
pub struct Output(pub String);

impl Iptables for Output {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        let device = &self.0;
        writeln!(buf, "iptables -A -o {device} OUTPUT ACCEPT")?;
        Ok(())
    }
}

pub struct Flush;

impl Iptables for Flush {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        writeln!(
            buf,
            r###"
# Resetting rules
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X
iptables -t mangle -F
iptables -t mangle -X
iptables -t raw -F
iptables -t raw -X
iptables -t security -F
iptables -t security -X
"###
        )?;
        Ok(())
    }
}

pub struct Nat {
    pub wan: String,
    pub lan: String,
}

impl Iptables for Nat {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        let wan = &self.wan;
        let lan = &self.lan;
        writeln!(
            buf,
            r###"
# Allowing Loopback Connections
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT

# Allowing ping
iptables -A INPUT -p icmp --icmp-type echo-request -j ACCEPT
iptables -A OUTPUT -p icmp --icmp-type echo-request -j ACCEPT
iptables -A INPUT -p icmp --icmp-type echo-reply -j ACCEPT
iptables -A OUTPUT -p icmp --icmp-type echo-reply -j ACCEPT

# Allowing Established and Related Incoming Connections
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
# Allowing Established Outgoing Connections
iptables -A OUTPUT -m conntrack --ctstate ESTABLISHED -j ACCEPT

# Allowing Internal Network to access External
iptables -A FORWARD -i {wan} -o {lan} -j ACCEPT
# Dropping Invalid Packets
iptables -A INPUT -m conntrack --ctstate INVALID -j DROP        
"###
        )?;
        Ok(())
    }
}
pub struct Block {
    pub device: String,
    pub source: String,
}

impl Iptables for Block {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        let device = &self.device;
        let source = &self.source;
        writeln!(buf, "iptables -A INPUT -i {device} -s {source} -j DROP")?;
        Ok(())
    }
}

impl Iptables for ops_router::v1::rule::InBound {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        let protocol = if self.tcp { "tcp" } else { "udp" };
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
