use nut::orm::migration::Migration;

lazy_static::lazy_static! {
    pub static ref MIGRATION: Migration<'static> = Migration{
        name: "{{name}}",
        version:"{{version}}",
        up: include_str!("{{version}}-{{name}}/up.sql"),
        down: include_str!("{{version}}-{{name}}/down.sql"),
    };
}
