use std::fs;
use std::io::prelude::*;
use std::os::unix::fs::OpenOptionsExt;
use std::path::Path;

use askama::Template;
use nix::unistd::{Gid, Uid};

use super::super::{env::Config, Result, DESCRIPTION, NAME};

#[derive(Template)]
#[template(path = "nginx.conf", escape = "none")]
struct NginxConf<'a> {
    name: &'a str,
    domain: &'a str,
    port: u16,
    ssl: bool,
}

pub fn nginx_conf(cfg: &Config, domain: &str, ssl: bool) -> Result<()> {
    let tpl = NginxConf {
        domain,
        name: NAME,
        port: cfg.http.port,
        ssl,
    }
    .render()?;

    let file = Path::new("tmp").join("nginx.conf");
    info!("generate file {}", file.display());
    let mut fd = fs::OpenOptions::new()
        .write(true)
        .create_new(true)
        .mode(0o644)
        .open(file)?;
    fd.write_all(tpl.as_bytes())?;
    info!("please copy it into /etc/nginx/sites-enable/ folder.");
    Ok(())
}

#[derive(Template)]
#[template(path = "systemd.conf", escape = "none")]
struct SystemdConfig<'a> {
    user: &'a str,
    group: &'a str,
    name: &'a str,
    domain: &'a str,
    description: &'a str,
    args: &'a str,
}

pub fn systemd_conf(domain: &str) -> Result<()> {
    let user = &Uid::current().to_string();
    let group = &Gid::current().to_string();
    for it in &["grpc", "web", "worker -q email"] {
        let file = Path::new("tmp").join(&format!(
            "{}-{}.service",
            domain,
            str::replace(it, ' ', "-")
        ));
        let tpl = SystemdConfig {
            user,
            group,
            name: NAME,
            domain,
            description: DESCRIPTION,
            args: it,
        }
        .render()?;
        info!("generate file {}", file.display());
        let mut fd = fs::OpenOptions::new()
            .write(true)
            .create_new(true)
            .mode(0o644)
            .open(file)?;
        fd.write_all(tpl.as_bytes())?;
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