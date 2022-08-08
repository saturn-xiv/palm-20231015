use std::io;

use super::super::{
    env::Config, plugins::ops::metrics::models::journal::Item as JournalItem, Result,
};

pub async fn launch(cfg: &Config) -> Result<()> {
    let se = cfg.opensearch.open()?;

    loop {
        let mut buf = String::new();
        io::stdin().read_line(&mut buf)?;
        let it: JournalItem = serde_json::from_str(&buf)?;
        se.save(&it).await?;
    }
}
