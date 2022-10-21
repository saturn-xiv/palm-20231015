use std::fs::read_dir;

fn main() {
    for it in read_dir("protocols").unwrap() {
        let it = it.unwrap();
        let it = it.path();
        if let Some(ext) = it.extension() {
            if ext == "proto" {
                tonic_build::compile_protos(&it.display().to_string()).unwrap();
            }
        }
    }
}
