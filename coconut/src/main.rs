fn main() {
    env_logger::init();
    if let Err(e) = coconut::launch() {
        log::error!("{:?}", e);
    }
}
