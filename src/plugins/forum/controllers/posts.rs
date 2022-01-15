use gotham::{prelude::*, state::State};

use super::super::super::nut::controllers::LangIdExtractor;

pub fn index(state: State) -> (State, impl IntoResponse) {
    (state, "forum posts index")
}

pub fn show(state: State) -> (State, impl IntoResponse) {
    let path = LangIdExtractor::borrow_from(&state);
    let body = format!("forum show posts {:?}", path);
    (state, body)
}
