rm -rf node_modules/hapi
rm -rf node_modules/podium
rm -rf node_modules/accept
cp -R ./repos/hapi-16-modified node_modules/hapi
cp -R ./repos/podium-1.3-faster node_modules/podium
cp -R ./repos/accept-modified node_modules/accept
echo "using faster"
