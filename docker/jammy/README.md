# USAGE

```bash
$ cd ~/workspace
$ ./saturn-xiv/palm/docker/jammy/start.sh
> supervisord -c /etc/supervisor/supervisord.conf # http://localhost:10001
# init postgresql data folder
> su - postgres -c "/usr/lib/postgresql/14/bin/initdb -D /var/lib/postgresql/data"
# init redis cluster
> /etc/redis/clusters-init.sh
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

- RabbitMQ

  ```bash
  # enable rabbitmq management plugin
  rabbitmq-plugins enable rabbitmq_management # http://localhost:15672 guest:guest
  ```
