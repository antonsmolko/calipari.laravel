FROM ubuntu:xenial

# Install Dependencies
RUN apt-get update && \
    apt-get install -y language-pack-en-base && \
    export LC_ALL=en_US.UTF-8 && \
    export LANG=en_US.UTF-8 && \
    apt-get install -y software-properties-common && \
    add-apt-repository -y ppa:ondrej/php && \
    apt-get update && apt-get -y upgrade
RUN apt-get -y install --no-install-recommends apt-utils curl nginx zip supervisor git php7.4 php7.4-pgsql php7.4-memcached php7.4-fpm php7.4-cli php7.4-fpm php7.4-json php7.4-mysql php7.4-zip php7.4-gd php7.4-mbstring php7.4-curl php7.4-common php7.4-dev php7.4-xml php7.4-bcmath php7.1-mcrypt

# Enable Mcrypt
RUN phpenmod mcrypt


# Install Composer
RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer


# Install Node/NPM
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
ENV NODE_VER v12.18.1
ENV NVM_DIR "/root/.nvm"
RUN -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" \
    && nvm install $NODE_VER \
    && nvm alias default $NODE_VER \
    && nvm use default \
    && npm install -g webpack
ENV BASE_NODE_PATH $NVM_DIR/versions/node
ENV NODE_PATH $BASE_NODE_PATH/$NODE_VER/lib/node_modules
ENV PATH $BASE_NODE_PATH/$NODE_VER/bin:$PATH


# Configurations
RUN mkdir /run/php
COPY nginx/default /etc/nginx/sites-available
COPY supervisord /etc/supervisor/conf.d
RUN sed -i "s/error_reporting = .*/error_reporting = E_ALL/" /etc/php/7.4/cli/php.ini && \
    sed -i "s/display_errors = .*/display_errors = On/" /etc/php/7.4/cli/php.ini && \
    sed -i "s/memory_limit = .*/memory_limit = 512M/" /etc/php/7.4/cli/php.ini && \
    sed -i "s/;date.timezone.*/date.timezone = UTC/" /etc/php/7.4/cli/php.ini && \
    sed -i "s/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/" /etc/php/7.4/fpm/php.ini && \
    sed -i "s/memory_limit = .*/memory_limit = 512M/" /etc/php/7.4/fpm/php.ini && \
    sed -i "s/upload_max_filesize = .*/upload_max_filesize = 100M/" /etc/php/7.4/fpm/php.ini && \
    sed -i "s/post_max_size = .*/post_max_size = 100M/" /etc/php/7.4/fpm/php.ini && \
    sed -i "s/;date.timezone.*/date.timezone = UTC/" /etc/php/7.4/fpm/php.ini && \
    sed -i "s/error_reporting = .*/error_reporting = E_ALL/" /etc/php/7.4/fpm/php.ini && \
    sed -i "s/max_execution_time = .*/max_execution_time = 300/" /etc/php/7.4/fpm/php.ini && \
    sed -i "s/display_errors = .*/display_errors = On/" /etc/php/7.4/fpm/php.ini


# Add our init script
ADD run.sh /run.sh
RUN chmod 755 /run.sh


RUN mkdir /app
WORKDIR /app
RUN mkdir /app/public && touch /app/public/index.php && echo '<?php phpinfo();?>' > /app/public/index.php


EXPOSE 80


CMD ["/run.sh"]
