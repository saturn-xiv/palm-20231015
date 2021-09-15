#[cfg(feature = "mysql")]
pub mod mysql;
#[cfg(feature = "postgresql")]
pub mod postgresql;
#[cfg(feature = "sqlite")]
pub mod sqlite;

use super::orm::migration::Migration;

#[cfg(feature = "mysql")]
pub use self::mysql::*;
#[cfg(feature = "postgresql")]
pub use self::postgresql::*;
#[cfg(feature = "sqlite")]
pub use self::sqlite::*;

lazy_static! {
    pub static ref AUTH_MIGRATION: Migration<'static> = Migration {
        name: "create-auth",
        version: "20210516234337",
        up: AUTH_UP,
        down: AUTH_DOWN
    };
    pub static ref FORUM_MIGRATION: Migration<'static> = Migration {
        name: "create-forum",
        version: "20210914211748",
        up: FORUM_UP,
        down: FORUM_DOWN
    };
}
