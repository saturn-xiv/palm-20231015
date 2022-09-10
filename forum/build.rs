fn main() {
    tonic_build::compile_protos("forum.proto").unwrap();
}
