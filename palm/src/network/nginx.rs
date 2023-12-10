use std::fs::OpenOptions;
use std::io::prelude::*;
use std::os::unix::fs::OpenOptionsExt;
use std::path::Path;

use askama::Template;
use log::info;

use super::super::Result;

#[derive(Template)]
#[template(path = "nginx/www.conf", escape = "none")]
pub struct Www<'a> {
    pub name: &'a str,
    pub domain: &'a str,
    pub port: u16,
}

impl Www<'_> {
    pub fn write<P: AsRef<Path>>(&self, file: P) -> Result<()> {
        let file = file.as_ref();
        info!("generate file {}", file.display());
        let tpl = self.render()?;
        let mut fd = OpenOptions::new()
            .write(true)
            .create_new(true)
            .mode(0o644)
            .open(file)?;
        fd.write_all(tpl.as_bytes())?;
        Ok(())
    }
}

// FIXME
#[derive(Template)]
#[template(path = "nginx/grpc.conf", escape = "none")]
pub struct Grpc<'a> {
    pub host: &'a str,
    pub domain: &'a str,
    pub port: u16,
}

impl Grpc<'_> {
    pub fn write<P: AsRef<Path>>(&self, file: P) -> Result<()> {
        let file = file.as_ref();
        info!("generate file {}", file.display());
        let tpl = self.render()?;
        let mut fd = OpenOptions::new()
            .write(true)
            .create_new(true)
            .mode(0o644)
            .open(file)?;
        fd.write_all(tpl.as_bytes())?;
        Ok(())
    }
}
