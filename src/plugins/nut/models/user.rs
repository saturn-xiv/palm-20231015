use std::fmt;

use chrono::{NaiveDateTime, Utc};
use chrono_tz::Tz;
use diesel::{insert_into, prelude::*, update};
use hyper::StatusCode;
use language_tags::LanguageTag;
use openssl::hash::{hash, MessageDigest};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::super::super::super::{
    crypto::{random::bytes as random_bytes, Password},
    oauth::google::openid::IdToken,
    orm::postgresql::Connection,
    HttpError, Result,
};
use super::super::schema::users;

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub enum Action {
    SignIn,
    ResetPassword,
    Unlock,
    Confirm,
    Other(String),
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Token {
    pub aud: Uuid,
    pub act: Action,
    pub nbf: i64,
    pub exp: i64,
}

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
pub enum Type {
    Google,
    Facebook,
    Line,
    Github,
    WeChat,
    Email,
}

impl fmt::Display for Type {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Type::Google => fmt.write_str("google"),
            Type::Facebook => fmt.write_str("facebook"),
            Type::Github => fmt.write_str("github"),
            Type::WeChat => fmt.write_str("wechat"),
            Type::Line => fmt.write_str("line"),
            Type::Email => fmt.write_str("email"),
        }
    }
}

#[derive(Queryable, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub real_name: String,
    pub nick_name: String,
    pub email: String,
    pub password: Option<Vec<u8>>,
    pub salt: Vec<u8>,
    pub provider_type: String,
    pub provider_id: String,
    pub access_token: Option<String>,
    pub logo: String,
    pub lang: String,
    pub time_zone: String,
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

