use std::path::Path;

use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use mime::Mime;
use serde::Serialize;
use uuid::Uuid;

use super::super::super::super::{orm::postgresql::Connection, Result};
use super::super::schema::attachments;
use super::Status;

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: Uuid,
    pub user_id: Uuid,
    pub title: String,
    pub size: i64,
    pub content_type: String,
    pub region: String,
    pub state: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

impl Item {
    pub fn size(body: &[u8]) -> usize {
        body.len() / (1 << 10)
    }
    pub fn content_type(title: &str) -> Mime {
        if let Some(it) = Path::new(&title).extension() {
            if let Some(it) = it.to_str() {
                let ct = match it {
                    "png" => mime::IMAGE_PNG,
                    "svg" => mime::IMAGE_SVG,
                    "jpg" | "jpeg" => mime::IMAGE_JPEG,
                    "js" => mime::APPLICATION_JAVASCRIPT_UTF_8,
                    "css" => mime::TEXT_CSS_UTF_8,
                    "csv" => mime::TEXT_CSV_UTF_8,
                    "pdf" => mime::APPLICATION_PDF,
                    "txt" | "md" => mime::TEXT_PLAIN_UTF_8,
                    v => {
                        warn!("unknown file extension: {}", v);
                        mime::APPLICATION_OCTET_STREAM
                    }
                };
                return ct;
            }
        }
        warn!("unknown file type: {}", title);
        mime::APPLICATION_OCTET_STREAM
    }
}

pub trait Dao {
    fn by_id(&self, id: Uuid) -> Result<Item>;
    fn create(
        &self,
        user: Uuid,
        title: &str,
        region: &str,
        content_type: &Mime,
        size: usize,
    ) -> Result<()>;
    fn update(&self, id: Uuid, title: &str) -> Result<()>;
    fn all(&self) -> Result<Vec<Item>>;
    fn by_user(&self, user: Uuid) -> Result<Vec<Item>>;
    fn delete(&self, id: Uuid) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&self, id: Uuid) -> Result<Item> {
        let it = attachments::dsl::attachments
            .filter(attachments::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(
        &self,
        user: Uuid,
        title: &str,
        region: &str,
        content_type: &Mime,
        size: usize,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        let content_type = content_type.to_string();
        insert_into(attachments::dsl::attachments)
            .values((
                attachments::dsl::user_id.eq(user),
                attachments::dsl::title.eq(title),
                attachments::dsl::content_type.eq(content_type),
                attachments::dsl::region.eq(region),
                attachments::dsl::size.eq(size as i64),
                attachments::dsl::status.eq(&serde_json::to_string(&Status::Pending)?),
                attachments::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn update(&self, id: Uuid, title: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        update(attachments::dsl::attachments.filter(attachments::dsl::id.eq(id)))
            .set((
                attachments::dsl::title.eq(title),
                attachments::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn all(&self) -> Result<Vec<Item>> {
        let items = attachments::dsl::attachments
            .order(attachments::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn by_user(&self, user: Uuid) -> Result<Vec<Item>> {
        let items = attachments::dsl::attachments
            .filter(attachments::dsl::user_id.eq(user))
            .order(attachments::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: Uuid) -> Result<()> {
        delete(attachments::dsl::attachments.filter(attachments::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
