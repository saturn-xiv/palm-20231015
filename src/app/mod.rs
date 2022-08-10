pub mod generate;
pub mod journal;
pub mod rpc;
pub mod user;
pub mod web;
pub mod worker;

use std::fs::File;
use std::ops::{Deref, DerefMut};
use std::os::unix::fs::PermissionsExt;
use std::path::PathBuf;

use clap::{Parser, Subcommand};
use uuid::Uuid;

use super::{
    cache::Provider,
    crypto::Hmac,
    env::{is_stopped, Config},
    i18n::locale::Dao as LocaleDao,
    jwt::Jwt,
    parser::from_toml,
    Result, BANNER, BUILD_TIME, GIT_VERSION, HOMEPAGE,
};

lazy_static! {
    static ref VERSION: String = format!("{}({})", GIT_VERSION, BUILD_TIME);
}
#[derive(Parser, Debug)]
#[clap(about, version=&VERSION.deref()[..], before_help=BANNER, after_help=HOMEPAGE, author)]
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
    #[clap(about = "List all users")]
    UserList,
    #[clap(about = "Apply role to user(by uid)")]
    UserApplyPolicy(user::ApplyPolicy),
    #[clap(about = "Reset user's password(by uid)")]
    UserResetPassword(user::ResetPassword),
    #[clap(about = "Generate user token(by uid)")]
    UserToken(user::Token),
    // #[clap(about = "Migrate the database to the latest version")]
    // DbMigrate,
    // #[clap(about = "Revert migration to previous version")]
    // DbRollback,
    // #[clap(about = "Re-applying all the migrations")]
    // DbRedo,
    // #[clap(about = "Show current database versions")]
    // DbStatus,
    #[clap(about = "Sync i18n items")]
    I18nSync,
    #[clap(about = "Http Server")]
    Web,
    #[clap(about = "gRPC-Web Server")]
    RpcWeb,
    #[clap(about = "gRPC-TCP Server")]
    RpcTcp,
    #[clap(about = "Worker process")]
    Worker(Worker),
    #[clap(about = "Import log from journal")]
    JournalImport,
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

pub async fn launch() -> Result<()> {
    let args = Args::parse();
    if args.command == SubCommand::GenerateConfig {
        return generate::config_toml(&args.config);
    }
    if let SubCommand::GenerateSystemd(it) = args.command {
        return generate::systemd_conf(&it.name);
    }

    {
        info!("load config from {}", args.config.display());
        let f = File::open(&args.config)?;
        let m = f.metadata()?.permissions().mode();
        if ![0o100400, 0o100600].contains(&m) {
            error!("bad file ({}) mode({:#o})", args.config.display(), m);
            return Ok(());
        }
    }
    let cfg: Config = from_toml(&args.config)?;

    if let SubCommand::GenerateNginx(it) = args.command {
        return generate::nginx_conf(&cfg, &it.domain, it.ssl);
    }
    if SubCommand::JournalImport == args.command {
        return journal::launch(&cfg).await;
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

    {
        let db = cfg.postgresql.open()?;
        let mut db = db.get()?;
        let db = db.deref_mut();
        let uid = Uuid::new_v4().to_string();
        let hmac = Hmac::new(&cfg.secrets.0)?;
        let mut enf = cfg.enforcer(uid, 2).await?;
        {
            if args.command == SubCommand::UserList {
                return user::list(db);
            }
            if let SubCommand::UserApplyPolicy(ref it) = args.command {
                return it.execute(db, &mut enf).await;
            }
            if let SubCommand::UserResetPassword(ref it) = args.command {
                return it.execute(db, &hmac);
            }
            if let SubCommand::UserToken(ref it) = args.command {
                let jwt = Jwt::new(cfg.secrets.0.clone());
                let token = it.execute(db, &jwt)?;
                println!("{:?}", token);
                return Ok(());
            }
        }
        // https://en.wikibooks.org/wiki/Ruby_on_Rails/ActiveRecord/Migrations

        // {
        //     let items = vec![Locales.deref(), Settings.deref()];
        //     MigrationDao::load(db, &items)?;

        //     if args.command == SubCommand::DbMigrate {
        //         return db.transaction::<_, _, _>(|db| {
        //             db.migrate()?;
        //             Ok(())
        //         });
        //     }
        //     if args.command == SubCommand::DbRedo {
        //         return db.transaction::<_, _, _>(|db| {
        //             loop {
        //                 if MigrationDao::count(db)? == 0 {
        //                     break;
        //                 }
        //                 db.rollback()?;
        //                 thread::sleep(Duration::from_millis(100));
        //             }
        //             // FIXME
        //             db.migrate()?;
        //             Ok(())
        //         });
        //     }
        //     if args.command == SubCommand::DbRollback {
        //         return db.transaction::<_, _, _>(|db| {
        //             db.rollback()?;
        //             Ok(())
        //         });
        //     }
        //     if args.command == SubCommand::DbStatus {
        //         println!("{:<14} {:<23} NAME", "VERSION", "RUN AT");
        //         for it in MigrationDao::all(db)? {
        //             println!("{}", it);
        //         }
        //         return Ok(());
        //     }
        // }
        if args.command == SubCommand::I18nSync {
            let (i, j) = LocaleDao::sync(db)?;
            info!("sync {}/{} items", i, j);
            return Ok(());
        }
    }

    info!("run on {} mode", cfg.env);
    if is_stopped() {
        warn!("stop file exists, exit...");
        return Ok(());
    }

    if args.command == SubCommand::Web {
        return web::launch(&cfg).await;
    }
    if args.command == SubCommand::RpcWeb {
        return rpc::web(&cfg).await;
    }
    if args.command == SubCommand::RpcTcp {
        return rpc::tcp(&cfg).await;
    }
    if let SubCommand::Worker(ref it) = args.command {
        worker::launch(&cfg, &it.queue).await?;
    }

    Ok(())
}
