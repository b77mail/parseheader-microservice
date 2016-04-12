'use strict';

var port = process.argv[2] || 8080;
var express = require('express');
var routes = require('./app/routes/index.js');
var app = express();

routes(app);

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});