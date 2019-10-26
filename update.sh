echo 'Updating the master branch from github'
git fetch --all
git checkout master
git merge origin/master
