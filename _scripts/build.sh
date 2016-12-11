#!/bin/bash
set -x
# Build the site?

# Compress assets with Zopfli
zopfli/zopfli --i1000 dist/**/*.html dist/*.html  dist/**/*.css dist/*.css dist/**/*.js dist/*.js dist/**/*.xml dist/*.xml