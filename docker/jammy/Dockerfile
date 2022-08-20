FROM ubuntu:jammy
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt -y upgrade
RUN apt -y install debian-keyring debian-archive-keyring apt-transport-https software-properties-common curl wget gnupg

# https://wiki.ubuntu.com/ToolChain
RUN echo "deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ $(lsb_release -cs) main restricted universe multiverse" > /etc/apt/sources.list
RUN echo "deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ $(lsb_release -cs)-updates main restricted universe multiverse" >> /etc/apt/sources.list
RUN echo "deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ $(lsb_release -cs)-security main restricted universe multiverse" >> /etc/apt/sources.list
RUN dpkg --add-architecture armhf
RUN dpkg --add-architecture arm64
RUN echo "deb [arch=armhf,arm64] http://ports.ubuntu.com/ $(lsb_release -cs) main restricted universe multiverse" >> /etc/apt/sources.list
RUN echo "deb [arch=armhf,arm64] http://ports.ubuntu.com/ $(lsb_release -cs)-security main restricted universe multiverse" >> /etc/apt/sources.list
RUN echo "deb [arch=armhf,arm64] http://ports.ubuntu.com/ $(lsb_release -cs)-updates main restricted universe multiverse" >> /etc/apt/sources.list
RUN apt update
RUN apt -y upgrade

RUN apt -y install zsh git locales locales-all rsync openssh-client sshpass \
    vim tzdata pwgen zip unzip tree tmux dialog \
    net-tools dnsutils net-tools iputils-arping iputils-ping telnet \
    imagemagick ffmpeg fonts-dejavu \
    clang clang-format lldb lld \
    build-essential pkg-config libtool automake autoconf binutils cpio mold \
    debhelper bison flex ninja-build \
    crossbuild-essential-armhf crossbuild-essential-arm64 \
    python3 python3-distutils python3-dev python3-pip \
    nginx rabbitmq-server redis postgresql mariadb-server

# https://launchpad.net/~ubuntu-toolchain-r/+archive/ubuntu/test
RUN add-apt-repository -y ppa:ubuntu-toolchain-r/test
ENV GCC_VERSION 12
RUN apt install -y g++-${GCC_VERSION} g++-${GCC_VERSION}-aarch64-linux-gnu g++-${GCC_VERSION}-arm-linux-gnueabihf

# https://apt.llvm.org/
ENV CLANG_VERSION=14
RUN echo "deb [arch=amd64] http://apt.llvm.org/$(lsb_release -cs)/ llvm-toolchain-$(lsb_release -cs)-${CLANG_VERSION} main" > /etc/apt/sources.list.d/llvm.list
RUN wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key | apt-key add -
RUN apt update
RUN apt install -y clang-${CLANG_VERSION} \
    clangd-${CLANG_VERSION} clang-tools-${CLANG_VERSION} clang-format-${CLANG_VERSION} \
    lldb-${CLANG_VERSION} lld-${CLANG_VERSION}
RUN update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-${CLANG_VERSION} 100
RUN update-alternatives --install /usr/bin/clang clang /usr/bin/clang-${CLANG_VERSION} 100
RUN update-alternatives --install /usr/bin/clang-format clang-format /usr/bin/clang-format-${CLANG_VERSION} 100
RUN update-alternatives --install /usr/bin/lldb lldb /usr/bin/lldb-${CLANG_VERSION} 100
RUN update-alternatives --install /usr/bin/lld lld /usr/bin/lld-${CLANG_VERSION} 100

RUN apt -y autoremove
RUN apt -y clean

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen
RUN locale-gen
RUN update-locale LANG=en_US.UTF-8
RUN update-alternatives --set editor /usr/bin/vim.basic


RUN mkdir -p $HOME/downloads $HOME/build $HOME/local $HOME/tmp

# https://github.com/ohmyzsh/ohmyzsh
RUN git clone https://github.com/ohmyzsh/ohmyzsh.git $HOME/.oh-my-zsh
RUN cp $HOME/.oh-my-zsh/templates/zshrc.zsh-template $HOME/.zshrc
RUN echo 'source $HOME/.profile' >> $HOME/.zshrc
RUN echo 'export LANG=en_US.UTF-8' >> $HOME/.profile
RUN echo 'export LC_ALL=en_US.UTF-8' >> $HOME/.profile

