#!/bin/bash
set -x

npm run test
# timeout 30s bundle exec htmlproof _site --only-4xx --external_only --check-html --check-favicon
# timeout 60s npm run test
