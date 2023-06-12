#[macro_use]
extern crate log;

pub mod env;
pub mod graphql;
pub mod models;
pub mod schema;

pub const UP: &str = include_str!("up.sql");
