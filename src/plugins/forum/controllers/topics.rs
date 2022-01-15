use gotham::{prelude::*, state::State};

pub fn index(state: State) -> (State, impl IntoResponse) {
    (state, "forum topics index")
}

pub fn show(state: State) -> (State, impl IntoResponse) {
    (state, "forum show index")
}
