use std::ops::Deref;

use validator::Validate;

use super::super::super::super::super::{settings::Dao as SettingDao, Result};
use super::super::super::tasks::email::Handler as Smtp;
use super::super::Context;

impl Smtp {
    pub fn new(ctx: &Context) -> Result<Self> {
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let enc = ctx.aes.deref();
        ctx.token.administrator(db, jwt)?;
        let mut it: Self = SettingDao::get(db, enc, &Self::KEY.to_string(), None)?;
        it.password = "".to_string();
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
        SettingDao::set(db, enc, &Self::KEY.to_string(), None, form, true)?;
        Ok(())
    }
}
