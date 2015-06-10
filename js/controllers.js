angular.module('F1App.controllers',[])


.controller('driversController', ['$scope', 'F1Standings', function ($scope, F1Standings) {
	$scope.driversList =[ ];
	$scope.sortType    = 'points';
	$scope.sortReverse = true;	

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
	
}]);