use std::fmt;

use chrono::{NaiveDateTime, Utc};
use chrono_tz::Tz;
use diesel::{insert_into, prelude::*, update};
use hyper::StatusCode;
use language_tags::LanguageTag;
use openssl::hash::{hash, MessageDigest};
use palm::{
    crypto::{random::bytes as random_bytes, Password},
    google::oauth::openid::{
        AuthorizationCode as GoogleAuthorizationCode, IdToken as GoogleOpenIdToken,
    },
    nut::v1,
    orchid::v1::WeChatLoginResponse,
    rbac::v1::users_response::Item as RbacUser,
    HttpError, Result,
};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::super::{
    orm::postgresql::Connection,
    schema::{google_users, users, wechat_users},
};

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

#[derive(Hash, Eq, PartialEq, Queryable, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub real_name: String,
    pub nickname: String,
    pub email: String,
    pub password: Option<Vec<u8>>,
    pub salt: Vec<u8>,
    pub uid: String,
    pub avatar: String,
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

impl From<Item> for v1::UserDetail {
    fn from(it: Item) -> Self {
        Self {
            nickname: it.nickname.clone(),
            real_name: it.real_name,
        }
    }
}

impl From<Item> for RbacUser {
    fn from(it: Item) -> Self {
        Self {
            id: it.id,
            uid: it.uid.clone(),
            nickname: it.nickname.clone(),
            real_name: it.real_name.clone(),
            email: it.email,
        }
    }
}

impl Item {
    const GUEST_NAME: &str = "Guest";
    const GUEST_LANG: &str = "en-US";
    const GUEST_TIMEZONE: &str = "UTC";

    fn guest_email() -> String {
        format!("{}@local", Uuid::new_v4())
    }

    pub fn address(&self) -> v1::email_task::Address {
        v1::email_task::Address {
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
    pub uid: &'a str,
    pub avatar: &'a str,
    pub lang: &'a str,
    pub time_zone: &'a str,
    pub updated_at: &'a NaiveDateTime,
}

impl<'a> New<'a> {
    pub const SALT_SIZE: usize = 16;
}

#[derive(Hash, Eq, PartialEq, Queryable, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct GoogleUserItem {
    pub id: i32,
    pub user_id: i32,
    pub sub: String,
    pub code: Vec<u8>,
    pub token: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

impl GoogleUserItem {
    pub fn code(&self) -> Result<GoogleAuthorizationCode> {
        let it = flexbuffers::from_slice(&self.code)?;
        Ok(it)
    }
    pub fn token(&self) -> Result<GoogleOpenIdToken> {
        let it = serde_json::from_str(&self.token)?;
        Ok(it)
    }
}

pub trait Dao {
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_uid(&mut self, uid: &str) -> Result<Item>;
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
    fn google(
        &mut self,
        id: Option<i32>,
        code: &GoogleAuthorizationCode,
        token: &GoogleOpenIdToken,
        ip: &str,
    ) -> Result<Item>;
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
    fn wechat(&mut self, ip: &str, app_id: &str, who: &WeChatLoginResponse) -> Result<Item>;
}

impl Dao for Connection {
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::id.eq(id))
            .first(self)?;
        Ok(it)
    }

