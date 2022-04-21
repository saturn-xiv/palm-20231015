FROM alpine:latest
LABEL maintainer="Jeremy Zheng"

RUN apk update
RUN apk upgrade
RUN apk add perl vim curl bash zsh sudo pwgen openssl git tmux \
    build-base cmake protobuf \
    nodejs npm yarn \
    ttf-dejavu \
    libudev-zero-dev postgresql-dev mariadb-dev sqlite-dev

RUN mkdir -p $HOME/downloads $HOME/local $HOME/tmp

# https://github.com/ohmyzsh/ohmyzsh
RUN git clone https://github.com/ohmyzsh/ohmyzsh.git $HOME/.oh-my-zsh
RUN cp $HOME/.oh-my-zsh/templates/zshrc.zsh-template $HOME/.zshrc
RUN echo 'source $HOME/.profile' >> $HOME/.zshrc

RUN git config --global core.quotepath false
RUN echo 'set-option -g history-limit 102400' > $HOME/.tmux.conf

# https://www.rust-lang.org/tools/install
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/zsh", "-l"]
