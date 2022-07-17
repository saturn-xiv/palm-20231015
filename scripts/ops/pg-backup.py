#!/usr/bin/env python
# -*- coding: utf-8 -*-

from email import message
import os
import logging
import argparse
import subprocess
import datetime
import configparser
import smtplib
import ssl
import socket
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def send_mail(host, port, username, password, to, subject, body):
    logging.info('send email to %s', to)
    message = MIMEMultipart()
    message['Subject'] = subject
    message['From'] = username
    message['To'] = to
    message.attach(MIMEText(body, "plain"))

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(host, port, context=context) as server:
        server.login(username, password)
        server.sendmail(username, to, message.as_string())


def backup(host, port, user, password, name, folder):
    now = datetime.datetime.now()
    version = now.strftime('%Y%m%d%H%M%S')
    url = f'postgresql://{user}:{password}@{host}:{port}/{name}'
    file = os.path.join(folder, f'{version}.gz')
    logging.info('write to %s', file)
    out = subprocess.run(['pg_dump', '--dbname', url, '-Z',
                          '9', '-f', file], capture_output=True)
    hostname = socket.gethostname()
    return (f'Backup to {file} successfully({hostname})', out.stdout.decode("utf-8"))


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
    parser = argparse.ArgumentParser(
        description='Backup PostgreSql db and send a report email.')
    parser.add_argument('-c', '--config', type=str, default="config.ini",
                        help='config file')
    parser.add_argument('-t', '--to', type=str, required=True,
                        help='send report to this email')
    parser.add_argument('-f', '--folder', type=str, default='tmp',
                        help='target folder')
    parser.add_argument('-D', '--days', type=int, default=7,
                        help='keep recent N days backup')
    parser.add_argument(
        '-d', '--debug', action='store_true', help='debug mode')

    args = parser.parse_args()
    logging.basicConfig(
        format='%(asctime)s %(levelname)s: %(message)s', level=logging.DEBUG if args.debug else logging.INFO)

    logging.debug('run on debug mode')
    logging.info('backup to %s and keep recent %d files',
                 args.folder, args.days)
    logging.debug('load file %s', args.config)
    config = configparser.ConfigParser()
    config.read(args.config)

    pg = config['postgresql']
    (subject, body) = backup(pg['host'], int(pg['port']), pg['user'],
                             pg['password'], pg['name'], args.folder)

    release(args.folder, args.days)

    smtp = config['smtp']
    send_mail(smtp['host'], int(smtp['port']), smtp['username'],
              smtp['password'], args.to, subject, body)

    logging.info('done.')
