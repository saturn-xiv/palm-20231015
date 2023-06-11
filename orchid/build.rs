fn main() {
    tonic_build::compile_protos("orchid.proto").unwrap();
}
