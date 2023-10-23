FROM archlinux:latest
LABEL maintainer="Jeremy Zheng"

RUN echo 'Server = https://mirrors.kernel.org/archlinux/$repo/os/$arch' > /etc/pacman.d/mirrorlist
RUN pacman-key --recv-keys 9B7A287D9A2EC608
RUN pacman -Syu --needed --noconfirm
RUN pacman -S --needed --noconfirm base-devel aarch64-linux-gnu-gcc risc-v \
    vim git cmake thrift wget zsh man-db \
    pwgen sshpass openssl openssh rsync zip unzip tree tmux asciidoc doxygen cpio \
    clang llvm lld lldb mold bison flex ninja bazel \
    imagemagick ffmpeg xorg-font-util \
    wqy-bitmapfont wqy-microhei wqy-zenhei \
    ttf-fira-code woff-fira-code woff2-fira-code \
    adobe-source-code-pro-fonts adobe-source-serif-fonts adobe-source-sans-fonts \
    adobe-source-han-serif-cn-fonts adobe-source-han-serif-hk-fonts adobe-source-han-serif-jp-fonts adobe-source-han-serif-kr-fonts adobe-source-han-serif-tw-fonts \
    adobe-source-han-sans-cn-fonts adobe-source-han-sans-hk-fonts adobe-source-han-sans-jp-fonts adobe-source-han-sans-kr-fonts adobe-source-han-sans-tw-fonts \
    ttf-dejavu nerd-fonts ttf-ubuntu-font-family \
    ttf-arphic-ukai ttf-arphic-uming \
    texlive texlive-lang pandoc \
    php-fpm php-pgsql php-sqlite php-redis php-mongodb php-imagick php-gd php-intl \
    dart haxe lua \
    erlang rebar \
    jdk-openjdk libxcrypt-compat \
    nginx mariadb postgresql rabbitmq redis
RUN pacman -Scc --noconfirm

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && locale-gen
RUN useradd -s /bin/zsh -m deploy
RUN passwd -l deploy
RUN echo 'deploy ALL=(ALL:ALL) NOPASSWD: ALL' > /etc/sudoers.d/101-deploy
USER deploy
RUN mkdir -p $HOME/downloads $HOME/build $HOME/local $HOME/tmp

# ENV ENVOY_VERSION "1.27.0-1"
# RUN git clone https://aur.archlinux.org/envoyproxy-bin.git $HOME/downloads/envoyproxy-bin \
#     && cd $HOME/downloads/envoyproxy-bin \
#     && makepkg \
#     && sudo pacman -U --noconfirm envoyproxy-bin-${ENVOY_VERSION}-x86_64.pkg.tar.zst 
ENV ENVOY_VERSION "1.27.1"
RUN wget -q -O $HOME/downloads/envoy https://github.com/envoyproxy/envoy/releases/download/v${ENVOY_VERSION}/envoy-${ENVOY_VERSION}-linux-x86_64 \
    && sudo mv $HOME/downloads/envoy /usr/bin/envoy \
    && sudo chmod +x /usr/bin/envoy \
    && sudo chown root:root /usr/bin/envoy

ENV ARPHIC_TTF_VERSION "20161212-1"
RUN git clone https://aur.archlinux.org/ttf-arphic-tex-extra.git $HOME/downloads/ttf-arphic-tex-extra \
    && cd $HOME/downloads/ttf-arphic-tex-extra \
    && makepkg \
    && sudo pacman -U --noconfirm ttf-arphic-tex-extra-${ARPHIC_TTF_VERSION}-any.pkg.tar.zst

# https://github.com/ohmyzsh/ohmyzsh
RUN git clone https://github.com/ohmyzsh/ohmyzsh.git $HOME/.oh-my-zsh
RUN cp $HOME/.oh-my-zsh/templates/zshrc.zsh-template $HOME/.zshrc
RUN echo 'export LANG=en_US.UTF-8' >> $HOME/.zshrc \
    && echo 'export LC_ALL=en_US.UTF-8' >> $HOME/.zshrc \
    && echo 'export EDITOR=vim' >> $HOME/.zshrc \
    && echo 'export PATH=$HOME/.local/bin:$PATH' >> $HOME/.zshrc \
    && echo 'export PATH=$HOME/.yarn/bin:$PATH' >> $HOME/.zshrc

