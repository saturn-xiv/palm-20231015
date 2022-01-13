pub mod controllers;
pub mod models;
pub mod protocols;
pub mod schema;
pub mod services;
pub mod v1;

use super::super::orm::migration::Migration;

lazy_static! {
    pub static ref MIGRATION: Migration<'static> = Migration {
        name: "create-twilio",
        version: "20220112195203",
        up: include_str!("up.sql"),
        down: include_str!("down.sql")
    };
}
