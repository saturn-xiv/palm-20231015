pub mod controllers;
pub mod graphql;
pub mod handlers;
pub mod models;
pub mod schema;
pub mod services;
pub mod tasks;
pub mod v1;

use super::super::orm::postgresql::migration::Migration;

lazy_static! {
    pub static ref MIGRATION: Migration<'static> = Migration {
        name: "create-nut",
        version: 20220112134014,
        up: include_str!("up.sql"),
        down: include_str!("down.sql")
    };
}
