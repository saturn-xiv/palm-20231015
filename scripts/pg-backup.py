#!/usr/bin/env python
# -*- coding: utf-8 -*-

import logging
import argparse
import subprocess
import datetime
import os


def backup(host, port, user, password, name, folder):
    now = datetime.datetime.now()
    version = now.strftime('%Y%m%d%H%M%S')
    url = f'postgresql://{user}:{password}@{host}:{port}/{name}'
    file = os.path.join(folder, f'{version}.gz')
    logging.info('write to %s', file)
    subprocess.run(['pg_dump', '--dbname', url, '-Z', '9', '-f', file])


def release(folder, keep):
    ts = int(round((datetime.datetime.now() -
                    datetime.timedelta(days=keep)).timestamp()))
    for it in os.listdir(folder):
        if it.endswith('.gz'):
            mt = os.path.getmtime(os.path.join(folder, it))
            logging.debug("find backup file %s", it)
            if mt < ts:
                logging.warning("remove %s", it)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Backup PostgreSql db.')
    parser.add_argument('-H', '--host', type=str, default='127.0.0.1',
                        help='host')
    parser.add_argument('-P', '--port', type=int, default=5432,
                        help='port')
    parser.add_argument('-n', '--name', type=str, required=True,
                        help='db name')
    parser.add_argument('-f', '--folder', type=str, required=True,
                        help='target folder')
    parser.add_argument('-u', '--user', type=str, default="postgres",
                        help='user')
    parser.add_argument('-p', '--password', type=str, default='',
                        help='password')
    parser.add_argument('-k', '--keep', type=int, default=7,
                        help='keep latest N days backup')
    parser.add_argument(
        '-d', '--debug', action='store_true', help='debug mode')

    args = parser.parse_args()
    logging.basicConfig(
        format='%(asctime)s %(levelname)s: %(message)s', level=logging.DEBUG if args.debug else logging.INFO)

    logging.debug('run on debug mode')
    logging.info('backup to %s and keep recent %d files',
                 args.folder, args.keep)
    backup(args.host, args.port, args.user,
           args.password, args.name, args.folder)
    release(args.folder, args.keep)
    logging.info('done.')