RUN git config --global core.quotepath false \
    && git config --global http.version HTTP/1.1 \
    && git config --global pull.rebase false \
    && git config --global url."https://".insteadOf git://
RUN echo 'set-option -g history-limit 102400' > $HOME/.tmux.conf \
    && echo 'set-option -g default-shell "/bin/zsh"' >> $HOME/.tmux.conf

# https://musl.cc/
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/x86_64-linux-musl-cross.tgz \
    && cd /opt \
    && sudo tar xf $HOME/downloads/x86_64-linux-musl-cross.tgz \
    && echo 'export PATH=/opt/x86_64-linux-musl-cross/bin:$PATH' >> $HOME/.zshrc
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/armv7l-linux-musleabihf-cross.tgz \
    && cd /opt \
    && sudo tar xf $HOME/downloads/armv7l-linux-musleabihf-cross.tgz \
    && echo 'export PATH=/opt/armv7l-linux-musleabihf-cross/bin:$PATH' >> $HOME/.zshrc
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/aarch64-linux-musl-cross.tgz \
    && cd /opt \
    && sudo tar xf $HOME/downloads/aarch64-linux-musl-cross.tgz \
    && echo 'export PATH=/opt/aarch64-linux-musl-cross/bin:$PATH' >> $HOME/.zshrc
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/riscv64-linux-musl-cross.tgz \
    && cd /opt \
    && sudo tar xf $HOME/downloads/riscv64-linux-musl-cross.tgz \
    && echo 'export PATH=/opt/riscv64-linux-musl-cross/bin:$PATH' >> $HOME/.zshrc


# https://pip.pypa.io/en/stable/installation/
RUN zsh -c ". $HOME/.zshrc \
    && python3 -m venv $HOME/local/python3 \
    && . $HOME/local/python3/bin/activate \
    && pip install --upgrade pip \
    && pip install cmake ansible paramiko conan supervisor"
RUN echo 'source $HOME/local/python3/bin/activate' >> $HOME/.zshrc
RUN echo 'export ANSIBLE_HOST_KEY_CHECKING=False' >> $HOME/.zshrc \
    && echo 'alias peony="ANSIBLE_LOG_PATH=$HOME/tmp/$(date +%Y%m%d%H%M%S).log ansible-playbook"' >> $HOME/.zshrc

# https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos
RUN wget -q -O $HOME/downloads/composer https://getcomposer.org/installer
RUN cd $HOME/downloads \
    && php composer \
    && mkdir -p $HOME/.local/bin \
    && mv composer.phar $HOME/.local/bin/composer


# https://github.com/bazelbuild/bazelisk
ENV BAZEL_VERSION "v1.18.0"
RUN wget -q -O $HOME/.local/bin/bazel \
    https://github.com/bazelbuild/bazelisk/releases/download/${BAZEL_VERSION}/bazelisk-linux-amd64
RUN chmod +x $HOME/.local/bin/bazel

# https://github.com/rbenv/rbenv
ENV RUBY_VERSION "3.2.2"
RUN git clone https://github.com/rbenv/rbenv.git $HOME/.rbenv \
    && git clone https://github.com/rbenv/ruby-build.git $HOME/.rbenv/plugins/ruby-build \
    && git clone https://github.com/rbenv/rbenv-vars.git $HOME/.rbenv/plugins/rbenv-vars 
RUN echo 'eval "$(~/.rbenv/bin/rbenv init - zsh)"' >> ~/.zshrc
# https://github.com/rbenv/ruby-build
# https://github.com/rbenv/ruby-build/wiki#ubuntudebianmint
RUN zsh -c "source $HOME/.zshrc \
    && rbenv install ${RUBY_VERSION} \
    && rbenv global ${RUBY_VERSION} \
    && gem install bundler"

