# Setup

## PostgreSql

- setup uuid

  ```sql
  \c palm
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  ```

- backup

  ```bash
  pg_dump -U postgres -O --inserts palm -f palm.sql
  ```

## MySql

- create database

  ```sql
  CREATE USER 'www'@'localhost' IDENTIFIED BY '123456';
  CREATE DATABASE palm CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
  GRANT ALL PRIVILEGES ON palm.* TO 'www'@'localhost';
  FLUSH PRIVILEGES;
  # fix caching_sha2_password could not be loaded
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'change-me'
  ```

- import databases

  ```bash
  # import database
  cat 3rd/*.sql | mysql -u www -p palm
  ```
