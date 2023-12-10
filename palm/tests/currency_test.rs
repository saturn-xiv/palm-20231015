#[test]
fn list_one() {
    let iso = palm::currency::Iso4217::new().unwrap();
    println!(
        "publiched at: {}, {} items",
        iso.published_at,
        iso.items.len()
    );
    for it in iso.items {
        println!("{:?}", it);
    }
}
