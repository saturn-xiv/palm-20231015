use std::ops::{Deref, DerefMut};

use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use mime::TEXT_PLAIN_UTF_8;
use palm::{
    tasks::email::{Address, Profile as SmtpProfile, Task as EmailTask},
    HttpError, Result,
};
use validator::Validate;

use super::super::super::models::setting::FlatBuffer as FlatbufferSetting;
use super::super::{Context, CurrentUserAdapter};

#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "SiteSetSmtpProfileRequest")]
pub struct SetRequest {
    #[validate(length(min = 1, max = 127))]
    pub host: String,
    #[validate(range(min = 1, max = 65525))]
    pub port: i32,
    #[validate(length(min = 6, max = 32))]
    pub password: String,
    pub from: AddressRequest,
    pub cc: Vec<AddressRequest>,
    pub bcc: Vec<AddressRequest>,
}

impl From<SetRequest> for SmtpProfile {
    fn from(x: SetRequest) -> Self {
        Self {
            host: x.host.clone(),
            port: x.port as u16,
            password: x.password.clone(),
            from: Address {
                name: x.from.name.clone(),
                email: x.from.email.clone(),
            },
            cc: x
                .cc
                .iter()
                .map(|x| Address {
                    name: x.name.clone(),
                    email: x.email.clone(),
                })
                .collect(),
            bcc: x
                .bcc
                .iter()
                .map(|x| Address {
                    name: x.name.clone(),
                    email: x.email.clone(),
                })
                .collect(),
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
        let it: SmtpProfile = self.clone().into();
        FlatbufferSetting::set(db, aes, None, &it, true)?;
        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "SitePingSmtpProfileRequest")]
pub struct PingRequest {
    pub to: AddressRequest,
    #[validate(length(min = 1, max = 63))]
    pub subject: String,
    #[validate(length(min = 1, max = 500))]
    pub body: String,
}

#[derive(GraphQLInputObject, Validate, Clone, Debug)]
#[graphql(name = "SmtpAddressRequest")]
pub struct AddressRequest {
    #[validate(email, length(min = 1, max = 127))]
    pub email: String,
    #[validate(length(min = 1, max = 63))]
    pub name: String,
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
        let it: SmtpProfile = profile.clone().into();

        let task = EmailTask {
            subject: self.subject.clone(),
            body: self.body.clone(),
            to: Address {
                name: self.to.name.clone(),
                email: self.to.email.clone(),
            },
            content_type: TEXT_PLAIN_UTF_8.to_string(),
            cc: Vec::new(),
            bcc: Vec::new(),
            attachments: Vec::new(),
        };
        it.send(&task)?;

        Ok(())
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "SiteGetSmtpProfileResponse")]
pub struct GetResponse {
    pub host: String,
    pub port: i32,
    pub password: String,
    pub from: AddressItem,
    pub cc: Vec<AddressItem>,
    pub bcc: Vec<AddressItem>,
}

#[derive(GraphQLObject)]
#[graphql(name = "SmtpAddressItem")]
pub struct AddressItem {
    pub name: String,
    pub email: String,
}

impl From<Address> for AddressItem {
    fn from(x: Address) -> Self {
        Self {
            name: x.name.clone(),
            email: x.email,
        }
    }
}

impl AddressItem {
    pub fn new(x: &Address) -> Self {
        Self {
            name: x.name.clone(),
            email: x.email.clone(),
        }
    }
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
        let it: SmtpProfile = FlatbufferSetting::get(db, aes, None)?;
        Ok(Self {
            host: it.host.clone(),
            port: it.port as i32,
            password: "change-me".to_string(),
            from: it.from.clone().into(),
            cc: it.cc.iter().map(AddressItem::new).collect(),
            bcc: it.bcc.iter().map(AddressItem::new).collect(),
        })
    }
}
