#!/bin/sh

set -e

yarn add marked moment moment-timezone\
    bootstrap @popperjs/core \
    bulma \
    material-components-web material-design-icons

echo 'done.'
exit 0
