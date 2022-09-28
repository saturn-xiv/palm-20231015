# USAGE

- fix systemctl(run as root)

  ```bash
  echo 'vm.max_map_count=262144' > /etc/sysctl.d/50-opensearch.conf
  sysctl -p
  ```

- start container

```bash
$ cd ~/workspace
$ ./saturn-xiv/palm/docker/jammy/start.sh
> supervisord -c /etc/supervisor/supervisord.conf # http://localhost:10001
# init redis cluster
> /etc/redis/clusters-init.sh
```

- PostgreSql

  ```bash
  su - postgres -c "psql -p 5432"
  ```

- MySql

  ```bash
  # reset root's password
  mysql_secure_installation
  ```

- Redis

  ```bash
  # connect to redis node-1
  redis-cli -c -p 16371
  ```

- Minio `admin:12345678` http://localhost:9001

- RabbitMQ `guest:guest`

  ```bash
  # enable rabbitmq management plugin
  rabbitmq-plugins enable rabbitmq_management # http://localhost:15672
  ```

- Php `http://localhost:8080/info.php`

- OpenSearch

  ```bash
  # show info
  curl -X GET http://localhost:9200
  curl -X GET http://localhost:9200/_cat/plugins?v
  ```
