angular.module('F1App.services', [])

.factory('Standings', ['$http', function ($http) {
	var F1API = {};

	F1API.getStandings = function(standingsYear, query) {
		return $http ({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/' + standingsYear + '/' + query + '.json?callback=JSON_CALLBACK',
		});

	};	
	return F1API;
}]);