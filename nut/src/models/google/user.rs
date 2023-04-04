use chrono::{NaiveDateTime, Utc};
use diesel::{insert_into, prelude::*, update};
use palm::{
    crypto::random::bytes as random_bytes,
    google::oauth::openid::{
        AuthorizationCode as GoogleAuthorizationCode, IdToken as GoogleOpenIdToken,
    },
    Result,
};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::super::super::{
    orm::postgresql::Connection,
    schema::{google_users, users},
};
use super::super::user::{Dao as UserDao, Item as User, New as NewUser};

#[derive(Hash, Eq, PartialEq, Queryable, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub sub: String,
    pub code: Vec<u8>,
    pub token: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn all(&mut self) -> Result<Vec<Item>>;
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn sign_in(
        &mut self,
        user_id: Option<i32>,
        code: &GoogleAuthorizationCode,
        token: &GoogleOpenIdToken,
        ip: &str,
    ) -> Result<User>;
    fn set_profile(&mut self, user: i32, token: &GoogleOpenIdToken) -> Result<()>;
    fn count_by_user(&mut self, user: i32) -> Result<i64>;
}

impl Dao for Connection {
    fn all(&mut self) -> Result<Vec<Item>> {
        let items = google_users::dsl::google_users
            .order(google_users::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = google_users::dsl::google_users
            .filter(google_users::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn set_profile(&mut self, user: i32, token: &GoogleOpenIdToken) -> Result<()> {
        let user = UserDao::by_id(self, user)?;
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
        Ok(())
    }
    fn sign_in(
        &mut self,
        user_id: Option<i32>,
        code: &GoogleAuthorizationCode,
        token: &GoogleOpenIdToken,
        ip: &str,
    ) -> Result<User> {
        let code_v = flexbuffers::to_vec(code)?;
        let token_v = serde_json::to_string(token)?;
        let now = Utc::now().naive_utc();

        let user = match google_users::dsl::google_users
            .filter(google_users::dsl::sub.eq(&token.sub))
            .first::<Item>(self)
        {
            Ok(it) => {
                update(google_users::dsl::google_users.filter(google_users::dsl::id.eq(it.id)))
                    .set((
                        google_users::dsl::code.eq(&code_v),
                        google_users::dsl::token.eq(&token_v),
                        google_users::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
                Dao::set_profile(self, it.user_id, token)?;
                UserDao::by_id(self, it.user_id)?
            }
            Err(_) => {
                let user = match user_id {
                    Some(id) => {
                        Dao::set_profile(self, id, token)?;
                        UserDao::by_id(self, id)?
                    }
                    None => {
                        let email = match token.email {
                            Some(ref v) => v.clone(),
                            None => User::guest_email(),
                        };

                        let uid = Uuid::new_v4().to_string();

                        insert_into(users::dsl::users)
                            .values(&NewUser {
                                real_name: &match token.name {
                                    Some(ref v) => v.clone(),
                                    None => User::GUEST_NAME.to_string(),
                                },
                                nickname: &format!("g{}", Uuid::new_v4()),
                                email: &email,
                                uid: &uid,
                                password: None,
                                salt: &random_bytes(NewUser::SALT_SIZE),
                                lang: User::GUEST_LANG,
                                time_zone: User::GUEST_TIMEZONE,
                                avatar: &match token.picture {
                                    Some(ref v) => v.clone(),
                                    None => User::gravatar(&email)?,
                                },
                                updated_at: &now,
                            })
                            .execute(self)?;

                        let user = self.by_uid(&uid)?;
                        Self::confirm(self, user.id)?;
                        user
                    }
                };
                insert_into(google_users::dsl::google_users)
                    .values((
                        google_users::dsl::user_id.eq(user.id),
                        google_users::dsl::sub.eq(&token.sub),
                        google_users::dsl::code.eq(&code_v),
                        google_users::dsl::token.eq(&token_v),
                        google_users::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
                user
            }
        };

        UserDao::sign_in(self, user.id, ip)?;
        Ok(user)
    }

    fn count_by_user(&mut self, user: i32) -> Result<i64> {
        let cnt: i64 = google_users::dsl::google_users
            .filter(google_users::dsl::user_id.eq(user))
            .count()
            .get_result(self)?;
        Ok(cnt)
    }
}
