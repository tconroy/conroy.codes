#!/bin/bash
set -x
# run tests
npm run pretest

# Compress assets with Zopfli
# zopfli/zopfli --i1000 dist/**/*.html dist/*.html  dist/**/*.css dist/*.css dist/**/*.js dist/*.js dist/**/*.xml dist/*.xml