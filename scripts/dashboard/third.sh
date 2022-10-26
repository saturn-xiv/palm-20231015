#!/bin/bash

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
        google-map-react qrcode.react \
        react-markdown @uiw/react-md-editor \
        react-color @types/react-color \
        react-pdf @types/react-pdf \
        react-json-view react-syntax-highlighter \
        emoji-mart react-sparklines react-highlight-words \
        react-number-format react-image-crop \
        react-player \
        react-draggable \
        react-big-calendar @types/react-big-calendar \
        react-intl \
        react-router-dom@latest \
        react-hook-form \
        @reduxjs/toolkit react-redux

}

install_ant_design() {
    yarn add antd @ant-design/pro-components @ant-design/charts
}

install_fluent_ui(){
    yarn add @fluentui/react
}

install_material_design() {
    yarn add @mui/material @emotion/react @emotion/styled \
        @mui/icons-material @fontsource/roboto
}


if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 material|fluent|ant"
    exit 1
fi

if [ $1 == "material" ]
then
    install_react
    install_material_design
elif [ $1 == "ant" ]
then
    install_react
    install_ant_design
elif [ $1 == "fluent" ]
then
    install_react
    install_fluent_ui
else
    echo "unknown option $1"
    exit 1
fi

# install_react
# install_ant_design
# install_material_design
# install_fluent_ui

echo "Done($1)."

exit 0
