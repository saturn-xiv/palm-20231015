#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# sudo pacman -S python-toml python-psycopg2
# sudo apt install python3-toml python3-psycopg2
# https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING


import os
import logging
import argparse

import toml
import psycopg2


class User:
    def __init__(self, id, nickname, real_name, email, uid, provider_type, provider_id, avatar):
        self.id = id
        self.nickname = nickname
        self.real_name = real_name
        self.email = email
        self.uid = uid
        if provider_type == 'email':
            self.provider_type = 0
        self.provider_id = provider_id
        self.avatar = avatar


def load_from_20230227(config, items):
    with psycopg2.connect("host=%s port=%d dbname=%s user=%s password=%s sslmode=disable" %
                          (config['host'], config['port'], config['name'], config['user'], config['password'])) as con:
        with con.cursor() as cur:
            cur.execute(
                "SELECT id, nick_name, real_name, email, uid, provider_type, provider_id, avatar FROM users ORDER BY nick_name ASC")
            for (id, nickname, real_name, email, uid, provider_type, provider_id, avatar) in cur:
                logging.debug("find user %s" % nickname)
                items.append(
                    User(id, nickname, real_name, email, uid, provider_type, provider_id, avatar))


def save_to(config, items=[]):
    with psycopg2.connect("host=%s port=%d dbname=%s user=%s password=%s sslmode=disable" %
                          (config['host'], config['port'], config['name'], config['user'], config['password'])) as con:
        for it in items:
            with con.cursor() as cur:
                cur.execute(
                    "SELECT COUNT(*) FROM users WHERE nickname = %s", (it.nickname,))
                (c,) = cur.fetchone()
                if c > 0:
                    logging.debug("user %s already exists", it.nickname)
                    continue
            logging.debug("save user %s" % it.nickname)

            with con.cursor() as cur:
                cur.execute(
                    "INSERT INTO users(id,nickname, real_name, email, uid, provider_type, provider_id, avatar, salt, updated_at) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, CURRENT_TIMESTAMP)",
                    (it.id, it.nickname, it.real_name, it.email, it.uid, it.provider_type, it.provider_id, it.avatar, os.urandom(16)))
        con.commit()


def launch(file):
    logging.debug("load config from %s" % file)
    config = toml.load(file)

    logging.debug("open database %s@%s:%d/%s" %
                  (config['from']['user'], config['from']['host'], config['from']['port'], config['from']['name']))

    items = []
    from_ = config['from']
    if from_['version'] == "2023.02.27":
        load_from_20230227(from_, items)

    logging.info("find %d users" % len(items))
    save_to(config['to'], items)


if __name__ == '__main__':
    logging.basicConfig(format='%(asctime)s %(levelname)s: %(message)s',
                        level=logging.DEBUG)
    parser = argparse.ArgumentParser(prog='ProgramName',
                                     description='Auth tables migrate tools',
                                     epilog='Text at the bottom of help')
    parser.add_argument('-c', '--config', default='config.toml')
    parser.add_argument('-d', '--debug',
                        action='store_true')
    args = parser.parse_args()

    if args.debug:
        logging.debug("run on debug mode")

    launch(args.config)
    logging.info('done')
