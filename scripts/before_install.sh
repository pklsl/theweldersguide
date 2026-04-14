#!/bin/bash
set -e

# Clean the deployment directory before installing new files
rm -rf /var/www/theweldersguide/*
mkdir -p /var/www/theweldersguide
