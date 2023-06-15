use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use nut::{
    models::{
        log::{Dao as LogDao, Level as LogLevel},
        user::{Action, Dao as UserDao, Item as User},
    },
    orm::postgresql::Connection as Db,
};
use palm::{
    crypto::Password,
    jwt::Jwt,
    rbac::{Role as RbacRole, Subject},
    Error, HttpError, Result,
};

fn hostname() -> String {
    if let Ok(ref it) = nix::sys::utsname::uname() {
        if let Some(it) = it.nodename().to_str() {
            return it.to_string();
        }
    }
    "unknown".to_string()
}

fn current_user() -> String {
    nix::unistd::User::from_uid(nix::unistd::getuid())
        .map_or_else(|_| None, |x| x.map(|y| y.name))
        .unwrap_or("unknown".to_string())
}

#[derive(clap::Parser, PartialEq, Eq, Debug)]
pub struct Create {
    #[clap(short, long)]
    pub nickname: String,
    #[clap(short, long)]
    pub email: String,
    #[clap(short, long)]
    pub password: String,
}

impl Create {
    pub fn execute<P: Password>(&self, db: &mut Db, hmac: &P) -> Result<()> {
        if UserDao::by_nickname(db, &self.nickname).is_ok() {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!("user {} already existed", self.nickname)),
            )));
        }
        if UserDao::by_email(db, &self.email).is_ok() {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!("user {} already existed", self.email)),
            )));
        }
        let user = db.transaction::<_, Error, _>(move |db| {
            UserDao::sign_up(
                db,
                hmac,
                "NilGate",
                &self.nickname,
                &self.email,
                &self.password,
                &"en-US".parse()?,
                &"UTC".parse()?,
            )?;
            let user = UserDao::by_email(db, &self.email)?;
            UserDao::confirm(db, user.id)?;
            LogDao::add::<String, User>(
                db,
                user.id,
                &LogLevel::Info,
                &hostname(),
                Some(user.id),
                format!("Created by system user {}.", current_user()),
            )?;
            Ok(user)
        })?;
        info!("create user {}", user);
        Ok(())
    }
}

#[derive(clap::Parser, PartialEq, Eq, Debug)]
pub struct Token {
    #[clap(short, long)]
    pub user: String,
    #[clap(short, long, default_value_t = 1<<12)]
    pub weeks: u32,
}
impl Token {
    pub fn execute<P: Jwt>(&self, db: &mut Db, jwt: &P) -> Result<String> {
        // FIXME
        let user = UserDao::by_nickname(db, &self.user)?;
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
        let user = UserDao::by_nickname(db, &self.user)?;

        {
            let user = Subject::to(&user);
            let role = {
                let it: RbacRole = self.role.parse()?;
                Subject::to(&it)
            };
            enf.add_role_for_user(&user, &role, None).await?;
        }

        LogDao::add::<String, User>(
            db,
            user.id,
            &LogLevel::Info,
            &hostname(),
            Some(user.id),
            format!("Apply role {} by system user {}", self.role, current_user()),
        )?;

        info!("apple role {} to user {}", self.role, user,);
        Ok(())
    }

    pub async fn exempt(&self, db: &mut Db, enf: &mut Enforcer) -> Result<()> {
        let user = UserDao::by_nickname(db, &self.user)?;

        {
            let user = Subject::to(&user);
            let role = {
                let it: RbacRole = self.role.parse()?;
                Subject::to(&it)
            };
            enf.delete_role_for_user(&user, &role, None).await?;
        }

        LogDao::add::<String, User>(
            db,
            user.id,
            &LogLevel::Info,
            &hostname(),
            Some(user.id),
            format!(
                "Exempt role {} by system user {}.",
                self.role,
                current_user(),
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
        // FIXME
        let user = UserDao::by_nickname(db, &self.user)?;
        db.transaction::<_, Error, _>(move |db| {
            UserDao::password(db, hmac, user.id, &self.password)?;
            LogDao::add::<String, User>(
                db,
                user.id,
                &LogLevel::Info,
                &hostname(),
                Some(user.id),
                format!("Reset password by system user {}.", current_user()),
            )?;
            Ok(())
        })?;
        info!("reset password of user {}", user);
        Ok(())
    }
}

pub fn list(_db: &mut Db) -> Result<()> {
    // FIXME
    // let total = UserDao::count(db)?;
    // let page = 20;
    println!("{:<36} NAME", "UID");
    // for i in 1.. {
    //     for it in UserDao::all(db, (i - 1) * page, page)?.iter() {
    //         println!("{:<36} {}", it.uid, it);
    //     }
    //     if i * page >= total {
    //         break;
    //     }
    // }
    Ok(())
}
