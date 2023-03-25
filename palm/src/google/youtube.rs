use std::fs::File;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::path::{Path, PathBuf};

use google_youtube3::{
    api::{Caption, CaptionSnippet},
    hyper::{client::connect::HttpConnector, Client as YouTubeClient},
    hyper_rustls::{HttpsConnector, HttpsConnectorBuilder},
    oauth2::{read_application_secret, InstalledFlowAuthenticator, InstalledFlowReturnMethod},
    Error as YoutubeError, Result as YoutubeResult, YouTube,
};
use serde::{Deserialize, Serialize};

use super::super::Result;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Credential {
    pub client_id: String,
    pub project_id: String,
    pub auth_uri: String,
    pub token_uri: String,
    pub auth_provider_x509_cert_url: String,
    pub client_secret: String,
    pub redirect_uris: Vec<String>,
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Layout {
    pub installed: Credential,
}
impl Credential {
    pub fn new<P: AsRef<Path>>(file: P) -> Result<Self> {
        let file = file.as_ref();
        debug!("load google credential from {}", file.display());
        let file = File::open(file)?;
        let it: Layout = serde_json::from_reader(file)?;
        Ok(it.installed)
    }
}

// https://developers.google.com/youtube/v3/getting-started
pub struct Client {
    pub config: PathBuf,
}

impl Client {
    pub async fn playlists(&self) -> YoutubeResult<Vec<String>> {
        let hub = self.open().await?;

        let (_, playlists) = hub
            .playlists()
            .list(&vec!["snippet".to_string()])
            .doit()
            .await?;
        let mut items = Vec::new();
        for it in playlists.items.iter() {
            for it in it.iter() {
                if let Some(ref it) = it.id {
                    items.push(it.clone());
                }
            }
        }
        Ok(items)
    }
    pub async fn upload_video<C: AsRef<Path>, F: AsRef<Path>>(
        &self,
        name: &str,
        cover: C,
        file: F,
    ) -> YoutubeResult<()> {
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
                "application/octet-stream".parse().map_err(|_| {
                    YoutubeError::Io(IoError::new(IoErrorKind::Other, "bad mime type"))
                })?,
            )
            .await?;
        {
            let status = rst.status();
            debug!("{} {:?}", status, rst.body());
        }
        info!("{:?}", cap);

        Ok(())
    }
    async fn open(&self) -> YoutubeResult<YouTube<HttpsConnector<HttpConnector>>> {
        // let secret = ApplicationSecret {
        //     client_id: self.client_id.clone(),
        //     client_secret: self.client_secret.clone(),
        //     ..Default::default()
        // };
        let secret = read_application_secret(&self.config).await?;

        let auth =
            InstalledFlowAuthenticator::builder(secret, InstalledFlowReturnMethod::HTTPRedirect)
                .build()
                .await?;
        let hub = YouTube::new(
            YouTubeClient::builder().build(
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
