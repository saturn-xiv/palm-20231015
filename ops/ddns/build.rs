fn main() {
    tonic_build::compile_protos("ddns.proto").unwrap();
}
