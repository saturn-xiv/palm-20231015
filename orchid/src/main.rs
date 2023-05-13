use clap::Parser;

#[tokio::main(flavor = "multi_thread", worker_threads = 32)]
async fn main() {
    env_logger::init();

    let it = orchid::app::Args::parse();
    if let Err(e) = it.launch() {
        log::error!("{:?}", e);
    }
}
