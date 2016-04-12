'use strict';

var path = process.cwd();

module.exports = function (app) {
	var RequestHandler = require(path + '/app/controllers/requestHandler.server.js');
	var requestHandler = new RequestHandler();
	
	app.route('*')
		.get(function (req, res) {
			var requestStr = req.params[0].substr(1, req.params[0].length);
			res.json(requestHandler.getMicrotime(requestStr));
		});
};