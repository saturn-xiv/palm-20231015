FROM ubuntu:latest
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt install -y software-properties-common wget

# https://launchpad.net/~ubuntu-toolchain-r/+archive/ubuntu/test
ENV GCC_VERSION 12
RUN add-apt-repository -y ppa:ubuntu-toolchain-r/test
# https://apt.llvm.org/
ENV CLANG_VERSION 16
RUN echo "deb http://apt.llvm.org/$(lsb_release -cs)/ llvm-toolchain-$(lsb_release -cs)-${CLANG_VERSION} main" > /etc/apt/sources.list.d/llvm.list
RUN wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key | apt-key add -

RUN apt update
RUN apt -y upgrade
RUN apt -y install build-essential cmake mold pkg-config g++-12 \
    build-essential g++-${GCC_VERSION} libstdc++-${GCC_VERSION}-dev \
    crossbuild-essential-arm64 g++-${GCC_VERSION}-aarch64-linux-gnu \
    crossbuild-essential-armhf g++-${GCC_VERSION}-arm-linux-gnueabihf \
    crossbuild-essential-riscv64 g++-${GCC_VERSION}-riscv64-linux-gnu \
    clang-${CLANG_VERSION} clangd-${CLANG_VERSION} clang-tools-${CLANG_VERSION} clang-format-${CLANG_VERSION} clang-tidy-${CLANG_VERSION} lldb-${CLANG_VERSION} lld-${CLANG_VERSION} \
    lsb-release tar curl zip unzip wget git \
    python3 golang
RUN apt -y clean

RUN update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-${CLANG_VERSION} 100 \
    && update-alternatives --install /usr/bin/clang clang /usr/bin/clang-${CLANG_VERSION} 100 \
    && update-alternatives --install /usr/bin/clang-format clang-format /usr/bin/clang-format-${CLANG_VERSION} 100 \
    && update-alternatives --install /usr/bin/clang-tidy clang-tidy /usr/bin/clang-tidy-${CLANG_VERSION} 100 \
    && update-alternatives --install /usr/bin/lldb lldb /usr/bin/lldb-${CLANG_VERSION} 100 \
    && update-alternatives --install /usr/bin/lld lld /usr/bin/lld-${CLANG_VERSION} 100 \
    && update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/aarch64-linux-gnu-gcc aarch64-linux-gnu-gcc /usr/bin/aarch64-linux-gnu-gcc-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/aarch64-linux-gnu-g++ aarch64-linux-gnu-g++ /usr/bin/aarch64-linux-gnu-g++-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/arm-linux-gnueabihf-gcc arm-linux-gnueabihf-gcc /usr/bin/arm-linux-gnueabihf-gcc-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/arm-linux-gnueabihf-g++ arm-linux-gnueabihf-g++ /usr/bin/arm-linux-gnueabihf-g++-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/riscv64-linux-gnu-gcc riscv64-linux-gnu-gcc /usr/bin/riscv64-linux-gnu-gcc-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/riscv64-linux-gnu-g++ riscv64-linux-gnu-g++ /usr/bin/riscv64-linux-gnu-g++-${GCC_VERSION} 100
RUN echo 'export VCPKG_DISABLE_METRICS=1' >> $HOME/.bashrc

RUN mkdir -p $HOME/downloads $HOME/build

RUN mkdir /opt/palm
COPY palm /opt/palm/

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

WORKDIR /opt/palm
VOLUME /workspace

CMD ["/bin/bash", "-l"]
