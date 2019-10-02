global.__base = __dirname ;

global.loadConfig = name => require(`${__base}/config/${name}`);
global.loadController = name => require(`${__base}/controllers/${name}`);
global.loadRoute = name => require(`${__base}/routes/${name}`);

let { appPort } = require('./config/config');
let app = require('./config/express');

// listen to requests
app.listen(appPort);

/**
* Exports express
* @public
*/
module.exports = app;