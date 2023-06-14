use std::ops::{Deref, DerefMut};

use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{twilio::Config as TwilioProfile, HttpError, Result};
use validator::Validate;

use super::super::super::models::setting::FlatBuffer as FlatbufferSetting;
use super::super::{Context, CurrentUserAdapter};

#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "SiteSetTwilioProfileRequest")]
pub struct SetRequest {
    #[validate(phone, length(min = 1, max = 15))]
    pub from: String,
    #[validate(length(min = 1, max = 63))]
    pub account_sid: String,
    #[validate(length(min = 1, max = 127))]
    pub auth_token: String,
    #[validate(url, length(min = 1, max = 127))]
    pub sms_status_callback: Option<String>,
}

impl From<SetRequest> for TwilioProfile {
    fn from(x: SetRequest) -> Self {
        Self {
            from: x.from.clone(),
            account_sid: x.account_sid.clone(),
            auth_token: x.auth_token.clone(),
            sms_status_callback: x.sms_status_callback,
        }
    }
}

impl SetRequest {
    pub async fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();

        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let aes = context.loquat.deref();
        let it: TwilioProfile = self.clone().into();
        FlatbufferSetting::set(db, aes, None, &it, true)?;
        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "SitePingTwilioProfileRequest")]
pub struct PingRequest {
    #[validate(phone, length(min = 1, max = 15))]
    pub to: String,
    #[validate(length(min = 1, max = 63))]
    pub message: String,
}

impl PingRequest {
    pub async fn handle(&self, context: &Context, profile: &SetRequest) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();

        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }
        let it: TwilioProfile = profile.clone().into();
        it.sms(&self.to, &self.message, None).await?;

        Ok(())
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "SiteGetTwilioProfileResponse")]
pub struct GetResponse {
    pub from: String,
    pub account_sid: String,
    pub auth_token: String,
    pub sms_status_callback: Option<String>,
}

impl GetResponse {
    pub async fn new(context: &Context) -> Result<Self> {
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();

        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let aes = context.loquat.deref();
        let it: TwilioProfile = FlatbufferSetting::get(db, aes, None)?;
        Ok(Self {
            from: it.from.clone(),
            account_sid: it.account_sid.clone(),
            auth_token: "change-me".to_string(),
            sms_status_callback: it.sms_status_callback,
        })
    }
}
