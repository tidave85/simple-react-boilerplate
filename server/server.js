const Express = require('express');
const Ip = require('ip');
const App = Express();
const Config = require('./config');
const Path = require('path');

App.use('/public', Express.static('./public'));

App.get('/', (req, res, next) => {
    res.sendfile('./public/index.html');
});

App.listen(Config.port, () => {
    console.log(`\n\nServer at ${Ip.address()} listening to port: ${Config.port}`);
});
