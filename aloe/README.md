# USAGE

- testing

  ```bash
  buildah bud --layers -t aloe .
  podman run --rm -it -v $PWD:/workspace:z aloe
  ```
