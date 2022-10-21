use std::path::Path;

#[test]
fn path() {
    let it = Path::new("test.sql");
    println!("{}", it.display());
    {
        let it = it.with_extension("ini");
        println!("{}", it.display());
    }
    {
        let it = it.with_extension("tar.xz");
        println!("{}", it.display());
    }
}

#[test]
fn metrics() {
    let cfg = fig::metrics::Config {
        opensearch: fig::metrics::OpenSearch {
            host: "http://127.0.0.1".to_string(),
            port: None,
            namespace: "demo://".to_string(),
        },
        files: vec![
            Path::new("/opt/opensearchproject/opensearch-2.2.0/logs/opensearch.log").to_path_buf(),
        ],
        snmp: fig::metrics::snmp::Config {
            duration: 30,
            agents: (1..3)
                .map(|i| fig::metrics::snmp::Agent {
                    host: format!("192.168.0.1{}", i),
                    port: None,
                })
                .collect::<_>(),
        },
    };

    println!("{}", toml::to_string_pretty(&cfg).unwrap());
}
