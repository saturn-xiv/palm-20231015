use clap::Parser;

#[tokio::main(flavor = "multi_thread", worker_threads = 8)]
async fn main() {
    env_logger::init();

    let it = coconut::Args::parse();
    if let Err(e) = it.launch().await {
        log::error!("{:?}", e);
    }
}
