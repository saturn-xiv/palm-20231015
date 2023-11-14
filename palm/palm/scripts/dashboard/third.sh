#!/bin/bash


# https://create-react-app.dev/docs/adding-typescript


set -e

install_oauth() {
    npm install --save @react-oauth/google@latest react-facebook-login
}

# react-json-view 
# dayjs date-fns 
# react-intl need ts v5
install_react() {
    npm install --save grpc-web filesize timezones-list \
        moment moment-timezone \
        marked \
        diff @types/diff \
        lodash @types/lodash \
        @fortawesome/fontawesome-free \
        famfamfam-flags famfamfam-silk famfamfam-mini \
        google-protobuf @types/google-protobuf \
        js-cookie @types/js-cookie \
        mermaid \
        jwt-decode dinero.js@alpha \
        video.js @types/video.js \
        react-copy-to-clipboard @types/react-copy-to-clipboard \
        react-quill react-dropzone \
        google-map-react qrcode.react \
        react-markdown @uiw/react-md-editor \
        react-color @types/react-color \
        react-pdf \
        react-syntax-highlighter \
        emoji-mart react-sparklines react-highlight-words \
        react-number-format react-image-crop \
        react-player \
        react-draggable \
        react-big-calendar @types/react-big-calendar \
        react-intl@6.3.2 \
        react-router-dom@latest \
        react-helmet-async \
        formik yup \
        @reduxjs/toolkit react-redux

}

# https://ant.design/docs/react/getting-started
install_ant_design() {
    npm install --save antd @ant-design/pro-components @ant-design/charts
}

# https://developer.microsoft.com/en-us/fluentui#/get-started/web
install_fluent_ui(){
    npm install --save @fluentui/react
}

# https://mui.com/material-ui/getting-started/overview/
install_material_design() {
    npm install --save @mui/material @emotion/react @emotion/styled \
        @mui/icons-material @fontsource/roboto \
        @mui/x-date-pickers
}

# https://react-bootstrap.github.io/getting-started/introduction
install_bootstrap() {
    npm install --save react-bootstrap bootstrap
}


if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 material|fluent|antd|bootstrap"
    exit 1
fi

if [ $1 == "material" ]
then
    install_react
    install_material_design
elif [ $1 == "antd" ]
then
    install_react
    install_ant_design
elif [ $1 == "fluent" ]
then
    install_react
    install_fluent_ui
elif [ $1 == "bootstrap" ]
then
    install_react
    install_bootstrap
else
    echo "unknown option $1"
    exit 1
fi


echo "done($1)."

exit 0
