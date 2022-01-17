pub mod controllers;
pub mod models;
pub mod schema;

use super::super::orm::migration::Migration;

lazy_static! {
    pub static ref MIGRATION: Migration<'static> = Migration {
        name: "create-nut",
        version: "20220112134014",
        up: include_str!("up.sql"),
        down: include_str!("down.sql")
    };
}
