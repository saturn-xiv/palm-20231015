#!/usr/bin/python3

import random


def randomMAC():
    return [0x00, 0x16, 0x3e,
            random.randint(0x00, 0x7f),
            random.randint(0x00, 0xff),
            random.randint(0x00, 0xff)]


def MACprettyprint(mac):
    return ':'.join(map(lambda x: "%02x" % x, mac))


if __name__ == '__main__':
    print(MACprettyprint(randomMAC()))
