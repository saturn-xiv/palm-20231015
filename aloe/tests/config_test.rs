use std::path::PathBuf;

use aloe::{env::Config, orm::open as open_db};
use diesel::connection::Connection as DieselConnection;
use ops_router::models::setting::Dao as SettingDao;
use palm::{crypto::Hmac, ops::router::v1 as ops_router_v1, parser::from_toml, Error};

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
            let lan = ops_router_v1::Lan {
                device: "enp2s0f0".to_string(),
                address: "192.168.0.1/24".to_string(),
                mac: "6c:b3:11:01:eb:f4".to_string(),
            };
            SettingDao::set(db, None, &lan).unwrap();
            items.push((lan.device.clone(), lan.mac.clone()));
        }

        {
            let wan = 4;
            for i in 0..wan {
                let device = format!("enp3s0f{}", i);
                let it = ops_router_v1::Wan {
                    device: device.clone(),
                    name: format!("Line {}", i + 1),
                    mac: format!("6c:b3:11:01:e9:3{}", i + 4),
                    metric: 100 * i,
                    capacity: (i + 1) * 4,
                    ip: Some(ops_router_v1::wan::Ip::Dhcp(ops_router_v1::Dhcp {})),
                };
                SettingDao::set(db, Some(&device), &it).unwrap();

                items.push((it.device.clone(), it.mac.clone()));
            }

            SettingDao::set(
                db,
                None,
                &ops_router_v1::RouterBoundRequest {
                    items: (0..wan).map(|x| format!("enp3s0f{}", x)).collect::<_>(),
                },
            )
            .unwrap();

            for (d, m) in items.iter() {
                println!("{} <=> {}", d, m);
            }
        }
        Ok(())
    })
    .unwrap();
}
