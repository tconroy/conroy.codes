#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
		# Initialize a new git repo in dist, and push it to our server.
		cd dist
		git init

		git remote add deploy "ssh://deploy@thomasconroy.net:1337/var/www/thomasconroy.net/.git"
		git config --global user.name "Travis CI"
		git config --global user.email "tom+travisCI@thomasconroy.net"

		git add .
		git commit -m "Deploy"
		git push --force deploy master
else
	echo "Not deploying, since this branch isn't master."
fi