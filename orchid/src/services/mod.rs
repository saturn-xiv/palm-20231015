pub mod wechat;

use std::time::Duration as StdDuration;

use palm::orchid::v1;
use tonic_health::server::HealthReporter;

pub async fn status(mut reporter: HealthReporter) {
    loop {
        reporter
            .set_serving::<v1::wechat_oauth2_server::WechatOauth2Server<wechat::oauth2::Service>>()
            .await;
        reporter
            .set_serving::<v1::wechat_mini_program_server::WechatMiniProgramServer<wechat::mini_program::Service>>()
            .await;
        tokio::time::sleep(StdDuration::from_secs(3)).await;
    }
}
