FROM ubuntu:bionic
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt -y upgrade

RUN apt install -y build-essential pkg-config libtool automake autoconf binutils cpio \
    unzip curl wget \
    git rsync subversion \
    w3m graphviz \
    python3 python3-distutils python3-pip python3-dev \    
    vim sudo locales zsh openssh-client sshpass zip unzip tree tmux \
    libncurses-dev libssl-dev
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

RUN mkdir -p $HOME/downloads $HOME/local

# https://github.com/ohmyzsh/ohmyzsh
RUN git clone https://github.com/ohmyzsh/ohmyzsh.git $HOME/.oh-my-zsh
RUN cp $HOME/.oh-my-zsh/templates/zshrc.zsh-template $HOME/.zshrc
RUN echo 'source $HOME/.profile' >> $HOME/.zshrc
RUN echo 'export LANG=en_US.UTF-8' >> $HOME/.profile
RUN echo 'export LC_ALL=en_US.UTF-8' >> $HOME/.profile

RUN git config --global core.quotepath false
RUN echo 'set-option -g history-limit 10240' > $HOME/.tmux.conf

# https://pip.pypa.io/en/stable/installation/#get-pip-py
RUN curl -o- https://bootstrap.pypa.io/get-pip.py | python3
RUN sh -c ". $HOME/.profile \
    && pip install --user cmake"
RUN sh -c ". $HOME/.profile \
    && pip install --user ansible paramiko"
RUN echo 'export ANSIBLE_HOST_KEY_CHECKING=False' >> $HOME/.profile
RUN echo 'alias peony="ANSIBLE_LOG_PATH=$HOME/$(date +%Y%m%d%H%M%S).log ansible-playbook"' >> $HOME/.profile

# https://github.com/nvm-sh/nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | sh
RUN sh -c ". $HOME/.profile \
    && nvm install node"
RUN sh -c ". $HOME/.profile \
    && nvm install node --lts"
RUN sh -c ". $HOME/.profile \
    && npm i yarn -g"
RUN echo 'export PATH=$HOME/.yarn/bin:$PATH' >> $HOME/.profile

# https://www.rust-lang.org/tools/install
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
# https://doc.rust-lang.org/nightly/rustc/platform-support.html
RUN zsh -c "source $HOME/.cargo/env \
    && rustup target add armv7-unknown-linux-gnueabihf"
RUN zsh -c "source $HOME/.cargo/env \
    && rustup target add aarch64-unknown-linux-gnu"
RUN sudo apt install -y libpq-dev libmysqlclient-dev libsqlite3-dev
RUN zsh -c "source $HOME/.zshrc \
    && cargo install diesel_cli \
    && cargo install --locked cargo-outdated"

ENV BUILDROOT_VERSION "2021.08"
RUN git clone https://github.com/buildroot/buildroot.git $HOME/build/buildroot
RUN cd $HOME/build/buildroot && git checkout ${BUILDROOT_VERSION}

ENV FRIENDLYWRT_VERSION "v19.07.1"
# https://stackoverflow.com/questions/33439905/is-the-cacerts-file-missing-in-ubuntu-15-10-and-openjdk-8-jdk
#  sudo apt-get install ca-certificates-java
RUN wget -O - https://raw.githubusercontent.com/friendlyarm/build-env-on-ubuntu-bionic/master/install.sh | bash
RUN git clone https://github.com/friendlyarm/repo $HOME/build/friendlyarm/repo
RUN cp $HOME/build/friendlyarm/repo/repo $HOME/.local/bin/
RUN git config --global user.email "deploy@palm"
RUN git config --global user.name "Ops"
RUN git config --global color.ui true
RUN zsh -c "source $HOME/.zshrc \
    && mkdir -p $HOME/build/friendlyarm/h3 \
    && cd $HOME/build/friendlyarm/h3 \
    && repo init -u https://github.com/friendlyarm/friendlywrt_manifests -b master-${FRIENDLYWRT_VERSION} -m h3.xml --repo-url=https://github.com/friendlyarm/repo  --no-clone-bundle \
    && repo sync -c --no-clone-bundle"

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | sudo tee /VERSION

VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/zsh", "-l"]
