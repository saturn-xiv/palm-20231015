use std::fs::create_dir_all;
use std::path::Path;
use std::process::Command;

use oracle::Connection as DbConnection;
use serde::{Deserialize, Serialize};

use super::{print_command_output, timestamp_file, Result};

#[derive(clap::Parser, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    #[clap(short, long, default_value = "orclcdb")]
    pub sid: String,
    #[clap(short, long)]
    pub user: String,
    #[clap(short = 'P', long)]
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

        //         warn!(
        //             r###"Please make sure:
        // create or replace directory datapump_dir as '{target}';
        // grant read,write on directory datapump_dir to {user};
        // grant datapump_exp_full_database to {user};
        // grant datapump_imp_full_database to {user};"###,
        //             user = self.user,
        //             target = root.display()
        //         );

        let backup_dir = {
            let con = DbConnection::connect(
                &self.user,
                &self.password,
                format!("//localhost/{}", self.sid),
            )?;
            {
                let row = con.query_row("select version from v$instance", &[])?;
                let it: String = row.get(0)?;
                info!("{}", it);
            }
            let row = con.query_row(
                "select directory_path from dba_directories where directory_name='DATA_PUMP_DIR'",
                &[],
            )?;
            let it: String = row.get(0)?;
            Path::new(&it).to_path_buf()
        };

        let name = timestamp_file(&self.sid, None);

        let dmp = Path::new(&name).with_extension("dmp");
        let log = Path::new(&name).with_extension(".dmp.log");
        debug!("dump => {}, log => {}", dmp.display(), log.display());
        {
            let out = Command::new("expdp")
                .arg(format!("{}/{}", self.user, self.password))
                .arg("full=Y")
                .arg(format!("dumpfile={}", dmp.display()))
                .arg(format!("logfile={}", log.display()))
                .output()?;
            print_command_output(&out)?;
        }

        {
            let tmp = root.join(&name);
            create_dir_all(&tmp)?;
            let out = Command::new("mv")
                .arg(backup_dir.join(&dmp))
                .arg(backup_dir.join(&log))
                .arg(&tmp)
                .output()?;
            print_command_output(&out)?;
        }

        info!(
            r###"USAGE:
$ tar xf {file}.tar.xz
$ cp -v {file}/{name}.dmp {backup}
$ impdp "{user}/CHANGE-TO-PASSWORD" dumpfile={name}.dmp logfile={name}.exp.log schemas={user} REMAP_SCHEMA={user}:CHANGE-TO-NEW-USER"###,
            file = name,
            user = self.user,
            backup = backup_dir.display(),
        );

        Ok(name)
    }
}
