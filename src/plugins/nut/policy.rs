use std::ops::DerefMut;

use async_trait::async_trait;
use casbin::{
    error::AdapterError, Adapter as CasbinAdapter, Error as CasbinError, Filter, Model, Result,
};
use diesel::Connection as DieselConntection;
use hyper::StatusCode;

use super::super::super::{orm::postgresql::Pool, Error, HttpError};
use super::models::casbin_rule::{Create, Dao as CasbinRuleDao};

pub struct Adapter {
    db: Pool,
    is_filtered: bool,
}

impl Adapter {
    pub fn new(db: Pool) -> Self {
        Self {
            db,
            is_filtered: false,
        }
    }
}

macro_rules! try_casbin {
    ($r:expr) => {{
        $r.map_err(|e| {
            CasbinError::from(AdapterError(Box::new(HttpError(
                StatusCode::INTERNAL_SERVER_ERROR,
                Some(e.to_string()),
            ))))
        })
    }};
}

// https://github.com/casbin-rs/diesel-adapter/blob/master/src/adapter.rs
#[async_trait]
impl CasbinAdapter for Adapter {
    async fn load_policy(&self, m: &mut dyn Model) -> Result<()> {
        let mut db = try_casbin!(self.db.get())?;
        let db = db.deref_mut();
        let items = try_casbin!(CasbinRuleDao::all(db))?;
        for it in items.iter() {
            let rule = it.load_policy_line();

            if let Some(ref sec) = it.ptype.chars().next().map(|x| x.to_string()) {
                if let Some(t1) = m.get_mut_model().get_mut(sec) {
                    if let Some(t2) = t1.get_mut(&it.ptype) {
                        if let Some(rule) = rule {
                            t2.get_mut_policy().insert(rule);
                        }
                    }
                }
            }
        }

        Ok(())
    }
    async fn clear_policy(&mut self) -> Result<()> {
        let mut db = try_casbin!(self.db.get())?;
        let db = db.deref_mut();
        try_casbin!(CasbinRuleDao::clear(db))?;
        Ok(())
    }
    async fn load_filtered_policy<'a>(&mut self, m: &mut dyn Model, f: Filter<'a>) -> Result<()> {
        let mut db = try_casbin!(self.db.get())?;
        let db = db.deref_mut();
        let items = try_casbin!(CasbinRuleDao::all(db))?;
        for it in items.iter() {
            let rule = it.load_filtered_policy_line(&f);

            if let Some((is_filtered, rule)) = rule {
                if is_filtered {
                    self.is_filtered = is_filtered;
                    if let Some(ref sec) = it.ptype.chars().next().map(|x| x.to_string()) {
                        if let Some(t1) = m.get_mut_model().get_mut(sec) {
                            if let Some(t2) = t1.get_mut(&it.ptype) {
                                t2.get_mut_policy().insert(rule);
                            }
                        }
                    }
                }
            }
        }
        Ok(())
    }
    async fn save_policy(&mut self, m: &mut dyn Model) -> Result<()> {
        let mut rules = vec![];

        if let Some(ast_map) = m.get_model().get("p") {
            for (ptype, ast) in ast_map {
                let it = ast
                    .get_policy()
                    .into_iter()
                    .filter_map(|x: &Vec<String>| Create::new(ptype, x));

                rules.extend(it);
            }
        }

        if let Some(ast_map) = m.get_model().get("g") {
            for (ptype, ast) in ast_map {
                let it = ast
                    .get_policy()
                    .into_iter()
                    .filter_map(|x: &Vec<String>| Create::new(ptype, x));

                rules.extend(it);
            }
        }
        let mut db = try_casbin!(self.db.get())?;
        let db = db.deref_mut();
        try_casbin!(db.transaction::<_, Error, _>(move |db| {
            CasbinRuleDao::clear(db)?;
            CasbinRuleDao::save(db, &rules)?;
            Ok(())
        }))?;
        todo!()
    }
    async fn add_policy(&mut self, _sec: &str, ptype: &str, rule: Vec<String>) -> Result<bool> {
        if let Some(ref it) = Create::new(ptype, &rule) {
            let mut db = try_casbin!(self.db.get())?;
            let db = db.deref_mut();
            try_casbin!(CasbinRuleDao::add(db, it))?;
            return Ok(true);
        }
        Ok(false)
    }
    async fn add_policies(
        &mut self,
        _sec: &str,
        ptype: &str,
        rules: Vec<Vec<String>>,
    ) -> Result<bool> {
        let items = rules
            .iter()
            .filter_map(|x: &Vec<String>| Create::new(ptype, x))
            .collect::<Vec<Create>>();
        let mut db = try_casbin!(self.db.get())?;
        let db = db.deref_mut();
        try_casbin!(db.transaction::<_, Error, _>(move |db| {
            CasbinRuleDao::save(db, &items)?;
            Ok(())
        }))?;
        Ok(true)
    }
    async fn remove_policy(&mut self, _sec: &str, ptype: &str, rule: Vec<String>) -> Result<bool> {
        let mut db = try_casbin!(self.db.get())?;
        let db = db.deref_mut();
        try_casbin!(CasbinRuleDao::destroy(db, ptype, rule))?;
        Ok(true)
    }
    async fn remove_policies(
        &mut self,
        _sec: &str,
        ptype: &str,
        rules: Vec<Vec<String>>,
    ) -> Result<bool> {
        let mut db = try_casbin!(self.db.get())?;
        let db = db.deref_mut();
        try_casbin!(db.transaction::<_, Error, _>(move |db| {
            for rule in rules {
                CasbinRuleDao::destroy(db, ptype, rule)?;
            }
            Ok(())
        }))?;
        Ok(true)
    }
    async fn remove_filtered_policy(
        &mut self,
        _sec: &str,
        ptype: &str,
        field_index: usize,
        field_values: Vec<String>,
    ) -> Result<bool> {
        let mut db = try_casbin!(self.db.get())?;
        let db = db.deref_mut();
        try_casbin!(CasbinRuleDao::destroy_filtered(
            db,
            ptype,
            field_index,
            field_values
        ))?;
        Ok(true)
    }
    fn is_filtered(&self) -> bool {
        self.is_filtered
    }
}
