
import logging
import psycopg
import pika

VERSION = '2023.7.5'


# https://pika.readthedocs.io/en/stable/modules/parameters.html
def rabbitmq_parameters(config):
    credentials = pika.PlainCredentials(config['user'], config['password'])
    parameters = pika.ConnectionParameters(
        config['host'],
        config['port'],
        config['virtual-host'],
        credentials)
    return parameters


# https://www.postgresql.org/docs/current/libpq-connect.html
def postgresql_url(config):
    logging.debug('open postgresql://%s@%s:%d/%s',
                  config['user'], config['host'], config['port'], config['name'])
    url = 'host=%s port=%d user=%s password=%s dbname=%s sslmode=disable' % (
        config['host'], config['port'], config['user'], config['password'], config['name'])
    with psycopg.connect(url) as db:
        cur = db.cursor()
        cur.execute('SELECT VERSION(), CURRENT_TIMESTAMP')
        row = cur.fetchone()
        if row:
            logging.debug("%s %s", row[0], row[1])
    return url
