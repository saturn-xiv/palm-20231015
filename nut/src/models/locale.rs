use std::fs::{read_dir, read_to_string};
use std::path::Path;

use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use palm::{nut::v1, to_timestamp, Result};
use serde::{Deserialize, Serialize};
use yaml_rust::{Yaml, YamlLoader};

use super::super::{orm::postgresql::Connection, schema::locales};

#[derive(Queryable, Serialize, Deserialize, Clone)]
pub struct Item {
    pub id: i32,
    pub lang: String,
    pub code: String,
    pub message: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

impl From<Item> for v1::locale_index_response::Item {
    fn from(x: Item) -> Self {
        Self {
            id: x.id,
            lang: x.lang.clone(),
            code: x.code.clone(),
            message: x.message.clone(),
            updated_at: Some(to_timestamp!(x.updated_at)),
        }
    }
}

#[derive(Insertable)]
#[diesel(table_name = locales)]
pub struct New<'a> {
    pub lang: &'a str,
    pub code: &'a str,
    pub message: &'a str,
    pub updated_at: &'a NaiveDateTime,
}

pub trait Dao {
    fn sync<P: AsRef<Path>>(&mut self, root: P) -> Result<(usize, usize)>;
    fn languages(&mut self) -> Result<Vec<String>>;
    fn count_by_lang(&mut self, lang: &str) -> Result<i64>;
    fn count(&mut self) -> Result<i64>;
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn by_lang(&mut self, lang: &str) -> Result<Vec<Item>>;
    fn by_code(&mut self, code: &str) -> Result<Vec<Item>>;
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_lang_and_code(&mut self, lang: &str, code: &str) -> Result<Item>;
    fn delete(&mut self, id: i32) -> Result<()>;
    fn create(&mut self, lang: &str, code: &str, message: &str) -> Result<()>;
    fn update(&mut self, id: i32, message: &str) -> Result<()>;
}

fn loop_yaml(
    db: &mut Connection,
    lang: &str,
    prefix: Option<String>,
    node: Yaml,
) -> Result<(usize, usize)> {
    let mut find = 0;
    let mut inserted = 0;
    let sep = ".";
    match node {
        Yaml::String(v) => {
            let k = match prefix {
                Some(p) => p,
                None => "".to_string(),
            };
            debug!("find {} {} => {}", lang, k, v);
            find += 1;

            let cnt: i64 = locales::dsl::locales
                .count()
                .filter(locales::dsl::lang.eq(lang))
                .filter(locales::dsl::code.eq(&k))
                .get_result(db)?;
            if cnt == 0 {
                inserted += 1;
                insert_into(locales::dsl::locales)
                    .values(&New {
                        lang,
                        code: &k,
                        message: &v,
                        updated_at: &Utc::now().naive_utc(),
                    })
                    .execute(db)?;
            }
        }
        Yaml::Hash(h) => {
            for (k, v) in h {
                match k {
                    Yaml::String(k) => {
                        let (i, f) = loop_yaml(
                            db,
                            lang,
                            Some(match prefix {
                                Some(ref p) => {
                                    let mut v = String::new();
                                    v.push_str(p);
                                    v.push_str(sep);
                                    v.push_str(&k);
                                    v
                                }
                                None => k,
                            }),
                            v,
                        )?;
                        inserted += i;
                        find += f;
                    }
                    k => {
                        error!("bad key {:?}", k);
                    }
                }
            }
        }
        k => {
            error!("bad key {:?}", k);
        }
    };
    Ok((inserted, find))
}

impl Dao for Connection {
    fn sync<P: AsRef<Path>>(&mut self, root: P) -> Result<(usize, usize)> {
        let root = root.as_ref();
        info!("load items from {}", root.display());

        let mut find = 0;
        let mut inserted = 0;

        for it in read_dir(root)? {
            let it = it?;
            let it = it.path();

            if it.is_dir() {
                if let Some(lang) = it.file_name() {
                    if let Some(lang) = lang.to_str() {
                        info!("find language {}", lang);
                        for it in read_dir(&it)? {
                            let it = it?;
                            let it = it.path();
                            if it.is_file() {
                                info!("find file {}", it.display());
                                if let Some(zone) = it.file_stem() {
                                    if let Some(zone) = zone.to_str() {
                                        let buf = read_to_string(&it)?;
                                        for node in YamlLoader::load_from_str(&buf)? {
                                            let (i, f) = loop_yaml(
                                                self,
                                                lang,
                                                Some(zone.to_string()),
                                                node,
                                            )?;
                                            inserted += i;
                                            find += f;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        for it in read_dir(root)? {
            let it = it?;
            let it = it.path();

            if it.is_file() {
                if let Some(zone) = it.file_stem() {
                    if let Some(zone) = zone.to_str() {
                        for lang in self.languages()?.iter() {
                            let buf = read_to_string(&it)?;
                            for node in YamlLoader::load_from_str(&buf)? {
                                let (i, f) = loop_yaml(self, lang, Some(zone.to_string()), node)?;
                                inserted += i;
                                find += f;
                            }
                        }
                    }
                }
            }
        }

        info!("sync {}/{} items", inserted, find);
        Ok((inserted, find))
    }

    fn languages(&mut self) -> Result<Vec<String>> {
        Ok(locales::dsl::locales
            .select(locales::dsl::lang)
            .distinct()
            .order(locales::dsl::lang.asc())
            .load::<String>(self)?)
    }

    fn count(&mut self) -> Result<i64> {
        let cnt: i64 = locales::dsl::locales.count().get_result(self)?;
        Ok(cnt)
    }
    fn count_by_lang(&mut self, lang: &str) -> Result<i64> {
        let cnt: i64 = locales::dsl::locales
            .count()
            .filter(locales::dsl::lang.eq(lang))
            .get_result(self)?;
        Ok(cnt)
    }
    fn by_lang(&mut self, lang: &str) -> Result<Vec<Item>> {
        let items = locales::dsl::locales
            .filter(locales::dsl::lang.eq(lang))
            .order(locales::dsl::code.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_code(&mut self, code: &str) -> Result<Vec<Item>> {
        let items = locales::dsl::locales
            .filter(locales::dsl::code.eq(code))
            .order(locales::dsl::lang.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn all(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = locales::dsl::locales
            .order((locales::dsl::code.asc(), locales::dsl::lang.asc()))
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = locales::dsl::locales
            .filter(locales::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_lang_and_code(&mut self, lang: &str, code: &str) -> Result<Item> {
        let it = locales::dsl::locales
            .filter(locales::dsl::lang.eq(lang))
            .filter(locales::dsl::code.eq(code))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn update(&mut self, id: i32, message: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = locales::dsl::locales.filter(locales::dsl::id.eq(id));
        update(it)
            .set((
                locales::dsl::message.eq(message),
                locales::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn create(&mut self, lang: &str, code: &str, message: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(locales::dsl::locales)
            .values(&New {
                lang,
                code,
                message,
                updated_at: &now,
            })
            .execute(self)?;
        Ok(())
    }
    fn delete(&mut self, id: i32) -> Result<()> {
        delete(locales::dsl::locales.filter(locales::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
