pub mod router;
pub mod user;

use diesel::sqlite::SqliteConnection as Db;
use hyper::StatusCode;
use palm::{jwt::Jwt, session::Session, HttpError, Result};

use super::models::{setting::Dao as SettingDao, Administrator};

pub trait CurrentUserAdapter {
    fn current_user<P: Jwt>(&self, db: &mut Db, jwt: &P) -> Result<String>;
}

impl CurrentUserAdapter for Session {
    fn current_user<P: Jwt>(&self, db: &mut Db, jwt: &P) -> Result<String> {
        if let Some(ref token) = self.token {
            let subject = Jwt::verify(jwt, token, Administrator::ACTION_SIGN_IN)?;
            let it: Administrator = SettingDao::get(db, None)?;
            if it.nickname == subject {
                return Ok(it.nickname);
            }
        }

        Err(Box::new(HttpError(
            StatusCode::NON_AUTHORITATIVE_INFORMATION,
            None,
        )))
    }
}
