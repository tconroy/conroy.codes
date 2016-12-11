#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
		# Initialize a new git repo in dist, and push it to our server.
		cd dist
		git init

		git remote add deploy "deploy@thomasconroy.net:/var/www/thomasconroy.net"
		git config user.name "Travis CI"
		git config user.emal "tom+travisCI@thomasconroy.net"

		git add .
		git commit -m "Deploy"
		git push --force deploy master
else
	echo "Not deploying, since this branch isn't master."
fi