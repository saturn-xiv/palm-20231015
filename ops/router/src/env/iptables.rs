use std::fmt::Write as FmtWrite;

use diesel::sqlite::SqliteConnection as Db;
use palm::{
    network::{
        dnsmasq::Dhcpcd,
        iptables::{Flush, Forward, Iptables, Local, Persistent, SNat},
        BASH_FOOTER, BASH_HEADER,
    },
    ops::router::v1,
    Result,
};
use prost::Message;
use rand::{prelude::*, thread_rng};

use super::super::models::{rule::Dao as RuleDao, setting::Dao as SettingDao};

// https://help.ubuntu.com/community/IptablesHowTo
// https://www.digitalocean.com/community/tutorials/iptables-essentials-common-firewall-rules-and-commands
pub fn script(db: &mut Db) -> Result<String> {
    let lan: v1::Lan = SettingDao::get(db, None)?;
    let dmz: v1::Dmz = SettingDao::get(db, None)?;
    let wan = {
        let bound: v1::RouterBoundRequest = SettingDao::get(db, None)?;
        let mut items = Vec::new();
        for device in bound.items.iter() {
            let it: v1::Wan = SettingDao::get(db, Some(device))?;
            items.push(it);
        }
        items
    };
    let bound: v1::RouterBoundRequest = SettingDao::get(db, None)?;

    let mut buf = String::new();
    writeln!(buf, "{}", BASH_HEADER)?;

    Flush {
        input: false,
        output: true,
        forward: true,
    }
    .write(&mut buf)?;

    Local {
        lan: lan.mac.clone(),
        dmz: dmz.mac.clone(),
    }
    .write(&mut buf)?;

    // enable ssh
    for (device, _) in palm::network::ethernet::detect()?.iter() {
        v1::rule::InBound {
            device: device.clone(),
            tcp: true,
            port: 22,
            source: None,
        }
        .write(&mut buf)?;
    }

    for wan in wan.iter() {
        // IN
        for rule in RuleDao::by_group(db, &wan.device)?.iter() {
            if let Ok(ref it) = v1::rule::InBound::decode(&rule.content[..]) {
                it.write(&mut buf)?;
            }
        }

        // NAT
        for rule in RuleDao::by_group(db, &wan.device)?.iter() {
            if let Ok(ref it) = v1::rule::Nat::decode(&rule.content[..]) {
                it.write(&mut buf)?;
                if let Some(ref destination) = it.destination {
                    SNat {
                        tcp: it.tcp,
                        port: it.port,
                        lan: lan.address.parse()?,
                        destination: destination.clone(),
                    }
                    .write(&mut buf)?;
                }
            }
        }
    }

    {
        let mut wan = Vec::new();
        for it in bound.items.iter() {
            let it: v1::Wan = SettingDao::get(db, Some(it))?;
            wan.push(it);
        }
        let mut rng = thread_rng();

        let mut hosts = Vec::new();
        hosts.extend(lan.hosts()?);
        hosts.extend(dmz.hosts()?);
        for ip in hosts.iter() {
            let ip = ip.to_string();
            let wan = wan.choose_weighted(&mut rng, |x| x.capacity)?;
            Forward {
                lan: ip,
                wan: wan.device.clone(),
            }
            .write(&mut buf)?;
        }
    }

    Persistent {}.write(&mut buf)?;
    writeln!(buf, "{}", BASH_FOOTER)?;

    Ok(buf)
}

#[cfg(debug_assertions)]
pub fn apply(sh: &str) -> Result<()> {
    info!("apply fiewall rules:\n{}", sh);
    Ok(())
}

#[cfg(not(debug_assertions))]
pub fn apply(sh: &str) -> Result<()> {
    let file = tempfile::NamedTempFile::new()?;
    let file = file.path();
    std::fs::write(file, sh)?;
    {
        let out = std::process::Command::new("bash")
            .arg("-l")
            .arg(file)
            .output()?;
        let out = String::from_utf8(out.stdout)?;
        info!("{}", out);
    }
    Ok(())
}
