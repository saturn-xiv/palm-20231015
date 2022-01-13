fn main() {
    env_logger::init();
    if let Err(e) = palm::app::launch() {
        log::error!("{:?}", e);
    }
}
