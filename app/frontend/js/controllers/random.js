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
}]);


