use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use palm::{
    crypto::random::bytes as random_bytes,
    orchid::v1::{wechat_oauth2_qr_connect_request::Language, WechatOauth2LoginResponse},
    Result,
};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::super::super::{
    orm::postgresql::Connection,
    schema::{users, wechat_oauth2_users},
};
use super::super::user::{Dao as UserDao, Item as User, New as NewUser};

#[derive(Hash, Eq, PartialEq, Queryable, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub union_id: String,
    pub app_id: String,
    pub open_id: String,
    pub nickname: String,
    pub sex: i32,
    pub city: String,
    pub provence: String,
    pub country: String,
    pub head_img_url: Option<String>,
    pub privilege: Vec<u8>,
    pub lang: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

impl Item {
    pub fn privilege(&self) -> Result<Vec<String>> {
        let it = flexbuffers::from_slice(&self.privilege)?;
        Ok(it)
    }
}

pub trait Dao {
    fn all(&mut self) -> Result<Vec<Item>>;
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_open_id(&mut self, app_id: &str, open_id: &str) -> Result<Item>;
    fn by_union_id(&mut self, union_id: &str) -> Result<Vec<Item>>;
    fn set_profile(&mut self, id: i32, user_info: &WechatOauth2LoginResponse) -> Result<()>;
    fn sign_in(
        &mut self,
        user_id: Option<i32>,
        app_id: &str,
        user_info: &WechatOauth2LoginResponse,
        lang: Language,
        ip: &str,
    ) -> Result<User>;
    fn destroy(&mut self, id: i32) -> Result<()>;
    fn bind(&mut self, id: i32, user: i32) -> Result<()>;
    fn count_by_user(&mut self, user: i32) -> Result<i64>;
}

impl Dao for Connection {
    fn all(&mut self) -> Result<Vec<Item>> {
        let items = wechat_oauth2_users::dsl::wechat_oauth2_users
            .order(wechat_oauth2_users::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = wechat_oauth2_users::dsl::wechat_oauth2_users
            .filter(wechat_oauth2_users::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_open_id(&mut self, app_id: &str, open_id: &str) -> Result<Item> {
        let it = wechat_oauth2_users::dsl::wechat_oauth2_users
            .filter(wechat_oauth2_users::dsl::app_id.eq(app_id))
            .filter(wechat_oauth2_users::dsl::open_id.eq(open_id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_union_id(&mut self, union_id: &str) -> Result<Vec<Item>> {
        let it = wechat_oauth2_users::dsl::wechat_oauth2_users
            .filter(wechat_oauth2_users::dsl::union_id.eq(union_id))
            .load::<Item>(self)?;
        Ok(it)
    }
    fn set_profile(&mut self, id: i32, info: &WechatOauth2LoginResponse) -> Result<()> {
        let now = Utc::now().naive_utc();
        let user = UserDao::by_id(self, id)?;
        if let Some(ref avatar) = info.headimgurl {
            if &user.avatar != avatar {
                update(users::dsl::users.filter(users::dsl::id.eq(id)))
                    .set((
                        users::dsl::avatar.eq(avatar),
                        users::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        }

        Ok(())
    }
    fn sign_in(
        &mut self,
        user_id: Option<i32>,
        app_id: &str,
        info: &WechatOauth2LoginResponse,
        lang: Language,
        ip: &str,
    ) -> Result<User> {
        let privilege = flexbuffers::to_vec(&info.privilege)?;
        let lang = lang.to_string();
        let now = Utc::now().naive_utc();

        let user = match Dao::by_open_id(self, app_id, &info.openid) {
            Ok(ref it) => {
                update(
                    wechat_oauth2_users::dsl::wechat_oauth2_users
                        .filter(wechat_oauth2_users::dsl::id.eq(it.id)),
                )
                .set((
                    wechat_oauth2_users::dsl::nickname.eq(&info.nickname),
                    wechat_oauth2_users::dsl::sex.eq(info.sex),
                    wechat_oauth2_users::dsl::city.eq(&info.city),
                    wechat_oauth2_users::dsl::province.eq(&info.province),
                    wechat_oauth2_users::dsl::country.eq(&info.country),
                    wechat_oauth2_users::dsl::head_img_url.eq(&info.headimgurl),
                    wechat_oauth2_users::dsl::privilege.eq(&privilege),
                    wechat_oauth2_users::dsl::lang.eq(&lang),
                    wechat_oauth2_users::dsl::updated_at.eq(&now),
                ))
                .execute(self)?;
                Dao::set_profile(self, it.user_id, info)?;
                UserDao::by_id(self, it.user_id)?
            }
            Err(_) => {
                let user = match user_id {
                    Some(id) => {
                        Dao::set_profile(self, id, info)?;
                        UserDao::by_id(self, id)?
                    }
                    None => {
                        let email = User::guest_email();

                        let uid = Uuid::new_v4().to_string();

                        insert_into(users::dsl::users)
                            .values(&NewUser {
                                real_name: &info.nickname,
                                nickname: &format!("w{}", Uuid::new_v4()),
                                email: &email,
                                uid: &uid,
                                password: None,
                                salt: &random_bytes(NewUser::SALT_SIZE),
                                lang: User::GUEST_LANG,
                                time_zone: User::GUEST_TIMEZONE,
                                avatar: &match info.headimgurl {
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
                insert_into(wechat_oauth2_users::dsl::wechat_oauth2_users)
                    .values((
                        wechat_oauth2_users::dsl::user_id.eq(user.id),
                        wechat_oauth2_users::dsl::app_id.eq(app_id),
                        wechat_oauth2_users::dsl::open_id.eq(&info.openid),
                        wechat_oauth2_users::dsl::union_id.eq(&info.unionid),
                        wechat_oauth2_users::dsl::nickname.eq(&info.nickname),
                        wechat_oauth2_users::dsl::sex.eq(info.sex),
                        wechat_oauth2_users::dsl::city.eq(&info.city),
                        wechat_oauth2_users::dsl::province.eq(&info.province),
                        wechat_oauth2_users::dsl::country.eq(&info.country),
                        wechat_oauth2_users::dsl::head_img_url.eq(&info.headimgurl),
                        wechat_oauth2_users::dsl::privilege.eq(&privilege),
                        wechat_oauth2_users::dsl::lang.eq(&lang),
                        wechat_oauth2_users::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
                user
            }
        };
        UserDao::sign_in(self, user.id, ip)?;
        Ok(user)
    }

    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(
            wechat_oauth2_users::dsl::wechat_oauth2_users
                .filter(wechat_oauth2_users::dsl::id.eq(id)),
        )
        .execute(self)?;
        Ok(())
    }
    fn bind(&mut self, id: i32, user: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(
            wechat_oauth2_users::dsl::wechat_oauth2_users
                .filter(wechat_oauth2_users::dsl::id.eq(id)),
        )
        .set((
            wechat_oauth2_users::dsl::user_id.eq(user),
            wechat_oauth2_users::dsl::updated_at.eq(&now),
        ))
        .execute(self)?;
        Ok(())
    }
    fn count_by_user(&mut self, user: i32) -> Result<i64> {
        let cnt: i64 = wechat_oauth2_users::dsl::wechat_oauth2_users
            .filter(wechat_oauth2_users::dsl::user_id.eq(user))
            .count()
            .get_result(self)?;
        Ok(cnt)
    }
}
