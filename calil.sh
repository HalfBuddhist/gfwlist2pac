#!/bin/sh
cd `dirname $0`
git reset --hard
git pull

git submodule update --init
for i in gfwlist
do
	(cd $i;git pull origin master)
done

python -m genpac \
	--pac-proxy "SOCKS5 127.0.0.1:8387" \
	--gfwlist-url - \
	--gfwlist-local gfwlist/gfwlist.txt \
	--user-rule-from user_rule.txt \
	-o full_list.pac

# remove extra info
sed -e '5d' -e '3d' -i full_list.pac
cp -f full_list.pac /var/www/html/

git add .
git commit -m "[$(LANG=C date)]auto update"
git push origin master
