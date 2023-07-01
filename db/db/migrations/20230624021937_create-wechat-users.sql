-- migrate:up
CREATE TABLE wechat_oauth2_users(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    union_id VARCHAR(127) NOT NULL,
    app_id VARCHAR(63) NOT NULL,
    open_id VARCHAR(127) NOT NULL,
    nickname VARCHAR(63) NOT NULL,
    sex INT NOT NULL,
    city VARCHAR(63) NOT NULL,
    province VARCHAR(63) NOT NULL,
    country VARCHAR(63) NOT NULL,
    head_img_url VARCHAR(255),
    privilege BYTEA NOT NULL,
    lang VARCHAR(8) NOT NULL,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_wechat_oauth2_users_union_id ON wechat_oauth2_users(union_id);

CREATE UNIQUE INDEX idx_wechat_oauth2_users_app_id_and_open_id ON wechat_oauth2_users(app_id, open_id);

CREATE INDEX idx_wechat_oauth2_users_app_id ON wechat_oauth2_users(app_id);

CREATE INDEX idx_wechat_oauth2_users_open_id ON wechat_oauth2_users(open_id);

CREATE INDEX idx_wechat_oauth2_users_nickname ON wechat_oauth2_users(nickname);

CREATE INDEX idx_wechat_oauth2_users_city ON wechat_oauth2_users(city);

CREATE INDEX idx_wechat_oauth2_users_province ON wechat_oauth2_users(province);

CREATE INDEX idx_wechat_oauth2_users_country ON wechat_oauth2_users(country);

CREATE INDEX idx_wechat_oauth2_users_lang ON wechat_oauth2_users(lang);

CREATE TABLE wechat_mini_program_users(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    union_id VARCHAR(127) NOT NULL,
    app_id VARCHAR(63) NOT NULL,
    open_id VARCHAR(127) NOT NULL,
    nickname VARCHAR(63),
    avatar_url VARCHAR(255),
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_wechat_mini_program_users_union_id ON wechat_mini_program_users(union_id);

CREATE INDEX idx_wechat_mini_program_users_app_id_and_open_id ON wechat_mini_program_users(app_id, open_id);

CREATE INDEX idx_wechat_mini_program_users_app_id ON wechat_mini_program_users(app_id);

CREATE INDEX idx_wechat_mini_program_users_open_id ON wechat_mini_program_users(open_id);

CREATE INDEX idx_wechat_mini_program_users_nickname ON wechat_mini_program_users(nickname)
WHERE
    nickname IS NOT NULL;

-- migrate:down
DROP TABLE wechat_mini_program_users;

DROP TABLE wechat_oauth2_users;
