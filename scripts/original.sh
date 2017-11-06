rm -rf node_modules/hapi
rm -rf node_modules/podium
rm -rf node_modules/accept
cp -R ./repos/hapi-16-original node_modules/hapi
cp -R ./repos/podium-1.3-original node_modules/podium
cp -R ./repos/accept-original node_modules/accept
echo "using original"
