fn main() {
    tonic_build::compile_protos("metrics.proto").unwrap();
}
