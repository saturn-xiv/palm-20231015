#!/bin/sh

set -e

yarn add dayjs grpc-web \
    google-protobuf @types/google-protobuf \
    js-cookie @types/js-cookie \
    jwt-decode dinero.js@alpha video.js \
    react-copy-to-clipboard react-quill@beta react-dropzone \
    google-map-react qrcode.react react-markdown \
    react-color @types/react-color \
    react-json-view react-syntax-highlighter \
    emoji-mart react-sparklines react-highlight-words \
    @ant-design/pro-form @ant-design/pro-layout @ant-design/pro-table @ant-design/pro-list \
    @ant-design/pro-descriptions @ant-design/pro-card @ant-design/pro-skeleton
    

echo 'done.'

exit 0
