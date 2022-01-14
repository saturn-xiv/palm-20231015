pub mod controllers;
pub mod models;
pub mod robots;
pub mod rss;
pub mod schema;
pub mod sitemap;

use gotham::state::StateData;

use super::super::orm::{migration::Migration, Pool as DbPool};

lazy_static! {
    pub static ref MIGRATION: Migration<'static> = Migration {
        name: "create-nut",
        version: "20220112134014",
        up: include_str!("up.sql"),
        down: include_str!("down.sql")
    };
}

#[derive(Clone, StateData)]
pub struct Context {
    pub db: DbPool,
}
