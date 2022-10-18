use std::fs::create_dir_all;
use std::path::Path;
use std::process::Command;

use serde::{Deserialize, Serialize};

use super::{print_command_output, timestamp_file, Result};

#[derive(clap::Parser, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    #[clap(short, long, default_value = "ORCLCDB")]
    pub sid: String,
    #[clap(short, long)]
    pub user: String,
    #[clap(short, long)]
    pub password: String,
}

impl Config {
    pub fn execute<P: AsRef<Path>>(&self, root: P) -> Result<String> {
        let root = root.as_ref();
        info!(
            "backup oracle://{}@127.0.0.1:1521/{} to {}",
            self.user,
            self.sid,
            root.display()
        );

        let name = timestamp_file(&self.sid, None);
        let tmp = root.join(&name);
        create_dir_all(&tmp)?;

        {
            let out = Command::new("expdp")
                .arg(&format!("{}/{}", self.user, self.password))
                .arg(format!("directory={}", tmp.display()))
                .arg("full=Y")
                .arg("dumpfile=data.dmp")
                .arg("logfile=exp.log")
                .output()?;
            print_command_output(&out)?;
        }

        info!(
            r###"USAGE:
$ tar xf {file}.tar.xz
$ impdp "{user}/CHANGE-TO-PASSWORD" directory={file} dumpfile=data.dmp logfile=imp.log schemas={user} REMAP_SCHEMA={user}:CHANGE-TO-NEW-USER"###,
            file = name,
            user = self.user,
        );

        Ok(name)
    }
}
