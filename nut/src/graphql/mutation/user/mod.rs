pub mod wechat;

use std::ops::{Deref, DerefMut};

use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use diesel::Connection as DieselConntection;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{jwt::Jwt, Error, Result};
use tokio::sync::Mutex;
use validator::Validate;

use crate::models::ToRole;

use super::super::super::services::CurrentUserAdapter;
use super::super::super::{
    i18n::I18n,
    models::{
        google::user::Dao as GoogleUserDao,
        log::{Dao as LogDao, Level as LogLevel},
        user::{Action, Dao as UserDao, Item as User},
        wechat::mini_program_user::{
            Dao as WechatMiniProgramUserDao, Item as WechatMiniProgramUser,
        },
        wechat::oauth2_user::Dao as WechatOauth2UserDao,
        ToSubject,
    },
    orm::postgresql::{Connection as Db, Pool as PostgreSqlPool},
};
use super::super::{Context, Succeeded};

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserSignUpRequest", description = "User SignUp form")]
pub struct SignUpRequest {
    #[validate(length(min = 1, max = 127))]
    pub user: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserSignInRequest", description = "User SignIn form")]
pub struct SignInRequest {
    #[validate(length(min = 1, max = 127))]
    pub user: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
}

impl SignInRequest {
    pub fn handle(&self, context: &Context) -> Result<SignInResponse> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let enforcer = context.enforcer.deref();
        let user = if let Ok(it) = UserDao::by_email(db, &self.user) {
            it
        } else {
            UserDao::by_nickname(db, &self.user)?
        };
        user.auth(&context.loquat, &self.password)?;
        user.available()?;

        db.transaction::<_, Error, _>(move |db| {
            UserDao::sign_in(db, user.id, &context.session.client_ip)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                "sign in success",
            )?;
            Ok(())
        })?;

        // if let Some(ref it) = req.query {
        //     let user = try_grpc!()?;
        //     try_grpc!()?;
        //     try_grpc!()?;

        //     let it = try_grpc!(
        //         new_sign_in_response(
        //             db,
        //             enf,
        //             &user,
        //             jwt,
        //             Some(
        //                 req.ttl
        //                     .map_or(Duration::weeks(1), |x| Duration::seconds(x.seconds))
        //             ),
        //         )
        //         .await
        //     )?;
        //     return Ok(Response::new(it));
        // }
        // TODO
        Ok(Succeeded::default())
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "UserDetail", description = "User details")]
pub struct Detail {
    pub real_name: String,
    pub avatar: String,
}

#[derive(GraphQLObject)]
pub struct Permission {
    pub resource_type: String,
    pub resource_id: Option<i32>,
    pub operation: String,
}

#[derive(GraphQLObject)]
#[graphql(name = "UserSignInResponse", description = "User SignIn response")]
pub struct SignInResponse {
    pub token: String,
    pub user: Detail,
    pub roles: Vec<String>,
    pub permissions: Vec<Permission>,
}

impl SignInResponse {
    pub async fn new<P: Jwt>(
        db: &mut Db,
        enforcer: &Mutex<Enforcer>,
        user: &User,
        jwt: &P,
        ttl: Duration,
    ) -> Result<Self> {
        let token = jwt.sign(&user.nickname, &Action::SignIn.to_string(), ttl)?;
        let name = user.to_subject();
        let mut enforcer = enforcer.lock().await;

        let mut roles = Vec::new();
        {
            let items = enforcer.get_implicit_roles_for_user(&name, None);
            for it in items.iter() {
                if let Ok(it) = it.parse::<RoleRequest>() {
                    roles.push(it.code);
                }
            }
        }
        // let permissions = {
        //     let items = enforcer.get_implicit_permissions_for_user(&name, None);
        //     new_permission_list_response(&items)?
        // };

        // Ok(v1::UserSignInResponse {
        //     token,
        //     payload: Some(user.clone().into()),
        //     permissions,
        //     roles,
        //     google: GoogleUserDao::count_by_user(db, user.id)? > 0,
        //     wechat: Some(v1::user_sign_in_response::Wechat {
        //         mini_program: WechatMiniProgramUserDao::count_by_user(db, user.id)? > 0,
        //         oauth2: WechatOauth2UserDao::count_by_user(db, user.id)? > 0,
        //     }),
        // })
        todo!()
    }
}
