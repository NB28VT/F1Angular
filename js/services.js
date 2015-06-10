angular.module('F1App.services', [])

.factory('F1Standings', ['$http', function ($http) {
	var F1API = {};

	F1API.getStandings = function(standingsYear) {
		return $http ({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/' + standingsYear + '/driverStandings.json?callback=JSON_CALLBACK'	
		});
	};	
	return F1API;
}]);