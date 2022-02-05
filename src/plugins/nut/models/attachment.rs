use std::path::Path;

use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, update};
use mime::Mime;
use serde::Serialize;

use super::super::super::super::{orm::Connection, Result};
use super::super::schema::{attachment_usages, attachments};
use super::{Resource, Status};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub user_id: i32,
    pub title: String,
    pub size: i32,
    pub content_type: String,
    pub region: String,
    pub uid: String,
    pub state: String,
    pub version: i32,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

impl Item {
    pub fn size(body: &[u8]) -> i32 {
        (body.len() / (1 << 10)) as i32
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
    fn by_id(&self, id: i32) -> Result<Item>;
    fn create(
        &self,
        user: i32,
        title: &str,
        region: &str,
        uid: &str,
        content_type: &Mime,
        size: i32,
    ) -> Result<()>;
    fn update(&self, id: i32, title: &str) -> Result<()>;
    fn all(&self) -> Result<Vec<Item>>;
    fn by_user(&self, user: i32) -> Result<Vec<Item>>;
    fn delete(&self, id: i32) -> Result<()>;

    fn usage(&self, id: i32) -> Result<i64>;
    fn associate(&self, id: i32, resource: &Resource) -> Result<()>;
    fn unassociate(&self, id: i32, resource: &Resource) -> Result<()>;
}

impl Dao for Connection {
    fn by_id(&self, id: i32) -> Result<Item> {
        let it = attachments::dsl::attachments
            .filter(attachments::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn create(
        &self,
        user: i32,
        title: &str,
        region: &str,
        uid: &str,
        content_type: &Mime,
        size: i32,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        let content_type = content_type.to_string();
        insert_into(attachments::dsl::attachments)
            .values((
                attachments::dsl::user_id.eq(user),
                attachments::dsl::title.eq(title),
                attachments::dsl::content_type.eq(content_type),
                attachments::dsl::region.eq(region),
                attachments::dsl::uid.eq(uid),
                attachments::dsl::size.eq(size),
                attachments::dsl::status.eq(&serde_json::to_string(&Status::Pending)?),
                attachments::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }

    fn update(&self, id: i32, title: &str) -> Result<()> {
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

    fn by_user(&self, user: i32) -> Result<Vec<Item>> {
        let items = attachments::dsl::attachments
            .filter(attachments::dsl::user_id.eq(user))
            .order(attachments::dsl::updated_at.desc())
            .load::<Item>(self)?;
        Ok(items)
    }

    fn delete(&self, id: i32) -> Result<()> {
        delete(
            attachment_usages::dsl::attachment_usages
                .filter(attachment_usages::dsl::attachment_id.eq(id)),
        )
        .execute(self)?;
        delete(attachments::dsl::attachments.filter(attachments::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
    fn usage(&self, id: i32) -> Result<i64> {
        let cnt: i64 = attachment_usages::dsl::attachment_usages
            .filter(attachment_usages::dsl::attachment_id.eq(id))
            .count()
            .get_result(self)?;
        Ok(cnt)
    }
    fn associate(&self, id: i32, resource: &Resource) -> Result<()> {
        let cnt: i64 = attachment_usages::dsl::attachment_usages
            .filter(attachment_usages::dsl::attachment_id.eq(id))
            .filter(attachment_usages::dsl::resource_type.eq(&resource.type_))
            .filter(attachment_usages::dsl::resource_id.eq(resource.id))
            .count()
            .get_result(self)?;
        if cnt == 0 {
            insert_into(attachment_usages::dsl::attachment_usages)
                .values((
                    attachment_usages::dsl::attachment_id.eq(id),
                    attachment_usages::dsl::resource_id.eq(resource.id),
                    attachment_usages::dsl::resource_type.eq(&resource.type_),
                ))
                .execute(self)?;
        }
        Ok(())
    }
    fn unassociate(&self, id: i32, resource: &Resource) -> Result<()> {
        delete(
            attachment_usages::dsl::attachment_usages
                .filter(attachment_usages::dsl::attachment_id.eq(id))
                .filter(attachment_usages::dsl::resource_type.eq(&resource.type_))
                .filter(attachment_usages::dsl::resource_id.eq(resource.id)),
        )
        .execute(self)?;
        Ok(())
    }
}
