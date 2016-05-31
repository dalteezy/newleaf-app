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
          console.log("practiceGet api status: " + response.status);
        }, function(response) {
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
      });
}])
.controller('teamworkGetPeople', ['$scope', '$http', '$templateCache',
  function($scope, $http, $templateCache) {
    $scope.method = 'GET';
    $scope.token = 'mouth726brown';
    $scope.url = 'https://projects.newleaf.team/people.json/';

      $scope.response = null;
      $scope.employees = [];

      $http({method: $scope.method, url: $scope.url, cache: $templateCache,  headers: {'Content-Type': 'application/json; text/javascript; */*', 'Authorization': 'BASIC ' + window.btoa($scope.token + ":xxx")}}) // $http has many more options for parameters.
        .then(function(response) {   // "then" basically means that the connection was successful, so move on.
          $scope.status = response.status;
          $scope.data = response.data;
          angular.forEach(response.data.people, function(person) {
            if(person["company-name"] === "NewLeaf") {
              $scope.employees.push(person);
            }
          });
          console.log("teamworkGetPeople api status: " + response.status);
        }, function(response) {
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
      });
}])
.controller('teamworkGetTime', ['$scope', '$http', '$templateCache',
  function($scope, $http, $templateCache) {
    $scope.method = 'GET';
    $scope.token = 'mouth726brown';
    $scope.url = 'https://projects.newleaf.team/projects/183376/time_entries.json?userId=57450&fromdate=20160527&todate=20160527';

      $scope.response = null;
      $scope.joshEntries = 0;

      $http({method: $scope.method, url: $scope.url, cache: $templateCache,  headers: {'Content-Type': 'application/json; text/javascript; */*', 'Authorization': 'BASIC ' + window.btoa($scope.token + ":xxx")}}) // $http has many more options for parameters.
        .then(function(response) {   // "then" basically means that the connection was successful, so move on.
          $scope.status = response.status;
          $scope.data = response.data;
          angular.forEach(response.data["time-entries"], function(time) {
            $scope.joshEntries += parseInt(time.minutes) + parseInt(time.hours)*60;
          });
          console.log("teamworkGetTime api status: " + response.status);
        }, function(response) {
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
      });
}])


