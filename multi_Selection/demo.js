'use strict';

var app = angular.module('demo', ['ui.select']);

app.controller('DemoCtrl', function($scope, $http, $timeout) {

  $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

  $scope.multipleDemo = {};
  //$scope.multipleDemo.colors = ['Blue','Red'];
  
});
