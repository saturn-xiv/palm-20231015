pub mod controllers;
pub mod robots;
pub mod rss;
pub mod schema;
pub mod sitemap;

use gotham::state::StateData;

use super::super::orm::{Migration, Pool as DbPool};

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

pub enum WYSIWYGEditor {
    Markdown,
    Quill,
    Draft,
    Textarea,
}

pub struct Page {
    pub body: String,
    pub editor: WYSIWYGEditor,
}
