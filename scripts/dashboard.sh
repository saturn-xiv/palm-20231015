#!/bin/sh

set -e


# react-hook-form moment moment-timezone 
# @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto
# grpc-web 
# yarn add @ant-design/icons \
#     react-copy-to-clipboard react-quill@beta \
#     google-map-react qrcode.react react-markdown \
#     react-json-view react-color react-syntax-highlighter \
#     emoji-mart react-sparklines react-highlight-words \
#     js-cookie jwt-decode dinero.js@alpha video.js 

# vuetify@next
# yarn add ant-design-vue@next vuex@next vue-router@4 vue-i18n@9 \
#     @fontsource/roboto \
#     js-cookie jwt-decode dinero.js@alpha video.js


function install_third_utils() {
    yarn add moment moment-timezone \
        js-cookie jwt-decode dinero.js@alpha video.js
} 

function install_third_react() {
    yarn add react-intl react-router-dom@6 react-hook-form \
        @reduxjs/toolkit react-redux @types/react-redux \
        react-helmet-async \
        @loadable/component @types/loadable__component \
        react-copy-to-clipboard react-quill@beta react-dropzone \
        google-map-react qrcode.react react-markdown \
        react-json-view react-color react-syntax-highlighter \
        emoji-mart react-sparklines react-highlight-words    
}

install_third_utils
install_third_react
yarn add @fluentui/react office-ui-fabric-core \
    @fluentui/react-icons-mdl2 @fluentui/react-icons-mdl2-branded

# material ui
# yarn add @mui/material @emotion/react @emotion/styled \
#     @mui/icons-material material-design-icons @fontsource/roboto


echo 'done.'

exit 0
