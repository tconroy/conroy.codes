#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)

# Import the SSH deployment key
openssl aes-256-cbc -K $encrypted_037862f0bd7d_key -iv $encrypted_037862f0bd7d_iv -in deploy-key.enc -out deploy-key -d
rm deploy-key.enc # Don't need it anymore
chmod 600 deploy-key
mv deploy-key ~/.ssh/id_rsa

# Install zopfli
# git clone https://code.google.com/p/zopfli/
# cd zopfli
# make
# chmod +x zopfli
# cd ..