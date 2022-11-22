use std::fs::File;
use std::path::PathBuf;

#[test]
fn nmap() {
    let file = File::open(
        PathBuf::from(env!("CARGO_MANIFEST_DIR"))
            .parent()
            .unwrap()
            .parent()
            .unwrap()
            .join("tmp")
            .join("nmap.xml"),
    )
    .unwrap();
    let items = ops_router::env::Host::load(&file).unwrap();
    println!("find {} hosts", items.len());
    for it in items.iter() {
        println!("{:?}", it);
    }
}

#[test]
fn logs() {
    let items = ops_router::env::logs().unwrap();
    println!("receive {} lines logs\n{:?}", items.len(), items.first());
}