# https://go.dev/doc/install
ENV GO_VERSION "1.21.0"
RUN wget -q -P $HOME/downloads https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz
RUN tar xf $HOME/downloads/go${GO_VERSION}.linux-amd64.tar.gz -C $HOME/local
RUN echo 'export GOROOT=$HOME/local/go' >> $HOME/.zshrc \
    && echo 'export PATH=$GOROOT/bin:$PATH' >> $HOME/.zshrc \
    && echo 'export GOPATH=$HOME/go' >> $HOME/.zshrc

# https://github.com/sdkman/sdkman-cli
# https://docs.gradle.org/current/userguide/compatibility.html
ENV JDK_VERSION "21-open"
ENV GRADLE_VERSION "8.4"
ENV THRIFT_JAVA_VERSION "19.0.2-open"
ENV THRIFT_GRADLE_VERSION "7.6.2"
RUN curl -s "https://get.sdkman.io" | bash
RUN sed -i -e 's/sdkman_auto_answer=false/sdkman_auto_answer=true/g' $HOME/.sdkman/etc/config
RUN zsh -c "source $HOME/.zshrc \
    && sdk install java ${JDK_VERSION} \
    && sdk install ant \
    && sdk install maven \
    && sdk install gradle ${GRADLE_VERSION} \
    && sdk install kotlin \
    && sdk install java  ${THRIFT_JAVA_VERSION} \
    && sdk install gradle ${THRIFT_GRADLE_VERSION} \
    && sdk default java ${JDK_VERSION} \
    && sdk default gradle ${GRADLE_VERSION}"

# https://github.com/nvm-sh/nvm
ENV NVM_VERSION "v0.39.5"
RUN git clone -b ${NVM_VERSION} https://github.com/nvm-sh/nvm.git $HOME/.nvm
RUN echo 'export NVM_DIR="$HOME/.nvm"' >> $HOME/.zshrc \
    && echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> $HOME/.zshrc \
    && echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> $HOME/.zshrc
# https://stackoverflow.com/questions/37324519/node-sass-does-not-yet-support-your-current-environment-linux-64-bit-with-false
RUN zsh -c "source $HOME/.zshrc \
    && nvm install node \
    && nvm use node \
    && npm i yarn -g \
    && nvm install --lts \
    && nvm use --lts \
    && npm i yarn -g \
    && nvm install lts/fermium \
    && nvm use lts/fermium \
    && npm i yarn -g"
RUN echo 'export PATH=$HOME/.yarn/bin:$PATH' >> $HOME/.zshrc

# https://www.rust-lang.org/tools/install
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
# https://doc.rust-lang.org/nightly/rustc/platform-support.html
RUN zsh -c "source $HOME/.cargo/env \
    && rustup component add rust-analyzer \
    && rustup target add armv7-unknown-linux-gnueabihf \
    && rustup target add aarch64-unknown-linux-gnu \
    && rustup target add x86_64-unknown-linux-musl \
    && rustup target add aarch64-unknown-linux-musl \
    && rustup target add loongarch64-unknown-linux-gnu"
RUN zsh -c "source $HOME/.zshrc \
    && cargo install diesel_cli \
    && cargo install --locked cargo-outdated \
    && cargo install mdbook"

# https://www.swift.org/download/#releases
ENV SWIFT_VERSION "5.8.1"
RUN wget -q -P $HOME/downloads https://download.swift.org/swift-${SWIFT_VERSION}-release/ubuntu2204/swift-${SWIFT_VERSION}-RELEASE/swift-${SWIFT_VERSION}-RELEASE-ubuntu22.04.tar.gz \
    && cd /opt \
    && sudo tar xf $HOME/downloads/swift-${SWIFT_VERSION}-RELEASE-ubuntu22.04.tar.gz \
    && echo "export PATH=/opt/swift-${SWIFT_VERSION}-RELEASE-ubuntu22.04/bin:\$PATH" >> $HOME/.zshrc

