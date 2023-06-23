use std::ops::{Deref, DerefMut};

use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{
    seo::baidu::{Profile as BaiduProfile, SiteVerify},
    HttpError, Result,
};
use validator::Validate;

use super::super::super::{
    controllers::Layout,
    i18n::I18n,
    models::{locale::Dao as LocaleDao, setting::FlatBuffer as FlatbufferSetting},
};
use super::super::{Context, CurrentUserAdapter};

#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "SiteSetBaiduProfileRequest")]
pub struct SetRequest {
    pub site_verify: Option<SiteVerifyRequest>,
}

impl From<SetRequest> for BaiduProfile {
    fn from(x: SetRequest) -> Self {
        Self {
            site_verify: x.site_verify.map(|x| SiteVerify {
                id: x.id.clone(),
                content: x.content,
            }),
        }
    }
}
#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "BaiduSiteVerifyRequest")]
pub struct SiteVerifyRequest {
    #[validate(phone, length(min = 1, max = 127))]
    pub id: String,
    #[validate(phone, length(min = 1, max = 127))]
    pub content: String,
}

impl SetRequest {
    pub async fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();

        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let aes = context.loquat.deref();
        let it: BaiduProfile = self.clone().into();
        FlatbufferSetting::set(db, aes, None, &it, true)?;
        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "SitePingIndexNowProfileRequest")]
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
        let (user, _, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();

        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        for lang in LocaleDao::languages(db)?.iter() {
            let title = I18n::t(db, lang, Layout::SITE_TITLE, &None::<String>);
            palm::seo::baidu::ping(&self.home, &title, &format!("/{}/rss.xml", lang)).await?;
        }

        Ok(())
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "SiteGetBaiduProfileResponse")]
pub struct GetResponse {
    pub site_verify: Option<SiteVerifyItem>,
}

#[derive(GraphQLObject)]
#[graphql(name = "BaiduSiteVerifyItem")]
pub struct SiteVerifyItem {
    pub id: String,
    pub content: String,
}
impl GetResponse {
    pub async fn new(context: &Context) -> Result<Self> {
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();

        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let aes = context.loquat.deref();
        let it: BaiduProfile = FlatbufferSetting::get(db, aes, None)?;
        Ok(Self {
            site_verify: it.site_verify.map(|x| SiteVerifyItem {
                id: x.id.clone(),
                content: x.content,
            }),
        })
    }
}
