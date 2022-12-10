use std::path::PathBuf;

use aloe::{env::Config, orm::open as open_db};
use diesel::connection::Connection as DieselConnection;
use ops_router::models::setting::Dao as SettingDao;
use palm::{crypto::Hmac, ops::router::v1 as ops_router_v1, parser::from_toml, Error};

// const DNS_V4_1: &str = "211.139.29.150";
// const DNS_V4_2: &str = "211.139.29.170";
const DNS_V4_1: &str = "223.5.5.5";
const DNS_V4_2: &str = "223.6.6.6";
// const DNS_V6_1: &str = "2400:3200::1";
// const DNS_V6_2: &str = "2400:3200:baba::1";

fn ethernet(i: u32, j: u32) -> (String, String) {
    (
        format!("enp{i}s0f{j}"),
        format!(
            "6c:b3:11:01:e{}:{}{}",
            match i {
                2 => 'b',
                3 => '9',
                _ => '0',
            },
            match i {
                2 => 'f',
                3 => '3',
                _ => '0',
            },
            j + 4
        ),
    )
}

#[test]
fn yt() {
    env_logger::init();

    let root = PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .unwrap()
        .to_path_buf();
    let cfg = root.join("config.toml");
    let cfg: Config = from_toml(&cfg).unwrap();
    let hmac = Hmac::new(&cfg.secrets.0).unwrap();
    let mut db = open_db(root.join("tmp").join("db"), &hmac).unwrap();
    db.transaction::<_, Error, _>(move |db| {
        let mut items = Vec::new();

        {
            let (device, mac) = ethernet(2, 3);
            let it = ops_router_v1::Lan {
                device,
                mac,
                address: "192.168.11.1/24".to_string(),
                dns1: DNS_V4_1.to_string(),
                dns2: Some(DNS_V4_2.to_string()),
                metric: 301,
            };
            SettingDao::set(db, None, &it).unwrap();
            items.push((it.device.clone(), it.mac.clone()));
        }
        {
            let (device, mac) = ethernet(3, 0);
            let it = ops_router_v1::Dmz {
                device,
                mac,
                address: "192.168.12.1/24".to_string(),
                dns1: DNS_V4_1.to_string(),
                dns2: Some(DNS_V4_2.to_string()),
                metric: 302,
            };
            SettingDao::set(db, None, &it).unwrap();
            items.push((it.device.clone(), it.mac.clone()));
        }
        {
            let mut bound = ops_router_v1::RouterBoundRequest::default();
            for (i, j, _k) in [(2, 0, 101), (2, 1, 102), (2, 2, 100)] {
                let (device, mac) = ethernet(i, j);
                bound.items.push(device.clone());
                let it = ops_router_v1::Wan {
                    device: device.clone(),
                    mac,
                    name: format!("Line{}{}", i, j),
                    metric: 100 + i * 10 + j,
                    capacity: (i + 1) * 4,
                    ip: Some(ops_router_v1::wan::Ip::Dhcp(ops_router_v1::Dhcp {
                        v6: false,
                    })),
                    // ip: Some(ops_router_v1::wan::Ip::Static(ops_router_v1::Static {
                    //     address: format!("192.168.{}.10/24", k),
                    //     gateway: format!("192.168.{}.1", k),
                    //     dns1: DNS_V4_1.to_string(),
                    //     dns2: Some(DNS_V4_2.to_string()),
                    // })),
                };
                SettingDao::set(db, Some(&device), &it).unwrap();

                items.push((it.device.clone(), it.mac.clone()));
            }

            SettingDao::set(db, None, &bound).unwrap();
        }

        {
            let device = "enp4s0".to_string();
            let mac = "c8:9c:dc:f2:1b:22".to_string();
            let it = ops_router_v1::Wan {
                device: device.clone(),
                mac: mac.clone(),
                name: "On boaad".to_string(),
                metric: 90,
                capacity: 16,
                ip: Some(ops_router_v1::wan::Ip::Static(ops_router_v1::Static {
                    address: "192.168.1.5/24".to_string(),
                    gateway: "192.168.1.1".to_string(),
                    dns1: "114.114.114.114".to_string(),
                    dns2: None,
                })),
            };
            SettingDao::set(db, Some(&device), &it).unwrap();

            items.push((it.device.clone(), it.mac.clone()));
        }

        SettingDao::set(
            db,
            None,
            &ops_router_v1::Dns {
                items: vec![DNS_V4_1.to_string(), DNS_V4_2.to_string()],
            },
        )
        .unwrap();

        for (d, m) in items.iter() {
            println!("{} <=> {}", d, m);
        }
        Ok(())
    })
    .unwrap();
}
