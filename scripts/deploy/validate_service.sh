#!/bin/bash
set -e

HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost/)

if [ "$HTTP_CODE" -ne 200 ]; then
    echo "Validation failed: HTTP status $HTTP_CODE (expected 200)"
    exit 1
fi

echo "Site validation passed: HTTP 200 OK"
