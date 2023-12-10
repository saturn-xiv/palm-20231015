use std::ops::DerefMut;
use std::time::Duration;

use palm::cache::{redis::Config, Provider};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
struct Item {
    id: i32,
    name: String,
}

#[tokio::test]
async fn cache() {
    let cfg = Config::default();
    let pool = cfg.open().unwrap();

    {
        let mut ch = pool.get().unwrap();
        let ch = ch.deref_mut();
        println!("redis version: {}", ch.version().unwrap());
    }

    let len: usize = 100;

    for i in 0..len {
        let mut ch = pool.get().unwrap();
        let ch = ch.deref_mut();

        ch.get(
            &format!("test.{}", i),
            &|| {
                Ok(Item {
                    id: i as i32,
                    name: format!("hello, {}!", i),
                })
            },
            Duration::from_secs(1 << 12),
        )
        .unwrap();
    }
    {
        let mut ch = pool.get().unwrap();
        let ch = ch.deref_mut();
        let keys = ch.keys().unwrap();
        println!("{} vs {}", keys.len(), len);
        assert!(keys.len() >= len);
    }
}
