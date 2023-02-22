use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use diesel::Connection as DieselConntection;
use nut::{
    models::{
        log::Dao as LogDao,
        user::{Action, Dao as UserDao, Item as User},
    },
    orm::postgresql::Connection as Db,
};
use palm::{
    crypto::Password,
    jwt::Jwt,
    nut::v1::user_logs_response::item::Level::Info as LogLevelInfo,
    rbac::v1::{RoleRequest, UserRequest},
    Error, Result,
};

#[derive(clap::Parser, PartialEq, Eq, Debug)]
pub struct Token {
    #[clap(short, long)]
    pub user: String,
    #[clap(short, long)]
    pub weeks: u32,
}
impl Token {
    pub fn execute<P: Jwt>(&self, db: &mut Db, jwt: &P) -> Result<String> {
        let user = UserDao::by_uid(db, &self.user)?;
        let token = jwt.sign(
            &user.nickname,
            &Action::SignIn.to_string(),
            Duration::weeks(self.weeks as i64),
        )?;
        Ok(token)
    }
}

#[derive(clap::Parser, PartialEq, Eq, Debug)]
pub struct Role {
    #[clap(short, long)]
    pub user: String,
    #[clap(short, long)]
    pub role: String,
}

impl Role {
    pub async fn apply(&self, db: &mut Db, enf: &mut Enforcer) -> Result<()> {
        let user = UserDao::by_uid(db, &self.user)?;

        {
            let user = UserRequest { id: user.id }.to_string();
            let role = RoleRequest {
                code: self.role.clone(),
            }
            .to_string();
            enf.add_role_for_user(&user, &role, None).await?;
        }

        let un = nix::sys::utsname::uname()?;
        LogDao::add::<String, User>(
            db,
            user.id,
            LogLevelInfo,
            &format!("{:?}", un.nodename().to_str()),
            Some(user.id),
            format!(
                "Apply role {} by system user {}",
                self.role,
                nix::unistd::getuid()
            ),
        )?;

        info!("apple role {} to user {}", self.role, user,);
        Ok(())
    }

    pub async fn exempt(&self, db: &mut Db, enf: &mut Enforcer) -> Result<()> {
        let user = UserDao::by_uid(db, &self.user)?;

        {
            let user = UserRequest { id: user.id }.to_string();
            let role = RoleRequest {
                code: self.role.clone(),
            }
            .to_string();
            enf.delete_role_for_user(&user, &role, None).await?;
        }

        let un = nix::sys::utsname::uname()?;
        LogDao::add::<String, User>(
            db,
            user.id,
            LogLevelInfo,
            &format!("{:?}", un.nodename().to_str()),
            Some(user.id),
            format!(
                "Exempt role {} by system user {}.",
                self.role,
                nix::unistd::getuid(),
            ),
        )?;

        info!("exempt role {} to user {}", self.role, user);
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
    pub fn execute<P: Password>(&self, db: &mut Db, hmac: &P) -> Result<()> {
        let user = UserDao::by_uid(db, &self.user)?;
        db.transaction::<_, Error, _>(move |db| {
            let un = nix::sys::utsname::uname()?;

            UserDao::password(db, hmac, user.id, &self.password)?;
            LogDao::add::<String, User>(
                db,
                user.id,
                LogLevelInfo,
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