    fn by_uid(&mut self, uid: &str) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::uid.eq(uid))
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

    fn google(
        &mut self,
        id: Option<i32>,
        code: &GoogleAuthorizationCode,
        token: &GoogleOpenIdToken,
        ip: &str,
    ) -> Result<Item> {
        let code_v = flexbuffers::to_vec(code)?;
        let token_v = serde_json::to_string(token)?;
        let now = Utc::now().naive_utc();
        let user = match id {
            Some(id) => Self::by_id(self, id)?,
            None => {
                let email = match token.email {
                    Some(ref v) => v.clone(),
                    None => Item::guest_email(),
                };

                let uid = Uuid::new_v4().to_string();

                insert_into(users::dsl::users)
                    .values(&New {
                        real_name: &match token.name {
                            Some(ref v) => v.clone(),
                            None => Item::GUEST_NAME.to_string(),
                        },
                        nickname: &format!("g{}", Uuid::new_v4()),
                        email: &email,
                        uid: &uid,
                        password: None,
                        salt: &random_bytes(New::SALT_SIZE),
                        lang: Item::GUEST_LANG,
                        time_zone: Item::GUEST_TIMEZONE,
                        avatar: &match token.picture {
                            Some(ref v) => v.clone(),
                            None => Item::gravatar(&email)?,
                        },
                        updated_at: &now,
                    })
                    .execute(self)?;
                let it = self.by_uid(&uid)?;
                Self::confirm(self, it.id)?;
                it
            }
        };
        match google_users::dsl::google_users
            .select(google_users::dsl::id)
            .filter(google_users::dsl::sub.eq(&token.sub))
            .first::<i32>(self)
        {
            Ok(id) => {
                if let Some(ref name) = token.name {
                    if &user.real_name != name {
                        update(users::dsl::users.filter(users::dsl::id.eq(user.id)))
                            .set(users::dsl::real_name.eq(&name))
                            .execute(self)?;
                    }
                }
                if let Some(ref email) = token.email {
                    if &user.email != email {
                        update(users::dsl::users.filter(users::dsl::id.eq(user.id)))
                            .set(users::dsl::email.eq(&email))
                            .execute(self)?;
                    }
                }
                if let Some(ref avatar) = token.picture {
                    if &user.avatar != avatar {
                        update(users::dsl::users.filter(users::dsl::id.eq(user.id)))
                            .set(users::dsl::avatar.eq(&avatar))
                            .execute(self)?;
                    }
                }
                update(google_users::dsl::google_users.filter(google_users::dsl::id.eq(user.id)))
                    .set((
                        google_users::dsl::code.eq(&code_v),
                        google_users::dsl::token.eq(&token_v),
                        google_users::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
            Err(_) => {
                insert_into(google_users::dsl::google_users)
                    .values((
                        google_users::dsl::user_id.eq(user.id),
                        google_users::dsl::sub.eq(&token.sub),
                        google_users::dsl::code.eq(&code_v),
                        google_users::dsl::token.eq(&token_v),
                        google_users::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        };

        self.sign_in(user.id, ip)?;
        Ok(user)
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
        let uid = Uuid::new_v4().to_string();
        insert_into(users::dsl::users)
            .values(&New {
                real_name,
                nickname,
                email,
                uid: &uid,
                password: Some(&enc.sign(password.as_bytes())?),
                salt: &random_bytes(New::SALT_SIZE),
                avatar: &Item::gravatar(&email)?,
                lang: &lang.to_string(),
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
    fn wechat(&mut self, ip: &str, app_id: &str, who: &WeChatLoginResponse) -> Result<Item> {
        let now = Utc::now().naive_utc();

        // if let Some(ref id) = who.unionid {
        //     if let Ok(it) = Self::by_provider(self, UserProviderType::Wechat, id) {
        //         return Ok(it);
        //     }
        // }

        // FIXME
        // let provider_id = format!("{}.{}", app_id, who.openid);
        // if let Ok(it) = Self::by_provider(self, UserProviderType::Wechat, &provider_id) {
        //     if let Some(ref id) = who.unionid {
        //         update(users::dsl::users.filter(users::dsl::id.eq(it.id)))
        //             .set((
        //                 users::dsl::provider_id.eq(id),
        //                 users::dsl::updated_at.eq(&now),
        //             ))
        //             .execute(self)?;
        //     }
        //     return Ok(it);
        // }

        let email = Item::guest_email();
        let uid = Uuid::new_v4().to_string();

        insert_into(users::dsl::users)
            .values(&New {
                real_name: Item::GUEST_NAME,
                nickname: &format!("w{}", Uuid::new_v4()),
                email: &email,
                uid: &uid,
                password: None,
                salt: &random_bytes(New::SALT_SIZE),
                lang: Item::GUEST_LANG,
                time_zone: Item::GUEST_TIMEZONE,
                avatar: &Item::gravatar(&email)?,
                updated_at: &now,
            })
            .execute(self)?;

        let it = self.by_uid(&uid)?;

        Self::confirm(self, it.id)?;
        // FIXME
        // let access_token = who.access_token();
        // update(users::dsl::users.filter(users::dsl::id.eq(it.id)))
        //     .set(users::dsl::access_token.eq(&Some(access_token)))
        //     .execute(self)?;
        self.sign_in(it.id, ip)?;

        self.by_id(it.id)
    }
}
