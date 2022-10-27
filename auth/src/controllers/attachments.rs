use std::io::{Seek, SeekFrom, Write};
use std::ops::{Deref, DerefMut};

use actix_multipart::Multipart;
use actix_web::{post, web, HttpResponse, Responder, Result as WebResult};
use futures_util::TryStreamExt;
use palm::{crypto::Aes, try_web, v1::MinioProfile, Result};
use tempfile::tempfile;

use super::super::{
    models::{
        attachment::{Dao as AttachmentDao, Item as Attachment},
        setting::get,
        user::Item as User,
    },
    orm::postgresql::{Connection as Db, Pool as DbPool},
};

#[post("/api/attachments")]
pub async fn create(
    user: User,
    db: web::Data<DbPool>,
    aes: web::Data<Aes>,
    payload: Multipart,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let aes = aes.deref();
    let aes = aes.deref();
    let aws = try_web!(get::<MinioProfile, Aes>(db, aes, None))?;

    let bucket = Attachment::bucket_by_year_month();
    if aws.bucket_exists(&bucket).await.is_err() {
        try_web!(aws.create_bucket(&bucket).await)?;
    }

    try_web!(save(db, user.id, &aws, &bucket, payload).await)?;

    Ok(HttpResponse::Ok())
}

async fn save(
    db: &mut Db,
    user: i32,
    aws: &MinioProfile,
    bucket: &str,
    mut payload: Multipart,
) -> Result<()> {
    while let Some(mut field) = payload.try_next().await? {
        let title = {
            let cd = field.content_disposition();
            let it = cd.get_filename().unwrap_or("unknown");
            it.to_string()
        };
        let name = Attachment::name(&title);
        let content_type = {
            let it = field.content_type();
            it.clone()
        };

        let mut file = tempfile()?;
        while let Some(chunk) = field.try_next().await? {
            file.write_all(&chunk)?;
        }
        file.sync_all()?;
        file.seek(SeekFrom::Start(0))?;
        let size = file.metadata()?.len() as usize;

        aws.put_object(bucket, &name, content_type.as_ref(), &mut file, size)
            .await?;
        AttachmentDao::create(db, user, bucket, &name, &title, &content_type, size)?;
    }

    Ok(())
}
