# USAGE

```bash
  $ cd ~/workspace
  $ ./saturn-xiv/palm/docker/jammy/start.sh
  > supervisord -c /etc/supervisor/supervisord.conf # http://localhost:10001
```

- Redis

  ```bash
  > /etc/redis/clusters-init.sh
  $ redis-cli -c -p 16371
  ```

- RabbitMQ

  ```bash
  > rabbitmq-plugins enable rabbitmq_management # http://localhost:15672 guest:guest
  ```
