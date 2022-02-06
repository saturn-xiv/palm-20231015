// use chrono::{NaiveDateTime, Utc};
// use diesel::{delete, insert_into, prelude::*, update};
// use serde::Serialize;

// use super::super::super::super::{orm::Connection, Result};
// use super::super::super::nut::models::WYSIWYG;
// use super::super::schema::erp_brands;

// #[derive(Queryable, Serialize, Clone)]
// #[serde(rename_all = "camelCase")]
// pub struct Item {
//     pub id: i32,
//     pub code: String,
//     pub title: String,
//     pub body: String,
//     pub body_editor: String,
//     pub version: i32,
//     pub created_at: NaiveDateTime,
//     pub updated_at: NaiveDateTime,
// }

// pub trait Dao {
//     fn by_id(&self, id: i32) -> Result<Item>;
//     fn by_code(&self, code: &str) -> Result<Item>;
//     fn create(&self, code: &str, title: &str, body: &WYSIWYG) -> Result<()>;
//     fn update(&self, id: i32, code: &str, title: &str, body: &WYSIWYG) -> Result<()>;
//     fn all(&self) -> Result<Vec<Item>>;
//     fn destroy(&self, id: i32) -> Result<()>;
// }

// impl Dao for Connection {
//     fn by_id(&self, id: i32) -> Result<Item> {
//         let it = erp_brands::dsl::erp_brands
//             .filter(erp_brands::dsl::id.eq(id))
//             .first::<Item>(self)?;
//         Ok(it)
//     }
//     fn by_code(&self, code: &str) -> Result<Item> {
//         let it = erp_brands::dsl::erp_brands
//             .filter(erp_brands::dsl::code.eq(code))
//             .first::<Item>(self)?;
//         Ok(it)
//     }
//     fn create(&self, code: &str, title: &str, body: &WYSIWYG) -> Result<()> {
//         let now = Utc::now().naive_utc();
//         let code = code.trim().to_lowercase();
//         insert_into(erp_brands::dsl::erp_brands)
//             .values((
//                 erp_brands::dsl::code.eq(code),
//                 erp_brands::dsl::title.eq(title),
//                 erp_brands::dsl::body.eq(&body.content),
//                 erp_brands::dsl::body_editor.eq(&body.editor.to_string()),
//                 erp_brands::dsl::updated_at.eq(&now),
//             ))
//             .execute(self)?;
//         Ok(())
//     }

//     fn update(&self, id: i32, code: &str, title: &str, body: &WYSIWYG) -> Result<()> {
//         let now = Utc::now().naive_utc();
//         let code = code.trim().to_lowercase();
//         update(erp_brands::dsl::erp_brands.filter(erp_brands::dsl::id.eq(id)))
//             .set((
//                 erp_brands::dsl::code.eq(code),
//                 erp_brands::dsl::title.eq(title),
//                 erp_brands::dsl::body.eq(&body.content),
//                 erp_brands::dsl::body_editor.eq(&body.editor.to_string()),
//                 erp_brands::dsl::updated_at.eq(&now),
//             ))
//             .execute(self)?;
//         Ok(())
//     }

//     fn all(&self) -> Result<Vec<Item>> {
//         let items = erp_brands::dsl::erp_brands
//             .order(erp_brands::dsl::updated_at.desc())
//             .load::<Item>(self)?;
//         Ok(items)
//     }

//     fn destroy(&self, id: i32) -> Result<()> {
//         delete(erp_brands::dsl::erp_brands.filter(erp_brands::dsl::id.eq(id))).execute(self)?;
//         Ok(())
//     }
// }
