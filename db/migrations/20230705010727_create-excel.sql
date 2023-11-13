-- migrate:up
CREATE TABLE excel_files(
    id SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_excel_files_name ON excel_files("name");

CREATE TABLE excel_sheets(
    id SERIAL PRIMARY KEY,
    file_id INT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_excel_sheets_name ON excel_sheets("name");

CREATE TABLE excel_items(
    id BIGSERIAL PRIMARY KEY,
    sheet_id INT NOT NULL,
    "row" VARCHAR(255) NOT NULL,
    "column" VARCHAR(255) NOT NULL,
    "value" VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_excel_items_row ON excel_items("row");

CREATE INDEX idx_excel_items_column ON excel_items("column");

CREATE INDEX idx_excel_items_value ON excel_items("value");

-- migrate:down
DROP TABLE excel_items;

DROP TABLE excel_sheets;

DROP TABLE excel_files;
