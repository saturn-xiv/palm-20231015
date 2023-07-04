import logging

from pandas import read_excel


def to_pg(file, db):
    logging.info("read %s", file.name)
