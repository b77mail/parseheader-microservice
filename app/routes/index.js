'use strict';

var path = process.cwd();

module.exports = function (app) {
	var RequestHandler = require(path + '/app/controllers/requestHandler.server.js');
	var requestHandler = new RequestHandler();
	
	app.route('/api/whoami')
		.get(function (req, res) {
			res.json(requestHandler.parseHeader(req));
		});
};