#[macro_use]
extern crate log;

fn main() {
    if let Err(e) = palm::app::launch() {
        error!("{:?}", e);
    }
}
