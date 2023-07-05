import logging
import psycopg

from pandas import ExcelFile


def to_pg(name, doc, db):
    cur = db.cursor()
    cur.execute(psycopg.sql.SQL(
        'INSERT INTO excel_files("name") VALUES(%s) RETURNING id'), [name])
    file_row = cur.fetchone()
    file_id = file_row[0]
    for sheet_name in doc.sheet_names:
        logging.debug('find sheet %s' % sheet_name)
        cur.execute(psycopg.sql.SQL(
            'INSERT INTO excel_sheets(file_id, "name") VALUES(%s, %s) RETURNING id'), [file_id, sheet_name])
        sheet_row = cur.fetchone()
        sheet_id = sheet_row[0]
        sheet = doc.parse(sheet_name)
        for row, item in sheet.to_dict().items():
            for col, val in item.items():
                logging.debug('find (%s, %s, %s)', row, col, val)
                cur.execute(psycopg.sql.SQL(
                    'INSERT INTO excel_items(sheet_id, "row", "column", "value") VALUES(%s, %s, %s, %s)'), [sheet_id, row, col, val])


def file_to_pg(file, url):
    logging.info("read %s", file.name)
    doc = ExcelFile(file)
    with psycopg.connect(url) as db:
        to_pg(file.name, doc, db)
