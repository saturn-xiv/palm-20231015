use aloe::app::Args;
use clap::Parser;
use log::error;

#[tokio::main(flavor = "multi_thread", worker_threads = 8)]
async fn main() {
    env_logger::init();
    let args = Args::parse();
    if let Err(e) = args.launch().await {
        error!("{:?}", e);
    }
}
