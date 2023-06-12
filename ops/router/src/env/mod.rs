pub mod iptables;

use diesel::sqlite::SqliteConnection as Db;
use palm::{crypto::Password, Result};

use super::models::{setting::Dao as SettingDao, Administrator};

pub fn setup<P: Password>(db: &mut Db, hmac: &P) -> Result<()> {
    {
        let it = Administrator {
            nickname: "admin".to_string(),
            password: Administrator::password(hmac, "123456")?,
        };
        warn!("set user: {}", it.nickname);
        SettingDao::set(db, None, &it)?;
    }

    Ok(())
}
