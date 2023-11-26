#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import logging
import argparse
import sys
import tomllib
import os.path
import select

from systemd import journal

NAME = 'daffodil'
VERSION = "2023.11.24"


def is_stopped():
    return os.path.isfile('.stop')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        prog=NAME,
        description='A systemd-journal clawer',
        epilog='https://github.com/saturn-xiv/palm')
    parser.add_argument('-c', '--config',
                        type=str,
                        default='config.toml',
                        help='load configuration(toml)')
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

    if is_stopped():
        logging.error('.stop file existed, quit...')
        sys.exit(1)

    logging.info('load configuration from %s', args.config)
    with open(args.config, 'rb') as cfg_fd:
        config = tomllib.load(cfg_fd)
        jr = journal.Reader()
        jr.seek_tail()
        jr.add_match(_SYSTEMD_UNIT="sshd.service")
        jp = select.poll()
        jp.register(jr, jr.get_events())
        jp.poll()
        i = 0
        while True:
            it = jr.get_next()
            i = i+1
            print("receive: ", i, it)
