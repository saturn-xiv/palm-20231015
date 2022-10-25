use fig::metrics::nginx::{Access as AccessItem, Error as ErrorItem};

#[test]
fn access_log() {
    let buf = r###"127.0.0.1 - [2022-10-25T00:59:53+00:00] "GET /info.php HTTP/1.1" 200 27051 0.033 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36" "-""###;
    println!("{:?}", AccessItem::new(buf).unwrap())
}

#[test]
fn error_log() {
    let buf = r###"2022/10/10 23:15:11 [error] 1864#1864: *180 directory index of "/var/www/htdocs/" is forbidden, client: 12.34.56.78, server: www.change-me.org, request: "GET / HTTP/1.1", host: "www.change-me.org", referrer: "https://www.change-me.org/""###;
    println!("{:?}", ErrorItem::new(buf).unwrap())
}
