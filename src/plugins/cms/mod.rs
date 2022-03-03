pub mod schema;

use super::super::orm::migration::Migration;

lazy_static! {
    pub static ref MIGRATION: Migration<'static> = Migration {
        name: "create-cms",
        version: 20220112134028,
        up: include_str!("up.sql"),
        down: include_str!("down.sql")
    };
}
