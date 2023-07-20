#[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
pub mod v1 {
    tonic::include_proto!("palm.ops.router.v1");
}

use std::process::Command;

use super::super::{
    network::{iptables::rule::Rule as IptablesRule, Dmz, Ip, Lan, Wan, WanPool},
    Result,
};

impl From<Ip> for v1::wan::Ip {
    fn from(x: Ip) -> Self {
        match x {
            Ip::Dhcp { v6 } => v1::wan::Ip::Dhcp(v1::Dhcp { v6 }),
            Ip::Static {
                ref address,
                ref gateway,
                ref dns1,
                ref dns2,
            } => v1::wan::Ip::Static(v1::Static {
                address: address.clone(),
                gateway: gateway.clone(),
                dns1: dns1.clone(),
                dns2: dns2.clone(),
            }),
        }
    }
}

impl From<Wan> for v1::Wan {
    fn from(x: Wan) -> Self {
        Self {
            name: x.name.clone(),
            device: x.device.clone(),
            ip: Some(x.ip.into()),
            enable: x.enable,
            mac: x.mac.clone(),
            metric: x.metric as u32,
        }
    }
}

impl From<WanPool> for v1::WanPool {
    fn from(x: WanPool) -> Self {
        Self {
            items: x
                .items
                .iter()
                .map(|(d, w)| v1::wan_pool::Item {
                    device: d.clone(),
                    weight: *w as u32,
                })
                .collect::<_>(),
        }
    }
}

impl From<Lan> for v1::Lan {
    fn from(x: Lan) -> Self {
        Self {
            device: x.device.clone(),
            address: x.address.clone(),
            mac: x.mac.clone(),
            metric: x.metric as u32,
        }
    }
}

impl From<Dmz> for v1::Dmz {
    fn from(x: Dmz) -> Self {
        Self {
            device: x.device.clone(),
            address: x.address.clone(),
            mac: x.mac.clone(),
            metric: x.metric as u32,
        }
    }
}

impl From<IptablesRule> for v1::rule::Payload {
    fn from(x: IptablesRule) -> Self {
        match x {
            IptablesRule::In {
                device,
                tcp,
                port,
                source,
            } => Self::In(v1::rule::InBound {
                device,
                tcp,
                port: port as u32,
                source,
            }),
            IptablesRule::Nat {
                source_device,
                source_port,
                tcp,
                destination_port,
                destination_ip,
            } => Self::Nat(v1::rule::Nat {
                source: Some(v1::rule::nat::Source {
                    device: source_device,
                    port: source_port as u32,
                }),
                tcp,
                destination: Some(v1::rule::nat::Destination {
                    ip: destination_ip,
                    port: destination_port as u32,
                }),
            }),
        }
    }
}

impl v1::router_status_response::Ip {
    pub fn new() -> Result<Self> {
        Ok(Self {
            address: {
                let out = Command::new("ip").arg("address").output()?;
                String::from_utf8(out.stdout)?
            },
            route: {
                let out = Command::new("ip").arg("route").arg("list").output()?;
                String::from_utf8(out.stdout)?
            },
            rule: {
                let out = Command::new("iptables").arg("-L").arg("-n").output()?;
                String::from_utf8(out.stdout)?
            },
        })
    }
}
