fn main() {
    tonic_build::compile_protos("babel.proto").unwrap();
}
