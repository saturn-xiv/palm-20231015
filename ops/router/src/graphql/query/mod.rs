pub mod router;

use std::sync::Mutex;

use diesel::sqlite::SqliteConnection as Db;
use hyper::StatusCode;
use palm::{jwt::openssl::OpenSsl as Jwt, session::Session, HttpError, Result};

use super::CurrentUserAdapter;

pub fn logs(ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<Vec<String>> {
    if let Ok(ref mut db) = db.lock() {
        ss.current_user(db, jwt)?;
        Ok(())
    } else {
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }?;

    let items = palm::network::logs()?;
    Ok(items)
}
