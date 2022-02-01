#!/bin/sh

set -e

# https://umijs.org/docs/getting-started
# yarn create @umijs/umi-app

# react-hook-form moment moment-timezone 
# @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto
# grpc-web 
yarn add @ant-design/icons \
    react-copy-to-clipboard react-quill@beta \
    google-map-react qrcode.react react-markdown \
    react-json-view react-color react-syntax-highlighter \
    emoji-mart react-sparklines react-highlight-words \
    js-cookie jwt-decode dinero.js@alpha video.js 

echo 'done.'

exit 0
