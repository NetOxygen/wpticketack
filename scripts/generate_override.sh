#! /bin/bash
#
# Generate build/override.scss file

echo
echo "Generating override.scss file"

cat src/styles/*/*.scss > build/override.scss

echo "*** DONE ***"
