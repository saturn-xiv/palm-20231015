use std::fs::File;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::path::Path;

use google_youtube3::{
    api::{Caption, CaptionSnippet},
    hyper::{client::connect::HttpConnector, Client},
    hyper_rustls::{HttpsConnector, HttpsConnectorBuilder},
    oauth2::{ApplicationSecret, InstalledFlowAuthenticator, InstalledFlowReturnMethod},
    Error, Result, YouTube,
};

// https://developers.google.com/youtube/v3/getting-started
pub struct Config {
    pub client_id: String,
    pub client_secret: String,
}

impl Config {
    pub async fn upload<C: AsRef<Path>, F: AsRef<Path>>(
        &self,
        name: &str,
        cover: C,
        file: F,
    ) -> Result<()> {
        let file = file.as_ref();
        let cover = cover.as_ref();
        info!(
            "upload {} to youtube with cover {}",
            file.display(),
            cover.display()
        );

        let hub = self.open().await?;
        let (rst, cap) = hub
            .captions()
            .insert(Caption {
                snippet: Some(CaptionSnippet {
                    name: Some(name.to_string()),
                    ..Default::default()
                }),
                ..Default::default()
            })
            .sync(false)
            .upload(
                File::open(file)?,
                "application/octet-stream"
                    .parse()
                    .map_err(|_| Error::Io(IoError::new(IoErrorKind::Other, "bad mime type")))?,
            )
            .await?;
        {
            let status = rst.status();
            debug!("{} {:?}", status, rst.body());
        }
        info!("{:?}", cap);

        Ok(())
    }
    async fn open(&self) -> Result<YouTube<HttpsConnector<HttpConnector>>> {
        let secret = ApplicationSecret {
            client_id: self.client_id.clone(),
            client_secret: self.client_secret.clone(),
            ..Default::default()
        };

        let auth =
            InstalledFlowAuthenticator::builder(secret, InstalledFlowReturnMethod::HTTPRedirect)
                .build()
                .await?;
        let hub = YouTube::new(
            Client::builder().build(
                HttpsConnectorBuilder::new()
                    .with_native_roots()
                    .https_or_http()
                    .enable_http1()
                    .enable_http2()
                    .build(),
            ),
            auth,
        );
        Ok(hub)
    }
}
