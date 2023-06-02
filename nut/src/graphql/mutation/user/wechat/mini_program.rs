use std::ops::DerefMut;

use diesel::Connection as DieselConnection;
use juniper::GraphQLInputObject;
use palm::{Error, Result};
use validator::Validate;

use super::super::super::super::super::{
    models::{
        log::{Dao as LogDao, Level as LogLevel},
        user::{Dao as UserDao, Item as User},
        wechat::mini_program_user::Dao as WechatMiniProgramUserDao,
    },
    services::CurrentUserAdapter,
};
use super::super::super::super::{Context, Succeeded};

#[derive(GraphQLInputObject, Validate)]
#[graphql(
    name = "WechatMiniProgramUserBindRequest",
    description = "Bind WeChat mini-program user to system account"
)]
pub struct BindRequest {
    #[validate(length(min = 1, max = 63))]
    pub app_id: String,
    #[validate(length(min = 1, max = 63))]
    pub open_id: String,
    #[validate(length(min = 1, max = 63))]
    pub nickname: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
}

impl BindRequest {
    pub fn handle(&self, context: &Context) -> Result<Succeeded> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        // let loquat = context.loquat.deref();

        let user = context.session.current_user(db, ch, &context.loquat)?;
        db.transaction::<_, Error, _>(move |db| {
            let iu = UserDao::by_nickname(db, &self.nickname)?;
            {
                iu.auth(&context.loquat, &self.password)?;
                iu.available()?;
            }

            let wu = WechatMiniProgramUserDao::by_open_id(db, &self.app_id, &self.open_id)?;

            WechatMiniProgramUserDao::bind(db, wu.id, user.id)?;
            LogDao::add::<_, User>(
                db,
                iu.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                &format!(
                    "bind to wechat mini-program user({}, {}) ",
                    wu.app_id, wu.open_id
                ),
            )?;

            Ok(())
        })?;
        Ok(Succeeded::default())
    }
}
