pub mod generate;
pub mod rpc;
pub mod web;
pub mod worker;

use std::fs::File;
use std::ops::{Deref, DerefMut};
use std::os::unix::fs::PermissionsExt;
use std::path::PathBuf;

use clap::{Parser, Subcommand};

use super::{
    cache::Provider,
    env::{is_stopped, Config},
    i18n::locale::MIGRATION as Locales,
    orm::migration::Dao,
    parser::from_toml,
    plugins,
    settings::MIGRATION as Settings,
    Result, BANNER, HOMEPAGE, VERSION,
};

#[derive(Parser, Debug)]
#[clap(about, version=VERSION, before_help=BANNER, after_help=HOMEPAGE, author)]
pub struct Args {
    #[clap(short, long, default_value = "config.toml")]
    pub config: PathBuf,
    #[clap(subcommand)]
    pub command: SubCommand,
}

#[derive(Subcommand, PartialEq, Eq, Debug)]
pub enum SubCommand {
    #[clap(about = "Generate config.toml")]
    GenerateConfig,
    #[clap(about = "Generate nginx.conf")]
    GenerateNginx(Nginx),
    #[clap(about = "Generate systemd.conf")]
    GenerateSystemd(Systemd),
    #[clap(about = "List all cache items")]
    CacheList,
    #[clap(about = "Clear cache items")]
    CacheClear,
    #[clap(about = "Migrate the database to the latest version")]
    DbMigrate,
    #[clap(about = "Revert migration to previous version")]
    DbRollback,
    // #[clap(about = "Re-applying all the migrations")]
    // DbRedo,
    #[clap(about = "Show current database versions")]
    DbStatus,
    #[clap(about = "Http Server")]
    Web,
    #[clap(about = "Worker process")]
    Worker(Worker),
    #[clap(about = "gRPC Server")]
    Rpc,
}

#[derive(clap::Parser, PartialEq, Eq, Debug)]
pub struct Nginx {
    #[clap(short, long)]
    pub domain: String,
    #[clap(short, long)]
    pub ssl: bool,
}

#[derive(clap::Parser, PartialEq, Eq, Debug)]
pub struct Systemd {
    #[clap(short, long)]
    pub name: String,
}

#[derive(clap::Parser, PartialEq, Eq, Debug)]
pub struct Worker {
    #[clap(short, long)]
    pub queue: String,
}

pub fn launch() -> Result<()> {
    let args = Args::parse();
    if args.command == SubCommand::GenerateConfig {
        return generate::config_toml(&args.config);
    }
    if let SubCommand::GenerateSystemd(it) = args.command {
        return generate::systemd_conf(&it.name);
    }

    {
        let f = File::open(&args.config)?;
        let m = f.metadata()?.permissions().mode();
        if ![0o400, 0o600].contains(&m) {
            error!("bad file {}'s mode", args.config.display());
            return Ok(());
        }
    }
    let cfg: Config = from_toml(&args.config)?;

    if let SubCommand::GenerateNginx(it) = args.command {
        return generate::nginx_conf(&cfg, &it.domain, it.ssl);
    }

    {
        let ch = cfg.redis.open()?;
        {
            let mut ch = ch.get()?;
            let ch = ch.deref_mut();
            if args.command == SubCommand::CacheClear {
                return ch.clear();
            }
            if args.command == SubCommand::CacheList {
                let items = ch.keys()?;
                println!("{:<14} KEY", "TTL");
                for (key, ttl) in items {
                    println!("{:<14} {}", ttl, key);
                }
                return Ok(());
            }
        }
    }

    // https://en.wikibooks.org/wiki/Ruby_on_Rails/ActiveRecord/Migrations
    {
        let items = vec![
            Locales.deref(),
            Settings.deref(),
            plugins::nut::MIGRATION.deref(),
            plugins::forum::MIGRATION.deref(),
            plugins::mall::MIGRATION.deref(),
        ];
        let db = cfg.postgresql.open()?;
        let db = db.get()?;
        db.load(&items)?;

        if args.command == SubCommand::DbMigrate {
            return db.migrate();
        }
        if args.command == SubCommand::DbRollback {
            return db.rollback();
        }
        if args.command == SubCommand::DbStatus {
            println!("{:<14} {:<32} RUN AT", "VERSION", "NAME");
            for it in db.all()? {
                println!("{}", it);
            }
            return Ok(());
        }
    }

    if is_stopped() {
        warn!("stop file exists, exit...");
        return Ok(());
    }

    if args.command == SubCommand::Web {
        return web::launch(&cfg);
    }
    if args.command == SubCommand::Rpc {
        return rpc::launch(&cfg);
    }
    if let SubCommand::Worker(it) = args.command {
        worker::launch(&cfg, &it.queue)?;
    }

    Ok(())
}
