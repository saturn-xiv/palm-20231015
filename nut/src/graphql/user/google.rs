use std::ops::{Deref, DerefMut};

use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{
    cache::Provider as CacheProvider,
    google::oauth::{
        openid::IdToken as GoogleIdToken, ClientSecret as GoogleClientSecret, Scope as GoogleScope,
    },
    Error, HttpError, Result,
};
use validator::Validate;

use super::super::super::models::{
    google::user::Dao as GoogleUserDao,
    log::{Dao as LogDao, Level as LogLevel},
    setting::Dao as SettingDao,
    user::{
        session::{Dao as UserSessionDao, ProviderType},
        Dao as UserDao, Item as User,
    },
};
use super::super::{Context, Oauth2State};
use super::SignInResponse;

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "GoogleUserSignInUrlRequest")]
pub struct SignInUrlRequest {
    #[validate(length(min = 1, max = 127))]
    pub state: String,
    #[validate(length(min = 1, max = 63))]
    pub project: String,
    #[validate(url, length(min = 1, max = 255))]
    pub redirect_uri: String,
}

impl SignInUrlRequest {
    pub async fn handle(&self, context: &Context) -> Result<SignInUrlResponse> {
        self.validate()?;

        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let mut db = context.db.get()?;
        let db = db.deref_mut();

        let key = GoogleClientSecret::key(&self.project);
        let cfg: GoogleClientSecret = {
            let aes = context.loquat.deref();
            let buf = SettingDao::get(db, aes, &key, None)?;
            flexbuffers::from_slice(&buf)?
        };
        let state: Oauth2State = self.state.parse()?;

        let (url, nonce) = cfg.web.openid_connect(
            vec![
                GoogleScope::Openid,
                GoogleScope::Email,
                GoogleScope::Profile,
            ],
            &state,
            &self.redirect_uri,
        );
        ch.set(&key, &nonce, Duration::minutes(1))?;
        Ok(SignInUrlResponse { url, nonce })
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "GoogleUserSignInUrlResponse")]
pub struct SignInUrlResponse {
    pub url: String,
    pub nonce: String,
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "GoogleUserSignInRequest")]
pub struct SignInRequest {
    #[validate(length(max = 63))]
    pub id: String,
    #[validate(length(equal = 36))]
    pub user: Option<String>,
    #[validate(length(min = 1, max = 63))]
    pub project: String,
    #[validate(length(min = 1, max = 63))]
    pub nonce: String,
    #[validate(url, length(min = 1, max = 255))]
    pub redirect_uri: String,
    #[validate(length(min = 1, max = 255))]
    pub code: String,
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i32,
}

impl SignInRequest {
    pub async fn handle(&self, context: &Context) -> Result<SignInResponse> {
        self.validate()?;

        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let mut db = context.db.get()?;
        let db = db.deref_mut();

        let state = Oauth2State {
            user: self.user.clone(),
            id: self.id.clone(),
        };
        debug!("google oauth2 sign {:?}, {:?}", self, state);

        let cfg: GoogleClientSecret = {
            let aes = context.loquat.deref();
            let buf = SettingDao::get(db, aes, &GoogleClientSecret::key(&self.project), None)?;
            flexbuffers::from_slice(&buf)?
        };
        {
            let tmp: String = ch.fetch(&state.id)?;
            if self.nonce != tmp {
                return Err(Box::new(HttpError(
                    StatusCode::BAD_REQUEST,
                    Some("bad nonce".to_string()),
                )));
            }
        }

        let code = cfg
            .web
            .exchange_authorization_code(&self.redirect_uri, &self.code)
            .await?;
        let token: GoogleIdToken = serde_json::from_str(&code.id_token)?;

        let user = db.transaction::<_, Error, _>(move |db| {
            let user = match state.user {
                Some(ref uid) => {
                    let it = {
                        let su = UserSessionDao::by_uid(db, uid)?;
                        UserDao::by_id(db, su.id)?
                    };
                    it.available()?;
                    Some(it.id)
                }
                None => None,
            };
            let user = GoogleUserDao::sign_in(db, user, &code, &token, &context.session.client_ip)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                "sign in by google",
            )?;
            Ok(user)
        })?;

        let jwt = context.loquat.deref();
        let enf = context.enforcer.deref();
        let it = SignInResponse::new(
            db,
            enf,
            &user,
            jwt,
            Duration::seconds(self.ttl as i64),
            ProviderType::Google,
            &context.session.client_ip,
        )
        .await?;
        Ok(it)
    }
}
