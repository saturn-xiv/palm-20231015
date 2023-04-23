# Setup

## Install

```bash
sudo apt install openjdk-17-jdk
```

## Usage

```bash
$HOME/local/liquibase/liquibase drop-all
$HOME/local/liquibase/liquibase update
$HOME/local/liquibase/liquibase rollback-count 1
$HOME/local/liquibase/liquibase rollback-one-changeset --changeset-id=20220513111322
$HOME/local/liquibase/liquibase status
```

## PostgreSql

- setup uuid

  ```sql
  CREATE DATABASE palm;
  \c palm
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE USER www WITH PASSWORD 'CHANGE-ME';
  CREATE DATABASE palm WITH ENCODING = 'UTF8' OWNER www;
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

## Resources

- [Download Liquibase](https://www.liquibase.com/download)
