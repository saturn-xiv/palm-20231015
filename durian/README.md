```bash
sudo apt install net-snmp

source $HOME/local/python3/bin/activate
pip install opensearch-py psycopg2 mysql-connector minio redis[hiredis] pika
```

- edit `$HOME/local/python3/bin/pyvenv.cfg`

  ```ini
  include-system-site-packages = true
  ```

- setup snmp

  ```bash
  mkdir /etc/snmp/
  echo rocommunity public >> /etc/snmp/snmpd.conf
  sudo systemctl restart snmpd.service
  snmpget -v 2c -c public 127.0.0.1 '.1.3.6.1.2.1.1.1.0'
  ```
