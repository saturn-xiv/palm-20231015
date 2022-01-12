use gotham::state::State;

pub fn home(state: State) -> (State, &'static str) {
    (state, "home")
}

pub fn robots(state: State) -> (State, &'static str) {
    (state, "home")
}

pub fn sitemap(state: State) -> (State, &'static str) {
    (state, "sitemap")
}

pub fn rss(state: State) -> (State, &'static str) {
    (state, "home")
}
