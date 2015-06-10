angular.module('F1App', [
  'ngRoute',
  'F1App.controllers',
  'F1App.services'
]);




// F1App.config(['$routeProvider',function($routeProvider){
// 	$routeProvider
 
// 		.when('/', {
// 		    templateUrl: 'views/home.html',
// 		    controller: 'mainController'
// 		});
// }]);

// .config(['$routeProvider',
//   function($routeProvider) {
//   	$routeProvider
   
//    .when('/', {
// 	    templateUrl: 'views/home.html',
// 	    controller: 'mainController'
//     })

//    .when('/drivers', {
// 	    templateUrl: 'views/drivers.html',
// 	    controller: 'driversController'
//     });
//   }
//  ]);