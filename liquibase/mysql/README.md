# MySql

- Percona server root's password `sudo grep "temporary password" /var/log/mysqld.log`
- Replace unicode char `sed "s/$(echo -ne '\u0327')//g" raw.sql`
- MySql create database

  ```sql
  CREATE USER 'www'@'localhost' IDENTIFIED BY 'change-me';
  CREATE DATABASE palm CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
  GRANT ALL PRIVILEGES ON palm.* TO 'www'@'localhost';
  FLUSH PRIVILEGES;
  ```
