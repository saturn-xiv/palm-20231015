#[macro_use]
extern crate log;

pub mod app;
pub mod metrics;
pub mod mysql;
pub mod oracle;
pub mod postgresql;
pub mod rsync;

use std::error::Error as StdError;
use std::fs::{read_dir, remove_file};
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::path::Path;
use std::process::Command;
use std::process::Output;
use std::result::Result as StdResult;

use chrono::Utc;

pub type Error = Box<dyn StdError + Send + Sync>;
pub type Result<T> = StdResult<T, Error>;

pub fn timestamp_file(name: &str, ext: Option<&str>) -> String {
    let ts = Utc::now().format("%Y%m%d%H%M%S%3f");
    match ext {
        Some(ext) => format!("{}-{}.{}", name, ts, ext),
        None => format!("{}-{}", name, ts),
    }
}

pub fn tar<P: AsRef<Path>>(root: P, name: &str, keep: usize) -> Result<()> {
    let root = root.as_ref();

    let tmp = {
        let it = root.join(name);
        if it.is_dir() {
            let it = it.with_extension("tar");
            {
                debug!("generate {}", it.display());
                let out = Command::new("tar")
                    .arg("--remove-files")
                    .arg("-C")
                    .arg(root)
                    .arg("-cf")
                    .arg(&it)
                    .arg(&name)
                    .output()?;
                print_command_output(&out)?;
            }
            it
        } else {
            it
        }
    };
    {
        debug!("compress {}", tmp.display());
        let out = Command::new("xz").arg("-9").arg(&tmp).output()?;
        print_command_output(&out)?;
    }
    {
        info!(
            "check file {}, keep recent {} records",
            root.display(),
            keep
        );
        let mut items = Vec::new();
        for it in read_dir(root)? {
            let it = it?;
            let it = it.path();
            if it.is_file() {
                if let Some(ext) = it.extension() {
                    if ext == "xz" {
                        debug!("find file {}", it.display());
                        items.push(it);
                    }
                }
            }
        }
        items.sort();
        items.reverse();
        if items.len() > keep {
            for it in &items[keep..] {
                debug!("delete file {}", it.display());
                remove_file(it)?;
            }
        }
    }
    Ok(())
}

pub fn print_command_output(out: &Output) -> Result<()> {
    if out.status.success() {
        info!("({}) {}", out.status, std::str::from_utf8(&out.stdout)?);
        return Ok(());
    }

    error!("({}) {}", out.status, std::str::from_utf8(&out.stderr)?);
    Err(Box::new(IoError::from(IoErrorKind::UnexpectedEof)))
}
