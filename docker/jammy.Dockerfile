FROM ubuntu:jammy
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt -y upgrade
RUN apt -y install debian-keyring debian-archive-keyring apt-transport-https software-properties-common curl wget gnupg

# https://launchpad.net/~ubuntu-toolchain-r/+archive/ubuntu/test
RUN add-apt-repository -y ppa:ubuntu-toolchain-r/test

ENV CLANG_VERSION=13
RUN echo "deb [arch=amd64] http://apt.llvm.org/$(lsb_release -cs)/ llvm-toolchain-$(lsb_release -cs)-${CLANG_VERSION} main" > /etc/apt/sources.list.d/llvm.list
RUN wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key | apt-key add -

# https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html
RUN wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg
RUN echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg arch=amd64] https://artifacts.elastic.co/packages/8.x/apt stable main" | tee /etc/apt/sources.list.d/elastic-8.x.list


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

ENV GCC_VERSION 12
RUN apt -y install zsh git locales rsync openssh-client sshpass \
    vim tzdata pwgen curl zip unzip tree tmux \
    net-tools dnsutils net-tools iputils-arping iputils-ping telnet \
    imagemagick ffmpeg fonts-dejavu-extra \
    mold clang-${CLANG_VERSION} clang-format-${CLANG_VERSION} lldb-${CLANG_VERSION} lld-${CLANG_VERSION} \
    build-essential pkg-config libtool automake autoconf binutils cpio \
    debhelper bison flex ninja-build \
    g++-${GCC_VERSION} libstdc++-${GCC_VERSION}-dev:amd64 \
    libc6-dev-armhf-cross crossbuild-essential-armhf \
    g++-${GCC_VERSION}-arm-linux-gnueabihf libstdc++-${GCC_VERSION}-dev:armhf \
    libc6-dev-arm64-cross crossbuild-essential-arm64 \
    g++-${GCC_VERSION}-aarch64-linux-gnu libstdc++-${GCC_VERSION}-dev:arm64 \
    python3 python3-distutils python3-dev python3-pip \
    nginx elasticsearch rabbitmq-server redis postgresql mariadb-server
RUN apt -y autoremove
RUN apt -y clean

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen
RUN locale-gen
RUN update-locale LANG=en_US.UTF-8
RUN update-alternatives --set editor /usr/bin/vim.basic

RUN update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-${CLANG_VERSION} 100
RUN update-alternatives --install /usr/bin/clang clang /usr/bin/clang-${CLANG_VERSION} 100
RUN update-alternatives --install /usr/bin/clang-format clang-format /usr/bin/clang-format-${CLANG_VERSION} 100
RUN update-alternatives --install /usr/bin/lldb lldb /usr/bin/lldb-${CLANG_VERSION} 100
RUN update-alternatives --install /usr/bin/lld lld /usr/bin/lld-${CLANG_VERSION} 100

RUN mkdir -p $HOME/downloads $HOME/build $HOME/local

# https://github.com/ohmyzsh/ohmyzsh
RUN git clone https://github.com/ohmyzsh/ohmyzsh.git $HOME/.oh-my-zsh
RUN cp $HOME/.oh-my-zsh/templates/zshrc.zsh-template $HOME/.zshrc
RUN echo 'source $HOME/.profile' >> $HOME/.zshrc
RUN echo 'export LANG=en_US.UTF-8' >> $HOME/.profile
RUN echo 'export LC_ALL=en_US.UTF-8' >> $HOME/.profile

RUN git config --global core.quotepath false
RUN echo 'set-option -g history-limit 102400' > $HOME/.tmux.conf

RUN sh -c ". $HOME/.profile \
    && pip3 install --user cmake"
RUN sh -c ". $HOME/.profile \
    && pip3 install --user ansible paramiko"
RUN echo 'export ANSIBLE_HOST_KEY_CHECKING=False' >> $HOME/.profile
RUN echo 'export PATH=$HOME/.local/bin:$PATH' >> $HOME/.profile
RUN echo 'alias peony="ANSIBLE_LOG_PATH=$HOME/$(date +%Y%m%d%H%M%S).log ansible-playbook"' >> $HOME/.profile

RUN sh -c ". $HOME/.profile \
    && pip install --user conan"
RUN sh -c ". $HOME/.profile \
    && conan profile new default --detect"
RUN sh -c ". $HOME/.profile \
    && conan profile update settings.compiler.libcxx=libstdc++11 default"

# https://github.com/nvm-sh/nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | sh
RUN sh -c ". $HOME/.profile \
    && nvm install node \
    && npm i yarn -g"
RUN sh -c ". $HOME/.profile \
    && nvm install lts/fermium \
    && nvm use --lts \
    && npm i yarn -g"
RUN sh -c ". $HOME/.profile \
    && nvm install lts/fermium \
    && nvm use lts/fermium \
    && npm i yarn -g"

# https://stackoverflow.com/questions/37324519/node-sass-does-not-yet-support-your-current-environment-linux-64-bit-with-false
RUN sh -c ". $HOME/.profile \
    && nvm install "
RUN echo 'export PATH=$HOME/.yarn/bin:$PATH' >> $HOME/.profile


RUN curl -s "https://get.sdkman.io" | zsh
RUN sed -i -e 's/sdkman_auto_answer=false/sdkman_auto_answer=true/g' $HOME/.sdkman/etc/config
RUN zsh -c "source $HOME/.zshrc \
    && sdk install java 18.0.1-open \
    && sdk install maven \
    && sdk install gradle"

RUN git clone https://github.com/microsoft/vcpkg.git $HOME/local/vcpkg
RUN echo 'export VCPKG_DISABLE_METRICS=1' >> $HOME/.profile
RUN zsh -c "source $HOME/.zshrc \
    && $HOME/local/vcpkg/bootstrap-vcpkg.sh"

ENV LIQUIBASE_VERSION "4.9.1"
RUN mkdir -p $HOME/local/liquibase \
    && cd $HOME/local/liquibase \
    && wget -c https://github.com/liquibase/liquibase/releases/download/v${LIQUIBASE_VERSION}/liquibase-${LIQUIBASE_VERSION}.tar.gz -O - | tar -xz

# TODO mdbook

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/zsh", "-l"]
