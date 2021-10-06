# Pi

## How to flash to an SD card

```bash
gzip -d imagename-factory.img.gz
dd if=imagename-factory.img of=/dev/sdX bs=2M conv=fsync
sync
```
