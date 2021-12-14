#!/bin/sh

set -e

yarn add react-hook-form react-copy-to-clipboard react-quill@beta \
    google-map-react qrcode.react react-markdown \
    moment moment-timezone \
    @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto \
    grpc-web js-cookie jwt-decode dinero.js@alpha

echo 'done.'

exit 0
