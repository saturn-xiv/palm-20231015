extern crate chrono;
extern crate palm;

use chrono::Duration;

#[test]
fn tink() {
    let zone = "testing";
    let subject = "hi, palm!";
    let client = palm::tink::Loquat {
        host: "127.0.0.1".to_string(),
        port: 8088,
    };
    let token = client.jwt_sign(zone, subject, Duration::days(1)).unwrap();
    println!("{token}");

    {
        let it = client.jwt_verify(zone, &token).unwrap();
        assert_eq!(it, subject);
    }
}
