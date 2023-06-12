pub mod ban;
pub mod session;

use std::any::type_name;
use std::fmt;
use std::string::ToString;

use chrono::{NaiveDateTime, Utc};
use chrono_tz::Tz;
use diesel::{insert_into, prelude::*, update};
use hyper::StatusCode;
use language_tags::LanguageTag;
use openssl::hash::{hash, MessageDigest};
use palm::{
    crypto::{random::bytes as random_bytes, Password},
    rbac::ToSubject,
    tasks::email::Address,
    HttpError, Result,
};
use serde::{Deserialize, Serialize};
use strum_macros::{Display as EnumDisplay, EnumString};
use uuid::Uuid;

use super::super::{orm::postgresql::Connection, schema::users};

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub enum Action {
    SignIn,
    ResetPassword,
    Unlock,
    Confirm,
    Other(String),
}

impl fmt::Display for Action {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            Self::SignIn => write!(fmt, "user.sign-in"),
            Self::ResetPassword => write!(fmt, "user.reset-password"),
            Self::Unlock => write!(fmt, "user.unlock"),
            Self::Confirm => write!(fmt, "user.confirm"),
            Self::Other(ref it) => write!(fmt, "other.{}", it),
        }
    }
}

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone, EnumString, EnumDisplay)]
#[serde(rename_all = "camelCase")]
pub enum Status {
    Email,
    Google,
    WechatMiniProgram,
    WechatOauth2,
}

#[derive(Hash, Eq, PartialEq, Queryable, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub real_name: String,
    pub nickname: String,
    pub email: String,
    pub password: Option<Vec<u8>>,
    pub salt: Vec<u8>,
    pub avatar: String,
    pub lang: String,
    pub time_zone: String,
    pub status: String,
    pub sign_in_count: i32,
    pub current_sign_in_at: Option<NaiveDateTime>,
    pub current_sign_in_ip: Option<String>,
    pub last_sign_in_at: Option<NaiveDateTime>,
    pub last_sign_in_ip: Option<String>,
    pub confirmed_at: Option<NaiveDateTime>,
    pub locked_at: Option<NaiveDateTime>,
    pub deleted_at: Option<NaiveDateTime>,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

impl fmt::Display for Item {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        write!(fmt, "{}<{}>", self.real_name, self.email)
    }
}

impl ToSubject for Item {
    fn to_subject(&self) -> String {
        format!("{}://{}", type_name::<Self>(), self.nickname)
    }
}

impl Item {
    pub const GUEST_NAME: &str = "Guest";
    pub const GUEST_LANG: &str = "en-US";
    pub const GUEST_TIMEZONE: &str = "UTC";
    pub const NIL: &str = "nil";

    pub fn guest_email() -> String {
        format!("{}@local", Uuid::new_v4().simple())
    }
    pub fn guest_nickname() -> String {
        Uuid::new_v4().simple().to_string()
    }

    pub fn address(&self) -> Address {
        Address {
            name: self.real_name.clone(),
            email: self.email.clone(),
        }
    }

    pub fn available(&self) -> Result<()> {
        if self.deleted_at.is_some() {
            return Err(Box::new(HttpError(
                StatusCode::GONE,
                Some("user is deleted".to_string()),
            )));
        }
        if self.locked_at.is_some() {
            return Err(Box::new(HttpError(
                StatusCode::LOCKED,
                Some("user is locked".to_string()),
            )));
        }
        if self.confirmed_at.is_none() {
            return Err(Box::new(HttpError(
                StatusCode::PRECONDITION_REQUIRED,
                Some("user isn't confirmed".to_string()),
            )));
        }
        Ok(())
    }
    pub fn auth<P: Password>(&self, enc: &P, password: &str) -> Result<()> {
        if let Some(ref v) = self.password {
            if enc.verify(v, password.as_bytes()) {
                return Ok(());
            }
        }

        Err(Box::new(HttpError(
            StatusCode::UNAUTHORIZED,
            Some("bad password".to_string()),
        )))
    }

    // https://en.gravatar.com/site/implement/hash/
    pub fn gravatar<S: AsRef<str>>(email: &S) -> Result<String> {
        let id = hash(
            MessageDigest::md5(),
            email.as_ref().to_lowercase().trim().as_bytes(),
        )?;
        let it = format!(
            "https://www.gravatar.com/avatar/{}.png",
            id.to_vec()
                .iter()
                .map(|x| format!("{:02x}", *x))
                .collect::<Vec::<_>>()
                .join("")
        );
        Ok(it)
    }
}

#[derive(Insertable)]
#[diesel(table_name = users)]
pub struct New<'a> {
    pub real_name: &'a str,
    pub nickname: &'a str,
    pub email: &'a str,
    pub password: Option<&'a [u8]>,
    pub salt: &'a [u8],
    pub avatar: &'a str,
    pub lang: &'a str,
    pub time_zone: &'a str,
    pub status: &'a str,
    pub updated_at: &'a NaiveDateTime,
}

