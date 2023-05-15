# Usage

```bash
# for ubuntu
sudo apt install build-essential pkg-config libboost-all-dev libglfw3-dev
# for ArchLinux
sudo pacman -S --needed boost glfw-wayland

PKG_CONFIG_PATH=$HOME/.local/lib/pkgconfig make -j
```
