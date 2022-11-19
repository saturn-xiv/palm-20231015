use std::env;
use std::path::PathBuf;
use std::time::Duration;

use mime::TEXT_PLAIN_UTF_8;
use palm::nut::v1::MinioProfile;

#[tokio::test]
async fn minio() {
    let cfg = MinioProfile {
        url: env::var("MINIO_URL").unwrap(),
        access_key: env::var("MINIO_ACCESS_KEY").unwrap(),
        secret_key: env::var("MINIO_SECRET_KEY").unwrap(),
        region: env::var("MINIO_REGION").unwrap(),
    };
    let cli = cfg.open().await.unwrap();

    let bucket = "testing";
    let file = "Cargo.toml";

    cli.create_bucket(bucket).await.unwrap();
    cli.create_bucket(bucket).await.unwrap();
    {
        let items = cli.list_buckets().await.unwrap();
        println!("buckets: {:?}", items);
    }
    {
        let fd = PathBuf::from(env!("CARGO_MANIFEST_DIR")).join(file);
        println!("upload file {}", fd.display());
        cli.put_object(
            bucket,
            &format!("{}-{}", palm::crypto::random::string(8), file),
            &TEXT_PLAIN_UTF_8.to_string(),
            fd,
        )
        .await
        .unwrap();
    }

    {
        let url = cli
            .get_object(bucket, file, Duration::from_secs(60))
            .await
            .unwrap();
        println!("{}/{}: {}", bucket, file, url);
    }
}
