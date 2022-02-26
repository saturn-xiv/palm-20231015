pub mod controllers;
pub mod graphql;
pub mod models;
pub mod schema;

use super::super::orm::migration::Migration;

lazy_static! {
    pub static ref MIGRATION: Migration<'static> = Migration {
        name: "create-forum",
        version: 20220112134029,
        up: include_str!("up.sql"),
        down: include_str!("down.sql")
    };
}
