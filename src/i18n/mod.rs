pub mod locale;
pub mod schema;

use handlebars::Handlebars;
use hyper::StatusCode;
use serde::ser::Serialize;

use super::{orm::Connection, HttpError, Result};

use self::locale::Dao;

pub trait I18n {
    fn exist(&self, lang: &str) -> bool;
    fn tr<S: Serialize>(&self, lang: &str, code: &str, args: &Option<S>) -> Option<String>;
    fn e<C: Into<String>, S: Serialize>(&self, lang: &str, code: C, args: &Option<S>) -> HttpError;
    fn t<C: Into<String>, S: Serialize>(&self, lang: &str, code: C, args: &Option<S>) -> String;
    fn set<C: Into<String>, M: Into<String>>(&self, lang: &str, code: C, message: M) -> Result<()>;
}

impl I18n for Connection {
    fn exist(&self, lang: &str) -> bool {
        if let Ok(items) = Dao::languages(self) {
            return items.contains(&lang.to_string());
        }
        false
    }

    fn tr<S: Serialize>(&self, lang: &str, code: &str, args: &Option<S>) -> Option<String> {
        let tpl = Handlebars::new();
        if let Ok(it) = Dao::by_lang_and_code(self, lang, code) {
            if let Ok(msg) = tpl.render_template(&it.message, args) {
                return Some(msg);
            }
        }
        None
    }

    fn e<C: Into<String>, S: Serialize>(&self, lang: &str, code: C, args: &Option<S>) -> HttpError {
        let msg = self.t(lang, code, args);
        HttpError(StatusCode::INTERNAL_SERVER_ERROR, Some(msg))
    }

    fn t<C: Into<String>, S: Serialize>(&self, lang: &str, code: C, args: &Option<S>) -> String {
        let code = code.into();
        match self.tr(lang, &code, args) {
            Some(msg) => msg,
            None => format!("{}.{}", lang, code),
        }
    }
    fn set<C: Into<String>, M: Into<String>>(&self, lang: &str, code: C, message: M) -> Result<()> {
        let code = code.into();
        let message = message.into();
        match Dao::by_lang_and_code(self, lang, &code) {
            Ok(it) => {
                Dao::update(self, it.id, &code, &message)?;
            }
            Err(_) => {
                Dao::create(self, lang, &code, &message)?;
            }
        }
        Ok(())
    }
}
