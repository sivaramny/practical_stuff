var app = angular.module('themeApp', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html'
    })
    .when('/:themeId/about', {
      controller: 'themeController',
      templateUrl: 'about.html'
    })
    .when('/:themeId/first', {
      templateUrl: 'first.html'
    })
    .when('/:themeId/second', {
      templateUrl: 'second.html'
    })
    .when('/:themeId/third', {
      templateUrl: 'third.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
app.controller('themeController', function($scope, $routeParams, $rootScope) {
  console.log($routeParams);
  console.log($routeParams.themeId); // set the default theme
  $scope.css = $routeParams.themeId;
});