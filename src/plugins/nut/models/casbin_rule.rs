use diesel::{
    delete, insert_into, BoolExpressionMethods, ExpressionMethods, QueryDsl, RunQueryDsl,
};
use serde::Serialize;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::casbin_rules;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub ptype: String,
    pub v0: String,
    pub v1: String,
    pub v2: String,
    pub v3: String,
    pub v4: String,
    pub v5: String,
}

#[derive(Insertable)]
#[diesel(table_name = casbin_rules)]
pub struct Create {
    pub ptype: String,
    pub v0: String,
    pub v1: String,
    pub v2: String,
    pub v3: String,
    pub v4: String,
    pub v5: String,
}

impl Create {
    pub fn new(ptype: &str, rule: &[String]) -> Option<Self> {
        if ptype.trim().is_empty() || rule.is_empty() {
            return None;
        }

        let mut it = Self {
            ptype: ptype.to_owned(),
            v0: "".to_owned(),
            v1: "".to_owned(),
            v2: "".to_owned(),
            v3: "".to_owned(),
            v4: "".to_owned(),
            v5: "".to_owned(),
        };

        it.v0 = rule[0].to_owned();

        if rule.len() > 1 {
            it.v1 = rule[1].to_owned();
        }

        if rule.len() > 2 {
            it.v2 = rule[2].to_owned();
        }

        if rule.len() > 3 {
            it.v3 = rule[3].to_owned();
        }

        if rule.len() > 4 {
            it.v4 = rule[4].to_owned();
        }

        if rule.len() > 5 {
            it.v5 = rule[5].to_owned();
        }

        Some(it)
    }
}

impl Item {
    pub fn load_policy_line(&self) -> Option<Vec<String>> {
        if self.ptype.chars().next().is_some() {
            return self.normalize_policy();
        }

        None
    }
    pub fn normalize_policy(&self) -> Option<Vec<String>> {
        let mut result = vec![&self.v0, &self.v1, &self.v2, &self.v3, &self.v4, &self.v5];

        while let Some(last) = result.last() {
            if last.is_empty() {
                result.pop();
            } else {
                break;
            }
        }

        if !result.is_empty() {
            return Some(result.iter().map(|&x| x.to_owned()).collect());
        }

        None
    }
    pub fn load_filtered_policy_line(&self, f: &casbin::Filter) -> Option<(bool, Vec<String>)> {
        if let Some(sec) = self.ptype.chars().next() {
            if let Some(policy) = self.normalize_policy() {
                let mut is_filtered = true;
                if sec == 'p' {
                    for (i, rule) in f.p.iter().enumerate() {
                        if !rule.is_empty() && rule != &policy[i] {
                            is_filtered = false
                        }
                    }
                } else if sec == 'g' {
                    for (i, rule) in f.g.iter().enumerate() {
                        if !rule.is_empty() && rule != &policy[i] {
                            is_filtered = false
                        }
                    }
                } else {
                    return None;
                }
                return Some((is_filtered, policy));
            }
        }

        None
    }
}
// macro_rules! eq_empty {
//     ($v:expr,$f:expr) => {{
//         || {
//             diesel::dsl::sql("")
//                 .bind::<diesel::sql_types::Bool, _>($v.is_empty())
//                 .or(diesel::dsl::sql("")
//                     .bind::<diesel::sql_types::Bool, _>(!$v.is_empty())
//                     .and($f.eq($v)))
//         }
//     }
//     ()};
// }
pub trait Dao {
    fn all(&mut self) -> Result<Vec<Item>>;
    fn clear(&mut self) -> Result<()>;
    fn save(&mut self, items: &[Create]) -> Result<()>;
    fn add(&mut self, it: &Create) -> Result<()>;
    fn destroy(&mut self, ptype: &str, rule: Vec<String>) -> Result<()>;
    fn destroy_filtered(
        &mut self,
        ptype: &str,
        field_index: usize,
        field_values: Vec<String>,
    ) -> Result<()>;
}

