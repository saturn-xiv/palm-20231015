pub mod sitemap;

use gotham::{prelude::*, state::State};
use serde::Deserialize;

pub fn home(state: State) -> (State, impl IntoResponse) {
    (state, "home")
}

pub fn robots(state: State) -> (State, impl IntoResponse) {
    (state, "robots")
}

#[derive(Deserialize, StateData, StaticResponseExtender, Debug)]
pub struct LangExtractor {
    pub lang: String,
}

#[derive(Deserialize, StateData, StaticResponseExtender, Debug)]
pub struct LangIdExtractor {
    pub lang: String,
    pub id: i32,
}
#[derive(Deserialize, StateData, StaticResponseExtender, Debug)]
pub struct LangUidExtractor {
    pub lang: String,
    pub uid: String,
}

pub fn rss(state: State) -> (State, impl IntoResponse) {
    let lang = LangExtractor::borrow_from(&state);
    let body = format!("rss {}", lang.lang);
    (state, body)
}
