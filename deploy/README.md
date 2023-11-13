# Deployment

## Setup target host

- create `deploy` user

```bash
sudo apt install zsh
sudo useradd -s /bin/zsh -m deploy
sudo passwd -l deploy

sudo su - deploy
mkdir ~/.ssh && chmod 700 ~/.ssh
cat /tmp/id_ed25519.pub > ~/.ssh/authorized_keys
```

- set sudo for `deploy` user

```bash
echo 'deploy ALL=(ALL:ALL) NOPASSWD: ALL' > /etc/sudoers.d/101-deploy
```

## Setup client

    ```bash
    mkdir -p clients/CLIENT_ID/.ssh
    cp staging/hosts clients/CLIENT_ID/
    cd clients/CLIENT_ID
    ssh-keygen -t ed25519 -f .ssh/id_ed25519 -C "your-name@change-me.com"
    ```

## Deployment

    ```bash
    # test ssh connections
    ansible-playbook -i clients/CLIENT_ID ping.yml
    # by group
    ansible-playbook -i clients/CLIENT_ID samoyed.yml -l GROUP
    ```
