fn main() {
    tonic_build::compile_protos("auth.proto").unwrap();
}
