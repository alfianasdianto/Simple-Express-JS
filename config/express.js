let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let helmet = require('helmet');

let routes = loadRoute('/routes');

/**
* Express instance
* @public
*/
let app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(routes);

module.exports = app;