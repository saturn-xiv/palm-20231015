pub mod controllers;
pub mod graphql;
pub mod models;
pub mod schema;

use std::collections::HashMap;

use serde::{Deserialize, Serialize};

use super::super::orm::migration::Migration;

lazy_static! {
    pub static ref MIGRATION: Migration<'static> = Migration {
        name: "create-nut",
        version: "20220112134014",
        up: include_str!("up.sql"),
        down: include_str!("down.sql")
    };
}

#[derive(Serialize, Deserialize, Default)]
pub struct EmailTask {
    pub subject: String,
    pub body: String,
    pub to: String,
    pub cc: Vec<String>,
    pub bcc: Vec<String>,
    pub files: HashMap<String, Vec<u8>>,
}

impl EmailTask {
    pub const QUEUE: &'static str = "emails";
}
