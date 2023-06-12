fn main() {
    tonic_build::compile_protos("nut.proto").unwrap();
}
