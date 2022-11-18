pub mod mysql;
pub mod postgresql;
pub mod sqlite;

use diesel::sql_types::Text;

#[derive(QueryableByName)]
pub struct Version {
    #[diesel(sql_type = Text)]
    pub value: String,
}