RUN git config --global core.quotepath false
RUN git config --global http.version HTTP/1.1
RUN git config --global pull.rebase false
RUN echo 'set-option -g history-limit 102400' > $HOME/.tmux.conf

RUN sh -c ". $HOME/.profile \
    && pip3 install --user cmake"
RUN sh -c ". $HOME/.profile \
    && pip3 install --user ansible paramiko"
RUN echo 'export ANSIBLE_HOST_KEY_CHECKING=False' >> $HOME/.profile
RUN echo 'export PATH=$HOME/.local/bin:$PATH' >> $HOME/.profile
RUN echo 'alias peony="ANSIBLE_LOG_PATH=$HOME/tmp/$(date +%Y%m%d%H%M%S).log ansible-playbook"' >> $HOME/.profile

RUN sh -c ". $HOME/.profile \
    && pip3 install --user conan \
    && conan profile new default --detect \
    && conan profile update settings.compiler.libcxx=libstdc++11 default"

# https://github.com/nvm-sh/nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | sh
RUN sh -c ". $HOME/.profile \
    && nvm install node \
    && nvm use node \
    && npm i yarn -g"
RUN sh -c ". $HOME/.profile \
    && nvm install --lts \
    && nvm use --lts \
    && npm i yarn -g"
# https://stackoverflow.com/questions/37324519/node-sass-does-not-yet-support-your-current-environment-linux-64-bit-with-false
RUN sh -c ". $HOME/.profile \
    && nvm install lts/fermium \
    && nvm use lts/fermium \
    && npm i yarn -g"
RUN echo 'export PATH=$HOME/.yarn/bin:$PATH' >> $HOME/.profile

RUN curl -s "https://get.sdkman.io" | zsh
RUN sed -i -e 's/sdkman_auto_answer=false/sdkman_auto_answer=true/g' $HOME/.sdkman/etc/config
RUN zsh -c "source $HOME/.zshrc \
    && sdk install java 18.0.2.1-open \
    && sdk install maven \
    && sdk install gradle"

# https://opensearch.org/downloads.html#opensearch
ENV OPENSEARCH_VERSION "2.2.0"
RUN wget -q -o $HOME/downloads/opensearch-${OPENSEARCH_VERSION}-linux-x64.tar.gz \
    https://artifacts.opensearch.org/releases/bundle/opensearch/${OPENSEARCH_VERSION}/opensearch-${OPENSEARCH_VERSION}-linux-x64.tar.gz
RUN tar xf -C $HOME/local/ $HOME/downloads/opensearch-${OPENSEARCH_VERSION}-linux-x64.tar.gz

# https://www.rust-lang.org/tools/install
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
# https://doc.rust-lang.org/nightly/rustc/platform-support.html
RUN zsh -c "source $HOME/.cargo/env \
    && rustup target add armv7-unknown-linux-gnueabihf \
    && rustup target add aarch64-unknown-linux-gnu"
RUN apt install -y libpq-dev libmysqlclient-dev libsqlite3-dev
RUN zsh -c "source $HOME/.zshrc \
    && cargo install diesel_cli \
    && cargo install --locked cargo-outdated \
    && cargo install mdbook"

# ENV GRPC_VERSION "v1.48.0"
# RUN git clone --recurse-submodules -b $GRPC_VERSION https://github.com/grpc/grpc.git $HOME/downloads/grpc
# RUN zsh -c "source $HOME/.cargo/env \
#     && mkdir -pv $HOME/build/grpc \
#     && cd $HOME/build/grpc \
#     && cmake -DCMAKE_BUILD_TYPE=Release \
#         -DgRPC_INSTALL=ON \
#         -DgRPC_SSL_PROVIDER=package \
#         -DgRPC_BUILD_TESTS=OFF \
#         -DCMAKE_INSTALL_PREFIX=$HOME/.local $HOME/downloads/grpc \
#     && make \
#     && make install"

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/zsh", "-l"]
