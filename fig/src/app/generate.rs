use std::fs;
use std::io::prelude::*;
use std::os::unix::fs::OpenOptionsExt;
use std::path::Path;

use askama::Template;
use nix::unistd::{Gid, Uid};
use palm::{
    crypto::random::string as random_string,
    minio::{NginxConfig as MinioNginxConfig, SystemdConfig as MinioSystemdConfig},
    network::nginx::Www as WwwNginxConf,
    Result, DESCRIPTION, NAME,
};

use super::super::env::Config;

pub fn nginx_conf(cfg: &Config, domain: &str) -> Result<()> {
    let root = Path::new("tmp").join("nginx");
    if !root.exists() {
        fs::create_dir_all(&root)?;
    }
    {
        let tpl = WwwNginxConf {
            domain,
            name: NAME,
            port: cfg.http.port,
        };
        let file = root.join(format!("{}.conf", domain));
        tpl.write(&file)?;
    }
    {
        let tpl = MinioNginxConfig {
            domain,
            port: 9000,
            console_port: 9001,
        };
        let file = root.join(format!("{}.conf", domain));
        tpl.write(&file)?;
    }

    info!("please copy it into /etc/nginx/sites-enable/ folder.");
    Ok(())
}

#[derive(Template)]
#[template(path = "systemd/palm.conf", escape = "none")]
struct PalmSystemdConfig<'a> {
    user: &'a str,
    group: &'a str,
    name: &'a str,
    domain: &'a str,
    description: &'a str,
    args: &'a str,
}
impl PalmSystemdConfig<'_> {
    pub fn write<P: AsRef<Path>>(&self, file: P) -> Result<()> {
        let file = file.as_ref();
        info!("generate file {}", file.display());
        let tpl = self.render()?;
        let mut fd = fs::OpenOptions::new()
            .write(true)
            .create_new(true)
            .mode(0o644)
            .open(file)?;
        fd.write_all(tpl.as_bytes())?;
        Ok(())
    }
}

pub fn systemd_conf(domain: &str) -> Result<()> {
    let user = &Uid::current().to_string();
    let group = &Gid::current().to_string();
    let root = Path::new("tmp").join("systemd");
    if !root.exists() {
        fs::create_dir_all(&root)?;
    }
    for it in ["www", "rpc", "worker"] {
        let file = root.join(format!("{}.{}.service", it, domain));

        let tpl = PalmSystemdConfig {
            user,
            group,
            name: NAME,
            domain,
            description: DESCRIPTION,
            args: it,
        };
        tpl.write(&file)?;
    }
    {
        let file = root.join(format!("s3.{}.service", domain));

        let tpl = MinioSystemdConfig {
            domain,
            user,
            port: 9000,
            console_port: 9001,
            password: &random_string(32),
        };
        tpl.write(&file)?;
    }

    info!("please copy them into /lib/systemd/system/ folder.");
    Ok(())
}

pub fn config_toml<P: AsRef<Path>>(file: P) -> Result<()> {
    let buf = toml::to_vec(&Config::default())?;

    let file = file.as_ref();
    info!("generate file {}", file.display());
    let mut file = fs::OpenOptions::new()
        .write(true)
        .create_new(true)
        .mode(0o600)
        .open(file)?;
    file.write_all(&buf)?;
    Ok(())
}
