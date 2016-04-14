'use strict';

function RequestHandler () {
    this.parseHeader = function (req) {
        var obj = {};
        obj.software = req["headers"]["user-agent"];
        obj.language = req["headers"]["accept-language"].substring(0, req["headers"]["accept-language"].indexOf(","));
        obj.ipaddress = req["headers"]["x-forwarded-for"];
        
        return obj;
	};
}

module.exports = RequestHandler;