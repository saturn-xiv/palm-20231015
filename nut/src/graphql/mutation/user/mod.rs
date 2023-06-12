pub mod wechat;

use std::ops::{Deref, DerefMut};

use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use diesel::Connection as DieselConntection;
use juniper::{GraphQLEnum, GraphQLInputObject, GraphQLObject};
use palm::{
    jwt::Jwt,
    rbac::{Permission as RbacPermission, Role, ToSubject},
    Error, Result,
};
use tokio::sync::Mutex;
use validator::Validate;

use super::super::super::{
    models::{
        google::user::Dao as GoogleUserDao,
        log::{Dao as LogDao, Level as LogLevel},
        user::{Action, Dao as UserDao, Item as User},
        wechat::mini_program_user::Dao as WechatMiniProgramUserDao,
        wechat::oauth2_user::Dao as WechatOauth2UserDao,
    },
    orm::postgresql::Connection as Db,
};
use super::super::Context;

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
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i32,
}

impl SignInRequest {
    pub async fn handle(&self, context: &Context) -> Result<SignInResponse> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let enforcer = context.enforcer.deref();
        let user = if let Ok(it) = UserDao::by_email(db, &self.user) {
            it
        } else {
            UserDao::by_nickname(db, &self.user)?
        };
        let loquat = context.loquat.deref();
        user.auth(loquat, &self.password)?;
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

        SignInResponse::new(
            db,
            enforcer,
            &user,
            loquat,
            Duration::seconds(self.ttl as i64),
            ProviderType::Email,
        )
        .await
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "UserDetail", description = "User details")]
pub struct Detail {
    pub real_name: String,
    pub avatar: String,
    pub r#type: ProviderType,
}

#[derive(GraphQLObject)]
pub struct Permission {
    pub resource_type: String,
    pub resource_id: Option<i32>,
    pub operation: String,
}

#[derive(GraphQLEnum)]
#[graphql(name = "UserProviderType", description = "User account type")]
pub enum ProviderType {
    Email,
    Google,
    WeChatMiniProgram,
    WeChatOauth2,
}

#[derive(GraphQLObject)]
#[graphql(name = "UserSignInResponse", description = "User sign-in response")]
pub struct SignInResponse {
    pub token: String,
    pub user: Detail,
    pub roles: Vec<String>,
    pub permissions: Vec<Permission>,
    pub has_google: bool,
    pub has_wechat_mini_program: bool,
    pub has_wechat_oauth2: bool,
}

impl SignInResponse {
    pub async fn new<P: Jwt>(
        db: &mut Db,
        enforcer: &Mutex<Enforcer>,
        user: &User,
        jwt: &P,
        ttl: Duration,
        provider_type: ProviderType,
    ) -> Result<Self> {
        let token = jwt.sign(&user.nickname, &Action::SignIn.to_string(), ttl)?;
        let name = user.to_subject();
        let mut enforcer = enforcer.lock().await;

        let mut roles = Vec::new();
        {
            let items = enforcer.get_implicit_roles_for_user(&name, None);
            for it in items.iter() {
                if let Ok(ref it) = it.parse::<Role>() {
                    roles.push(it.to_string());
                }
            }
        }
        let permissions = {
            let mut items = Vec::new();
            for it in enforcer
                .get_implicit_permissions_for_user(&name, None)
                .iter()
            {
                let it = RbacPermission::new(it)?;
                if let Some(ref resource) = it.resource {
                    items.push(Permission {
                        operation: it.operation.clone(),
                        resource_type: resource.r#type.clone(),
                        resource_id: resource.id,
                    });
                }
            }

            items
        };

        Ok(Self {
            token,
            roles,
            permissions,
            user: Detail {
                real_name: user.real_name.clone(),
                avatar: user.avatar.clone(),
                r#type: provider_type,
            },
            has_google: GoogleUserDao::count_by_user(db, user.id)? > 0,
            has_wechat_mini_program: WechatMiniProgramUserDao::count_by_user(db, user.id)? > 0,
            has_wechat_oauth2: WechatOauth2UserDao::count_by_user(db, user.id)? > 0,
        })
    }
}
