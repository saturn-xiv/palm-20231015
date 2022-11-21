use std::any::type_name;
use std::fmt::Display;

use chrono::{NaiveDateTime, Utc};
use diesel::{insert_into, prelude::*, sqlite::SqliteConnection as Connection, update};
use palm::Result;

use super::super::schema::settings;

#[derive(Queryable)]
pub struct Item {
    pub id: i32,
    pub key: String,
    pub value: Vec<u8>,
    pub updated_at: NaiveDateTime,
}

pub trait Dao {
    fn get<K: Display, V: prost::Message + Default>(&mut self) -> Result<V>;
    fn set<K: Display, V: prost::Message>(&mut self, value: &V) -> Result<()>;
}

impl Dao for Connection {
    fn get<K: Display, V: prost::Message + Default>(&mut self) -> Result<V> {
        let key = type_name::<V>();

        let it = settings::dsl::settings
            .filter(settings::dsl::key.eq(key))
            .first::<Item>(self)?;
        let it = V::decode(&it.value[..])?;
        Ok(it)
    }

    fn set<K: Display, V: prost::Message>(&mut self, value: &V) -> Result<()> {
        let key = type_name::<V>();
        let mut buf = Vec::new();
        value.encode(&mut buf)?;

        let now = Utc::now().naive_utc();

        let it = settings::dsl::settings
            .filter(settings::dsl::key.eq(key))
            .first::<Item>(self);

        match it {
            Ok(it) => {
                let it = settings::dsl::settings.filter(settings::dsl::id.eq(&it.id));

                update(it)
                    .set((
                        settings::dsl::value.eq(&buf),
                        settings::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
            Err(_) => {
                insert_into(settings::dsl::settings)
                    .values((
                        settings::dsl::key.eq(key),
                        settings::dsl::value.eq(&buf),
                        settings::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        };
        Ok(())
    }
}
