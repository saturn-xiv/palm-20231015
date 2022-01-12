pub mod controllers;
pub mod robots;
pub mod rss;
pub mod schema;
pub mod sitemap;

use gotham::state::StateData;

use super::super::orm::Pool as DbPool;

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
