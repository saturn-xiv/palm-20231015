use palm::wechat::{Config as WechatProfile, Messaging as WechatMessagingProfile};
use serde::{Deserialize, Serialize};
use toml;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub wechat: Vec<WechatProfile>,
}

#[tokio::test]
async fn api() {
    let mut cfg = Config::default();
    for i in 1..3 {
        cfg.wechat.push(WechatProfile {
            app_id: format!("app-{i}"),
            app_secret: format!("app-secret-{i}"),
            messaging: WechatMessagingProfile {
                token: format!("token-{i}"),
            },
        });
    }

    println!("{}", toml::to_string_pretty(&cfg).unwrap());
    // let cfg = palm::nut::v1::WechatProfile {
    //     app_id: env!("WECHAT_APP_ID").to_string(),
    //     app_secret: env!("WECHAT_APP_SECRET").to_string(),
    // };

    // let pool = {
    //     let cfg = palm::cache::redis::Config::default();
    //     cfg.open().unwrap()
    // };

    // let token = cfg.open(pool).await.unwrap();
    // let cli = palm::wechat::Client { token };
    // println!("{:?}", cli.get_api_domain_ip().await.unwrap());
}
