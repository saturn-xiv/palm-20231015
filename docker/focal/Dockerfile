FROM ubuntu:focal
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

RUN apt -y install zsh git locales rsync openssh-client sshpass \
    vim sudo tzdata pwgen curl zip unzip tree tmux \
    net-tools dnsutils net-tools iputils-arping iputils-ping telnet \
    imagemagick ffmpeg \
    build-essential pkg-config libtool automake autoconf binutils cpio \
    debhelper bison flex ninja-build \
    crossbuild-essential-armhf pkg-config-arm-linux-gnueabihf \
    crossbuild-essential-arm64 pkg-config-aarch64-linux-gnu \
    python3 python3-distutils python3-pip python3-dev
RUN apt -y autoremove
RUN apt -y clean

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen
RUN locale-gen
RUN update-locale LANG=en_US.UTF-8
RUN update-alternatives --set editor /usr/bin/vim.basic

# deploy
RUN useradd -m deploy -s /bin/zsh
RUN passwd -l deploy
RUN echo 'deploy ALL=(ALL) NOPASSWD:ALL' > /etc/sudoers.d/101-deploy

USER deploy

RUN mkdir -p $HOME/downloads $HOME/build $HOME/local

# https://github.com/ohmyzsh/ohmyzsh
RUN git clone https://github.com/ohmyzsh/ohmyzsh.git $HOME/.oh-my-zsh
RUN cp $HOME/.oh-my-zsh/templates/zshrc.zsh-template $HOME/.zshrc
RUN echo 'source $HOME/.profile' >> $HOME/.zshrc
RUN echo 'export LANG=en_US.UTF-8' >> $HOME/.profile
RUN echo 'export LC_ALL=en_US.UTF-8' >> $HOME/.profile

RUN git config --global core.quotepath false
RUN echo 'set-option -g history-limit 102400' > $HOME/.tmux.conf

# https://pip.pypa.io/en/stable/installation/#get-pip-py
RUN curl -o- https://bootstrap.pypa.io/get-pip.py | python3
RUN sh -c ". $HOME/.profile \
    && pip install --user cmake"
RUN sh -c ". $HOME/.profile \
    && pip install --user ansible paramiko"
RUN echo 'export ANSIBLE_HOST_KEY_CHECKING=False' >> $HOME/.profile
RUN echo 'alias peony="ANSIBLE_LOG_PATH=$HOME/$(date +%Y%m%d%H%M%S).log ansible-playbook"' >> $HOME/.profile

# https://github.com/nvm-sh/nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | sh
RUN sh -c ". $HOME/.profile \
    && nvm install node"
RUN sh -c ". $HOME/.profile \
    && npm i yarn -g"
RUN echo 'export PATH=$HOME/.yarn/bin:$PATH' >> $HOME/.profile

# https://www.rust-lang.org/tools/install
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
# https://doc.rust-lang.org/nightly/rustc/platform-support.html
RUN zsh -c "source $HOME/.cargo/env \
    && rustup target add armv7-unknown-linux-gnueabihf \
    && rustup target add aarch64-unknown-linux-gnu"
RUN sudo apt install -y libpq-dev libmysqlclient-dev libsqlite3-dev
RUN zsh -c "source $HOME/.zshrc \
    && cargo install diesel_cli \
    && cargo install --locked cargo-outdated \
    && cargo install mdbook"

# https://grpc.io/docs/languages/cpp/quickstart/
ENV GRPC_VERSION "v1.43.0"
RUN zsh -c "source $HOME/.zshrc \
    && git clone --recurse-submodules -b ${GRPC_VERSION} https://github.com/grpc/grpc.git $HOME/downloads/grpc"
RUN mkdir -pv $HOME/build/grpc-amd64
RUN zsh -c "source $HOME/.zshrc \
    && cd $HOME/build/grpc-amd64 \
    && cmake -DCMAKE_BUILD_TYPE=Release \
    -DgRPC_INSTALL=ON \
    -DgRPC_SSL_PROVIDER=package \
    -DgRPC_BUILD_TESTS=OFF \
    -DCMAKE_INSTALL_PREFIX=$HOME/.local $HOME/downloads/grpc"
RUN zsh -c "source $HOME/.zshrc \
    && cd $HOME/build/grpc-amd64 \
    && make \
    && make install"

ENV GRPC_WEB_VERSION "1.3.0"
RUN wget -q -O $HOME/.local/bin/protoc-gen-grpc-web https://github.com/grpc/grpc-web/releases/download/${GRPC_WEB_VERSION}/protoc-gen-grpc-web-${GRPC_WEB_VERSION}-linux-x86_64
RUN chmod +x $HOME/.local/bin/protoc-gen-grpc-web

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | sudo tee /VERSION

VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/zsh", "-l"]
