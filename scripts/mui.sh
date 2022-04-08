#!/bin/sh

set -e

yarn add dayjs grpc-web \
    google-protobuf @types/google-protobuf \
    js-cookie jwt-decode dinero.js@alpha video.js \
    react-intl react-router-dom@6 react-hook-form \
    @reduxjs/toolkit react-redux @types/react-redux redux-saga \
    react-helmet-async \
    @loadable/component @types/loadable__component \
    react-copy-to-clipboard react-quill@beta react-dropzone \
    google-map-react qrcode.react react-markdown \
    react-json-view \
    react-color @types/react-color \
    react-syntax-highlighter \
    emoji-mart react-sparklines react-highlight-words \
    @mui/material @emotion/react @emotion/styled \
    @mui/icons-material material-design-icons @fontsource/roboto
    

echo 'done.'

exit 0
