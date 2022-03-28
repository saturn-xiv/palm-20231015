use std::ops::Deref;

use askama::Template;
use juniper::GraphQLObject;
use serde::{Deserialize, Serialize};
use validator::Validate;

use super::super::super::super::super::{settings::Dao as SettingDao, Result};
use super::super::Context;

#[derive(Template, Validate, GraphQLObject, Serialize, Deserialize)]
#[template(path = "google/verify.html", escape = "none")]
#[graphql(name = "GoogleSetting")]
pub struct GoogleRequest {
    #[validate(length(min = 1))]
    pub site_verify_code: String,
}

impl GoogleRequest {
    pub const KEY: &'static str = "site.google";
    pub fn new(ctx: &Context) -> Result<Self> {
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;
        let it = SettingDao::get(db, enc, &Self::KEY.to_string(), None)?;
        Ok(it)
    }
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;

        let form = self.deref();
        SettingDao::set(db, enc, &Self::KEY.to_string(), None, form, false)?;
        Ok(())
    }
}
