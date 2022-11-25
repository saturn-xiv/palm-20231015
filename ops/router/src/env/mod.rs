pub mod iptables;

use diesel::sqlite::SqliteConnection as Db;
use palm::{
    crypto::{Hmac, Password},
    ops::router::v1,
    Result,
};

use super::models::setting::Dao as SettingDao;

pub fn setup(db: &mut Db, hmac: &Hmac) -> Result<()> {
    {
        let it = v1::UserProfile {
            nickname: "admin".to_string(),
            password: String::from_utf8_lossy(&hmac.sum("123456".as_bytes())?).to_string(),
        };
        warn!("set user: {}", it.nickname);
        SettingDao::set(db, None, &it)?;
    }

    Ok(())
}
