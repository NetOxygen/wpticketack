#! /bin/bash
#
# Based on https://github.com/GaryJones/wordpress-plugin-svn-deploy for instructions and credits.
#
# Steps:
#
# - Check readme.txt version matches main plugin file version.
# - Check if Git tag exists for version number (must match exactly).
# - Checkout SVN repo.
# - Set to SVN ignore some GitHub-related files.
# - Export HEAD of master from git to the trunk of SVN.
# - Initialise and update and git submodules.
# - Move /trunk/assets up to /assets.
# - Remove dev unneeded stuff from trunk
# - Move into /trunk, and SVN commit.
# - Move into /assets, and SVN commit.
# - Copy /trunk into /tags/{version}, and SVN commit.
# - Delete temporary local SVN checkout.

echo
echo "WordPress Plugin SVN Deploy"
echo

PLUGINSLUG=ticketack
CURRENTDIR=$(pwd)
PLUGINDIR=$(pwd)/..
MAINFILE="wpticketack.php"
SVNUSER="netoxygen"
SVNURL="https://plugins.svn.wordpress.org/$PLUGINSLUG"
SVNPATH=$(mktemp -d /tmp/ticketack.XXXXXX)

default_svnpath="/tmp/$PLUGINSLUG"

echo "Checking version in main plugin file matches version in readme.txt file..."
echo

# Check version in readme.txt is the same as plugin file after translating both to Unix line breaks to work around grep's failure to identify Mac line breaks
PLUGINVERSION=$(grep -i "Version:" $PLUGINDIR/$MAINFILE | awk -F' ' '{print $NF}' | tr -d '\r')
echo "$MAINFILE version: $PLUGINVERSION"
READMEVERSION=$(grep -i "Stable tag:" $PLUGINDIR/readme.txt | awk -F' ' '{print $NF}' | tr -d '\r')
echo "readme.txt version: $READMEVERSION"

if [ "$READMEVERSION" = "trunk" ]; then
	echo "Version in readme.txt & $MAINFILE don't match, but Stable tag is trunk. Let's continue..."
elif [ "$PLUGINVERSION" != "$READMEVERSION" ]; then
	echo "Version in readme.txt & $MAINFILE don't match. Exiting...."
	exit 1;
elif [ "$PLUGINVERSION" = "$READMEVERSION" ]; then
	echo "Versions match in readme.txt and $MAINFILE. Let's continue..."
fi

echo

echo "That's all of the data collected."
echo
echo "Slug: $PLUGINSLUG"
echo "Plugin directory: $PLUGINDIR"
echo "Main file: $MAINFILE"
echo "Temp checkout path: $SVNPATH"
echo "Remote SVN repo: $SVNURL"
echo "SVN username: $SVNUSER"
echo

printf "OK to proceed (Y|n)? "
read -e input
PROCEED="${input:-y}"
echo

# Allow user cancellation
if [ $(echo "$PROCEED" |tr [:upper:] [:lower:]) != "y" ]; then echo "Aborting..."; exit 1; fi

# Let's begin...
echo ".........................................."
echo
echo "Preparing to deploy WordPress plugin"
echo
echo ".........................................."
echo

echo

echo "Changing to $PLUGINDIR"
cd $PLUGINDIR

# Check for git tag (may need to allow for leading "v"?)
# if git show-ref --tags --quiet --verify -- "refs/tags/$PLUGINVERSION"
if git show-ref --tags --quiet --verify -- "refs/tags/$PLUGINVERSION"
	then
		echo "Git tag $PLUGINVERSION does exist. Let's continue..."
	else
		echo "$PLUGINVERSION does not exist as a git tag. Aborting.";
		exit 1;
fi

echo

echo "Creating local copy of SVN repo trunk..."
svn checkout $SVNURL $SVNPATH --depth immediates
svn update --quiet $SVNPATH/trunk --set-depth infinity

