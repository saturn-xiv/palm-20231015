use std::fs::create_dir_all;
use std::path::{Path, PathBuf};
use std::process::Command;

use clap::Parser;
use palm::{print_command_output, timestamp_file, Result};

#[derive(Parser, PartialEq, Eq, Debug, Clone)]
pub struct Config {
    #[arg(short, long, default_value = super::Args::DEFAULT_KEEP)]
    pub keep: usize,
    #[arg(short, long, default_value = super::Args::DEFAULT_TARGET)]
    pub target: PathBuf,
    #[arg(short, long, default_value = "orclcdb")]
    pub sid: String,
    #[arg(short = 'H', long)]
    pub oracle_home: Option<PathBuf>,
    #[arg(short, long)]
    pub user: String,
    #[arg(short = 'P', long)]
    pub password: String,
    #[arg(
        short = 'D',
        long,
        help = "select directory_path from dba_directories where directory_name='DATA_PUMP_DIR'"
    )]
    pub directory_path: PathBuf,
}

impl Config {
    pub fn launch<P: AsRef<Path>>(&self, target: P) -> Result<String> {
        let target = target.as_ref();
        info!(
            "backup oracle://{}@127.0.0.1:1521/{} to {}",
            self.user,
            self.sid,
            target.display()
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

        // TODO: https://github.com/kubo/rust-oracle/issues/23
        // let backup_dir = {
        //     let con = DbConnection::connect(
        //         &self.user,
        //         &self.password,
        //         format!("//localhost/{}", self.sid),
        //     )?;
        //     {
        //         let row = con.query_row("select version from v$instance", &[])?;
        //         let it: String = row.get(0)?;
        //         info!("{}", it);
        //     }
        //     let row = con.query_row(
        //         "select directory_path from dba_directories where directory_name='DATA_PUMP_DIR'",
        //         &[],
        //     )?;
        //     let it: String = row.get(0)?;
        //     Path::new(&it).to_path_buf()
        // };

        // {
        //     let sql = Command::new("sqlplus")
        //         .arg(format!("{}/{}", self.user, self.password))
        //         .stdin(Stdio::piped())
        //         .spawn()?;

        //     Command::new("echo")
        //         .arg("select version from v$instance")
        //         .stdout(sql.stdin.unwrap()) // Converted into a Stdio here
        //         .output()?;

        //     let out = sql.wait_with_output()?;
        //     print_command_output(&out)?;
        // }
        // {
        //     let sql = Command::new("sqlplus")
        //         .arg(format!("{}/{}", self.user, self.password))
        //         .stdin(Stdio::piped())
        //         .spawn()?;

        //     Command::new("echo")
        //         .arg("select directory_path from dba_directories where directory_name='DATA_PUMP_DIR'")
        //         .stdout(sql.stdin.unwrap()) // Converted into a Stdio here
        //         .output()
        //         ?;
        //     let out = sql.wait_with_output()?;
        //     print_command_output(&out)?;
        // }

        let name = timestamp_file(&self.sid, None);

        let dmp = Path::new(&name).with_extension("dmp");
        let log = Path::new(&name).with_extension("dmp.log");
        debug!("dump => {}, log => {}", dmp.display(), log.display());
        {
            let bin = self.oracle_home.as_ref().map_or_else(
                || "expdp".to_string(),
                |x| x.join("bin").join("expdp").display().to_string(),
            );
            let out = Command::new(bin)
                .arg(format!("{}/{}", self.user, self.password))
                .arg("full=Y")
                .arg(format!("dumpfile={}", dmp.display()))
                .arg(format!("logfile={}", log.display()))
                .output()?;
            print_command_output(&out)?;
        }

        {
            let tmp = target.join(&name);
            create_dir_all(&tmp)?;
            let out = Command::new("mv")
                .arg(self.directory_path.join(&dmp))
                .arg(self.directory_path.join(&log))
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
            backup = self.directory_path.display(),
        );

        Ok(name)
    }
}
