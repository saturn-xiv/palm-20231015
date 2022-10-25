# Usage

## Snmpd

```bash
# create user
$ net-snmp-create-v3-user -ro -a SHA -x AES
# test
$ snmpwalk -v 3 -u USER -a SHA -A PASSWORD1 -x AES -X PASSWORD2 -l authNoPriv localhost
```
