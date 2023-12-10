use ipnet::Ipv4Net;

#[test]
fn v4_range() {
    let it: Ipv4Net = "192.168.0.1/24".parse().unwrap();
    println!("network: {}", it.network());
    println!("prefix len: {}", it.prefix_len());
    println!("netmask: {}", it.netmask());
    println!(
        "gateway: {}",
        palm::network::ethernet::gateway("wlp0s20f0u5").unwrap()
    );

    {
        let hosts = it.hosts();
        println!("begin: {}", hosts.into_iter().nth(1).unwrap().to_string());
        println!(
            "end: {}",
            hosts.into_iter().rev().nth(1).unwrap().to_string()
        );
    }
}
