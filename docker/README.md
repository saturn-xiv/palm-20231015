# Usage

```bash
sudo apt install crun podman buildah
```

- copy `storage.conf` to `$HOME/.config/containers/storage.conf`

- commands

  ```bash
  podman system reset
  podman images
  podman ps -a
  podman run --rm -it ubuntu:jammy /bin/bash
  ```
