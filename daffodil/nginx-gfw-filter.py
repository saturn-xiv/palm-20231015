#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import logging
import argparse
import sys
import os.path
import requests
import base64
import pathlib

NAME = 'daffodil'
VERSION = "2023.11.26"


def to_filter_rule(line):
    line = line.strip()
    if line.startswith('||'):
        host = line[2:]
        logging.debug('fine domain: %s', host)
        return "sub_filter '{}'  '$host';\n".format(host)


# https://github.com/gfwlist/gfwlist/issues/239
def generate_nginx_filter(src, dst):
    logging.info("load %s", src)
    buf = pathlib.Path(src).read_text()
    gfw = str(base64.b64decode(buf), encoding='utf-8')
    lines = gfw.split("\n")
    with open(dst, 'w') as dfd:
        for line in lines:
            rule = to_filter_rule(line)
            if rule:
                dfd.write(rule)
        dfd.write("sub_filter_once on;\n")


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        prog=NAME,
        description='Generate nginx filter for GFW',
        epilog='https://github.com/saturn-xiv/palm')
    parser.add_argument('-d', '--debug',
                        action='store_true',
                        help='run on debug mode')
    parser.add_argument('-v', '--version',
                        action='store_true',
                        help=('print %s version' % NAME))
    args = parser.parse_args()
    if args.version:
        print(VERSION)
        sys.exit()
    logging.basicConfig(level=(logging.DEBUG if args.debug else logging.INFO))
    if args.debug:
        logging.debug('run on debug mode with %s', args)
    gfw_list = "gfwlist.txt"
    if not os.path.exists(gfw_list):
        res = requests.get(
            'https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt')
        with open(gfw_list, 'wb') as fd:
            fd.write(res.content)
    generate_nginx_filter(gfw_list, 'filter.conf')
