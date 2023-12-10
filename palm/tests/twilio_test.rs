use std::env;

use palm::twilio::Config as TwilioConfig;

#[tokio::test]
async fn twilio() {
    println!(
        "send message from {} to {}",
        env::var("TWILIO_FROM").unwrap(),
        env::var("TWILIO_TEST_TO").unwrap()
    );
    let cfg = TwilioConfig {
        from: env::var("TWILIO_FROM").unwrap(),
        account_sid: env::var("TWILIO_ACCOUNT_SID").unwrap(),
        auth_token: env::var("TWILIO_AUTH_TOKEN").unwrap(),
        sms_status_callback: None,
    };

    cfg.sms(&env::var("TWILIO_TEST_TO").unwrap(), "Hello, palm!", None)
        .await
        .unwrap();
}