# https://github.com/microsoft/vcpkg
RUN git clone https://github.com/microsoft/vcpkg.git $HOME/local/vcpkg
RUN $HOME/local/vcpkg/bootstrap-vcpkg.sh \
    && echo 'export VCPKG_DISABLE_METRICS=1' >> $HOME/.zshrc


# https://opensearch.org/downloads.html#opensearch
ENV OPENSEARCH_VERSION "2.11.0"
RUN wget -q -P $HOME/downloads \
    https://artifacts.opensearch.org/releases/bundle/opensearch/${OPENSEARCH_VERSION}/opensearch-${OPENSEARCH_VERSION}-linux-x64.tar.gz
RUN cd $HOME/build \
    && tar xf $HOME/downloads/opensearch-${OPENSEARCH_VERSION}-linux-x64.tar.gz \
    && sudo mv opensearch-${OPENSEARCH_VERSION} /opt/opensearch

# https://min.io/download#/linux
RUN wget -q -O $HOME/downloads/minio \
    https://dl.min.io/server/minio/release/linux-amd64/minio \
    && sudo mv $HOME/downloads/minio /usr/bin/minio \
    && sudo chown root:root /usr/bin/minio \
    && sudo chmod +x /usr/bin/minio

# https://github.com/amacneil/dbmate
RUN curl -fsSL -o $HOME/downloads/dbmate https://github.com/amacneil/dbmate/releases/latest/download/dbmate-linux-amd64 \
    && sudo mv $HOME/downloads/dbmate /usr/bin/ \
    && sudo chown root:root /usr/bin/dbmate \
    && sudo chmod +x /usr/bin/dbmate

# https://github.com/grpc/grpc
ENV GRPC_VERSION "v1.59.1"
RUN git clone --recurse-submodules -b $GRPC_VERSION https://github.com/grpc/grpc.git $HOME/downloads/grpc
# ENV PROTOBUF_VERSION "v3.21.8"
# RUN cd $HOME/downloads/grpc/third_party/protobuf \
#     && git checkout ${PROTOBUF_VERSION} \
#     && git submodule update --init --recursive
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

# https://github.com/grpc/grpc-web#code-generator-plugin
ENV GRPC_WEB_PLUGIN_VERSION "1.4.2"
RUN wget -q -O $HOME/.local/bin/protoc-gen-grpc-web \
    https://github.com/grpc/grpc-web/releases/download/${GRPC_WEB_PLUGIN_VERSION}/protoc-gen-grpc-web-${GRPC_WEB_PLUGIN_VERSION}-linux-x86_64
RUN chmod +x $HOME/.local/bin/protoc-gen-grpc-web

# https://github.com/protocolbuffers/protobuf-javascript
ENV GRPC_JS_PLUGIN_VERSION "3.21.2"
RUN wget -q -P $HOME/downloads \
    https://github.com/protocolbuffers/protobuf-javascript/releases/download/v${GRPC_JS_PLUGIN_VERSION}/protobuf-javascript-${GRPC_JS_PLUGIN_VERSION}-linux-x86_64.tar.gz
RUN mkdir -p $HOME/build/protobuf-javascript \
    && cd $HOME/build/protobuf-javascript \
    && tar xf $HOME/downloads/protobuf-javascript-${GRPC_JS_PLUGIN_VERSION}-linux-x86_64.tar.gz \
    && cp bin/protoc-gen-js $HOME/.local/bin/

# https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/
# https://github.com/grpc/grpc-java
ENV GRPC_JAVA_PLUGIN_VERSION "1.59.0"
RUN wget -q -O $HOME/.local/bin/grpc_java_plugin \
    https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/${GRPC_JAVA_PLUGIN_VERSION}/protoc-gen-grpc-java-${GRPC_JAVA_PLUGIN_VERSION}-linux-x86_64.exe
