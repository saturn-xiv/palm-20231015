FROM alpine:latest
LABEL maintainer="Jeremy Zheng"

RUN apk update
RUN apk upgrade
RUN apk add vim curl bash zsh pwgen openssl git tmux rsync \
    openssh-client sshpass \
    build-base cmake git \
    python3 py3-pip python3-dev \
    nodejs npm yarn \
    gradle maven \
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
RUN echo 'set-option -g default-shell "/bin/zsh"' >> $HOME/.tmux.conf

# https://pip.pypa.io/en/stable/installation/
RUN sh -c ". $HOME/.profile \
    && python3 -m venv $HOME/local/python3 \
    && . $HOME/local/python3/bin/activate \
    && pip install --upgrade pip \
    && pip install ansible paramiko"
RUN echo 'export ANSIBLE_HOST_KEY_CHECKING=False' >> $HOME/.profile
RUN echo 'alias peony="ANSIBLE_LOG_PATH=$HOME/tmp/$(date +%Y%m%d%H%M%S).log ansible-playbook"' >> $HOME/.profile
RUN echo 'source $HOME/local/python3/bin/activate' >> $HOME/.zshrc

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/zsh", "-l"]

