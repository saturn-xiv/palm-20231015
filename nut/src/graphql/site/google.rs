use std::ops::{Deref, DerefMut};

use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{
    seo::google::{Profile as GoogleProfile, ReCaptcha},
    HttpError, Result,
};
use validator::Validate;

use super::super::super::models::setting::FlatBuffer as FlatbufferSetting;
use super::super::{Context, CurrentUserAdapter};

#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "SiteSetGoogleProfileRequest")]
pub struct SetRequest {
    #[validate(length(min = 1, max = 63))]
    pub site_verify_id: Option<String>,
    pub re_captcha: Option<ReCaptchaRequest>,
}

#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "ReCaptchaRequest")]
pub struct ReCaptchaRequest {
    #[validate(length(min = 1, max = 127))]
    pub site_key: String,
    #[validate(length(min = 1, max = 127))]
    pub secret: String,
}

impl From<SetRequest> for GoogleProfile {
    fn from(x: SetRequest) -> Self {
        Self {
            site_verify_id: x.site_verify_id.clone(),
            re_captcha: x.re_captcha.map(|x| ReCaptcha {
                site_key: x.site_key.clone(),
                secret: x.secret,
            }),
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
        let it: GoogleProfile = self.clone().into();
        FlatbufferSetting::set(db, aes, None, &it, true)?;
        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "SitePingGoogleProfileRequest")]
pub struct PingRequest {
    #[validate(url, length(min = 1, max = 127))]
    pub home: String,
}

impl PingRequest {
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

        palm::seo::google::ping(&self.home).await?;

        Ok(())
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "SiteGetGoogleProfileResponse")]
pub struct GetResponse {
    pub site_verify_id: Option<String>,
    pub re_captcha: Option<ReCaptchaItem>,
}

#[derive(GraphQLObject)]
#[graphql(name = "ReCaptchaItem")]
pub struct ReCaptchaItem {
    pub site_key: String,
    pub secret: String,
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
        let it: GoogleProfile = FlatbufferSetting::get(db, aes, None)?;
        Ok(Self {
            site_verify_id: it.site_verify_id.clone(),
            re_captcha: it.re_captcha.map(|x| ReCaptchaItem {
                site_key: x.site_key.clone(),
                secret: x.secret,
            }),
        })
    }
}
