#[tokio::test]
async fn api() {
    let cfg = palm::nut::v1::WechatProfile {
        app_id: env!("WECHAT_APP_ID").to_string(),
        app_secret: env!("WECHAT_APP_SECRET").to_string(),
    };

    let pool = {
        let cfg = palm::cache::redis::Config::default();
        cfg.open().unwrap()
    };

    let token = cfg.open(pool).await.unwrap();
    let cli = palm::wechat::Client { token };
    println!("{:?}", cli.get_api_domain_ip().await.unwrap());
}
