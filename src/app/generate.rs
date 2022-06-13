use std::fs;
use std::io::prelude::*;
use std::os::unix::fs::OpenOptionsExt;
use std::path::Path;

use askama::Template;
use nix::unistd::{Gid, Uid};

use super::super::{env::Config, Result, DESCRIPTION, NAME};

#[derive(Template)]
#[template(path = "nginx/www.conf", escape = "none")]
struct WwwNginxConf<'a> {
    name: &'a str,
    domain: &'a str,
    port: u16,
    ssl: bool,
}

impl WwwNginxConf<'_> {
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
#[derive(Template)]
#[template(path = "nginx/api.conf", escape = "none")]
struct ApiNginxConf<'a> {
    domain: &'a str,
    port: u16,
    ssl: bool,
}
impl ApiNginxConf<'_> {
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

pub fn nginx_conf(cfg: &Config, domain: &str, ssl: bool) -> Result<()> {
    let root = Path::new("tmp").join("nginx");
    if !root.exists() {
        fs::create_dir_all(&root)?;
    }
    {
        let tpl = WwwNginxConf {
            domain,
            name: NAME,
            port: cfg.http.port,
            ssl,
        };
        let file = root.join(format!("{}.conf", domain));
        tpl.write(&file)?;
    }
    for (px, pt) in [("rpc", cfg.http.port), ("s3", 9000), ("cli.s3", 9001)] {
        let domain = format!("{}.{}", px, domain);
        let tpl = ApiNginxConf {
            domain: &domain,
            port: pt,
            ssl,
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

#[derive(Template)]
#[template(path = "systemd/s3.conf", escape = "none")]
struct S3SystemdConfig<'a> {
    user: &'a str,
    group: &'a str,
    domain: &'a str,
}
impl S3SystemdConfig<'_> {
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
    for it in &["rpc-tcp", "rpc-web", "api", "worker"] {
        let file = root.join(&format!("{}.{}.service", it, domain));

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
        let file = root.join(&format!("s3.{}.service", domain));

        let tpl = S3SystemdConfig {
            user,
            group,
            domain,
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
