#!/bin/bash
set -e

nginx -t
systemctl reload nginx
echo "Nginx reloaded successfully"
