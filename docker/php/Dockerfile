FROM php:8.1-fpm

RUN apt-get update && apt-get install -y \
                        libpq-dev \
                        curl \
                        zip \
                        git

RUN docker-php-ext-install pdo_pgsql

RUN chown -R $(whoami) /var/www

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x && apt-get install -y nodejs npm
WORKDIR /var/www
