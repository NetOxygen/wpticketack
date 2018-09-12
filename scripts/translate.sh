#!/bin/sh

if [ $# -ne 1 ]; then
    echo "usage: $(basename "$0") LOCALE" > /dev/stderr
    exit 1
fi

ROOT=$(dirname "$0")/..
PROJECTDIR=$ROOT/app
LOCALEDIR=$PROJECTDIR/locales
MSGPO=$LOCALEDIR/$1.po
MSGMO=$LOCALEDIR/$1.mo
MSG_OLD_PO=$LOCALEDIR/$1.old.po
EDITOR=${EDITOR:-vim}

# create the locale directory if needed
test -d $LOCALEDIR || mkdir -p $LOCALEDIR

# backup the current message file if existing
if [ -f $MSGPO ]; then
    echo "===> Saving existing pot file";
    mv $MSGPO $MSG_OLD_PO
fi

echo "===> Generating new pot file";
xgettext --no-location --from-code=UTF-8 --language=PHP -o $MSGPO $ROOT/wpticketack.php
if [ ! -f $MSGPO ]; then
    touch $MSGPO;
fi
sed -i 's/CHARSET/UTF-8/' $MSGPO
find $PROJECTDIR/ -iname '*.php' -exec \
	xgettext --keyword=t --no-location --from-code=UTF-8 --language=PHP -j -o $MSGPO '{}' \;

echo "===> Merging old pot file with new pot file"
msgmerge $MSG_OLD_PO $MSGPO --output-file=$MSGPO
sed -i 's/FIRST AUTHOR//'                                          $MSGPO
sed -i "s/FULL NAME/$(git config user.name)/"                      $MSGPO
sed -i "s/EMAIL@ADDRESS/$(git config user.email)/"                 $MSGPO
sed -i 's/SOME DESCRIPTIVE TITLE/Translation of WP Ticketack/'     $MSGPO
sed -i 's/THE PACKAGE.*HOLDER/Net Oxygen Sàrl/'                    $MSGPO
sed -i 's/PACKAGE/wpticketack/g'                                   $MSGPO
sed -i 's/VERSION/1.1/'                                            $MSGPO
sed -i "s/YEAR/$(date +%Y)/g"                                      $MSGPO
sed -i "s/^\"Last-Translator:.*\"$/\"Last-Translator: $(git config user.name) <$(git config user.email)>\\\\n\"/" $MSGPO

echo "===> Editing merged pot file"
$EDITOR $MSGPO

echo "===> Generating .mo file from pot file"
msgfmt $MSGPO -o $MSGMO

echo "===> Cleaning olg pot file"
rm $MSG_OLD_PO
