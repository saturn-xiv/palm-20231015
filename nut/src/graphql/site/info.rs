use std::ops::{Deref, DerefMut};

use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{Error, HttpError, Result};
use serde::{Deserialize, Serialize};
use validator::Validate;

use super::super::super::{i18n::I18n, controllers::Layout, models::setting::FlatBuffer as FlatbufferSetting};
use super::super::{Context, CurrentUserAdapter};

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "SetSiteAuthorRequest")]
pub struct SetAuthorRequest {
    #[validate(email, length(min = 1, max = 127))]
    pub email: String,
    #[validate(length(min = 1, max = 31))]
    pub name: String,
}

#[derive(Serialize, Deserialize, Default, Debug)]
pub struct Author {
    pub email: String,
    pub name: String,
}

impl SetAuthorRequest {
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
        FlatbufferSetting::set(
            db,
            aes,
            None,
            &Author {
                email: self.email.clone(),
                name: self.name.clone(),
            },
            false,
        )?;
        Ok(())
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "GetSiteAuthorResponse")]
pub struct GetAuthorResponse {
    pub email: String,
    pub name: String,
}

impl GetAuthorResponse {
    pub fn new(context: &Context) -> Result<Self> {
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let aes = context.loquat.deref();
        let it: Author = FlatbufferSetting::get(db, aes, None)?;
        Ok(Self {
            email: it.email.clone(),
            name: it.name,
        })
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "SetSiteCopyrightRequest")]
pub struct SetCopyrightRequest {
    #[validate(length(min = 1, max = 63))]
    pub copyright: String,
}

#[derive(Serialize, Deserialize, Default, Debug)]
pub struct Copyright(pub String);

impl SetCopyrightRequest {
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
        FlatbufferSetting::set(db, aes, None, &Copyright(self.copyright.clone()), false)?;
        Ok(())
    }
}

pub fn get_copyright(context: &Context) -> Result<String> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let aes = context.loquat.deref();
    let it: Copyright = FlatbufferSetting::get(db, aes, None)?;
    Ok(it.0)
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "SetSiteLogoRequest")]
pub struct SetLogoRequest {
    #[validate(url, length(min = 1, max = 127))]
    pub logo: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Logo(pub String);

impl SetLogoRequest {
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
        FlatbufferSetting::set(db, aes, None, &Logo(self.logo.clone()), false)?;
        Ok(())
    }
}

pub fn get_logo(context: &Context) -> Result<String> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let aes = context.loquat.deref();
    let it: Logo = FlatbufferSetting::get(db, aes, None)?;
    Ok(it.0)
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "SetSiteKeywordsRequest")]
pub struct SetKeywordsRequest {
    pub keywords: Vec<String>,
}

#[derive(Serialize, Deserialize, Default, Debug)]
pub struct Keywords(pub Vec<String>);

impl SetKeywordsRequest {
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
        FlatbufferSetting::set(db, aes, None, &Keywords(self.keywords.clone()), false)?;
        Ok(())
    }
}

pub fn get_keywords(context: &Context) -> Result<Vec<String>> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let aes = context.loquat.deref();
    let it: Keywords = FlatbufferSetting::get(db, aes, None)?;
    Ok(it.0)
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "SetSiteInfoRequest")]
pub struct SetRequest {
    #[validate(length(min = 1, max = 127))]
    pub title: String,
    #[validate(length(min = 1, max = 63))]
    pub subhead: String,
    #[validate(length(min = 1, max = 500))]
    pub description: String,
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

        db.transaction::<_, Error, _>(move |db| {
            I18n::set(
                db,
                &context.session.lang,
                &Layout::SITE_TITLE.to_string(),
                &self.title,
            )?;
            I18n::set(
                db,
                &context.session.lang,
                &Layout::SITE_SUBHEAD.to_string(),
                &self.subhead,
            )?;
            I18n::set(
                db,
                &context.session.lang,
                &Layout::SITE_DESCRIPTION.to_string(),
                &self.description,
            )?;
            Ok(())
        })?;
        Ok(())
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "GetSiteInfoResponse")]
pub struct GetResponse {
    pub title: String,
    pub subhead: String,
    pub description: String,
}

impl GetResponse {
    pub fn new(context: &Context) -> Result<Self> {
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        Ok(Self {
            title: I18n::t(
                db,
                &context.session.lang,
                Layout::SITE_TITLE,
                &None::<String>,
            ),
            subhead: I18n::t(
                db,
                &context.session.lang,
                Layout::SITE_SUBHEAD,
                &None::<String>,
            ),
            description: I18n::t(
                db,
                &context.session.lang,
                Layout::SITE_DESCRIPTION,
                &None::<String>,
            ),
        })
    }
}
