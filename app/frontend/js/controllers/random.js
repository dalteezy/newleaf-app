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
  		
  	};
 });