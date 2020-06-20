FROM php:7.4-fpm

ENV APP_ROOT /app
ENV APP_ENV=production

ADD . ${APP_ROOT}

USER root

WORKDIR ${APP_ROOT}

# Fix debconf warnings upon build
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    libzip-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libwebp-dev libjpeg62-turbo-dev libpng-dev libxpm-dev \
    libfreetype6 \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    php-memcached \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd

#Clear cache
# RUN apt-get clean && rm -rf /var/lig/apt/lists/*

#Install extensions
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo_mysql pdo pdo_pgsql pgsql zip exif pcntl \
    && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
#RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-webp-dir=/usr/include/ --with-jpeg-dir=/usr/include/

#Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

#Copy existing application directory contents
#COPY ./src /var/www

#Copy existing application directory permissions

#Change current user to www-data
USER www-data

# Expose port 9000 and start php-fpm server
#EXPOSE 9000

CMD ["php-fpm"]