impl Dao for Connection {
    fn all(&mut self) -> Result<Vec<Item>> {
        let items = casbin_rules::dsl::casbin_rules.load::<Item>(self)?;
        Ok(items)
    }
    fn clear(&mut self) -> Result<()> {
        delete(casbin_rules::dsl::casbin_rules).execute(self)?;
        Ok(())
    }
    fn save(&mut self, items: &[Create]) -> Result<()> {
        insert_into(casbin_rules::dsl::casbin_rules)
            .values(items)
            .execute(self)?;
        Ok(())
    }
    fn add(&mut self, it: &Create) -> Result<()> {
        insert_into(casbin_rules::dsl::casbin_rules)
            .values(it)
            .execute(self)?;
        Ok(())
    }
    fn destroy(&mut self, ptype: &str, rule: Vec<String>) -> Result<()> {
        let rule = normalize_casbin_rule(rule, 0);

        let filter = casbin_rules::dsl::ptype
            .eq(ptype)
            .and(casbin_rules::dsl::v0.eq(&rule[0]))
            .and(casbin_rules::dsl::v1.eq(&rule[1]))
            .and(casbin_rules::dsl::v2.eq(&rule[2]))
            .and(casbin_rules::dsl::v3.eq(&rule[3]))
            .and(casbin_rules::dsl::v4.eq(&rule[4]))
            .and(casbin_rules::dsl::v5.eq(&rule[5]));

        delete(casbin_rules::dsl::casbin_rules.filter(filter)).execute(self)?;
        Ok(())
    }
    fn destroy_filtered(
        &mut self,
        _ptype: &str,
        _field_index: usize,
        _field_values: Vec<String>,
    ) -> Result<()> {
        // let field_values = normalize_casbin_rule(field_values, field_index);
        // let query = if field_index == 5 {
        //     delete(
        //         casbin_rules::dsl::casbin_rules.filter(
        //             casbin_rules::dsl::ptype
        //                 .eq(ptype)
        //                 .and(eq_empty!(&field_values[0], casbin_rules::dsl::v5)),
        //         ),
        //     )
        //     .into_boxed()
        // } else if field_index == 4 {
        //     delete(
        //         casbin_rules::dsl::casbin_rules.filter(
        //             casbin_rules::dsl::ptype
        //                 .eq(ptype)
        //                 .and(eq_empty!(&field_values[0], casbin_rules::dsl::v4))
        //                 .and(eq_empty!(&field_values[1], casbin_rules::dsl::v5)),
        //         ),
        //     )
        //     .into_boxed()
        // } else if field_index == 3 {
        //     delete(
        //         casbin_rules::dsl::casbin_rules.filter(
        //             casbin_rules::dsl::ptype
        //                 .eq(ptype)
        //                 .and(eq_empty!(&field_values[0], casbin_rules::dsl::v3))
        //                 .and(eq_empty!(&field_values[1], casbin_rules::dsl::v4))
        //                 .and(eq_empty!(&field_values[2], casbin_rules::dsl::v5)),
        //         ),
        //     )
        //     .into_boxed()
        // } else if field_index == 2 {
        //     delete(
        //         casbin_rules::dsl::casbin_rules.filter(
        //             casbin_rules::dsl::ptype
        //                 .eq(ptype)
        //                 .and(eq_empty!(&field_values[0], casbin_rules::dsl::v2))
        //                 .and(eq_empty!(&field_values[1], casbin_rules::dsl::v3))
        //                 .and(eq_empty!(&field_values[2], casbin_rules::dsl::v4))
        //                 .and(eq_empty!(&field_values[3], casbin_rules::dsl::v5)),
        //         ),
        //     )
        //     .into_boxed()
        // } else if field_index == 1 {
        //     delete(
        //         casbin_rules::dsl::casbin_rules.filter(
        //             casbin_rules::dsl::ptype
        //                 .eq(ptype)
        //                 .and(eq_empty!(&field_values[0], casbin_rules::dsl::v1))
        //                 .and(eq_empty!(&field_values[1], casbin_rules::dsl::v2))
        //                 .and(eq_empty!(&field_values[2], casbin_rules::dsl::v3))
        //                 .and(eq_empty!(&field_values[3], casbin_rules::dsl::v4))
        //                 .and(eq_empty!(&field_values[4], casbin_rules::dsl::v5)),
        //         ),
        //     )
        //     .into_boxed()
        // } else {
        //     delete(
        //         casbin_rules::dsl::casbin_rules.filter(
        //             casbin_rules::dsl::ptype
        //                 .eq(ptype)
        //                 .and(eq_empty!(&field_values[0], casbin_rules::dsl::v0))
        //                 .and(eq_empty!(&field_values[1], casbin_rules::dsl::v1))
        //                 .and(eq_empty!(&field_values[2], casbin_rules::dsl::v2))
        //                 .and(eq_empty!(&field_values[3], casbin_rules::dsl::v3))
        //                 .and(eq_empty!(&field_values[4], casbin_rules::dsl::v4))
        //                 .and(eq_empty!(&field_values[5], casbin_rules::dsl::v5)),
        //         ),
        //     )
        //     .into_boxed()
        // };
        // query.execute(self)?;
        // Ok(())
        todo!()
    }
}

fn normalize_casbin_rule(mut rule: Vec<String>, field_index: usize) -> Vec<String> {
    rule.resize(6 - field_index, String::from(""));
    rule
}
