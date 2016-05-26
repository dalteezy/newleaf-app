'use strict';

angular.module('newLeafEfficiency')
.controller('RandomCtrl', function ($rootScope) {
	$rootScope.pageTitle = 'Random';
})
.controller('menuHideCtrl', function ($rootScope) {
	$rootScope.helloWorld = function () {
		console.log('This is working!')
	};
	$rootScope.showMenu = function () {

	}
})
.controller('calculator', ['$scope', function($scope) {
	$scope.calculation = 0;
  $scope.number1 = '';
  $scope.number2 = '';
  $scope.submit = function() {
  	var random = parseInt($scope.number1) / parseInt($scope.number2);
  	$scope.calculation = random.toPrecision(4);
  };
}])
.controller('practiceGet', ['$scope', '$http', '$templateCache',
  function($scope, $http, $templateCache) {
    $scope.method = 'GET';
    $scope.url = 'http://ipinfo.io/json';

      $scope.response = null;

      $http({method: $scope.method, url: $scope.url, cache: $templateCache}). // $http has many more options for parameters.
        then(function(response) {   // "then" basically means that the connection was successful, so move on.
          $scope.status = response.status;
          $scope.data = response.data;
        }, function(response) {
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
      });
}])
.controller('teamworkGet', ['$scope', '$http', '$templateCache',
  function($scope, $http, $templateCache) {
    $scope.method = 'GET';
    $scope.token = 'mouth726brown';
    $scope.url = 'https://projects.newleaf.team/people.json/';

      $scope.response = null;

      $http({method: $scope.method, url: $scope.url, cache: $templateCache,  headers: {'Content-Type': 'application/json; text/javascript; */*', 'Authorization': 'Basic ' + $scope.token}}) // $http has many more options for parameters.
        .then(function(response) {   // "then" basically means that the connection was successful, so move on.
          $scope.status = response.status;
          $scope.data = response.data;
        }, function(response) {
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
      });
}])


