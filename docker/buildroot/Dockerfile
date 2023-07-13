FROM ubuntu:latest
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt -y upgrade
RUN apt install -y lsb-release apt-utils \
    debian-keyring debian-archive-keyring apt-transport-https software-properties-common curl wget gnupg \
    zsh git locales locales-all \
    vim tzdata zip unzip tree tmux \
    build-essential cmake pkg-config libtool automake autoconf autoconf-archive binutils cpio \
    debhelper bison flex ninja-build \
    python3 python3-distutils python3-dev python3-pip virtualenv \
    rsync bc bzr cvs mercurial subversion asciidoc w3m dblatex graphviz python3-matplotlib 

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
RUN echo 'export LANG=en_US.UTF-8' >> $HOME/.zshrc
RUN echo 'export LC_ALL=en_US.UTF-8' >> $HOME/.zshrc
RUN echo 'export PATH=$HOME/.local/bin:$PATH' >> $HOME/.zshrc

RUN git config --global core.quotepath false \
    && git config --global http.version HTTP/1.1 \
    && git config --global pull.rebase false \
    && git config --global url."https://".insteadOf git://
RUN echo 'set-option -g history-limit 102400' > $HOME/.tmux.conf \
    && echo 'set-option -g default-shell "/bin/zsh"' >> $HOME/.tmux.conf

# https://buildroot.org/downloads/manual/manual.html#requirement
ENV BUILDROOT_VERSION "2023.02.2"
RUN git clone -b ${BUILDROOT_VERSION} https://git.buildroot.net/buildroot $HOME/downloads/buildroot
RUN echo 'export BR2_DL_DIR=$HOME/downloads' >> $HOME/.zshrc
# make list-defconfigs
RUN zsh -c "source $HOME/.zshrc \
    && cd $HOME/downloads/buildroot \
    && make distclean \
    && make O=$HOME/build/rpi raspberrypi_defconfig \
    && cd $HOME/build/rpi \
    && make source"
RUN zsh -c "source $HOME/.zshrc \
    && cd $HOME/downloads/buildroot \
    && make distclean \
    && make O=$HOME/build/rpi4 raspberrypi4_defconfig \
    && cd $HOME/build/rpi4 \
    && make source"
RUN zsh -c "source $HOME/.zshrc \
    && cd $HOME/downloads/buildroot \
    && make distclean \
    && make O=$HOME/build/rpi4-64 raspberrypi4_64_defconfig \
    && cd $HOME/build/rpi4-64 \
    && make source"

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/zsh", "-l"]
