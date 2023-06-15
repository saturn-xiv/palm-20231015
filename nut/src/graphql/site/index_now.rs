use std::ops::{Deref, DerefMut};

use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};

use palm::{
    seo::{index_now::Profile as IndexNowProfile, Provider as SeoProvider},
    HttpError, Result,
};
use validator::Validate;

use super::super::super::models::{
    locale::Dao as LocaleDao, setting::FlatBuffer as FlatbufferSetting,
};
use super::super::{Context, CurrentUserAdapter};

#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "SiteSetIndexNowProfileRequest")]
pub struct SetRequest {
    #[validate(length(min = 1, max = 255))]
    pub key: String,
}

impl From<SetRequest> for IndexNowProfile {
    fn from(x: SetRequest) -> Self {
        Self { key: x.key }
    }
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
        let it: IndexNowProfile = self.clone().into();
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
    pub async fn handle(&self, context: &Context, profile: &SetRequest) -> Result<()> {
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
        let it: IndexNowProfile = profile.clone().into();

        let mut links = Vec::new();
        for lang in LocaleDao::languages(db)?.iter() {
            let items = SeoProvider::by_lang(ch, lang)?;
            let items: Vec<String> = items.iter().map(|x| x.path.clone()).collect::<_>();
            links.extend(items);
        }

        palm::seo::index_now::ping(&self.home, &it.key, &links).await?;

        Ok(())
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "SiteGetIndexNowProfileResponse")]
pub struct GetResponse {
    pub key: String,
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
        let it: IndexNowProfile = FlatbufferSetting::get(db, aes, None)?;
        Ok(Self { key: it.key })
    }
}
