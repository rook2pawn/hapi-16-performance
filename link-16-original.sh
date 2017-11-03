rm -rf node_modules/hapi
rm -rf node_modules/podium
cp -R hapi-16-original node_modules/hapi
cp -R podium-1.3-original node_modules/podium
node server.js
