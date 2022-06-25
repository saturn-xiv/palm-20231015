#!/bin/sh

set -e

yarn add filesize dayjs timezones-list grpc-web \
    google-protobuf @types/google-protobuf \
    js-cookie @types/js-cookie \
    jwt-decode dinero.js@alpha video.js \
    react-copy-to-clipboard @types/react-copy-to-clipboard \
    react-quill@beta react-dropzone \
    google-map-react qrcode.react react-markdown \
    react-color @types/react-color \
    react-json-view react-syntax-highlighter \
    emoji-mart react-sparklines react-highlight-words \
    antd @ant-design/pro-components \
    react-intl \
    react-router-dom@6 \
    @reduxjs/toolkit react-redux

echo 'done.'

exit 0