impl<'a> New<'a> {
    pub const SALT_SIZE: usize = 16;
}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_email(&mut self, email: &str) -> Result<Item>;
    fn by_nickname(&mut self, nickname: &str) -> Result<Item>;
    fn set_profile(
        &mut self,
        id: i32,
        real_name: &str,
        avatar: &str,
        lang: &LanguageTag,
        time_zone: &Tz,
    ) -> Result<()>;
    fn sign_in(&mut self, id: i32, ip: &str) -> Result<()>;

    fn sign_up<P: Password>(
        &mut self,
        enc: &P,
        real_name: &str,
        nickname: &str,
        email: &str,
        password: &str,
        lang: &LanguageTag,
        time_zone: &Tz,
    ) -> Result<()>;
    fn lock(&mut self, id: i32, on: bool) -> Result<()>;
    fn enable(&mut self, id: i32, on: bool) -> Result<()>;
    fn confirm(&mut self, id: i32) -> Result<()>;
    fn count(&mut self) -> Result<i64>;
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn options(&mut self) -> Result<Vec<(i32, String, String)>>;
    fn password<P: Password>(&mut self, enc: &P, id: i32, password: &str) -> Result<()>;
    fn sync_wechat(&mut self, id: i32, name: &str, avatar: &str) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::id.eq(id))
            .first(self)?;
        Ok(it)
    }

    fn by_email(&mut self, email: &str) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::email.eq(&email))
            .first(self)?;
        Ok(it)
    }

    fn by_nickname(&mut self, nickname: &str) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::nickname.eq(nickname))
            .first(self)?;
        Ok(it)
    }

    fn sign_in(&mut self, id: i32, ip: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let (current_sign_in_at, current_sign_in_ip, sign_in_count) = users::dsl::users
            .select((
                users::dsl::current_sign_in_at,
                users::dsl::current_sign_in_ip,
                users::dsl::sign_in_count,
            ))
            .filter(users::dsl::id.eq(id))
            .first::<(Option<NaiveDateTime>, Option<String>, i32)>(self)?;
        update(users::dsl::users.filter(users::dsl::id.eq(id)))
            .set((
                users::dsl::current_sign_in_at.eq(&now),
                users::dsl::current_sign_in_ip.eq(&Some(ip)),
                users::dsl::last_sign_in_at.eq(&current_sign_in_at),
                users::dsl::last_sign_in_ip.eq(&current_sign_in_ip),
                users::dsl::sign_in_count.eq(&(sign_in_count + 1)),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn sign_up<P: Password>(
        &mut self,
        enc: &P,
        real_name: &str,
        nickname: &str,
        email: &str,
        password: &str,
        lang: &LanguageTag,
        time_zone: &Tz,
    ) -> Result<()> {
        insert_into(users::dsl::users)
            .values(&New {
                real_name,
                nickname,
                email,
                password: Some(&enc.sign(password.as_bytes())?),
                salt: &random_bytes(New::SALT_SIZE),
                avatar: &Item::gravatar(&email)?,
                lang: &lang.to_string(),
                status: &Status::Email.to_string(),
                time_zone: &time_zone.to_string(),
                updated_at: &Utc::now().naive_utc(),
            })
            .execute(self)?;
        Ok(())
    }

    fn lock(&mut self, id: i32, on: bool) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = users::dsl::users.filter(users::dsl::id.eq(id));
        update(it)
            .set((
                users::dsl::locked_at.eq(&if on { Some(now) } else { None }),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn enable(&mut self, id: i32, on: bool) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = users::dsl::users.filter(users::dsl::id.eq(id));
        update(it)
            .set((
                users::dsl::deleted_at.eq(&if on { None } else { Some(now) }),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn set_profile(
        &mut self,
        id: i32,
        real_name: &str,
        avatar: &str,
        lang: &LanguageTag,
        time_zone: &Tz,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(users::dsl::users.filter(users::dsl::id.eq(id)))
            .set((
                users::dsl::real_name.eq(real_name),
                users::dsl::avatar.eq(avatar),
                users::dsl::lang.eq(&lang.to_string()),
                users::dsl::time_zone.eq(&time_zone.to_string()),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn confirm(&mut self, id: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = users::dsl::users.filter(users::dsl::id.eq(id));
        update(it)
            .set((
                users::dsl::confirmed_at.eq(&Some(now)),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn count(&mut self) -> Result<i64> {
        let cnt: i64 = users::dsl::users.count().get_result(self)?;
        Ok(cnt)
    }

    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = users::dsl::users
            .order(users::dsl::updated_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn options(&mut self) -> Result<Vec<(i32, String, String)>> {
        let items = users::dsl::users
            .select((users::dsl::id, users::dsl::nickname, users::dsl::real_name))
            .order(users::dsl::nickname.asc())
            .load::<(i32, String, String)>(self)?;
        Ok(items)
    }
    fn password<P: Password>(&mut self, enc: &P, id: i32, password: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let password = enc.sign(password.as_bytes())?;
        let it = users::dsl::users.filter(users::dsl::id.eq(id));
        update(it)
            .set((
                users::dsl::password.eq(&Some(password)),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn sync_wechat(&mut self, id: i32, name: &str, avatar: &str) -> Result<()> {
        let now = Utc::now().naive_utc();

        let it = users::dsl::users.filter(users::dsl::id.eq(id));
        update(it)
            .set((
                users::dsl::real_name.eq(name),
                users::dsl::avatar.eq(avatar),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
}
