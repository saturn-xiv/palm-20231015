use clap::Parser;

fn main() {
    env_logger::init();

    let it = lemon::app::Args::parse();
    if let Err(e) = it.launch() {
        log::error!("{:?}", e);
    }
}
