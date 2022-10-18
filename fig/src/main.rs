fn main() {
    env_logger::init();
    if let Err(e) = fig::app::launch() {
        log::error!("{:?}", e);
    }
}
