#[tokio::main(flavor = "multi_thread", worker_threads = 32)]
async fn main() {
    env_logger::init();
    if let Err(e) = fig::app::launch().await {
        log::error!("{:?}", e);
    }
}
