use std::path::PathBuf;

use aloe::{env::Config, orm::open as open_db};
use diesel::connection::Connection as DieselConnection;
use ops_router::models::setting::Dao as SettingDao;
use palm::{crypto::Hmac, ops::router::v1 as ops_router_v1, parser::from_toml, Error};

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
            let (device, mac) = ethernet(2, 0);
            let it = ops_router_v1::Lan {
                device,
                mac,
                address: "192.168.0.1/24".to_string(),
            };
            SettingDao::set(db, None, &it).unwrap();
            items.push((it.device.clone(), it.mac.clone()));
        }
        {
            let (device, mac) = ethernet(2, 1);
            let it = ops_router_v1::Dmz {
                device,
                mac,
                address: "192.168.10.1/24".to_string(),
            };
            SettingDao::set(db, None, &it).unwrap();
            items.push((it.device.clone(), it.mac.clone()));
        }
        {
            let mut bound = ops_router_v1::RouterBoundRequest::default();
            for (i, j) in [(2, 2), (2, 3), (3, 0), (3, 1), (3, 2), (3, 3)] {
                let (device, mac) = ethernet(i, j);
                bound.items.push(device.clone());
                let it = ops_router_v1::Wan {
                    device: device.clone(),
                    mac,
                    name: format!("Line{}{}", i, j),
                    metric: 100 + i * 10 + j,
                    capacity: (i + 1) * 4,
                    priority: 300,
                    ip: Some(ops_router_v1::wan::Ip::Dhcp(ops_router_v1::Dhcp {})),
                };
                SettingDao::set(db, Some(&device), &it).unwrap();

                items.push((it.device.clone(), it.mac.clone()));
            }

            SettingDao::set(db, None, &bound).unwrap();

            for (d, m) in items.iter() {
                println!("{} <=> {}", d, m);
            }
        }
        Ok(())
    })
    .unwrap();
}
