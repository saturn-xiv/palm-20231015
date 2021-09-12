#!/bin/sh

set -e

# https://create-react-app.dev/docs/getting-started
# npx create-react-app dashboard --template typescript

yarn add react-intl \
    draft-js react-copy-to-clipboard react-dropzone react-quill \
    google-map-react qrcode.react react-markdown react-helmet \
    redux react-redux react-router-dom react-intl react-hook-form \
    moment moment-timezone react-moment \
    @mui/material@next @emotion/react @emotion/styled @mui/icons-material@next @fontsource/roboto \
    js-cookie jwt-decode dinero.js

echo 'done.'

exit 0
