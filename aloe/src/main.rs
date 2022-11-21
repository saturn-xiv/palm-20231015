#[tokio::main(flavor = "multi_thread", worker_threads = 8)]
async fn main() {
    env_logger::init();
    if let Err(e) = aloe::app::launch().await {
        log::error!("{:?}", e);
    }
}
