#!/bin/sh

set -e

yarn add marked moment moment-timezone d3 \
    bootstrap @popperjs/core \
    mdb-ui-kit \
    bulma \
    material-components-web material-design-icons

echo 'done.'
exit 0
