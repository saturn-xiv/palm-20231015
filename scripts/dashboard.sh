#!/bin/sh

set -e

# https://create-react-app.dev/docs/getting-started
# npx create-react-app dashboard --template typescript

# yarn add react-intl \
#     draft-js react-copy-to-clipboard react-dropzone react-quill \
#     google-map-react qrcode.react react-markdown react-helmet \
#     redux react-redux react-router-dom react-intl react-hook-form \
#     moment moment-timezone react-moment \
#     @material-ui/core@next @emotion/react @emotion/styled @material-ui/icons@next @fontsource/roboto \
#     grpc-web js-cookie jwt-decode dinero    

# vue create dashboard
yarn add vue-i18n vuex vue-router \
    moment moment-timezone \
    grpc-web js-cookie jwt-decode dinero.js@alpha \
    vuetify

echo 'done.'

exit 0
