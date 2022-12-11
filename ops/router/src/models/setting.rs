use std::any::type_name;

use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, sqlite::SqliteConnection as Connection, update};
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
    fn get<V: prost::Message + Default>(&mut self, key: Option<&str>) -> Result<V>;
    fn set<V: prost::Message>(&mut self, key: Option<&str>, value: &V) -> Result<()>;
    fn destroy<V: prost::Message>(&mut self, key: Option<&str>) -> Result<()>;
}

fn build_key<T>(key: Option<&str>) -> String {
    format!("{}://{}", type_name::<T>(), key.unwrap_or_default())
}

impl Dao for Connection {
    fn get<V: prost::Message + Default>(&mut self, key: Option<&str>) -> Result<V> {
        let key = build_key::<V>(key);

        let it = settings::dsl::settings
            .filter(settings::dsl::key.eq(&key))
            .first::<Item>(self)?;
        let it = V::decode(&it.value[..])?;
        Ok(it)
    }

    fn set<V: prost::Message>(&mut self, key: Option<&str>, value: &V) -> Result<()> {
        let key = build_key::<V>(key);
        let mut buf = Vec::new();
        value.encode(&mut buf)?;

        let now = Utc::now().naive_utc();

        let it = settings::dsl::settings
            .filter(settings::dsl::key.eq(&key))
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
                        settings::dsl::key.eq(&key),
                        settings::dsl::value.eq(&buf),
                        settings::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        };
        Ok(())
    }

    fn destroy<V: prost::Message>(&mut self, key: Option<&str>) -> Result<()> {
        let key = build_key::<V>(key);
        delete(settings::dsl::settings.filter(settings::dsl::key.eq(key))).execute(self)?;
        Ok(())
    }
}
