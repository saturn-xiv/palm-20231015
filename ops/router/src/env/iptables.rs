use std::{fmt::Write as FmtWrite, str::FromStr};

use diesel::sqlite::SqliteConnection as Db;
use ipnet::Ipv4Net;
use palm::{
    network::{
        iptables::{Flush, Forward, Iptables, Local, Persistent},
        BASH_FOOTER, BASH_HEADER,
    },
    ops::router::v1,
    Result,
};
use prost::Message;

use super::super::models::{rule::Dao as RuleDao, setting::Dao as SettingDao};

// https://help.ubuntu.com/community/IptablesHowTo
// https://www.digitalocean.com/community/tutorials/iptables-essentials-common-firewall-rules-and-commands
pub fn script(db: &mut Db) -> Result<String> {
    let lan: Option<v1::Lan> = SettingDao::get(db, None).ok();
    let dmz: Option<v1::Dmz> = SettingDao::get(db, None).ok();
    let wan_pool: v1::WanPool = SettingDao::get(db, None).unwrap_or_default();
    let wan = {
        let mut items = Vec::new();
        for (device, _) in palm::network::ethernet::detect().unwrap_or_default().iter() {
            if let Ok(it) = SettingDao::get::<v1::Wan>(db, Some(device)) {
                items.push(it);
            } else {
                warn!("ethernet {device} is not set");
            }
        }
        items
    };

    let mut buf = String::new();
    writeln!(buf, "{BASH_HEADER}")?;

    Flush {
        input: false,
        output: true,
        forward: false,
    }
    .write(&mut buf)?;

    Local {
        lan: lan.clone().map(|x| x.device),
        dmz: dmz.clone().map(|x| x.device),
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
            }
        }
    }

    // forward
    {
        for it in wan_pool.items.iter() {
            if let Some(ref lan) = lan {
                Forward {
                    lan: Ipv4Net::from_str(&lan.address)?,
                    wan: it.device.clone(),
                }
                .write(&mut buf)?;
            }
            if let Some(ref dmz) = dmz {
                Forward {
                    lan: Ipv4Net::from_str(&dmz.address)?,
                    wan: it.device.clone(),
                }
                .write(&mut buf)?;
            }
        }
    }

    Persistent {}.write(&mut buf)?;
    writeln!(buf, "{BASH_FOOTER}")?;

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
