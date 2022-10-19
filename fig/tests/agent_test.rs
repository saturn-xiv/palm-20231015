use std::path::Path;

#[test]
fn path() {
    let it = Path::new("test.sql");
    println!("{}", it.display());
    {
        let it = it.with_extension("ini");
        println!("{}", it.display());
    }
    {
        let it = it.with_extension("tar.xz");
        println!("{}", it.display());
    }
}
