use std::fmt::Write as FmtWrite;

use diesel::sqlite::SqliteConnection as Db;
use palm::{
    crypto::{Hmac, Password},
    ops::router::v1,
    Result,
};

use super::models::{host::Dao as HostDao, setting::Dao as SettingDao};

pub fn launch(db: &mut Db) -> Result<String> {
    let lan: v1::Lan = SettingDao::get(db, None)?;

    {
        {
            let hosts = HostDao::all(db)?
                .iter()
                .filter(|x| x.fixed)
                .map(|x| palm::network::dhcpd::Host {
                    name: x.name.clone(),
                    mac: x.mac.clone(),
                    ip: x.ip.clone(),
                })
                .collect::<_>();
            lan.save(hosts)?;
            palm::network::dhcpd::apply()?;
        }

        for (device, _) in palm::network::ethernet::detect()?.iter() {
            if device == &lan.device {
                continue;
            }
            let it: v1::Wan = SettingDao::get(db, Some(device))?;
            it.save()?;
        }
        palm::network::netplan::apply()?;
    }

    let mut buf = String::new();
    buf.push_str(
        r###"#!/bin/bash
set -e
"###,
    );
    // https://help.ubuntu.com/community/IptablesHowTo
    {
        writeln!(
            buf,
            r###"
# fireware input rules
iptables -A INPUT -i lo -j ACCEPT
"###
        )?;
    }
    writeln!(
        buf,
        r###"

# reset root password
# echo $(pwgen 32 1) | chpasswd

echo 'done.'
exit 0
"###,
    )?;

    Ok(buf)
}

pub fn setup(db: &mut Db, hmac: &Hmac) -> Result<()> {
    {
        let it = v1::UserProfile {
            nickname: "admin".to_string(),
            password: String::from_utf8(hmac.sum("123456".as_bytes())?)?,
        };
        info!("set user: {}", it.nickname);
        SettingDao::set(db, None, &it)?;
    }
    let lan = v1::Lan {
        device: palm::network::ethernet::ONBOARD.to_string(),
        // FIXME
        mac: "blabla".to_string(),
        address: "192.168.0.1/24".to_string(),
    };
    {
        info!("set lan {:?}", lan);
        SettingDao::set(db, None, &lan)?;
    }

    for (device, mac) in palm::network::ethernet::detect()?.iter() {
        if &lan.device == device {
            continue;
        }
        SettingDao::set(
            db,
            Some(device),
            &v1::Wan {
                device: device.clone(),
                mac: mac.clone(),
                capacity: 16,
                ip: Some(v1::wan::Ip::Dhcp(v1::Dhcp::default())),
                ..Default::default()
            },
        )?;
    }

    Ok(())
}
