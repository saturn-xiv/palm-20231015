use std::io;

use super::super::{
    env::Config, plugins::ops::metrics::models::journal::Item as JournalItem, Result,
};

pub async fn launch(cfg: &Config) -> Result<()> {
    let es = cfg.elasticsearch.open()?;
    let mut buf = String::new();
    loop {
        io::stdin().read_line(&mut buf)?;
        let it: JournalItem = serde_json::from_str(&buf)?;
        it.save(&es).await?;
    }
}
