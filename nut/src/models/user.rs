use std::collections::HashMap;
use std::fmt;
use std::ops::Deref;

use chrono::{NaiveDateTime, Utc};
use diesel::{insert_into, prelude::*, update};
use hyper::StatusCode;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::super::{
    crypto::random::bytes as random_bytes, crypto::Password, jwt::Jwt,
    oauth::google::openid::IdToken, orm::Connection, HttpError, Result,
};
use super::schema::{
    groups, groups_users, policies, resources, roles, roles_groups, roles_users, users,
};

pub type Profile = HashMap<String, String>;

#[derive(Debug, Serialize, Deserialize, Clone)]
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
    pub id: i32,
    pub real_name: String,
    pub nick_name: String,
    pub email: String,
    pub password: Option<Vec<u8>>,
    pub salt: Vec<u8>,
    pub uid: String,
    pub provider_type: String,
    pub provider_id: String,
    pub access_token: Option<String>,
    pub logo: String,
    pub lang: String,
    pub profile: Vec<u8>,
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
    const SALT_SIZE: usize = 32;
    pub fn new(db: &Connection, jwt: &Jwt, token: &str) -> Result<Item> {
        let token = jwt.parse::<Token>(token)?;
        let token = token.claims;
        if token.act != Token::SIGN_IN {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }
        let it = Dao::by_uid(db, &token.uid)?;
        it.available()?;
        Ok(it)
    }
    pub fn profile(&self) -> Result<Profile> {
        let val = flexbuffers::from_slice(&self.profile)?;
        Ok(val)
    }
    pub fn available(&self) -> Result<()> {
        if self.deleted_at.is_some() {
            return Err(Box::new(HttpError(StatusCode::GONE, None)));
        }
        if self.locked_at.is_some() {
            return Err(Box::new(HttpError(StatusCode::LOCKED, None)));
        }
        if self.confirmed_at.is_none() {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }
        Ok(())
    }

    pub fn has(&self, db: &Connection, role: i32) -> Result<()> {
        if roles_users::dsl::roles_users
            .filter(roles_users::dsl::role_id.eq(role))
            .filter(roles_users::dsl::user_id.eq(self.id))
            .count()
            .get_result::<i64>(db)?
            > 0
        {
            return Ok(());
        }
        for group in groups_users::dsl::groups_users
            .select(groups_users::dsl::group_id)
            .filter(groups_users::dsl::user_id.eq(self.id))
            .load::<i32>(db)?
        {
            if Self::group_has(db, group, role).is_ok() {
                return Ok(());
            }
        }
        if let Some(parent) = roles::dsl::roles
            .select(roles::dsl::parent_id)
            .filter(roles::dsl::id.eq(role))
            .first::<Option<i32>>(db)?
        {
            return self.has(db, parent);
        }
        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
    }

    fn group_has(db: &Connection, group: i32, role: i32) -> Result<()> {
        if roles_groups::dsl::roles_groups
            .filter(roles_groups::dsl::role_id.eq(role))
            .filter(roles_groups::dsl::group_id.eq(group))
            .count()
            .get_result::<i64>(db)?
            > 0
        {
            return Ok(());
        }
        if let Some(parent) = groups::dsl::groups
            .select(groups::dsl::parent_id)
            .filter(groups::dsl::id.eq(group))
            .first::<Option<i32>>(db)?
        {
            return Self::group_has(db, parent, role);
        }
        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
    }
    pub fn can(&self, db: &Connection, operation: i32, resource: i32) -> Result<()> {
        for role in policies::dsl::policies
            .select(policies::dsl::role_id)
            .filter(policies::dsl::operation_id.eq(operation))
            .filter(policies::dsl::resource_id.eq(resource))
            .load::<i32>(db)?
        {
            if self.has(db, role).is_ok() {
                return Ok(());
            }
        }
        if let Some(parent) = resources::dsl::resources
            .select(resources::dsl::parent_id)
            .filter(resources::dsl::id.eq(resource))
            .first::<Option<i32>>(db)?
        {
            return self.can(db, operation, parent);
        }
        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
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
    pub uid: &'a str,
    pub provider_type: &'a str,
    pub provider_id: &'a str,
    pub logo: &'a str,
    pub profile: &'a [u8],
    pub updated_at: &'a NaiveDateTime,
}

