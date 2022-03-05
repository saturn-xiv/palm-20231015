pub mod schema;

use std::fmt::Display;

use chrono::{NaiveDateTime, Utc};
use diesel::{insert_into, prelude::*, update};
use serde::{de::DeserializeOwned, ser::Serialize};
use uuid::Uuid;

use self::schema::settings;
use super::{
    crypto::Secret,
    orm::{migration::Migration, Connection},
    Result,
};

lazy_static! {
    pub static ref MIGRATION: Migration<'static> = Migration {
        name: "create-settings",
        version: 20220112114811,
        up: include_str!("up.sql"),
        down: include_str!("down.sql")
    };
}

#[derive(Queryable)]
pub struct Item {
    pub id: Uuid,
    pub user_id: Option<Uuid>,
    pub key: String,
    pub value: Vec<u8>,
    pub salt: Option<Vec<u8>>,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn get<K: Display, V: DeserializeOwned, E: Secret>(
        &self,
        e: &E,
        key: &K,
        u: Option<Uuid>,
    ) -> Result<V>;
    fn set<K: Display, V: Serialize, E: Secret>(
        &self,
        e: &E,
        k: &K,
        u: Option<Uuid>,
        v: &V,
        f: bool,
    ) -> Result<()>;
}

impl Dao for Connection {
    fn get<K: Display, V: DeserializeOwned, E: Secret>(
        &self,
        e: &E,
        k: &K,
        u: Option<Uuid>,
    ) -> Result<V> {
        let k = k.to_string();

        let it = match u {
            Some(ref u) => settings::dsl::settings
                .filter(settings::dsl::key.eq(&k))
                .filter(settings::dsl::user_id.eq(u))
                .first::<Item>(self)?,
            None => settings::dsl::settings
                .filter(settings::dsl::key.eq(&k))
                .filter(settings::dsl::user_id.is_null())
                .first::<Item>(self)?,
        };

        let val = match it.salt {
            Some(salt) => e.decrypt(&it.value, &salt)?,
            None => it.value,
        };
        Ok(flexbuffers::from_slice(val.as_slice())?)
    }

    fn set<K: Display, V: Serialize, E: Secret>(
        &self,
        e: &E,
        k: &K,
        u: Option<Uuid>,
        v: &V,
        f: bool,
    ) -> Result<()> {
        let k = k.to_string();
        let buf = flexbuffers::to_vec(v)?;

        let (val, salt) = if f {
            let (val, salt) = e.encrypt(&buf)?;
            (val, Some(salt))
        } else {
            (buf, None)
        };

        let now = Utc::now().naive_utc();

        let it = match u {
            Some(ref u) => settings::dsl::settings
                .filter(settings::dsl::key.eq(&k))
                .filter(settings::dsl::user_id.eq(u))
                .first::<Item>(self),
            None => settings::dsl::settings
                .filter(settings::dsl::key.eq(&k))
                .filter(settings::dsl::user_id.is_null())
                .first::<Item>(self),
        };

        match it {
            Ok(it) => {
                let it = settings::dsl::settings.filter(settings::dsl::id.eq(&it.id));

                update(it)
                    .set((
                        settings::dsl::value.eq(&val),
                        settings::dsl::user_id.eq(u),
                        settings::dsl::salt.eq(&salt),
                        settings::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
            Err(_) => {
                insert_into(settings::dsl::settings)
                    .values((
                        settings::dsl::key.eq(&k),
                        settings::dsl::user_id.eq(u),
                        settings::dsl::value.eq(&val),
                        settings::dsl::salt.eq(&salt),
                        settings::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        };
        Ok(())
    }
}
