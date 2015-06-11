var app = angular.module('F1App', [
  'ngRoute',
  'F1App.controllers',
  'F1App.services'
]);

app.config(['$routeProvider',
  function($routeProvider) {
  	$routeProvider
   
   .when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'mainController'
    })

   .when('/drivers', {
	    templateUrl: 'views/drivers.html',
	    controller : 'driversController'
    })

    .when('/constructors', {
      templateUrl: 'views/constructors.html',
      controller : 'constructorsController'
    });
  }
 ]);