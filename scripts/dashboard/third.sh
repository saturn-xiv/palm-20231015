#!/bin/sh

set -e

install_react() {
    yarn add filesize dayjs timezones-list grpc-web \
        @fortawesome/fontawesome-free \
        famfamfam-flags famfamfam-silk famfamfam-mini \
        google-protobuf @types/google-protobuf \
        js-cookie @types/js-cookie \
        jwt-decode dinero.js@alpha video.js \
        react-copy-to-clipboard @types/react-copy-to-clipboard \
        react-quill react-dropzone \
        google-map-react qrcode.react react-markdown \
        react-color @types/react-color \
	    react-pdf @types/react-pdf \
        react-json-view react-syntax-highlighter \
        emoji-mart react-sparklines react-highlight-words \
        react-player \
        react-draggable \
        react-intl \
        react-router-dom@latest \
        react-hook-form \
        @reduxjs/toolkit react-redux

}

install_ant_design() {
    yarn add antd @ant-design/pro-components
}

install_fluent_ui(){
    yarn add @fluentui/react
}

install_material_design() {
    yarn add @mui/material @emotion/react @emotion/styled \
        @mui/icons-material @fontsource/roboto
}

install_react
install_ant_design
install_material_design
install_fluent_ui

echo 'Done.'

exit 0
