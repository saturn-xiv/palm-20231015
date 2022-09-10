fn main() {
    tonic_build::compile_protos("mall.proto").unwrap();
}