pub trait Dao {
    fn by_id(&self, id: i32) -> Result<Item>;
    fn by_uid(&self, uid: &str) -> Result<Item>;
    fn by_email(&self, email: &str) -> Result<Item>;
    fn by_nick_name(&self, nick_name: &str) -> Result<Item>;
    fn sign_in(&self, id: i32, ip: &str) -> Result<()>;
    fn google(&self, access_token: &str, token: &IdToken, ip: &str) -> Result<Item>;
    fn sign_up<T: Password>(
        &self,
        enc: &T,
        real_name: &str,
        nick_name: &str,
        email: &str,
        password: &str,
    ) -> Result<()>;
    fn lock(&self, id: i32, on: bool) -> Result<()>;
    fn confirm(&self, id: i32) -> Result<()>;
    fn count(&self) -> Result<i64>;
    fn all(&self) -> Result<Vec<Item>>;
    fn set_password<T: Password>(&self, enc: &T, id: i32, password: &str) -> Result<()>;
    fn set_profile(&self, id: i32, real_name: &str, logo: &str, profile: &Profile) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::id.eq(id))
            .first(self)?;
        Ok(it)
    }

    fn by_uid(&self, uid: &str) -> Result<Item> {
        let it = users::dsl::users
            .filter(users::dsl::uid.eq(uid))
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
            .filter(users::dsl::nick_name.eq(nick_name.trim()))
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
                let uid = Uuid::new_v4().to_string();
                insert_into(users::dsl::users)
                    .values(&New {
                        real_name: &match id_token.name {
                            Some(ref v) => v.clone(),
                            None => "Guest".to_string(),
                        },
                        nick_name: &format!("g{}", id_token.sub),
                        email: &email,
                        password: None,
                        salt: &random_bytes(Item::SALT_SIZE),
                        profile: &flexbuffers::to_vec(Profile::new())?,
                        provider_type: &Type::Google.to_string(),
                        provider_id: &id_token.sub,
                        logo: &match id_token.picture {
                            Some(ref v) => v.clone(),
                            None => Item::gravatar_logo(&email)?,
                        },
                        uid: &uid,
                        updated_at: &now,
                    })
                    .execute(self)?;
                self.by_uid(&uid)?
            }
        };
        update(users::dsl::users.filter(users::dsl::id.eq(it.id)))
            .set(users::dsl::access_token.eq(&Some(access_token)))
            .execute(self)?;
        Dao::sign_in(self, it.id, ip)?;

        Dao::by_id(self, it.id)
    }

    fn sign_in(&self, id: i32, ip: &str) -> Result<()> {
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
    fn sign_up<T: Password>(
        &self,
        enc: &T,
        real_name: &str,
        nick_name: &str,
        email: &str,
        password: &str,
    ) -> Result<()> {
        insert_into(users::dsl::users)
            .values(&New {
                real_name,
                nick_name,
                profile: &flexbuffers::to_vec(Profile::new())?,
                email,
                password: Some(&enc.sum(password.as_bytes())?),
                salt: &random_bytes(Item::SALT_SIZE),
                provider_type: &Type::Email.to_string(),
                provider_id: email,
                logo: &Item::gravatar_logo(&email)?,
                uid: &Uuid::new_v4().to_string(),
                updated_at: &Utc::now().naive_utc(),
            })
            .execute(self)?;
        Ok(())
    }

    fn lock(&self, id: i32, on: bool) -> Result<()> {
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

    fn confirm(&self, id: i32) -> Result<()> {
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

    fn all(&self) -> Result<Vec<Item>> {
        let items = users::dsl::users
            .order(users::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn set_password<T: Password>(&self, enc: &T, id: i32, password: &str) -> Result<()> {
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
    fn set_profile(&self, id: i32, real_name: &str, logo: &str, profile: &Profile) -> Result<()> {
        let now = Utc::now().naive_utc();
        let profile = flexbuffers::to_vec(profile)?;
        let it = users::dsl::users.filter(users::dsl::id.eq(id));
        update(it)
            .set((
                users::dsl::real_name.eq(real_name),
                users::dsl::logo.eq(logo),
                users::dsl::profile.eq(&profile),
                users::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
}

impl Item {
    // https://en.gravatar.com/site/implement/hash/
    pub fn gravatar_logo<S: AsRef<str>>(email: &S) -> Result<String> {
        use openssl::hash::{hash, MessageDigest};
        let it = hash(
            MessageDigest::md5(),
            email.as_ref().to_lowercase().trim().as_bytes(),
        )?;
        let it = it.deref();
        Ok(format!(
            "https://www.gravatar.com/avatar/{:x?}.jpg",
            it.to_vec()
        ))
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Token {
    pub uid: String,
    pub sub: String,
    pub act: String,
    pub nbf: i32,
    pub exp: i32,
}

impl Token {
    pub const SIGN_IN: &'static str = "auth.sign-in";
    pub const CONFIRM: &'static str = "auth.confirm";
    pub const UNLOCK: &'static str = "auth.unlock";
    pub const RESET_PASSWORD: &'static str = "auth.reset-password";
}
