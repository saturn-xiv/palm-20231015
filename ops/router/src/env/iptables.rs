use std::collections::BTreeMap;
use std::fmt::Write as FmtWrite;

use diesel::sqlite::SqliteConnection as Db;
use palm::{
    network::iptables::{Flush, Input, Iptables, Nat, Output, Persistent},
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
        let mut items = BTreeMap::new();
        for device in bound.items.iter() {
            let wan: v1::Wan = SettingDao::get(db, Some(device))?;
            items.insert(device.clone(), wan);
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
    Nat {
        wan: "eth0".to_string(), //FIXME
        lan: lan.device,
    }
    .write(&mut buf)?;

    for (device, _) in wan.iter() {
        {
            let mut items = Vec::new();
            {
                items.push(v1::rule::InBound {
                    device: device.clone(),
                    tcp: true,
                    port: 22,
                    source: None,
                });
                items.push(v1::rule::InBound {
                    device: device.clone(),
                    tcp: true,
                    port: 80,
                    source: None,
                });
            }
            for rule in RuleDao::by_group(db, device)?.iter() {
                if let Ok(ref it) = v1::rule::InBound::decode(&rule.content[..]) {
                    items.push(it.clone());
                }
            }

            for it in items.iter() {
                it.write(&mut buf)?;
            }
        }

        Input(device.clone()).write(&mut buf)?;
        Output(device.clone()).write(&mut buf)?;
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
