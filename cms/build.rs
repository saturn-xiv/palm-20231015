fn main() {
    tonic_build::compile_protos("cms.proto").unwrap();
}
