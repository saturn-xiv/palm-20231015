#!/bin/sh

set -e

function react(){
    yarn add filesize dayjs timezones-list grpc-web \
        google-protobuf @types/google-protobuf \
        js-cookie @types/js-cookie \
        jwt-decode dinero.js@alpha video.js \
        react-copy-to-clipboard @types/react-copy-to-clipboard \
        react-quill react-dropzone \
        google-map-react qrcode.react react-markdown \
        react-color @types/react-color \
        react-json-view react-syntax-highlighter \
        emoji-mart react-sparklines react-highlight-words \
        react-player \
        react-draggable \
        react-intl \
        react-router-dom@latest \
        @reduxjs/toolkit react-redux

}

function ant_design(){
    yarn add antd @ant-design/pro-components
}

function material_design(){
    yarn add @mui/material @emotion/react @emotion/styled \
        @mui/icons-material @fontsource/roboto
}

react
ant_design
# material_design

echo 'done.'

exit 0
