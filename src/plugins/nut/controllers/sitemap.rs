use gotham::{prelude::*, state::State};

use super::LangExtractor;

pub fn index(state: State) -> (State, impl IntoResponse) {
    (state, "sitemap")
}

pub fn by_lang(state: State) -> (State, impl IntoResponse) {
    let lang = LangExtractor::borrow_from(&state);
    let body = format!("sitemap {}", lang.lang);
    (state, body)
}
