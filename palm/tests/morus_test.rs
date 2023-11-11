use palm::morus::v1 as morus;

#[tokio::test]
async fn md2htm() {
    let mut cli = morus::markdown_client::MarkdownClient::connect("http://127.0.0.1:9999")
        .await
        .unwrap();
    let req = morus::MarkdownToHtmlRequest {
        payload: r#"
# Hello, palm.

- line 1
- line 2

"#
        .to_string(),
        sanitize: true,
    };
    let res = cli.to_html(tonic::Request::new(req)).await.unwrap();
    let res = res.into_inner();
    println!("{:?}", res);
}
