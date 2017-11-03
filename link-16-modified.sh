rm -rf node_modules/hapi
rm -rf node_modules/podium
cp -R hapi-16-modified node_modules/hapi
cp -R podium-1.3-faster node_modules/podium
node server.js
