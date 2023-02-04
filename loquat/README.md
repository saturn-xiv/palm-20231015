# LOQUAT

## By Cmake(ONLY support focal yet)

```bash
mkdir build
cd build
apt install -y g++10 golang libunwind-dev libboost-all-dev
CC=gcc-10 CXX=g++-10 cmake -DCMAKE_BUILD_TYPE=Release \
    -DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=OFF \
    -DBUILD_COMPILER=OFF -DWITH_OPENSSL=OFF -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF \
    ..
make loquat
```

## By Qemu

```bash
sudo pacman -S qemu-full
cp /usr/share/AAVMF/AAVMF_CODE.fd flash-1.img
python mac.py

sudo qemu-system-aarch64 -m 4096 -cpu cortex-a57 -M virt -nographic -pflash /usr/share/AAVMF/AAVMF_CODE.fd -pflash flash-1.img -drive if=none,file=jammy-server-cloudimg-arm64.img,id=hd0 -device virtio-blk-device,drive=hd0 -nic bridge,br=virbr0,model=virtio-net-pci
# -netdev type=tap,id=net0 -device virtio-net-device,netdev=net0,mac='00:16:3e:58:4c:91'
```

- [Ubuntu 22.04 (Jammy Jellyfish) Daily Build](https://cloud-images.ubuntu.com/jammy/current/)
- [QEMU](https://wiki.archlinux.org/title/QEMU)
- [Network bridge](https://wiki.archlinux.org/title/Network_bridge)
