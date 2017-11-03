rm -rf node_modules/hapi
rm -rf node_modules/podium
cp -R ./repos/hapi-16-original node_modules/hapi
cp -R ./repos/podium-1.3-original node_modules/podium
echo "using original"
