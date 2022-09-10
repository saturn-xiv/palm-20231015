fn main() {
    tonic_build::compile_protos("courses.proto").unwrap();
}
