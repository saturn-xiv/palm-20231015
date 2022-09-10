fn main() {
    tonic_build::compile_protos("cscd.proto").unwrap();
}
