pub mod controllers;
pub mod models;
pub mod protocols;
pub mod schema;

use super::super::orm::postgresql::migration::Migration;

lazy_static! {
    pub static ref MIGRATION: Migration<'static> = Migration {
        name: "create-twilio",
        version: 20220112125203,
        up: include_str!("up.sql"),
        down: include_str!("down.sql")
    };
}
