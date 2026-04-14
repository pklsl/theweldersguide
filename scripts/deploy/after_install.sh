#!/bin/bash
set -e

chown -R www-data:www-data /var/www/theweldersguide
chmod -R 755 /var/www/theweldersguide
find /var/www/theweldersguide -type f -name "*.html" -exec chmod 644 {} \;
find /var/www/theweldersguide -type f -name "*.css" -exec chmod 644 {} \;
find /var/www/theweldersguide -type f -name "*.js" -exec chmod 644 {} \;

echo "File permissions set for site content"
