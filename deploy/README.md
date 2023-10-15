# Deployment

## Setup target host

- create `deploy` user

```bash
sudo apt install zsh
sudo useradd -s /bin/zsh -m deploy

sudo su - deploy
mkdir ~/.ssh && chmod 700 ~/.ssh
cat /tmp/id_ed25519.pub ~/.ssh/authorized_keys
```

- set sudo for `deploy` user

```bash
echo 'deploy ALL=(ALL:ALL) NOPASSWD: ALL' > /etc/sudoers.d/101-deploy
```
