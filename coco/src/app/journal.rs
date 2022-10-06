use std::io;

use ops_metrics::models::journal::Item as JournalItem;
use palm::Result;

use super::super::env::Config;

pub async fn launch(cfg: &Config) -> Result<()> {
    let se = cfg.opensearch.open()?;

    loop {
        let mut buf = String::new();
        io::stdin().read_line(&mut buf)?;
        let it: JournalItem = serde_json::from_str(&buf)?;
        se.save_object(&it).await?;
    }
}
