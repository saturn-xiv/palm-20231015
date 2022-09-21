FROM alpine:latest
LABEL maintainer="Jeremy Zheng"

RUN apk update
RUN apk upgrade
RUN apk add vim curl bash zsh pwgen openssl git tmux rsync \
    build-base cmake \
    python3 python-dev \
    openssl-dev 

RUN mkdir -p $HOME/downloads $HOME/local $HOME/tmp

# https://github.com/ohmyzsh/ohmyzsh
RUN git clone https://github.com/ohmyzsh/ohmyzsh.git $HOME/.oh-my-zsh
RUN cp $HOME/.oh-my-zsh/templates/zshrc.zsh-template $HOME/.zshrc
RUN echo 'export PATH=$HOME/.local/bin:$PATH' >> $HOME/.profile
RUN echo 'source $HOME/.profile' >> $HOME/.zshrc

RUN git config --global core.quotepath false
RUN git config --global http.version HTTP/1.1
RUN git config --global pull.rebase false
RUN echo 'set-option -g history-limit 102400' > $HOME/.tmux.conf

RUN sh -c ". $HOME/.profile \
    && pip3 install --user ansible paramiko"
RUN echo 'export ANSIBLE_HOST_KEY_CHECKING=False' >> $HOME/.profile
RUN echo 'export PATH=$HOME/.local/bin:$PATH' >> $HOME/.profile
RUN echo 'alias peony="ANSIBLE_LOG_PATH=$HOME/tmp/$(date +%Y%m%d%H%M%S).log ansible-playbook"' >> $HOME/.profile


VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/zsh", "-l"]

