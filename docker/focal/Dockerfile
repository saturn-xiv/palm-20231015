FROM ubuntu:focal
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt install -y lsb-release apt-utils \
    debian-keyring debian-archive-keyring apt-transport-https software-properties-common curl wget gnupg
# https://launchpad.net/~ubuntu-toolchain-r/+archive/ubuntu/test
ENV AMD64_GCC_VERSION 11
ENV GCC_VERSION 10
RUN add-apt-repository -y ppa:ubuntu-toolchain-r/test
RUN echo "deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ $(lsb_release -cs) main restricted universe multiverse" > /etc/apt/sources.list
RUN echo "deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ $(lsb_release -cs)-updates main restricted universe multiverse" >> /etc/apt/sources.list
RUN echo "deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ $(lsb_release -cs)-security main restricted universe multiverse" >> /etc/apt/sources.list
# https://apt.llvm.org/
ENV CLANG_VERSION 16
RUN echo "deb [arch=amd64] http://apt.llvm.org/$(lsb_release -cs)/ llvm-toolchain-$(lsb_release -cs)-${CLANG_VERSION} main" > /etc/apt/sources.list.d/llvm.list
RUN wget -qO- https://apt.llvm.org/llvm-snapshot.gpg.key | tee /etc/apt/trusted.gpg.d/apt.llvm.org.asc
# https://wiki.debian.org/ToolChain/Cross
RUN dpkg --add-architecture armhf
RUN dpkg --add-architecture arm64
RUN dpkg --add-architecture riscv64
RUN echo "deb [arch=armhf,arm64,riscv64] http://ports.ubuntu.com/ $(lsb_release -cs) main restricted universe multiverse" >> /etc/apt/sources.list
RUN echo "deb [arch=armhf,arm64,riscv64] http://ports.ubuntu.com/ $(lsb_release -cs)-security main restricted universe multiverse" >> /etc/apt/sources.list
RUN echo "deb [arch=armhf,arm64,riscv64] http://ports.ubuntu.com/ $(lsb_release -cs)-updates main restricted universe multiverse" >> /etc/apt/sources.list
RUN apt update && apt -y upgrade

RUN apt -y install zsh git locales locales-all \
    vim tzdata zip unzip tree tmux \
    g++-${AMD64_GCC_VERSION} libstdc++-${AMD64_GCC_VERSION}-dev \
    build-essential g++-${GCC_VERSION} libstdc++-${GCC_VERSION}-dev \
    crossbuild-essential-arm64 g++-${GCC_VERSION}-aarch64-linux-gnu libstdc++-${GCC_VERSION}-dev:arm64 \
    crossbuild-essential-armhf g++-${GCC_VERSION}-arm-linux-gnueabihf libstdc++-${GCC_VERSION}-dev:armhf \
    crossbuild-essential-riscv64 g++-${GCC_VERSION}-riscv64-linux-gnu \
    libstdc++-13-dev clang-${CLANG_VERSION} clangd-${CLANG_VERSION} clang-tools-${CLANG_VERSION} clang-format-${CLANG_VERSION} lldb-${CLANG_VERSION} lld-${CLANG_VERSION} \
    cmake pkg-config libtool automake autoconf autoconf-archive binutils cpio \
    debhelper bison flex ninja-build \
    python3 python3-pip python3-distutils python3-dev python3-venv
