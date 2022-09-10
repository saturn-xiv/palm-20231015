use std::io::Write;

#[test]

fn png() {
    let file = std::env::temp_dir().join("captcha.png");

    let it = palm::captcha::Captcha {
        text: "hello, palm!".to_string(),
        height: 32,
        gap: 5,
    };

    {
        let buf = it.png().unwrap();
        let mut file = std::fs::OpenOptions::new()
            .create(true)
            .write(true)
            .open(&file)
            .unwrap();
        file.write_all(&buf).unwrap();
    }

    println!("write file {}", file.display());
}
