#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)

# Import the SSH deployment key
openssl aes-256-cbc -K $encrypted_037862f0bd7d_key -iv $encrypted_037862f0bd7d_iv -in deploy-key.enc -out deploy-key -d
rm deploy-key.enc # Don't need it anymore
chmod 600 deploy-key
mv deploy-key ~/.ssh/id_rsa

# load our SSH scripts
eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa

ssh-keyscan -H thomasconroy.net >> ~/.ssh/known_hosts
echo -e "Host thomasconroy.net\nPort 1337\nUser deploy\nStrictHostKeyChecking no\n" >> ~/.ssh/config

# Install zopfli
# git clone https://code.google.com/p/zopfli/
# cd zopfli
# make
# chmod +x zopfli
# cd ..