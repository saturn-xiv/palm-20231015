use nut::app::launch;

#[tokio::main]
async fn main() {
    env_logger::init();
    if let Err(e) = launch().await {
        log::error!("{:?}", e);
    }
}
