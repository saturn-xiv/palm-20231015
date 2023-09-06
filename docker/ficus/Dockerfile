FROM alpine:latest
LABEL maintainer="Jeremy Zheng"

RUN apk update
RUN apk upgrade
RUN apk add vim curl bash zsh pwgen openssl git tmux rsync xz zip \
    openssh-client sshpass \
    build-base cmake git \
    python3 py3-pip python3-dev \
    nginx nodejs npm yarn \
    php php-bcmath php-bz2 php-curl php-ftp php-fpm php-gd php-iconv php-imap \
    php-intl php-mbstring php-mysqli php-opcache php-openssl php-pdo_mysql php-pdo_pgsql php-pdo_sqlite \
    php-pgsql php-session php-sodium php-sqlite3 php-xml php-xsl php-zip php-simplexml php-tokenizer php-xmlwriter \
    composer composer-zsh-completion \
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


RUN mkdir -p /var/www/localhost/htdocs
# https://docs.phpmyadmin.net/en/latest/setup.html#installing-from-git
RUN git clone -b "RELEASE_5_2_1" https://github.com/phpmyadmin/phpmyadmin.git /var/www/localhost/htdocs/mysql
RUN cd /var/www/localhost/htdocs/mysql && composer update --no-dev && yarn install --production
# https://developer.wordpress.org/advanced-administration/before-install/howto-install/
# RUN wget -q -P $HOME/downloads https://wordpress.org/latest.zip
# RUN cd /var/www/localhost/htdocs && unzip $HOME/downloads/latest.zip && mv wordpress blog
RUN git clone -b "6.3.1" https://github.com/WordPress/WordPress.git /var/www/localhost/htdocs/blog
# https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/composer.html?lang=en
RUN git clone -b "2.4.6-p2" https://github.com/magento/magento2.git /var/www/localhost/htdocs/mall
# RUN echo 'export PATH=/var/www/localhost/htdocs/mall/bin:$PATH' >> $HOME/.zshrc

COPY nginx/*.conf /etc/nginx/http.d/

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/zsh", "-l"]

