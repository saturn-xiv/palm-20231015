use std::ops::DerefMut;

use actix_multipart::form::{tempfile::TempFile, MultipartForm};
use actix_web::{post, web, HttpResponse, Responder, Result as WebResult};
use mime::APPLICATION_OCTET_STREAM;
use palm::{
    aws::s3::{Client as S3Client, Config as S3},
    try_web, Result,
};

use super::super::{
    models::{
        attachment::{Dao as AttachmentDao, Item as Attachment},
        user::Item as User,
    },
    orm::postgresql::{Connection as Db, Pool as DbPool},
};

#[derive(Debug, MultipartForm)]
pub struct UploadForm {
    #[multipart(rename = "file")]
    pub files: Vec<TempFile>,
}

#[post("/attachments")]
pub async fn create(
    user: User,
    db: web::Data<DbPool>,
    s3: web::Data<S3>,
    MultipartForm(form): MultipartForm<UploadForm>,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let s3 = try_web!(s3.open().await)?;

    let bucket = Attachment::bucket_by_year_month();
    if !try_web!(s3.bucket_exists(&bucket).await)? {
        try_web!(s3.create_bucket(&bucket).await)?;
    }

    for it in form.files.iter() {
        // it.file.persist(path)?;
        try_web!(save(db, user.id, &s3, &bucket, it).await)?;
    }

    Ok(HttpResponse::Ok())
}

async fn save(db: &mut Db, user: i32, s3: &S3Client, bucket: &str, file: &TempFile) -> Result<()> {
    let content_type = file
        .content_type
        .as_ref()
        .unwrap_or(&APPLICATION_OCTET_STREAM);
    let title = file.file_name.clone().unwrap_or("unknown".to_string());
    let name = Attachment::name(&title);
    s3.put_object(bucket, &name, content_type, &file.file)
        .await?;
    AttachmentDao::create(
        db,
        user,
        bucket,
        &name,
        &title,
        content_type,
        file.size as u64,
    )?;

    Ok(())
}
