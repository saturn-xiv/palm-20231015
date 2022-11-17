# Usage

```bash
sudo apt install crun podman buildah
```

- commands

  ```bash
  podman image prune # removes all dangling images
  podman system reset # clean
  podman images # show images
  podman ps -a # show containers
  podman load -i tmp/palm-CODE-TIMESTAMP.tar # import image
  ```
