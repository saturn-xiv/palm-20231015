use std::fmt::Write as FmtWrite;

use diesel::sqlite::SqliteConnection as Db;
use palm::{
    network::iptables::{Flush, Input, Iptables, Lan, Output, Persistent, SNat},
    ops::router::v1,
    Result,
};
use prost::Message;

use super::super::models::{rule::Dao as RuleDao, setting::Dao as SettingDao};

// https://help.ubuntu.com/community/IptablesHowTo
// https://www.digitalocean.com/community/tutorials/iptables-essentials-common-firewall-rules-and-commands
pub fn script(db: &mut Db) -> Result<String> {
    let lan: v1::Lan = SettingDao::get(db, None)?;
    let wan = {
        let bound: v1::RouterBoundRequest = SettingDao::get(db, None)?;
        let mut items = Vec::new();
        for device in bound.items.iter() {
            let it: v1::Wan = SettingDao::get(db, Some(device))?;
            items.push(it);
        }
        items
    };

    let mut buf = String::new();
    writeln!(
        buf,
        r###"#!/bin/bash
set -e
"###
    )?;

    Flush {}.write(&mut buf)?;
    Lan {
        wan: wan.iter().map(|x| x.device.clone()).collect::<_>(),
        lan: lan.address.parse()?,
    }
    .write(&mut buf)?;

    for wan in wan.iter() {
        // IN
        {
            let mut items = Vec::new();
            {
                items.push(v1::rule::InBound {
                    device: wan.device.clone(),
                    tcp: true,
                    port: 22,
                    source: None,
                });
                items.push(v1::rule::InBound {
                    device: wan.device.clone(),
                    tcp: true,
                    port: 80,
                    source: None,
                });
            }
            for rule in RuleDao::by_group(db, &wan.device)?.iter() {
                if let Ok(ref it) = v1::rule::InBound::decode(&rule.content[..]) {
                    items.push(it.clone());
                }
            }

            for it in items.iter() {
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

        Input(wan.device.clone()).write(&mut buf)?;
        Output(wan.device.clone()).write(&mut buf)?;
    }

    Persistent {}.write(&mut buf)?;
    writeln!(
        buf,
        r###"
echo 'done.'
exit 0
"###,
    )?;

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
