#!/bin/bash
set -e

BACKUP_DIR="/var/www/theweldersguide-backup-$(date +%Y%m%d%H%M%S)"

if [ -d /var/www/theweldersguide ] && [ "$(ls -A /var/www/theweldersguide 2>/dev/null)" ]; then
    mkdir -p "$BACKUP_DIR"
    cp -r /var/www/theweldersguide/* "$BACKUP_DIR/"
    echo "Backed up current site to $BACKUP_DIR"
fi

rm -rf /var/www/theweldersguide/*
echo "Cleared old site files"
