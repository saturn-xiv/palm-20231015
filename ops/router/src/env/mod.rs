pub mod iptables;

use diesel::sqlite::SqliteConnection as Db;
use palm::{crypto::Hmac, ops::router::v1, Result};

use super::models::setting::Dao as SettingDao;

pub fn setup(db: &mut Db, hmac: &Hmac) -> Result<()> {
    {
        let it = v1::UserProfile {
            nickname: "admin".to_string(),
            password: v1::UserProfile::password(hmac, "123456")?,
        };
        warn!("set user: {}", it.nickname);
        SettingDao::set(db, None, &it)?;
    }

    Ok(())
}
