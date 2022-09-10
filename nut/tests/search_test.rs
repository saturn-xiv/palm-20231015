use palm::search::Config;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
struct Item {
    id: i32,
    name: String,
}

#[tokio::test]
async fn index() {
    let cfg = Config::default();
    let cli = cfg.open().unwrap();
    cli.check_index::<Item>().await.unwrap();

    cli.delete_index::<Item>().await.unwrap();
}
