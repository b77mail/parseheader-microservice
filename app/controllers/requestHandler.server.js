'use strict';

function RequestHandler () {
    this.getMicrotime = function (date) {
        function convertUnixToNatural(unixDate) {
            function getMonthByIndex(index) {
                var monthes = [
                    'january', 
                    'february', 
                    'march', 
                    'april', 
                    'may', 
                    'june', 
                    'july', 
                    'august', 
                    'september', 
                    'october', 
                    'november', 
                    'december'
                ];
                
                return monthes[index];
            }
            
            return getMonthByIndex(unixDate.getMonth()).replace(/\b./g, function(m){ return m.toUpperCase(); }) + ' ' + unixDate.getDate() + ', ' + unixDate.getFullYear();
        }
        
        var obj = {};
        var d = new Date(date);
        var unixDate = new Date();
        unixDate.setTime(date * 1000);
        
        if ( (isNaN(d.getTime()) && isNaN(unixDate.getTime())) || date == '' || parseInt(date) < 0 ) {
            obj.unix = null;
            obj.natural = null;
        } else if ( isNaN(unixDate.getTime()) ) {
            obj.natural = date;
            obj.unix = Math.round(new Date(date).getTime() / 1000);
        } else {
            obj.natural = convertUnixToNatural(unixDate);
            obj.unix = date;
        }
        
        return obj;
	};
}

module.exports = RequestHandler;