impl Item {
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
    pub fn gravatar_logo<S: AsRef<str>>(email: &S) -> Result<String> {
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
#[table_name = "users"]
pub struct New<'a> {
    pub real_name: &'a str,
    pub nick_name: &'a str,
    pub email: &'a str,
    pub password: Option<&'a [u8]>,
    pub salt: &'a [u8],
    pub provider_type: &'a str,
    pub provider_id: &'a str,
    pub logo: &'a str,
    pub lang: &'a str,
    pub time_zone: &'a str,
    pub updated_at: &'a NaiveDateTime,
}

impl<'a> New<'a> {
    pub const SALT_SIZE: usize = 16;
}

pub trait Dao {
    fn by_id(&self, id: Uuid) -> Result<Item>;
    fn by_email(&self, email: &str) -> Result<Item>;
    fn by_nick_name(&self, nick_name: &str) -> Result<Item>;
    fn set_profile(
        &self,
        id: Uuid,
        real_name: &str,
        logo: &str,
        lang: &LanguageTag,
        time_zone: &Tz,
    ) -> Result<()>;
    fn sign_in(&self, id: Uuid, ip: &str) -> Result<()>;
    fn google(&self, access_token: &str, token: &IdToken, ip: &str) -> Result<Item>;
    fn sign_up<P: Password>(
        &self,
        enc: &P,
        real_name: &str,
        nick_name: &str,
        email: &str,
        password: &str,
        lang: &LanguageTag,
        time_zone: &Tz,
    ) -> Result<()>;
    fn lock(&self, id: Uuid, on: bool) -> Result<()>;
    fn disable(&self, id: Uuid, on: bool) -> Result<()>;
    fn confirm(&self, id: Uuid) -> Result<()>;
    fn count(&self) -> Result<i64>;
    fn all(&self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn password<P: Password>(&self, enc: &P, id: Uuid, password: &str) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&self, id: Uuid) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::id.eq(id))
            .first(self)?;
        Ok(it)
    }

    fn by_email(&self, email: &str) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::email.eq(&email.trim().to_lowercase()))
            .first(self)?;
        Ok(it)
    }

    fn by_nick_name(&self, nick_name: &str) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::nick_name.eq(nick_name.trim().to_lowercase()))
            .first(self)?;
        Ok(it)
    }

    fn google(&self, access_token: &str, id_token: &IdToken, ip: &str) -> Result<Item> {
        let now = Utc::now().naive_utc();
        let it = match users::dsl::users
            .filter(users::dsl::provider_id.eq(&id_token.sub))
            .filter(users::dsl::provider_type.eq(&Type::Google.to_string()))
            .first::<Item>(self)
        {
            Ok(it) => {
                if let Some(ref name) = id_token.name {
                    update(users::dsl::users.filter(users::dsl::id.eq(it.id)))
                        .set(users::dsl::real_name.eq(&name))
                        .execute(self)?;
                }
                if let Some(ref email) = id_token.email {
                    update(users::dsl::users.filter(users::dsl::id.eq(it.id)))
                        .set(users::dsl::email.eq(&email))
                        .execute(self)?;
                }
                if let Some(ref logo) = id_token.picture {
                    update(users::dsl::users.filter(users::dsl::id.eq(it.id)))
                        .set(users::dsl::logo.eq(&logo))
                        .execute(self)?;
                }
                it
            }
            Err(_) => {
                let email = match id_token.email {
                    Some(ref v) => v.clone(),
                    None => format!("{}@gmail.com", id_token.sub),
                };

                insert_into(users::dsl::users)
                    .values(&New {
                        real_name: &match id_token.name {
                            Some(ref v) => v.clone(),
                            None => "Guest".to_string(),
                        },
                        nick_name: &format!("g{}", id_token.sub),
                        email: &email,
                        password: None,
                        salt: &random_bytes(New::SALT_SIZE),
                        provider_type: &Type::Google.to_string(),
                        provider_id: &id_token.sub,
                        lang: "en-US",
                        time_zone: "UTC",
                        logo: &match id_token.picture {
                            Some(ref v) => v.clone(),
                            None => Item::gravatar_logo(&email)?,
                        },
                        updated_at: &now,
                    })
                    .execute(self)?;
                self.by_email(&email)?
            }
        };
        update(users::dsl::users.filter(users::dsl::id.eq(it.id)))
            .set(users::dsl::access_token.eq(&Some(access_token)))
            .execute(self)?;
        self.sign_in(it.id, ip)?;

        self.by_id(it.id)
    }

    fn sign_in(&self, id: Uuid, ip: &str) -> Result<()> {
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
        &self,
        enc: &P,
        real_name: &str,
        nick_name: &str,
        email: &str,
        password: &str,
        lang: &LanguageTag,
        time_zone: &Tz,
    ) -> Result<()> {
        let email = email.trim().to_lowercase();
        let nick_name = nick_name.trim().to_lowercase();
        let real_name = real_name.trim();
        insert_into(users::dsl::users)
            .values(&New {
                real_name,
                nick_name: &nick_name,
                email: &email,
                password: Some(&enc.sum(password.as_bytes())?),
                salt: &random_bytes(New::SALT_SIZE),
                provider_type: &Type::Email.to_string(),
                provider_id: &email,
                logo: &Item::gravatar_logo(&email)?,
                lang: &lang.to_string(),
                time_zone: &time_zone.to_string(),
                updated_at: &Utc::now().naive_utc(),
            })
            .execute(self)?;
        Ok(())
    }

    fn lock(&self, id: Uuid, on: bool) -> Result<()> {
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
    fn disable(&self, id: Uuid, on: bool) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = users::dsl::users.filter(users::dsl::id.eq(id));
        update(it)
            .set((
                users::dsl::deleted_at.eq(&if on { Some(now) } else { None }),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn set_profile(
        &self,
        id: Uuid,
        real_name: &str,
        logo: &str,
        lang: &LanguageTag,
        time_zone: &Tz,
    ) -> Result<()> {
        let real_name = real_name.trim();
        let now = Utc::now().naive_utc();
        update(users::dsl::users.filter(users::dsl::id.eq(id)))
            .set((
                users::dsl::real_name.eq(real_name),
                users::dsl::logo.eq(logo),
                users::dsl::lang.eq(&lang.to_string()),
                users::dsl::time_zone.eq(&time_zone.to_string()),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn confirm(&self, id: Uuid) -> Result<()> {
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

    fn count(&self) -> Result<i64> {
        let cnt: i64 = users::dsl::users.count().get_result(self)?;
        Ok(cnt)
    }

    fn all(&self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = users::dsl::users
            .order(users::dsl::updated_at.desc())
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }

    fn password<P: Password>(&self, enc: &P, id: Uuid, password: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let password = enc.sum(password.as_bytes())?;
        let it = users::dsl::users.filter(users::dsl::id.eq(id));
        update(it)
            .set((
                users::dsl::password.eq(&Some(password)),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
}