RUN update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-${CLANG_VERSION} 100 \
    && update-alternatives --install /usr/bin/clang clang /usr/bin/clang-${CLANG_VERSION} 100 \
    && update-alternatives --install /usr/bin/clang-format clang-format /usr/bin/clang-format-${CLANG_VERSION} 100 \
    && update-alternatives --install /usr/bin/lldb lldb /usr/bin/lldb-${CLANG_VERSION} 100 \
    && update-alternatives --install /usr/bin/lld lld /usr/bin/lld-${CLANG_VERSION} 100 \
    && update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-${AMD64_GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-${AMD64_GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/aarch64-linux-gnu-gcc aarch64-linux-gnu-gcc /usr/bin/aarch64-linux-gnu-gcc-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/aarch64-linux-gnu-g++ aarch64-linux-gnu-g++ /usr/bin/aarch64-linux-gnu-g++-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/arm-linux-gnueabihf-gcc arm-linux-gnueabihf-gcc /usr/bin/arm-linux-gnueabihf-gcc-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/arm-linux-gnueabihf-g++ arm-linux-gnueabihf-g++ /usr/bin/arm-linux-gnueabihf-g++-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/riscv64-linux-gnu-gcc riscv64-linux-gnu-gcc /usr/bin/riscv64-linux-gnu-gcc-${GCC_VERSION} 100 \
    && update-alternatives --install /usr/bin/riscv64-linux-gnu-g++ riscv64-linux-gnu-g++ /usr/bin/riscv64-linux-gnu-g++-${GCC_VERSION} 100
   

RUN apt -y autoremove && apt -y clean

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen
RUN locale-gen
RUN update-locale LANG=en_US.UTF-8
RUN update-alternatives --set editor /usr/bin/vim.basic

RUN mkdir -p $HOME/downloads $HOME/build $HOME/local $HOME/tmp

# https://github.com/ohmyzsh/ohmyzsh
RUN git clone https://github.com/ohmyzsh/ohmyzsh.git $HOME/.oh-my-zsh
RUN cp $HOME/.oh-my-zsh/templates/zshrc.zsh-template $HOME/.zshrc
RUN echo 'export LANG=en_US.UTF-8' >> $HOME/.zshrc
RUN echo 'export LC_ALL=en_US.UTF-8' >> $HOME/.zshrc
RUN echo 'export PATH=$HOME/.local/bin:$PATH' >> $HOME/.zshrc

RUN git config --global core.quotepath false \
    && git config --global http.version HTTP/1.1 \
    && git config --global pull.rebase false \
    && git config --global url."https://".insteadOf git://
RUN echo 'set-option -g history-limit 102400' > $HOME/.tmux.conf \
    && echo 'set-option -g default-shell "/bin/zsh"' >> $HOME/.tmux.conf

# https://musl.cc/
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/x86_64-linux-musl-cross.tgz \
    && cd /opt \
    && tar xf $HOME/downloads/x86_64-linux-musl-cross.tgz \
    && echo 'export PATH=/opt/x86_64-linux-musl-cross/bin:$PATH' >> $HOME/.zshrc
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/armv7l-linux-musleabihf-cross.tgz \
    && cd /opt \
    && tar xf $HOME/downloads/armv7l-linux-musleabihf-cross.tgz \
    && echo 'export PATH=/opt/armv7l-linux-musleabihf-cross/bin:$PATH' >> $HOME/.zshrc
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/aarch64-linux-musl-cross.tgz \
    && cd /opt \
    && tar xf $HOME/downloads/aarch64-linux-musl-cross.tgz \
    && echo 'export PATH=/opt/aarch64-linux-musl-cross/bin:$PATH' >> $HOME/.zshrc
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/riscv64-linux-musl-cross.tgz \
    && cd /opt \
    && tar xf $HOME/downloads/riscv64-linux-musl-cross.tgz \
    && echo 'export PATH=/opt/riscv64-linux-musl-cross/bin:$PATH' >> $HOME/.zshrc

# https://pip.pypa.io/en/stable/installation/
RUN sh -c ". $HOME/.profile \
    && python3 -m venv $HOME/local/python3 \
    && . $HOME/local/python3/bin/activate \
    && pip install --upgrade pip \
    && pip install cmake"
RUN echo 'source $HOME/local/python3/bin/activate' >> $HOME/.zshrc

# https://github.com/nvm-sh/nvm
ENV NVM_VERSION "v0.39.5"
RUN git clone -b ${NVM_VERSION} https://github.com/nvm-sh/nvm.git $HOME/.nvm
RUN echo 'export NVM_DIR="$HOME/.nvm"' >> $HOME/.zshrc
RUN echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> $HOME/.zshrc
RUN echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> $HOME/.zshrc
RUN zsh -c "source $HOME/.zshrc \
    && nvm install node \
    && nvm use node \
    && npm i yarn -g"
RUN echo 'export PATH=$HOME/.yarn/bin:$PATH' >> $HOME/.zshrc


ENV JDK_VERSION "22-open"
# https://docs.gradle.org/current/userguide/compatibility.html
ENV GRADLE_VERSION "8.4"
RUN curl -s "https://get.sdkman.io" | bash
RUN sed -i -e 's/sdkman_auto_answer=false/sdkman_auto_answer=true/g' $HOME/.sdkman/etc/config
RUN zsh -c "source $HOME/.zshrc \
    && sdk install java ${JDK_VERSION} \
    && sdk install maven \
    && sdk install gradle ${GRADLE_VERSION}"

# https://www.rust-lang.org/tools/install
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
RUN zsh -c "source $HOME/.cargo/env \
    && rustup target add x86_64-unknown-linux-musl \
    && rustup target add armv7-unknown-linux-gnueabihf \
    && rustup target add aarch64-unknown-linux-gnu \
    && rustup target add aarch64-unknown-linux-musl \
    && rustup target add riscv64gc-unknown-linux-gnu"

# https://github.com/microsoft/vcpkg
RUN git clone https://github.com/microsoft/vcpkg.git $HOME/local/vcpkg
RUN $HOME/local/vcpkg/bootstrap-vcpkg.sh \
    && echo 'export VCPKG_DISABLE_METRICS=1' >> $HOME/.zshrc

# https://github.com/grpc/grpc
ENV GRPC_VERSION "v1.59.1"
RUN git clone --recurse-submodules -b $GRPC_VERSION https://github.com/grpc/grpc.git $HOME/downloads/grpc
RUN apt install -y libssl-dev
RUN zsh -c "source $HOME/.zshrc \
    && mkdir -pv $HOME/build/grpc \
    && cd $HOME/build/grpc \
    && cmake -DCMAKE_BUILD_TYPE=Release \
        -DgRPC_INSTALL=ON \
        -DgRPC_SSL_PROVIDER=package \
        -DgRPC_BUILD_TESTS=OFF \
        -DCMAKE_INSTALL_PREFIX=$HOME/.local $HOME/downloads/grpc \
    && make \
    && make install"

# https://github.com/rui314/mold
RUN git clone -b v2.2.0 https://github.com/rui314/mold.git $HOME/downloads/mold
RUN zsh -c "source $HOME/.zshrc \
    && mkdir $HOME/build/mold \
    && cd $HOME/build/mold \
    && $HOME/downloads/mold/install-build-deps.sh \
    && cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_COMPILER=clang++ $HOME/downloads/mold \
    && make \
    && make install"
RUN ln -s /usr/local/bin/mold /usr/bin/mold

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/zsh", "-l"]
