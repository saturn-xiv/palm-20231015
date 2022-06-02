use chrono::{Duration, Utc};
use diesel::Connection as DieselConntection;

use super::super::{
    crypto::Hmac,
    orm::postgresql::Connection as Db,
    plugins::nut::models::{
        log::{Dao as LogDao, Level},
        role::Dao as RoleDao,
        user::{Dao as UserDao, Item as User},
    },
    Error, Result,
};

#[derive(clap::Parser, PartialEq, Eq, Debug)]
pub struct ApplyPolicy {
    #[clap(short, long)]
    pub user: String,
    #[clap(short, long)]
    pub role: String,
}

impl ApplyPolicy {
    pub fn execute(&self, db: &mut Db) -> Result<()> {
        let now = Utc::now().naive_utc();
        let nbf = now.date();
        let exp = (now + Duration::weeks(1 << 10)).date();

        let user = UserDao::by_uid(db, &self.user)?;
        db.transaction::<_, Error, _>(move |db| {
            let un = nix::sys::utsname::uname()?;

            RoleDao::associate(db, user.id, &self.role, &nbf, &exp)?;
            LogDao::add::<String, User>(
                db,
                user.id,
                &Level::Info,
                &format!("{:?}", un.nodename().to_str()),
                Some(user.id),
                format!(
                    "Apply role {} by system user {} from {} to {}.",
                    self.role,
                    nix::unistd::getuid(),
                    nbf,
                    exp
                ),
            )?;
            Ok(())
        })?;
        info!(
            "apple role {} to user {} from {} to {}",
            self.role, user, nbf, exp
        );
        Ok(())
    }
}

#[derive(clap::Parser, PartialEq, Eq, Debug)]
pub struct ResetPassword {
    #[clap(short, long)]
    pub user: String,
    #[clap(short, long)]
    pub password: String,
}

impl ResetPassword {
    pub fn execute(&self, db: &mut Db, hmac: &Hmac) -> Result<()> {
        let user = UserDao::by_uid(db, &self.user)?;
        db.transaction::<_, Error, _>(move |db| {
            let un = nix::sys::utsname::uname()?;

            UserDao::password(db, hmac, user.id, &self.password)?;
            LogDao::add::<String, User>(
                db,
                user.id,
                &Level::Info,
                &format!("{:?}", un.nodename().to_str()),
                Some(user.id),
                format!("Reset password by system user {}.", nix::unistd::getuid()),
            )?;
            Ok(())
        })?;
        info!("reset password of user {}", user);
        Ok(())
    }
}

pub fn list(db: &mut Db) -> Result<()> {
    let total = UserDao::count(db)?;
    let page = 20;
    println!("{:<36} NAME", "UID");
    for i in 1.. {
        for it in UserDao::all(db, (i - 1) * page, page)?.iter() {
            println!("{:<36} {}", it.uid, it);
        }
        if i * page >= total {
            break;
        }
    }
    Ok(())
}