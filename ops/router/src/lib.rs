#[macro_use]
extern crate log;

pub mod env;
pub mod models;
pub mod schema;
pub mod services;

pub const UP: &str = include_str!("up.sql");
