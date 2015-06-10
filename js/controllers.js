angular.module('F1App.controllers',[])

.controller('mainController', ['$scope', function ($scope) {
	$scope.message = "Yo Dawg, I heard you were single paging your app. So let me single page your single paging with some pages";
}])

.controller('driversController', ['$scope', 'F1Standings', function ($scope, F1Standings) {
	$scope.driversList =[ ];
	$scope.sortType    = 'points';
	$scope.sortReverse = true;
	$scope.standingsYear = 2015;	

	$scope.$watch("standingsYear", function(newValue, oldValue) {
	    if ($scope.standingsYear.length == 4) {
	      F1Standings.getStandings($scope.standingsYear).success(function (response) {
			$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
			$scope.driversList.forEach(function(driver){
   			driver.points = parseFloat(driver.points);
		  });
		});
	   }
	});
	
}])