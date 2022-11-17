use clap::Parser;

fn main() {
    env_logger::init();

    let it = coconut::Args::parse();
    if let Err(e) = it.launch() {
        log::error!("{:?}", e);
    }
}