RUN chmod +x $HOME/.local/bin/grpc_java_plugin

# https://github.com/grpc/grpc-node
# https://github.com/grpc/grpc-node/tree/master/examples/helloworld/static_codegen
RUN zsh -c "source $HOME/.zshrc \
    && yarn global add grpc-tools"

# https://grpc.io/docs/languages/go/quickstart/
RUN zsh -c "source $HOME/.zshrc \
    && go install google.golang.org/protobuf/cmd/protoc-gen-go@latest \
    && go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest"

# https://github.com/google/flatbuffers
ENV FLATBUFFERS_VERSION "v23.5.26"
RUN git clone -b $FLATBUFFERS_VERSION https://github.com/google/flatbuffers.git $HOME/downloads/flatbuffers
RUN zsh -c "source $HOME/.zshrc \
    && mkdir -pv $HOME/build/flatbuffers \
    && cd $HOME/build/flatbuffers \
    && CC=/usr/bin/clang CXX=/usr/bin/clang++ cmake -G 'Unix Makefiles' -DCMAKE_BUILD_TYPE=Release -DFLATBUFFERS_BUILD_TESTS=OFF \
        -DCMAKE_INSTALL_PREFIX=$HOME/.local $HOME/downloads/flatbuffers \
    && make \
    && make install"


USER root
# https://opensearch.org/docs/latest/opensearch/install/tar/
RUN echo "network.host: 0.0.0.0" >> /opt/opensearch/config/opensearch.yml \
    && echo "discovery.type: single-node" >> /opt/opensearch/config/opensearch.yml \
    && echo "plugins.security.disabled: true" >> /opt/opensearch/config/opensearch.yml \
    && chown -R nobody /opt/opensearch

RUN mkdir -p /var/lib/minio/data \
    && chown -R nobody /var/lib/minio

# https://www.rabbitmq.com/access-control.html#loopback-users
RUN echo 'loopback_users = none' >> /etc/rabbitmq/rabbitmq.conf \
    && sed -i "s/NODENAME.*/NODENAME=palm/g" /etc/rabbitmq/rabbitmq-env.conf \
    && rabbitmq-plugins enable rabbitmq_mqtt \
    && rabbitmq-plugins enable rabbitmq_management

RUN cd /usr && mariadb-install-db --datadir=/var/lib/mysql --user=mysql

RUN su - postgres -c "/usr/bin/initdb -D /var/lib/postgres/data"
RUN echo "listen_addresses = '0.0.0.0'" >> /var/lib/postgres/data/postgresql.conf \
    && echo "host  all  all 0.0.0.0/0 md5" >> /var/lib/postgres/data/pg_hba.conf \
    && mkdir /run/postgresql \
    && chown -R postgres:postgres /run/postgresql

ADD etc/redis/* /etc/redis/
RUN cd /var/lib \
    && mkdir redis-s redis-1 redis-2 redis-3 redis-4 redis-5 redis-6 \
    && chown redis:redis redis-s redis-1 redis-2 redis-3 redis-4 redis-5 redis-6 \
    && chmod 750 redis-s redis-1 redis-2 redis-3 redis-4 redis-5 redis-6

RUN mkdir -p /var/www/html \
    && echo "<?php phpinfo(); ?>" > /var/www/html/info.php \
    && echo "daemon off;" >> /etc/nginx/nginx.conf \
    && sed -i '35,79d' /etc/nginx/nginx.conf \
    && sed -i '35i include sites-enabled/*.conf;' /etc/nginx/nginx.conf \
    && sed -i "s/error_log =.*/error_log = log\/php-fpm.log/g" /etc/php/php-fpm.conf
ADD etc/nginx/sites-enabled/localhost.conf /etc/nginx/sites-enabled/localhost.conf

ADD etc/envoy.yaml /etc/
RUN mkdir -p /var/log/envoy
ADD etc/supervisor /etc/supervisor

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

USER deploy
VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/zsh", "-l"]
