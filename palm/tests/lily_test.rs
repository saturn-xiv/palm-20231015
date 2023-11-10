use std::collections::HashMap;

use palm::lily::v1 as lily;

#[tokio::test]
async fn tex2pdf() {
    let mut cli = lily::tex_client::TexClient::connect("http://127.0.0.1:9999")
        .await
        .unwrap();
    let req = {
        let mut files = HashMap::new();
        files.insert(
            "main.tex".to_string(),
            r#"
% 导言区
\documentclass[a4paper, 12pt, fontset=ubuntu]{article} % book, report, letter
\usepackage{ctex} % Use chinese package

\title{\heiti 一级标题}
\author{\kaishu 半闲}
\date{\today}

% 正文区

\begin{document}
    \maketitle % 头部信息在正文显示
    \tableofcontents % 显示索引列

    \include{section-1.tex}
    \include{section-2.tex}

\end{document}                
        "#
            .to_string()
            .into_bytes(),
        );

        files.insert(
            "section-1.tex".to_string(),
            r#"            
\section{章节1 标题}
章节1 正文
\subsection{子章节1.1 标题}
子章节1-1 正文


\newline This is another \verb|\newline| .

\par This is a new paragraph.

\newpage This is a new page.

\subsection{子章节1.2 标题}
子章节1-2 正文            
            "#
            .to_string()
            .into_bytes(),
        );
        files.insert(
            "section-2.tex".to_string(),
            r#"
\section{章节2 标题}
章节2 正文
\subsection{子章节2.1 标题}
子章节2-1 正文
\subsection{子章节2.2 标题}
子章节2-2 正文            
            "#
            .to_string()
            .into_bytes(),
        );
        lily::TexToRequest {
            title: "hello palm".to_string(),
            files,
            ttl: None,
            owner: None,
            published: false,
        }
    };

    let res = cli.to_pdf(tonic::Request::new(req)).await.unwrap();
    let res = res.into_inner();
    println!("{:?}", res);
}
