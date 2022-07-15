FROM php:8.1-fpm

RUN apt-get update && apt-get install -y \
                        libpq-dev \
                        curl \
                        zip \
                        git

RUN docker-php-ext-install pdo_pgsql

WORKDIR /var/www

RUN chown -R $(whoami) /var/www
#install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
