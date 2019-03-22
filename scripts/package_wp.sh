#!/bin/sh

###############################################################################
# Build and compress the Wordpress module                                     #
#                                                                             #
# Usage (from the project scripts directory):                                 #
#                                                                             #
# %> ./package_wp.sh                                                           #
###############################################################################

BASE_DIR=$(pwd)/..
FRONT_DIR=$BASE_DIR/front
MODULE_FILENAME=wpticketack
MODULE_DIR=$BASE_DIR/$MODULE_FILENAME

echo "# Starting a new deployment"

cd $FRONT_DIR
echo ""
echo "## Do you want to install js dependencies [yN] ?"
read choice
case "$choice" in
  y|Y ) echo "## Running npm install" && npm install;;
  * ) echo "## Skipping js dependencies install." && echo "";;
esac

echo "## Do you want to make a js clean build [yN] ?"
read choice
case "$choice" in
  y|Y ) echo "## Running yarn build" && yarn build;;
  * ) echo "## Skipping clean build." && echo "";;
esac

cd $BASE_DIR
echo "## Do you want to install php dependencies [yN] ?"
read choice
case "$choice" in
  y|Y ) echo "## Running php compoers.phar install" && php composer.phar install;;
  * ) echo "## Skipping php dependencies install." && echo "";;
esac

echo "## Creating the module directory $MODULE_DIR"
if [ -f "$MODULE_DIR" ]
then
    echo "## Removing old working directory $MODULE_DIR";
    rm $MODULE_DIR
fi
mkdir $MODULE_DIR

echo "## Copying ressources to module directory"
cp -r "$BASE_DIR/app" "$MODULE_DIR"
cp -r "$BASE_DIR/vendor" "$MODULE_DIR"
cp -r "$BASE_DIR/wpticketack.php" "$MODULE_DIR"
mkdir $MODULE_DIR/front
cp -r "$FRONT_DIR/build" "$MODULE_DIR/front"

if [ -f "$MODULE_DIR.zip" ]
then
    echo "## Removing old $MODULE_DIR.zip file";
    rm $MODULE_DIR.zip
fi

echo "## Compressing"
zip -rq $MODULE_FILENAME.zip $MODULE_FILENAME

echo "## Cleaning"
rm -r $MODULE_DIR

echo "# Done..."
echo "# Your zip file is in $BASE_DIR/$MODULE_FILENAME.zip"
