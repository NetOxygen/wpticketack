#! /bin/bash
#
# Generate build/override.scss file

echo
echo "Generating override.scss file"

cat src/styles/_common.scss > build/override.scss
cat src/styles/*/*.scss >> build/override.scss

echo "*** DONE ***"
