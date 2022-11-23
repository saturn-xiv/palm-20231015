use std::any::type_name;
use std::fs::File;
use std::path::PathBuf;

use palm::ops::router as ops_router;
use prost::Message;

#[test]
fn nmap() {
    let file = File::open(
        PathBuf::from(env!("CARGO_MANIFEST_DIR"))
            .parent()
            .unwrap()
            .join("tmp")
            .join("nmap.xml"),
    )
    .unwrap();
    let items = palm::network::ethernet::Host::load(&file).unwrap();
    println!("find {} hosts", items.len());
    for it in items.iter() {
        println!("{:?}", it);
    }
}

#[test]
fn logs() {
    let items = palm::network::logs().unwrap();
    println!("receive {} lines logs\n{:?}", items.len(), items.first());
}

#[test]
fn ethernet() {
    let items = palm::network::ethernet::detect().unwrap();
    println!("find {} ethernet interfaces", items.len());
    for it in items.iter() {
        println!("{:?}", it);
    }
}

#[test]
fn rule() {
    let it = ops_router::v1::rule::Nat {
        device: "eth0".to_string(),
        tcp: true,
        port: 3389,
        host: Some(ops_router::v1::rule::nat::Host {
            ip: "192.168.0.10".to_string(),
            port: 33890,
        }),
    };

    let mut buf = Vec::new();
    it.encode(&mut buf).unwrap();
    println!(
        "{}: {} bytes {:?}",
        type_name::<ops_router::v1::rule::Nat>(),
        buf.len(),
        it
    );
    assert!(!buf.is_empty());
    {
        let im = ops_router::v1::rule::Nat::decode(&buf[..]).unwrap();
        println!("{:?}", im);
        assert_eq!(it, im);
    }
}
