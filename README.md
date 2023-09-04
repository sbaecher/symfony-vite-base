# Installation
1. git clone git@github.com:sbaecher/symfony-vite-base.git
2. sudo mv symfony-vite-base/ <project-name>
3. wget https://getcomposer.org/download/latest-stable/composer.phar
4. sudo chown -R www-data:www-data . && sudo chmod -R 775 .
5. sudo -u www-data <php-version> composer.phar install
6. npm i
7. sudo chown -R www-data:www-data . && sudo chmod -R 775 .
8. npm run-script build
9. sudo chown -R www-data:www-data . && sudo chmod -R 775 .
10. sudo -u www-data <php-version> bin/console cache:clear

# Versionen
npm: v10.0.0
node: v18.17.0
php: 8.2
