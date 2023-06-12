use std::any::type_name;
use std::fmt::Display;

use chrono::{NaiveDateTime, Utc};
use diesel::{insert_into, prelude::*, update};
use palm::{crypto::Secret, Result};
use serde::{de::DeserializeOwned, ser::Serialize};

use super::super::{orm::postgresql::Connection, schema::settings};

pub trait Protobuf {
    fn get<V: prost::Message + Default, E: Secret>(
        &mut self,
        enc: &E,
        user: Option<i32>,
    ) -> Result<V>;
    fn set<V: prost::Message + Default, E: Secret>(
        &mut self,
        enc: &E,
        user: Option<i32>,
        value: &V,
        encode: bool,
    ) -> Result<()>;
}

impl Protobuf for Connection {
    fn get<V: prost::Message + Default, E: Secret>(
        &mut self,
        enc: &E,
        user: Option<i32>,
    ) -> Result<V> {
        let buf: Vec<u8> = Dao::get(self, enc, &type_name::<V>().to_string(), user)?;
        let it = V::decode(&buf[..])?;
        Ok(it)
    }

    fn set<V: prost::Message + Default, E: Secret>(
        &mut self,
        enc: &E,
        user: Option<i32>,
        value: &V,
        encode: bool,
    ) -> Result<()> {
        let mut buf = Vec::new();
        value.encode(&mut buf)?;
        Dao::set(self, enc, &type_name::<V>().to_string(), user, &buf, encode)?;
        Ok(())
    }
}

pub trait FlatBuffer {
    fn get<V: DeserializeOwned, E: Secret>(&mut self, enc: &E, user: Option<i32>) -> Result<V>;
    fn set<V: Serialize, E: Secret>(
        &mut self,
        enc: &E,
        user: Option<i32>,
        value: &V,
        encode: bool,
    ) -> Result<()>;
}

impl FlatBuffer for Connection {
    fn get<V: DeserializeOwned, E: Secret>(&mut self, enc: &E, user: Option<i32>) -> Result<V> {
        let buf: Vec<u8> = Dao::get(self, enc, &type_name::<V>().to_string(), user)?;
        let it = flexbuffers::from_slice(&buf)?;
        Ok(it)
    }

    fn set<V: Serialize, E: Secret>(
        &mut self,
        enc: &E,
        user: Option<i32>,
        value: &V,
        encode: bool,
    ) -> Result<()> {
        let buf = flexbuffers::to_vec(value)?;
        Dao::set(self, enc, &type_name::<V>().to_string(), user, &buf, encode)?;
        Ok(())
    }
}

#[derive(Queryable)]
pub struct Item {
    pub id: i32,
    pub key: String,
    pub user_id: Option<i32>,
    pub salt: Option<Vec<u8>>,
    pub value: Vec<u8>,
    pub version: i32,
    pub updated_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
}

pub trait Dao {
    fn get<K: Display, E: Secret>(&mut self, e: &E, k: &K, u: Option<i32>) -> Result<Vec<u8>>;
    fn set<K: Display, E: Secret>(
        &mut self,
        e: &E,
        k: &K,
        u: Option<i32>,
        v: &[u8],
        f: bool,
    ) -> Result<()>;
}

impl Dao for Connection {
    fn get<K: Display, E: Secret>(&mut self, e: &E, k: &K, u: Option<i32>) -> Result<Vec<u8>> {
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
            Some(ref salt) => e.decrypt(&it.value, salt)?,
            None => it.value,
        };
        Ok(val)
    }

    fn set<K: Display, E: Secret>(
        &mut self,
        e: &E,
        k: &K,
        u: Option<i32>,
        v: &[u8],
        f: bool,
    ) -> Result<()> {
        let k = k.to_string();

        let (val, salt) = if f {
            let (val, salt) = e.encrypt(v)?;
            (val, Some(salt))
        } else {
            (v.to_vec(), None)
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
