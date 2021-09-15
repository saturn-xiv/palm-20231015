pub mod schema;

pub const AUTH_UP: &str = include_str!("auth-up.sql");
pub const AUTH_DOWN: &str = include_str!("auth-down.sql");

// https://docs.nodebb.org/development/database-structure/
pub const FORUM_UP: &str = include_str!("forum-up.sql");
pub const FORUM_DOWN: &str = include_str!("forum-down.sql");
