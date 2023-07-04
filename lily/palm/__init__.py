
import logging
import psycopg2

VERSION = '2023.7.5'


def open_postgresql(config):
    logging.debug('open postgresql://%s@%s:%d/%s',
                  config['user'], config['host'], config['port'], config['name'])
    # https://www.postgresql.org/docs/current/libpq-connect.html
    db = psycopg2.connect('host=%s port=%d user=%s password=%s dbname=%s sslmode=disable' %
                          (config['host'], config['port'], config['user'], config['password'], config['name']))
    cur = db.cursor()
    cur.execute('SELECT VERSION(), CURRENT_TIMESTAMP')
    row = cur.fetchone()
    if row:
        logging.debug("%s %s", row[0], row[1])
    return db
