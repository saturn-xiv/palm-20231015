# Usage

```bash
sudo apt install crun podman buildah
```

- Uncompress

  ```bash
  cat palm-spring-TIMESTAMP.tar.xz.0* > palm-spring-TIMESTAMP.tar.xz
  unxz palm-spring-TIMESTAMP.tar.xz
  ```

- Podman commands

  ```bash
  podman image prune # removes all dangling images
  podman system reset # clean
  podman images # show images
  podman ps -a # show containers
  podman load -i tmp/palm-CODE-TIMESTAMP.tar # import image
  ```

- Envoy build

  ```bash
  podman pull docker.io/envoyproxy/envoy-dev:latest
  podman run --rm -it docker.io/envoyproxy/envoy-dev:latest
  ```

- Merge file `~/.config/containers/storage.conf`
