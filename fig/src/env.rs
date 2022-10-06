use std::path::Path;

pub fn is_stopped() -> bool {
    Path::new(".stop").exists()
}