echo "Ignoring GitHub specific files"
svn propset svn:ignore "README.md
Thumbs.db
.github/*
.git
.gitattributes
.gitignore" "$SVNPATH/trunk/"

echo "Exporting the HEAD of master from git to the trunk of SVN"
git checkout-index -a -f --prefix=$SVNPATH/trunk/

# If submodule exist, recursively check out their indexes
if [ -f ".gitmodules" ]
	then
		echo "Exporting the HEAD of each submodule from git to the trunk of SVN"
		git submodule init
		git submodule update
		git config -f .gitmodules --get-regexp '^submodule\..*\.path$' |
			while read path_key path
			do
				#url_key=$(echo $path_key | sed 's/\.path/.url/')
				#url=$(git config -f .gitmodules --get "$url_key")
				#git submodule add $url $path
				echo "This is the submodule path: $path"
				echo "The following line is the command to checkout the submodule."
				echo "git submodule foreach --recursive 'git checkout-index -a -f --prefix=$SVNPATH/trunk/$path/'"
				git submodule foreach --recursive 'git checkout-index -a -f --prefix=$SVNPATH/trunk/$path/'
			done
fi

echo

# Support for the /assets folder on the .org repo.
echo "Moving assets."
# Make the directory if it doesn't already exist
mkdir -p $SVNPATH/assets/
mv $SVNPATH/trunk/assets/* $SVNPATH/assets/
svn add --force $SVNPATH/assets/
svn delete --force $SVNPATH/trunk/assets

echo

echo "Changing directory to SVN and committing to trunk."
cd $SVNPATH/trunk/


# Remove unneeded stuff
svn delete --force --quiet $SVNPATH/trunk/.arclint
svn delete --force --quiet $SVNPATH/trunk/composer.json
svn delete --force --quiet $SVNPATH/trunk/composer.lock
svn delete --force --quiet $SVNPATH/trunk/README.md
svn delete --force --quiet $SVNPATH/trunk/scripts
svn delete --force --quiet $SVNPATH/trunk/front/package.json
svn delete --force --quiet $SVNPATH/trunk/front/webpack.common.js
svn delete --force --quiet $SVNPATH/trunk/front/webpack.dev.js
svn delete --force --quiet $SVNPATH/trunk/front/webpack.prod.js
svn delete --force --quiet $SVNPATH/trunk/front/src/
svn delete --force --quiet $SVNPATH/trunk/front/yarn-error.log
svn delete --force --quiet $SVNPATH/trunk/front/yarn.lock

# Delete all files that should not now be added.
svn status | grep -v "^.[ \t]*\..*" | grep "^\!" | awk '{print $2"@"}' | xargs svn del
# Add all new files that are not set to be ignored
svn status | grep -v "^.[ \t]*\..*" | grep "^?" | awk '{print $2"@"}' | xargs svn add
svn commit --username=$SVNUSER -m "Preparing for $PLUGINVERSION release"

echo

echo "Updating WordPress plugin repo assets and committing."
cd $SVNPATH/assets/
# Delete all new files that are not set to be ignored
svn status | grep -v "^.[ \t]*\..*" | grep "^\!" | awk '{print $2"@"}' | xargs svn del
# Add all new files that are not set to be ignored
svn status | grep -v "^.[ \t]*\..*" | grep "^?" | awk '{print $2"@"}' | xargs svn add
svn update --quiet --accept working $SVNPATH/assets/*
svn resolve --accept working $SVNPATH/assets/*
svn commit --username=$SVNUSER -m "Updating assets"

echo

echo "Creating new SVN tag and committing it."
cd $SVNPATH
svn copy --quiet trunk/ tags/$PLUGINVERSION/

# Remove assets and trunk directories from tag directory
svn delete --force --quiet $SVNPATH/tags/$PLUGINVERSION/assets
svn delete --force --quiet $SVNPATH/tags/$PLUGINVERSION/trunk
svn update --quiet --accept working $SVNPATH/tags/$PLUGINVERSION
#svn resolve --accept working $SVNPATH/tags/$PLUGINVERSION/*
cd $SVNPATH/tags/$PLUGINVERSION
svn commit --username=$SVNUSER -m "Tagging version $PLUGINVERSION"

echo

echo "Removing temporary directory $SVNPATH."
cd $SVNPATH
cd ..
rm -fr $SVNPATH/

echo "*** DONE ***"
